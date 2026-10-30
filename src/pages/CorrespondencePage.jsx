import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, MapPin, Mail, MessageSquare, Stamp } from 'lucide-react';
import { SITE_META } from '../data/content';

export default function CorrespondencePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: 'Software Engineering & Architecture',
    message: '',
    priority: 'standard',
  });

  const [submitted, setSubmitted] = useState(false);
  const [dispatchId, setDispatchId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const randomId = 'SA-' + Math.floor(100000 + Math.random() * 900000);
    setDispatchId(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      purpose: 'Software Engineering & Architecture',
      message: '',
      priority: 'standard',
    });
    setSubmitted(false);
    setDispatchId('');
  };

  return (
    <div className="w-full">
      {/* 1. Header */}
      <section className="border-b border-black/10 dark:border-white/10 px-4 md:px-12 py-12 bg-[#FAF8F5] dark:bg-[#121110]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#B93826]">
            DIRECT INQUIRIES & CONTACT
          </div>
          <h2 className="font-masthead text-4xl sm:text-6xl font-light text-[#1A1816] dark:text-[#FAF8F5]">
            Get In Touch
          </h2>
          <p className="font-editorial italic text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Direct channel for software engineering collaborations, Softrover inquiries, and UIU academic projects.
          </p>
        </div>
      </section>

      {/* 2. Main Form & Studio Coordinates Grid */}
      <section className="px-4 md:px-12 py-14 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Bespoke Stationery Letterhead */}
          <div className="lg:col-span-8">
            <div className="bg-[#FAF8F5] dark:bg-[#151413] border-2 border-black/15 dark:border-white/20 p-6 md:p-10 shadow-lg relative">
              {/* Watermark corner badge */}
              <div className="absolute top-6 right-6 text-right font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                <span>STATIONERY REF. 2026-SA</span>
                <div className="text-[#C29B38] font-bold">SABBIR AHMED SEAL</div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="border-b border-black/10 dark:border-white/10 pb-4">
                    <h3 className="font-masthead text-2xl font-light">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs font-mono text-neutral-500 mt-1">
                      DIRECTED TO THE PERSONAL OFFICE OF SABBIR AHMED
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                        SENDER NAME / TITLE *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Director"
                        className="w-full bg-black/[0.02] dark:bg-white/[0.04] border-b border-black/20 dark:border-white/20 py-2 px-1 text-sm font-news focus:outline-none focus:border-[#B93826] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                        ELECTRONIC EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full bg-black/[0.02] dark:bg-white/[0.04] border-b border-black/20 dark:border-white/20 py-2 px-1 text-sm font-news focus:outline-none focus:border-[#B93826] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Organization */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                        COMPANY / ORGANIZATION / STUDIO
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Optional"
                        className="w-full bg-black/[0.02] dark:bg-white/[0.04] border-b border-black/20 dark:border-white/20 py-2 px-1 text-sm font-news focus:outline-none focus:border-[#B93826] transition-colors"
                      />
                    </div>

                    {/* Purpose of Correspondence */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                        NATURE OF INQUIRY
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full bg-black/[0.02] dark:bg-white/[0.04] border-b border-black/20 dark:border-white/20 py-2 px-1 text-sm font-news focus:outline-none focus:border-[#B93826] transition-colors cursor-pointer"
                      >
                        <option value="Software Engineering & Architecture">Software Engineering & Architecture</option>
                        <option value="Softrover Product Collaboration">Softrover Product Collaboration</option>
                        <option value="UIU Academic Research & Projects">UIU Academic Research & Projects</option>
                        <option value="General Connect & Networking">General Connect & Networking</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message with clarity and purpose..."
                      className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/15 dark:border-white/15 p-3 text-sm font-news leading-relaxed focus:outline-none focus:border-[#B93826] transition-colors resize-y"
                    />
                  </div>

                  {/* Submit bar */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 dark:border-white/10">
                    <div className="text-[11px] font-mono text-neutral-500 flex items-center space-x-2">
                      <Shield className="w-3.5 h-3.5 text-[#C29B38]" />
                      <span>PRIVACY ENSURED · 256-BIT ENCRYPTED DIRECT INBOX</span>
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#1A1816] text-[#FAF8F5] dark:bg-[#FAF8F5] dark:text-[#1A1816] hover:bg-[#B93826] dark:hover:bg-[#B93826] dark:hover:text-white transition-all text-xs font-mono tracking-[0.25em] uppercase flex items-center space-x-2 rounded-sm cursor-pointer shadow-md group"
                    >
                      <Stamp className="w-4 h-4 text-[#C29B38]" />
                      <span>SEND DIRECT MESSAGE</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Letter Receipt */
                <div className="py-12 px-4 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF8F5] dark:bg-[#121110] border-2 border-[#C29B38] flex items-center justify-center text-[#C29B38] shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#C29B38]" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C29B38]">
                      DISPATCH CONFIRMED
                    </div>
                    <h3 className="font-masthead text-3xl md:text-4xl font-light">
                      Your Message Has Been Sent
                    </h3>
                    <p className="font-editorial italic text-lg text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
                      Thank you, {formData.name}. Your correspondence has been logged into the private register of Sabbir Ahmed Studio.
                    </p>
                  </div>

                  {/* Dispatch Slip */}
                  <div className="max-w-sm mx-auto p-4 bg-[#F3EFE9] dark:bg-[#181716] border border-black/10 dark:border-white/10 font-mono text-xs text-left space-y-1.5">
                    <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-1 text-neutral-500">
                      <span>DISPATCH REGISTER:</span>
                      <span className="font-bold text-[#B93826]">{dispatchId}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                      <span>PURPOSE:</span>
                      <span>{formData.purpose}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                      <span>ROUTING:</span>
                      <span>Studio Dispatch Center</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      WRITE ANOTHER NOTE
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Physical Coordinates & Channels */}
          <div className="lg:col-span-4 space-y-8">
            {/* Studio Coordinates */}
            <div className="border border-black/10 dark:border-white/10 p-6 bg-[#FAF8F5] dark:bg-[#141312] space-y-4">
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#B93826]">
                PRIMARY COORDINATES
              </div>

              <div className="space-y-4 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <div className="border-b border-black/5 dark:border-white/5 pb-3">
                  <div className="font-bold text-neutral-800 dark:text-neutral-200">DHAKA, BANGLADESH</div>
                  <p className="mt-1">Softrover Engineering Desk</p>
                  <p>United International University (UIU)</p>
                </div>

                <div className="border-b border-black/5 dark:border-white/5 pb-3">
                  <div className="font-bold text-neutral-800 dark:text-neutral-200">AVAILABILITY</div>
                  <p className="mt-1">Full-Stack & Systems Engineering</p>
                  <p>Open Source & Technical Collaborations</p>
                </div>

                <div>
                  <div className="font-bold text-neutral-800 dark:text-neutral-200">TIMEZONE</div>
                  <p className="mt-1">BST (GMT+6) · Dhaka</p>
                  <p>Flexible for Global Async Work</p>
                </div>
              </div>
            </div>

            {/* Direct Digital Channels */}
            <div className="border border-black/10 dark:border-white/10 p-6 bg-[#FAF8F5] dark:bg-[#141312] space-y-4">
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#B93826]">
                ENCRYPTED CHANNELS
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400">
                  <Mail className="w-4 h-4 text-[#C29B38]" />
                  <span>office@sabbirahmed.com</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400">
                  <MessageSquare className="w-4 h-4 text-[#C29B38]" />
                  <span>Signal / Encrypted Concierge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

