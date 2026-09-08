import React, { useEffect } from 'react';
import { FileCheck, ShieldAlert, Scale, CheckCircle2, Mail, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/siteData';

export default function TermsPage({ navigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full">
      {/* 1. Permanent Cyber-Dark Hero Banner */}
      <section className="hero-banner-permanent-dark relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-[#1a2656] bg-[#05081A]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c2ff08_1px,transparent_1px),linear-gradient(to_bottom,#00c2ff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-blue)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-mono mb-6">
            <Scale className="w-3.5 h-3.5" />
            <span>TERMS OF ENGAGEMENT &amp; PLATFORM USAGE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Terms of Service
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed mb-6">
            By accessing techprosnetwork.com or using our software downloads (Invio, Warden), you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Last updated: August 20, 2026</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Governing Law: Uttar Pradesh, India</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section (High-Legibility Light Architecture) */}
      <section className="section-light py-16 sm:py-24 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Executive Summary Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <FileCheck className="w-5 h-5 text-sky-600" />
              <span>Agreement to Terms</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              TechPros provides business process outsourcing, IT consulting, custom software development, and free developer utilities — including <strong>Warden</strong> (a website security scanner) and <strong>Invio</strong> (invoicing software) — available for download. No payment or credit card is required for these free tools.
            </p>
          </div>

          <div className="space-y-10 text-slate-700">
            {/* Section 1: Account-Free Checkout */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                1. Account-Free Software Checkout
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                You do not need to create an account or provide financial credentials to download our software tools. The contact details you provide at checkout (name, business email, and phone number) are used solely to issue your authorized download mirror link and provide essential critical updates.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                For detailed insights into how this contact information is processed and retained, please review our comprehensive <button onClick={() => navigate('privacy-policy')} className="text-sky-600 font-semibold hover:underline cursor-pointer">Privacy Policy</button>.
              </p>
            </div>

            {/* Section 2: Acceptable Use Policy */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                <span>2. Acceptable Use Policy</span>
                <ShieldAlert className="w-5 h-5 text-amber-500" />
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                In accessing techprosnetwork.com or deploying our software, you strictly agree NOT to:
              </p>
              <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Use our website, APIs, or software downloads for any unlawful, fraudulent, or malicious purpose.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Attempt to gain unauthorized access to our servers, infrastructure, or other client data assets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Reverse engineer, decompile, resell, or commercially redistribute our software binaries outside authorized licensing boundaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Warden Security Tool Usage:</strong> Use Warden or any associated security audit utility to scan, probe, or test systems you do not own or lack explicit, verifiable authorization to audit.</span>
                </li>
              </ul>
            </div>

            {/* Section 3: Intellectual Property */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                3. Intellectual Property Rights
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                All content published on this website — including code repositories, architectural diagrams, trademarks, branding, user interfaces, and software — remains the exclusive property of TechPros Network or its licensors and is protected by international copyright and intellectual property laws.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Downloading our free software licenses grants you a non-exclusive, revocable, non-transferable license to run the software for its intended business purpose. It does not convey any transfer of underlying source ownership or proprietary IP.
              </p>
            </div>

            {/* Section 4: No Warranty & Informational Disclaimer */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                4. No Warranty (&ldquo;As-Is&rdquo; Provision)
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                Our public website, documentation, and free software utilities are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, whether express, implied, statutory, or otherwise. We do not warrant that tools will be error-free or uninterrupted across every unique operating system environment.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
                <strong>Important Security Disclaimer:</strong> Telemetry results and vulnerability findings generated by Warden are strictly informational. They must not be treated as a substitute for a comprehensive, manual penetration test and certified code audit conducted by certified cybersecurity specialists.
              </div>
            </div>

            {/* Section 5: Limitation of Liability */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                5. Limitation of Liability
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To the fullest extent permitted under governing law, TechPros Network and its officers, directors, employees, and affiliates shall not be liable for any indirect, incidental, consequential, special, or punitive damages (including loss of profits, data corruption, or business interruption) arising from or relating to your use of this website, consulting artifacts, or software downloads.
              </p>
            </div>

            {/* Section 6: Modifications */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                6. Changes to These Terms
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We reserve the right to revise or update these Terms of Service at any time. Continued interaction with our website or services subsequent to updated terms being posted establishes formal legal consent.
              </p>
            </div>
          </div>

          {/* Quick Legal Switcher Navigation */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => navigate('privacy-policy')}
              className="text-xs font-mono font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Privacy Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigate('cookie-policy')}
              className="text-xs font-mono font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Cookie Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. Permanent Cyber-Dark Footer Hotline Banner */}
      <section className="relative py-16 bg-[#05081A] border-t border-[#1a2656] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Questions Regarding Enterprise Terms or Licensing?
            </h3>
            <p className="text-sm text-slate-300">
              Speak directly with our commercial contracts desk at our Sector 62 Noida Hub.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:help@techprosnetwork.com"
              className="px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold transition-all flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
              <span>help@techprosnetwork.com</span>
            </a>
            <a
              href={companyInfo.socials.phone}
              className="px-4 py-2.5 rounded-xl bg-[var(--accent-blue)] hover:brightness-110 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_4px_16px_rgba(0,194,255,0.35)]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 88514 22486</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
