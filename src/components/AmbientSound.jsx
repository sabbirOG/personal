import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const intervalRef = useRef(null);

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Warm atmospheric hum (F minor harmonic drone)
      const frequencies = [87.31, 130.81, 174.61, 261.63]; // F2, C3, F3, C4
      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), ctx.currentTime);

        gain.gain.setValueAtTime(0.03 / (idx + 1), ctx.currentTime);

        if (panner) {
          panner.pan.setValueAtTime((idx - 1.5) * 0.4, ctx.currentTime);
          osc.connect(gain);
          gain.connect(panner);
          panner.connect(masterGain);
        } else {
          osc.connect(gain);
          gain.connect(masterGain);
        }

        osc.start();
      });

      // Subtle warm vinyl crackle/tape air using white noise filter
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.012;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();

      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio error:', e);
    }
  };

  const stopAmbientSound = () => {
    if (audioCtxRef.current && masterGainRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      setTimeout(() => {
        ctx.close();
        audioCtxRef.current = null;
        masterGainRef.current = null;
        setIsPlaying(false);
      }, 1200);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute ambient audio" : "Play subtle ambient soundscape"}
      className="flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase font-mono px-3 py-1.5 border border-black/15 dark:border-white/20 hover:border-black dark:hover:border-white transition-all duration-300 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-sm cursor-pointer group"
    >
      {isPlaying ? (
        <>
          <span className="flex space-x-0.5 items-end h-3 w-3">
            <span className="w-0.5 h-3 bg-red-600 animate-pulse"></span>
            <span className="w-0.5 h-2 bg-red-600 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-0.5 h-2.5 bg-red-600 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
          </span>
          <span className="text-[#1A1816] dark:text-[#E8E6E3] font-medium">AUDIO : ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3 h-3 text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
          <span className="text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors">AUDIO : OFF</span>
        </>
      )}
    </button>
  );
}

