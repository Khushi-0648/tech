import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, ArrowUp, 
  Shield, CheckCircle, Sparkles, ExternalLink, X 
} from 'lucide-react';
import { companyInfo, servicesData } from '../data/siteData';
import TechProsLogo from './TechProsLogo';

export default function Footer({ navigate }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | 'cookie' | null

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#05081A] border-t border-[#1a2656] pt-16 pb-12 overflow-hidden z-20 text-slate-400 footer-permanent-dark transition-colors duration-300">
        
        {/* Subtle Ambient Glow in footer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[var(--accent-blue)]/10 via-[#070e28]/50 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1a2656]">
            
            {/* Column 1: Brand & Headquarters (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div 
                onClick={() => { navigate('home'); scrollToTop(); }}
                className="inline-block cursor-pointer group select-none"
                title="TechPros Global IT & BPM Solutions"
              >
                <TechProsLogo 
                  variant="full" 
                  themeOverride="dark"
                  className="h-20 sm:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Transforming business operations with custom web development, intelligent automation, cloud scalability, and bank-grade cybersecurity from our engineering center in Sector 62, Noida.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={companyInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0c1438] border border-[#1a2656] flex items-center justify-center text-white hover:text-white hover:border-[var(--accent-blue)] transition-all shadow-xs"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href={companyInfo.socials.phone}
                  className="w-9 h-9 rounded-lg bg-[var(--btn-bg)] border border-[var(--border-color)] flex items-center justify-center text-white hover:text-white hover:border-[var(--accent-blue)] transition-all shadow-xs"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4 text-white" />
                </a>
                <a
                  href={companyInfo.socials.email}
                  className="w-9 h-9 rounded-lg bg-[var(--btn-bg)] border border-[var(--border-color)] flex items-center justify-center text-white hover:text-white hover:border-[var(--accent-blue)] transition-all shadow-xs"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--btn-bg)] border border-[var(--border-color)] text-[var(--accent-blue)] text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                  <span>All Systems Operational &bull; 99.99% SLA</span>
                </div>
              </div>
            </div>

            {/* Column 2: 10 Dedicated Services Directory (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--accent-blue)]">
                Services (10 Domains)
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {[
                  { slug: 'web-development', name: 'Web Development' },
                  { slug: 'artificial-intelligence-and-automation', name: 'AI & Automation' },
                  { slug: 'business-analytics', name: 'Business Analytics' },
                  { slug: 'cloud-infrastructure', name: 'Cloud Infrastructure' },
                  { slug: 'consulting-operations', name: 'Consulting & Operations' },
                  { slug: 'cybersecurity', name: 'Cybersecurity' },
                  { slug: 'data-analytics', name: 'Data Analytics' },
                  { slug: 'enterprise-solutions', name: 'Enterprise Solutions' },
                  { slug: 'industrial-autonomy-and-engineering', name: 'Industrial Autonomy' },
                  { slug: 'network-solutions-and-services', name: 'Network Solutions' }
                ].map((svc) => (
                  <li key={svc.slug}>
                    <button
                      onClick={() => { navigate(svc.slug); scrollToTop(); }}
                      className="hover:text-[var(--accent-blue)] transition-colors text-left truncate block max-w-full cursor-pointer text-slate-400 hover:text-white"
                    >
                      {svc.name}
                    </button>
                  </li>
                ))}
                <li className="pt-1 border-t border-[#1a2656]/60">
                  <button
                    onClick={() => { navigate('services'); scrollToTop(); }}
                    className="text-[var(--accent-blue)] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>All Services Overview</span> &rarr;
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Company (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--accent-blue)]">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => { navigate('about'); scrollToTop(); }} className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer text-slate-400 hover:text-white">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('projects'); scrollToTop(); }} className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer text-slate-400 hover:text-white">
                    Projects &amp; Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('softwares'); scrollToTop(); }} className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer text-slate-400 hover:text-white">
                    Softwares (Invio &amp; Warden)
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('industries'); scrollToTop(); }} className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer text-slate-400 hover:text-white">
                    Industries We Serve
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('services'); scrollToTop(); }} className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer text-slate-400 hover:text-white">
                    All Services
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('contact'); scrollToTop(); }} className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer text-slate-400 hover:text-white">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Coordinates (3 cols) */}
            <div className="lg:col-span-3 space-y-3 font-mono text-xs">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-blue)]">
                Noida Headquarters
              </h4>
              
              <div className="space-y-2.5 text-slate-400">
                <a 
                  href={companyInfo.socials.phone}
                  className="flex items-center gap-2 hover:text-[var(--accent-blue)] transition-colors text-slate-400"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0" />
                  <span>{companyInfo.phone}</span>
                </a>

                <a 
                  href={companyInfo.socials.email}
                  className="flex items-center gap-2 hover:text-[var(--accent-blue)] transition-colors text-slate-400"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0" />
                  <span className="truncate">{companyInfo.email}</span>
                </a>

                <div className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                  <span>
                    Sector 62, Noida, Uttar Pradesh, 201309, India
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0c1438] border border-[#1a2656] text-[11px] text-slate-300 mt-4">
                <span className="text-[var(--accent-blue)] font-bold block mb-1">24/7 Global Dispatch</span>
                Fast-track scoping calls and NDA execution within 24 hours.
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Policies */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <p>&copy; 2026 TechPros Network. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => { navigate('privacy-policy'); scrollToTop(); }}
                className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => { navigate('terms-of-service'); scrollToTop(); }}
                className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => { navigate('cookie-policy'); scrollToTop(); }}
                className="hover:text-[var(--accent-blue)] transition-colors cursor-pointer"
              >
                Cookie Policy
              </button>
            </div>
          </div>

        </div>

        {/* Floating Scroll-to-Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-[var(--accent-blue)] hover:brightness-110 text-white shadow-[0_4px_20px_rgba(0,194,255,0.35)] transition-all cursor-pointer transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center font-bold"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        )}
      </footer>

      {/* Policy Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[var(--bg-panel)] border border-[var(--border-color)] p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)]">
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                {activeModal === 'privacy' && "Privacy Policy"}
                {activeModal === 'terms' && "Terms of Service"}
                {activeModal === 'cookie' && "Cookie Policy"}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--btn-bg)] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
              {activeModal === 'privacy' && (
                <>
                  <p><strong>1. Information Collection:</strong> TechPros Network respects your privacy. We collect names, business emails, telephone numbers, and inquiry details exclusively for responding to client scoping requests and delivering software licenses.</p>
                  <p><strong>2. Data Encryption & Security:</strong> All client data is protected under ISO 27001 and SOC 2 Type II compliance frameworks with AES-256 at rest and TLS 1.3 in transit.</p>
                  <p><strong>3. Third-Party Sharing:</strong> We do NOT sell, rent, or trade your personal or organizational data to any third-party advertisers or data brokers.</p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p><strong>1. Agreement to Terms:</strong> By accessing TechPros Network web platforms and downloading software tools (Invio, Warden), you agree to be bound by these Terms of Service.</p>
                  <p><strong>2. Intellectual Property:</strong> Custom engineering source code delivered under contract remains the property of the commissioning client as defined by mutual SOW agreements.</p>
                  <p><strong>3. Uptime SLAs:</strong> Cloud service uptime guarantees (99.99%) apply to managed enterprise accounts under active Master Services Agreements (MSA).</p>
                </>
              )}

              {activeModal === 'cookie' && (
                <>
                  <p><strong>1. Essential Cookies:</strong> We utilize minimal, privacy-centric cookies strictly necessary for session security, CSP compliance verification, and anti-DDoS tokens.</p>
                  <p><strong>2. No Invasive Tracking:</strong> We do not deploy invasive third-party cross-site trackers or ad profiling pixels.</p>
                  <p><strong>3. Consent Controls:</strong> You may disable cookies at any time via your browser settings without impacting core website accessibility.</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-[var(--accent-blue)] text-white hover:brightness-110 text-xs font-mono font-bold cursor-pointer shadow-xs"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
