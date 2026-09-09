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
          
          {/* Main Content Card */}
          <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-8 text-slate-700 font-sans">
            
            {/* What Are Cookies */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                What Are Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Cookies are small text files stored on your device when you visit a website. They help the site function correctly and remember information between page loads.
              </p>
            </div>

            {/* Cookies We Use */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4 font-display">
                Cookies We Use
              </h2>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Essential cookies
                  </h3>
                  <p className="text-slate-600 mb-2">
                    These are required for the site to work and cannot be disabled:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>
                      Shopping cart / session cookies &mdash; keep track of the free software download you’ve selected as you move from the product page to checkout.
                    </li>
                    <li>
                      Security cookies &mdash; help protect the checkout process from abuse.
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    What we don&rsquo;t use
                  </h3>
                  <p className="text-slate-600">
                    We do not use third-party advertising cookies, cross-site tracking pixels, or analytics cookies that build a profile of you across other websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Managing Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Most browsers let you block or delete cookies through their settings. Since our checkout relies on session cookies to remember your selected download, blocking essential cookies may prevent checkout from working correctly.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Changes to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We may update this Cookie Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
              </p>
            </div>

            {/* Contact Us */}
            <div className="pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">
                Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Questions about this Cookie Policy can be sent to{' '}
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
