import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Terminal, Sparkles, Lock, ArrowRight, 
  CheckCircle2, AlertTriangle, ShieldAlert, Cpu, Download, FileCode
} from 'lucide-react';
import WardenScanner from '../components/WardenScanner';
import { companyInfo } from '../data/siteData';

export default function SecurityScannerPage({ navigate }) {
  return (
    <div className="relative min-h-screen">
      
      {/* 1. Page Header: Full Dark Theme Section */}
      <section className="pt-32 pb-16 section-theme-dark hero-banner-permanent-dark bg-[#05081A] relative overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[650px] h-[650px] bg-[#00C2FF]/10 rounded-full blur-[170px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#00C2FF]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] font-mono text-xs tracking-wider uppercase mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span>TechPros Threat Labs &bull; Automated OWASP Vulnerability Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
              Warden Automated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#c85bff] to-[#00C2FF]">
                OWASP Pentest Auditor
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Audit any public web domain in real time. Warden inspects HTTP response security headers, SSL cipher configuration, clickjacking defenses, and cross-site scripting attack vectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Scanner & Audit Architecture Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* The Live Interactive Warden Scanner Tool */}
        <div className="mb-20">
          <WardenScanner />
        </div>

        {/* Deep Dive: What Warden Tests */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/25 p-8 sm:p-12 mb-16 shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)]">
              Audit Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
              OWASP & Bank-Grade Compliance Vectors
            </h2>
            <p className="text-sm text-[var(--text-secondary)]/70 mt-2 font-sans">
              Our automated scanner runs comprehensive telemetry checks against international standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="p-6 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/20 space-y-3 shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)]">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-bold text-[var(--text-primary)]">
                SSL/TLS & Cipher Suite
              </h4>
              <p className="text-xs text-[var(--text-secondary)]/70 leading-relaxed font-sans">
                Verifies certificate chain validity, TLS 1.3 protocol handshake, forward secrecy ciphers, and checks against weak SSLv3 / TLS 1.0 vulnerabilities.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="p-6 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/20 space-y-3 shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)]">
                <FileCode className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-bold text-[var(--text-primary)]">
                CSP & Cross-Site Defenses
              </h4>
              <p className="text-xs text-[var(--text-secondary)]/70 leading-relaxed font-sans">
                Audits Content Security Policy directives (script-src, style-src, frame-ancestors) to guarantee complete protection against XSS injection.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="p-6 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/20 space-y-3 shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-bold text-[var(--text-primary)]">
                HSTS & Clickjacking Shield
              </h4>
              <p className="text-xs text-[var(--text-secondary)]/70 leading-relaxed font-sans">
                Verifies Strict-Transport-Security preload compliance, X-Frame-Options DENY / SAMEORIGIN, and Referrer-Policy strict privacy rules.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Emergency Pentest & Hardening Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 p-8 sm:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue)]/20 border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] font-mono text-xs uppercase mb-4">
                <AlertTriangle className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                <span>Zero Vulnerability Mandate</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mb-3">
                Identified Critical Vulnerabilities on Your System?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                The TechPros Network Cybersecurity & Pentesting team in Sector 62, Noida provides rapid remediation sprints. We deploy hardened WAF rules, refactor insecure headers, and secure your cloud perimeter within 24 hours.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => navigate('contact')}
                className="w-full py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
              >
                <span>Request Remediation SOW</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => navigate('softwares')}
                className="w-full py-3.5 rounded-xl font-mono text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-blue)] bg-[var(--bg-panel-subtle)] hover:bg-[var(--bg-panel)] border border-[var(--accent-blue)]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>Download Warden CLI Free</span>
              </button>
            </div>
          </div>
        </motion.div>

        </div>
      </section>

    </div>
  );
}
