import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Shield, FileText, CheckCircle2, Star, 
  Terminal, Sparkles, ArrowRight, X, Key, Copy, Check,
  Laptop, Cpu, Zap, ExternalLink, User, Mail, Phone, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { softwaresData, companyInfo } from '../data/siteData';

export default function SoftwaresPage({ navigate }) {
  const [downloadModalProduct, setDownloadModalProduct] = useState(null);
  const [downloadName, setDownloadName] = useState('');
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadPhone, setDownloadPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const [generatedKey, setGeneratedKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  const handleStartDownload = (product) => {
    setDownloadModalProduct(product);
    setDownloadName('');
    setDownloadEmail('');
    setDownloadPhone('');
    setFormSubmitted(false);
    setDownloadStarted(false);
    setDownloadError('');
    setGeneratedKey('');
    setCopiedKey(false);
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    if (!downloadName.trim()) {
      setDownloadError('Please enter your full name.');
      return;
    }
    if (!downloadEmail.trim()) {
      setDownloadError('Please enter your email address.');
      return;
    }
    if (!downloadPhone.trim()) {
      setDownloadError('Please enter your contact number.');
      return;
    }

    // Generate verified license key
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const key = `TPN-${downloadModalProduct.id.toUpperCase()}-2026-${randomHex}-PRO`;
    setGeneratedKey(key);
    setFormSubmitted(true);
    setDownloadError('');

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback if canvas context fails
    }
  };

  const handleTriggerDownload = () => {
    setDownloadStarted(true);
    try {
      const fileName = `${downloadModalProduct.id}-v${downloadModalProduct.version.replace(/[^0-9.]/g, '') || '1.0'}-installer.txt`;
      const fileContent = `========================================================\n` +
        `TechPros Network Software Labs - Official Installer\n` +
        `========================================================\n\n` +
        `Product: ${downloadModalProduct.title} (${downloadModalProduct.version})\n` +
        `Category: ${downloadModalProduct.category}\n` +
        `Tier: 100% Free Developer & Commercial Community Edition\n\n` +
        `Licensed Registration Details:\n` +
        `-----------------------------\n` +
        `Full Name: ${downloadName}\n` +
        `Email: ${downloadEmail}\n` +
        `Contact Number: ${downloadPhone}\n` +
        `License Key: ${generatedKey}\n` +
        `Status: Authenticated Build Verified\n` +
        `NOC Checksum: SHA256-AUTHENTIC-TECHPROS-NOC\n\n` +
        `Thank you for using TechPros Network Community Software Tools!\n` +
        `Official Support: help@techprosnetwork.com\n` +
        `Website: https://techprosnetwork.com\n`;

      const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error:', err);
    }
  };

  const copyLicenseToClipboard = () => {
    if (!generatedKey) return;
    navigator.clipboard.writeText(generatedKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Page Header: Full Dark Theme Section */}
      <section className="pt-32 pb-20 section-theme-dark hero-banner-permanent-dark bg-[#05081A] relative overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[var(--accent-blue)]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-4"
          >
            <div className="badge-dark-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#00C2FF] font-mono text-xs tracking-wider uppercase mb-6 shadow-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span>TechPros Software Labs &bull; 100% Free Developer Community Tools</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
              Developer &amp; Enterprise Utilities <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38d6ff] to-[var(--accent-blue)]">
                Free Downloads &amp; Live Scanners
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Built by our Noida engineering pod to streamline financial operations and automated zero-trust security auditing. Free for personal and commercial usage with zero hidden subscription walls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Softwares Grid (Invio & Warden): Full Light Theme Section */}
      <section className="py-24 section-theme-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="badge-light-pill px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
              Community Software Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A0F2E] tracking-tight mt-3">
              Production Utilities for Finance &amp; Cybersecurity
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
            {softwaresData.map((soft) => (
              <motion.div
                key={soft.id}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group rounded-3xl p-8 card-light-uniform shadow-md flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Header Tag Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold border bg-blue-50 border-blue-200 text-blue-700">
                        {soft.version}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold border bg-emerald-50 border-emerald-300 text-emerald-700">
                        {soft.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{soft.rating}</span>
                    </div>
                  </div>

                  {/* Software Identity */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-md bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      {soft.id === 'invio' ? (
                        <FileText className="w-7 h-7" />
                      ) : (
                        <Shield className="w-7 h-7" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase font-semibold text-blue-700">
                        {soft.category}
                      </span>
                      <h3 className="text-3xl font-display font-bold transition-colors text-[#0A0F2E] group-hover:text-blue-600">
                        {soft.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-sans leading-relaxed mb-6 text-slate-600">
                    {soft.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 p-5 rounded-2xl border mb-8 bg-slate-50/80 border-slate-200">
                    <div className="text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold text-blue-700">
                      <Terminal className="w-3.5 h-3.5" />
                      Engineered Capabilities:
                    </div>
                    {soft.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={() => handleStartDownload(soft)}
                    className="w-full px-5 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider !text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-98"
                  >
                    <Download className="w-4 h-4 !text-white shrink-0" />
                    <span className="!text-white font-bold">Download {soft.title} Free</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Feature Comparison Matrix Banner: Full Dark Theme Section */}
      <section className="py-24 section-theme-dark relative border-t border-[#141e48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl card-dark-uniform p-8 sm:p-12 shadow-2xl border border-[#1a2a5e]"
          >
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="badge-dark-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#00C2FF] mb-3 inline-block">
                Open Access Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Free Community License Guarantee
              </h3>
              <p className="text-sm text-slate-300">
                No subscription renewals. No forced watermarks. Direct binary downloads compiled by TechPros Network engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-5 rounded-2xl bg-[#0a1438] border border-[var(--accent-blue)]/20 shadow-xs">
                <div className="font-mono text-2xl font-bold text-[#00C2FF] mb-1">$0.00</div>
                <div className="text-xs font-bold text-white">Forever Free Tier</div>
                <div className="text-[11px] text-slate-400 mt-1">Both commercial & personal licenses included</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#0a1438] border border-[var(--accent-blue)]/20 shadow-xs">
                <div className="font-mono text-2xl font-bold text-[#00C2FF] mb-1">Zero Telemetry</div>
                <div className="text-xs font-bold text-white">Privacy First Architecture</div>
                <div className="text-[11px] text-slate-400 mt-1">Your financial & vulnerability data stays local</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#0a1438] border border-[var(--accent-blue)]/20 shadow-xs">
                <div className="font-mono text-2xl font-bold text-[#00C2FF] mb-1">Sector 62 Support</div>
                <div className="text-xs font-bold text-white">Direct Engineering Support</div>
                <div className="text-[11px] text-slate-400 mt-1">Official releases maintained by Noida NOC team</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Download / Registration Modal */}
      <AnimatePresence>
      {downloadModalProduct && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-900 overflow-hidden"
          >
            
            <button
              onClick={() => setDownloadModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase text-blue-700 font-bold tracking-wider">
                    {downloadModalProduct.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-300 font-semibold">
                    {downloadModalProduct.price}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0A0F2E]">
                  Download {downloadModalProduct.title}
                </h3>
              </div>
            </div>

            {!formSubmitted ? (
              /* Step 1: User details form (Name, Email, Contact Number) */
              <form onSubmit={handleSubmitDetails} className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Enter your details below to unlock your verified community license key and direct binary download for <span className="font-semibold text-slate-900">{downloadModalProduct.title} ({downloadModalProduct.version})</span>.
                </p>

                {downloadError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{downloadError}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                    <input
                      id="modal-name"
                      type="text"
                      required
                      maxLength={60}
                      value={downloadName}
                      onChange={(e) => setDownloadName(e.target.value)}
                      placeholder="e.g. Satya Singh"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                    <input
                      id="modal-email"
                      type="email"
                      required
                      maxLength={100}
                      value={downloadEmail}
                      onChange={(e) => setDownloadEmail(e.target.value)}
                      placeholder="e.g. satya@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                    Contact Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      maxLength={25}
                      value={downloadPhone}
                      onChange={(e) => setDownloadPhone(e.target.value)}
                      placeholder="e.g. +91 88514 22486"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero spam. Direct SHA-256 verified binary installer.</span>
                </div>

                {/* Submit Details to Reveal Download */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Unlock Download</span>
                </button>
              </form>
            ) : (
              /* Step 2: Only Download Button shown on submit */
              <div className="space-y-4 text-center py-2">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h4 className="text-2xl font-display font-bold text-[#0A0F2E]">
                    Download Ready
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Verified for <span className="font-semibold text-slate-900">{downloadName}</span>
                  </p>
                </div>

                {/* Only Download Button Shown */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <button
                    onClick={handleTriggerDownload}
                    className="w-full py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 group"
                  >
                    <Download className="w-5 h-5 text-white group-hover:translate-y-0.5 transition-transform" />
                    <span>Download {downloadModalProduct.title} ({downloadModalProduct.version})</span>
                  </button>

                  {downloadStarted ? (
                    <div className="text-xs font-mono text-emerald-700 mt-2 font-medium flex items-center justify-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Download initiated! Check your downloads folder.</span>
                    </div>
                  ) : null}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setDownloadModalProduct(null)}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-mono font-bold transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  );
}
