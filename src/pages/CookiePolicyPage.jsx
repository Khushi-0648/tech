import React, { useEffect } from 'react';
import { Cookie, CheckCircle2, XCircle, ShieldCheck, Mail, Phone, ArrowRight, Settings } from 'lucide-react';
import { companyInfo } from '../data/siteData';

export default function CookiePolicyPage({ navigate }) {
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
            <Cookie className="w-3.5 h-3.5" />
            <span>COOKIE TRANSPARENCY &amp; PRIVACY DISCLOSURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Cookie Policy
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed mb-6">
            Cookies are small text files stored on your device when you visit a website. They help the site function correctly and remember critical session information between page loads.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Last updated: August 20, 2026</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Scope: Zero Advertising Trackers</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section (High-Legibility Light Architecture) */}
      <section className="section-light py-16 sm:py-24 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Executive Commitment Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Zero-Tracker Architecture</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              TechPros operates a privacy-first web infrastructure. <strong>We do not deploy third-party advertising cookies, cross-site surveillance pixels, or intrusive behavioral trackers.</strong> Our cookies exist exclusively to ensure session security and checkout stability for our free developer tools.
            </p>
          </div>

          <div className="space-y-10 text-slate-700">
            {/* Section 1: Cookies We Use */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                1. Cookies We Use (Essential Only)
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                These cookies are strictly required for our site and free download checkout to function and cannot be disabled without breaking system features:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-semibold text-slate-900 text-base">Shopping Cart &amp; Download Sessions</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Keeps track of the free software tool you have selected (such as Invio Invoicing or Warden Scanner) as you move from product overview to the checkout confirmation screen.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-semibold text-slate-900 text-base">Security &amp; Abuse Prevention</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Cryptographic tokens and CSRF headers that verify request authenticity, prevent cross-site request forgery, and shield our checkout endpoints from automated bot spam.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: What We Don't Use */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                2. What We Strictly Do NOT Use
              </h3>
              <div className="space-y-3 text-slate-600 text-sm sm:text-base">
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>No Third-Party Ad Trackers:</strong> We do not host Google AdSense, DoubleClick, Facebook Pixel, or external retargeting scripts.</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>No Cross-Site Surveillance:</strong> We never monitor your browsing activities outside our domain or participate in data-broker syndicates.</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>No User Profiling:</strong> We do not construct hidden behavioral consumer profiles or sell analytical records to marketing aggregators.</span>
                </div>
              </div>
            </div>

            {/* Section 3: Managing Cookies */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                <span>3. Managing Cookies in Your Browser</span>
                <Settings className="w-5 h-5 text-slate-400" />
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                Almost all modern browsers allow you to manage, review, block, or delete cookies through their application privacy settings:
              </p>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside mb-4">
                <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Third-party cookies</li>
                <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Enhanced Tracking Protection</li>
                <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Prevent cross-site tracking</li>
                <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage cookies</li>
              </ul>
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 text-sm">
                <strong>Please Note:</strong> Because our software checkout relies on essential session cookies to authenticate the selected download, blocking all cookies may prevent your free download mirror from generating.
              </div>
            </div>

            {/* Section 4: Policy Updates */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                4. Policy Updates &amp; Amendments
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We may periodically update this Cookie Policy to reflect technical or legal modifications. The revision timestamp at the top of this document indicates when updates became effective.
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
              onClick={() => navigate('terms-of-service')}
              className="text-xs font-mono font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Terms of Service</span>
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
              Need Assistance Regarding Platform Privacy?
            </h3>
            <p className="text-sm text-slate-300">
              Reach out directly to our Data Governance team at Sector 62, Noida.
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
