import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Shield, FileText, CheckCircle2, Star, 
  Terminal, Sparkles, ArrowRight, X, Key, Copy, Check,
  Laptop, Cpu, Zap, ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { softwaresData, companyInfo } from '../data/siteData';

export default function SoftwaresPage({ navigate }) {
  const [downloadModalProduct, setDownloadModalProduct] = useState(null);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [generatedKey, setGeneratedKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleStartDownload = (product) => {
    setDownloadModalProduct(product);
    setDownloadEmail('');
    setGeneratedKey('');
    setCopiedKey(false);
    setDownloadComplete(false);
  };

  const handleGenerateLicense = (e) => {
    e.preventDefault();
    if (!downloadEmail) return;

    // Generate simulated license key
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const key = `TPN-${downloadModalProduct.id.toUpperCase()}-2026-${randomHex}-PRO`;
    setGeneratedKey(key);
    setDownloadComplete(true);

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

      {/* Free Download / License Modal */}
      <AnimatePresence>
      {downloadModalProduct && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-panel-subtle)]/80 backdrop-blur-md"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 p-6 sm:p-8 shadow-2xl"
          >
            
            <button
              onClick={() => setDownloadModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-panel-subtle)] hover:bg-[var(--btn-bg)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)]">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[var(--accent-blue)] font-semibold">
                  Instant Binary Delivery
                </span>
                <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
                  Download {downloadModalProduct.title}
                </h3>
              </div>
            </div>

            {!downloadComplete ? (
              <form onSubmit={handleGenerateLicense} className="space-y-4">
                <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                  Enter your email address to generate your verified community license key and initiate your direct installer download for {downloadModalProduct.title} ({downloadModalProduct.version}).
                </p>

                <div>
                  <label className="block text-xs font-mono text-[var(--accent-blue)] mb-1.5 uppercase font-semibold">
                    Work or Personal Email
                  </label>
                  <input
                    type="email"
                    required
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                    placeholder="architect@yourdomain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 focus:outline-none text-sm text-white font-mono placeholder:text-slate-500"
                  />
                </div>

                <div className="text-[11px] text-[var(--text-secondary)] flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero spam. Direct SHA-256 verified installer binary.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.25)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Key className="w-4 h-4" />
                  <span>Generate Free Key & Download &rarr;</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--bg-panel-subtle)] text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                
                <h4 className="text-xl font-display font-bold text-[var(--text-primary)]">
                  Installer Prepared Successfully!
                </h4>

                <p className="text-xs text-[var(--text-secondary)]">
                  Your direct download has started. Use the generated license key below to unlock lifetime access for {downloadModalProduct.title}.
                </p>

                {/* License Key Box */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 flex items-center justify-between gap-3">
                  <div className="font-mono text-xs font-bold text-[var(--accent-blue)] truncate">
                    {generatedKey}
                  </div>
                  <button
                    onClick={copyLicenseToClipboard}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-panel)] hover:bg-[var(--btn-bg)] text-[var(--text-secondary)] border border-[var(--accent-blue)]/30 text-xs font-mono flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[var(--accent-blue)]" />}
                    <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="pt-3 flex gap-2">
                  <button
                    onClick={() => setDownloadModalProduct(null)}
                    className="flex-1 py-2.5 rounded-xl bg-[var(--bg-panel-subtle)] hover:bg-[var(--btn-bg)] text-[var(--text-secondary)] border border-[var(--border-color)] text-xs font-mono transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                  {downloadModalProduct.id === 'warden' && (
                    <button
                      onClick={() => {
                        setDownloadModalProduct(null);
                        navigate('security-scanner');
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-[var(--accent-blue)] hover:brightness-110 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                    >
                      Open Live Scanner &rarr;
                    </button>
                  )}
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
