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
          
          {/* Main Content Card */}
          <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-8 text-slate-700 font-sans">
            
            {/* Agreement to Terms */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Agreement to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                By accessing techprosnetwork.com or using our software downloads, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.
              </p>
            </div>

            {/* Our Services */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Our Services
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                TechPros provides business process outsourcing, IT consulting, and related services, along with free software tools &mdash; including Warden (a website security scanner) and Invio (invoicing software) &mdash; available for download after providing your name, email, and phone number at checkout. No payment is required for these downloads.
              </p>
            </div>

            {/* Account-Free Checkout */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Account-Free Checkout
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                You do not need to create an account to download our software. The contact details you provide at checkout are used to deliver your download link and, where relevant, follow up about your interest in our services. See our{' '}
                <button
                  onClick={() => navigate('privacy-policy')}
                  className="text-blue-600 hover:underline font-medium cursor-pointer"
                >
                  Privacy Policy
                </button>{' '}
                for details on how this information is handled.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Acceptable Use
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-3">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 pl-1 text-sm sm:text-base">
                <li>Use our website or software for any unlawful purpose.</li>
                <li>Attempt to gain unauthorised access to our systems or another user&rsquo;s data.</li>
                <li>Reverse engineer, resell, or redistribute our software outside the terms under which it was provided.</li>
                <li>Use Warden or any of our tools to scan or test systems you do not own or have explicit authorisation to test.</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                All content on this website &mdash; including text, graphics, logos, and software &mdash; is the property of TechPros or its licensors and is protected by applicable intellectual property laws. Downloading our free software does not transfer ownership of that software to you; it grants you a limited licence to use it for its intended purpose.
              </p>
            </div>

            {/* No Warranty */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                No Warranty
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our website and software tools are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not guarantee that our software will be error-free, uninterrupted, or fit for every specific purpose. Security-scanning results from Warden are informational and should not be treated as a substitute for a professional security audit.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To the fullest extent permitted by law, TechPros is not liable for any indirect, incidental, or consequential damages arising from your use of our website or software.
              </p>
            </div>

            {/* Changes to These Terms */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Changes to These Terms
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We may update these Terms of Service from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* Contact Us */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Questions about these Terms can be sent to{' '}
                <a href="mailto:help@techprosnetwork.com" className="text-blue-600 hover:underline font-medium">
                  help@techprosnetwork.com
                </a>.
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
