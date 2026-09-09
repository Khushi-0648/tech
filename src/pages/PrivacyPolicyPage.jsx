import React, { useEffect } from 'react';
import { Shield, Lock, FileText, CheckCircle2, Mail, Phone, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/siteData';

export default function PrivacyPolicyPage({ navigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full">
      {/* 1. Permanent Cyber-Dark Hero Banner */}
      <section className="hero-banner-permanent-dark relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-[#1a2656] bg-[#05081A]">
        {/* Background Cyber Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c2ff08_1px,transparent_1px),linear-gradient(to_bottom,#00c2ff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-blue)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb & Badges */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-mono mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>LEGAL DOSSIER • ISO 27001 / DPDP COMPLIANT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed mb-6">
            This Privacy Policy explains how TechPros (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and protects information when you visit techprosnetwork.com, contact us, or download one of our free software tools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Last updated: August 20, 2026</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Entity: TechPros Network • Noida NOC</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section (High-Legibility Light Architecture) */}
      <section className="section-light py-16 sm:py-24 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content Card */}
          <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-8 text-slate-700 font-sans">
            {/* Who We Are */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Who We Are
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                This Privacy Policy explains how TechPros (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and protects information when you visit techprosnetwork.com, contact us, or download one of our free software tools.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4 font-display">
                Information We Collect
              </h2>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Information you give us
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>
                      <strong>Contact form:</strong> first name, last name, email address, company name, service of interest, and your message.
                    </li>
                    <li>
                      <strong>Software downloads (Warden, Invio):</strong> first name, last name, email address, and phone number, collected at checkout before your download link is issued.
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Information collected automatically
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>
                      Standard server logs (IP address, browser type, pages visited, timestamps) for security and site reliability.
                    </li>
                    <li>
                      Cookies required for the shopping cart and checkout process to function &mdash; see our{' '}
                      <button
                        onClick={() => navigate('cookie-policy')}
                        className="text-blue-600 hover:underline font-medium cursor-pointer"
                      >
                        Cookie Policy
                      </button>{' '}
                      for details.
                    </li>
                  </ul>
                </div>

                <p className="pt-2 text-slate-700 font-medium">
                  We do not run third-party advertising trackers, and we do not sell or rent your personal information to anyone.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600 pl-1 text-sm sm:text-base">
                <li>To deliver the software download you requested and send the associated confirmation email.</li>
                <li>To respond to enquiries submitted through our contact form.</li>
                <li>To understand who is interested in our services and follow up about a potential engagement.</li>
                <li>To maintain the security and proper functioning of our website.</li>
              </ul>
            </div>

            {/* How We Store and Protect Your Data */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                How We Store and Protect Your Data
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Your information is stored in our website&rsquo;s database, hosted on infrastructure we control, and is not shared with third-party marketing platforms. We use industry-standard security practices to protect it, but no method of transmission or storage is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                You can ask us to access, correct, or delete the personal information we hold about you at any time by emailing{' '}
                <a href="mailto:help@techprosnetwork.com" className="text-blue-600 hover:underline font-medium">
                  help@techprosnetwork.com
                </a>. We will respond within a reasonable timeframe.
              </p>
            </div>

            {/* Children’s Privacy */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Children&rsquo;s Privacy
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our website and services are intended for business use and are not directed at children under 16. We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Changes to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
              </p>
            </div>

            {/* Contact Us */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Questions about this Privacy Policy can be sent to{' '}
                <a href="mailto:help@techprosnetwork.com" className="text-blue-600 hover:underline font-medium">
                  help@techprosnetwork.com
                </a>.
              </p>
            </div>
          </div>

          {/* Quick Legal Switcher Navigation */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => navigate('terms-of-service')}
              className="text-xs font-mono font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Terms of Service</span>
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

      {/* 3. Permanent Cyber-Dark Contact & Consultation Banner */}
      <section className="relative py-16 bg-[#05081A] border-t border-[#1a2656] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Have Questions About Our Privacy Governance?
            </h3>
            <p className="text-sm text-slate-300">
              Our compliance team in Sector 62, Noida is available for data audits and queries.
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
