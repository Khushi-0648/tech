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
          
          {/* Executive Summary Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              <span>Who We Are &amp; Core Commitment</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              TechPros operates an engineering headquarters and Network Operations Center (NOC) in Sector 62, Noida, Uttar Pradesh, delivering enterprise full-stack development, cloud infrastructure, AI automation, and cybersecurity services. 
              <strong> We do not run third-party advertising trackers, and we never sell or rent your personal information to anyone.</strong>
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="space-y-10 text-slate-700">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                1. Information We Collect
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="font-semibold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-600" />
                    <span>Information You Give Us</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li><strong>Contact Form:</strong> First name, last name, email address, company name, service of interest, and project message.</li>
                    <li><strong>Software Downloads (Warden, Invio):</strong> First name, last name, email address, and phone number collected at checkout before issuing your free download link.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="font-semibold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-sky-600" />
                    <span>Information Collected Automatically</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    <li><strong>Standard Server Logs:</strong> IP address, browser user-agent, pages visited, and timestamps for platform security and denial-of-service prevention.</li>
                    <li><strong>Essential Cookies:</strong> Strictly necessary session cookies required for software checkout and cart tokens to function properly.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                2. How We Use Your Information
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Software Delivery:</strong> To deliver the free software download (Invio, Warden) you requested and send automated confirmation and update links.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Inquiry Fulfillment:</strong> To review requirements, schedule discovery calls, and respond directly to project inquiries submitted through our contact forms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Consultation Follow-Up:</strong> To understand your enterprise IT requirements and follow up regarding potential scoping or engineering engagements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Infrastructure Security:</strong> To maintain the security, uptime, and defense of our websites, API endpoints, and download mirrors against malicious traffic.</span>
                </li>
              </ul>
            </div>

            {/* Section 3: Data Storage and Security */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                3. How We Store and Protect Your Data
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                Your information is stored in encrypted databases hosted on dedicated infrastructure we control. We do not transmit or sell user lists to third-party ad networks or data brokers.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We implement industry-standard administrative, physical, and technical safeguards (including TLS 1.3 in transit and AES-256 at rest). While no transmission over the internet can be guaranteed 100% impenetrable, we apply bank-grade defense-in-depth principles to ensure the highest integrity of your data.
              </p>
            </div>

            {/* Section 4: Your Rights */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                4. Your Rights &amp; Access Controls
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                Under applicable data protection regulations (including GDPR, CCPA, and India&rsquo;s Digital Personal Data Protection Act), you hold the right to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 mb-4">
                <li className="p-3 bg-white border border-slate-200 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Request access to stored records</span>
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Request correction of inaccurate data</span>
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Request complete data deletion (&ldquo;right to be forgotten&rdquo;)</span>
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Withdraw consent at any time without penalty</span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm">
                To exercise any of these rights, contact our Data Privacy Desk at <a href="mailto:help@techprosnetwork.com" className="text-sky-600 font-semibold hover:underline">help@techprosnetwork.com</a>. We respond to all verified requests within standard statutory timelines.
              </p>
            </div>

            {/* Section 5: Children's Privacy */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                5. Children&rsquo;s Privacy
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our website, developer utilities, and engineering services are intended strictly for professional and enterprise business use and are not directed at individuals under 16 years of age. We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* Section 6: Policy Changes */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                6. Changes to This Policy
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We may periodically update this Privacy Policy to reflect changing regulatory requirements or operational advancements. The &ldquo;Last updated&rdquo; timestamp at the top of this document indicates the most recent revision. Continued use of our site signifies acceptance of any updated terms.
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
