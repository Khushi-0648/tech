import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, 
  BarChart3, Cloud, Compass, Database, Layers, Bot, 
  Network, Sparkles, Terminal, ChevronRight, Check, X,
  Clock, ShieldAlert, Zap
} from 'lucide-react';
import { servicesData, companyInfo } from '../data/siteData';
import { campusImg } from '../assets/images';

const iconMap = {
  Code2,
  Cpu,
  BarChart3,
  Cloud,
  Compass,
  ShieldCheck,
  Database,
  Layers,
  Bot,
  Network
};

export default function ServicesPage({ navigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);
  const [scopingSubmitted, setScopingSubmitted] = useState(false);
  const [scopingEmail, setScopingEmail] = useState('');

  const categories = [
    { id: 'all', label: 'All 10 Services' },
    { id: 'engineering', label: 'Engineering & Code' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'data-ai', label: 'AI & Data Intelligence' },
    { id: 'security-net', label: 'Cybersecurity & Networks' }
  ];

  const filterService = (service) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'engineering') {
      return ['web-development', 'enterprise-solutions', 'consulting-operations'].includes(service.id);
    }
    if (selectedCategory === 'cloud') {
      return ['cloud-infrastructure', 'industrial-autonomy'].includes(service.id);
    }
    if (selectedCategory === 'data-ai') {
      return ['ai-automation', 'business-analytics', 'data-analytics'].includes(service.id);
    }
    if (selectedCategory === 'security-net') {
      return ['cybersecurity', 'network-solutions'].includes(service.id);
    }
    return true;
  };

  const filteredServices = servicesData.filter(filterService);

  const handleScopeSubmit = (e) => {
    e.preventDefault();
    if (!scopingEmail) return;

    setScopingSubmitted(true);
    setTimeout(() => {
      setScopingSubmitted(false);
      setActiveModalService(null);
      setScopingEmail('');
    }, 2500);
  };

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Header & Quick Metrics: Full Dark Theme Section */}
      <section className="pt-32 pb-20 section-theme-dark hero-banner-permanent-dark bg-[#05081A] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-blue)]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="badge-dark-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#00C2FF] font-mono text-xs tracking-wider uppercase mb-6 shadow-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span>Noida Sector 62 Delivery Hub &bull; 10 Engineering Domains</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
              High-Velocity Engineering for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38d6ff] to-[var(--accent-blue)]">
                Mission-Critical Digital Systems
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              From modern headless web architectures and sub-second React platforms to autonomous AI agents, multi-cloud Kubernetes, and bank-grade zero-trust pentesting—we engineer for global resilience.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#1a2858]">
              <div className="p-4 rounded-xl card-dark-uniform shadow-md text-center">
                <div className="font-mono text-2xl font-bold text-[#00C2FF]">99.99%</div>
                <div className="text-xs text-slate-300">Cloud Uptime SLA</div>
              </div>
              <div className="p-4 rounded-xl card-dark-uniform shadow-md text-center">
                <div className="font-mono text-2xl font-bold text-[#00C2FF]">&lt; 0.8s</div>
                <div className="text-xs text-slate-300">First Contentful Paint</div>
              </div>
              <div className="p-4 rounded-xl card-dark-uniform shadow-md text-center">
                <div className="font-mono text-2xl font-bold text-[#00C2FF]">40%</div>
                <div className="text-xs text-slate-300">Avg Cost Reduction</div>
              </div>
              <div className="p-4 rounded-xl card-dark-uniform shadow-md text-center">
                <div className="font-mono text-2xl font-bold text-[#00C2FF]">24/7/365</div>
                <div className="text-xs text-slate-300">Noida NOC Support</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Services Grid: Full Light Theme Section */}
      <section className="py-24 section-theme-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="badge-light-pill px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
              Complete Domain Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A0F2E] tracking-tight mt-3">
              Explore Our 10 Core Capabilities
            </h2>
          </div>

          {/* Category Navigation Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white font-bold shadow-md'
                    : 'bg-white text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 shadow-xs'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Services Grid (All 10 services - UNIFORM LIGHT CARDS) */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
            {filteredServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative rounded-2xl p-7 card-light-uniform shadow-md flex flex-col justify-between transition-all"
                >
                  {/* Visual Service Architectural Banner */}
                  {service.image && (
                    <div 
                      onClick={() => navigate(service.slug || service.id)}
                      className="relative -mx-7 -mt-7 mb-6 h-44 overflow-hidden rounded-t-2xl border-b border-slate-200 bg-slate-100 cursor-pointer"
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded backdrop-blur-md border border-blue-200 bg-white/90 text-blue-700 font-mono text-[10px] font-bold shadow">
                        0{index + 1} // DOMAIN
                      </div>
                    </div>
                  )}

                  <div>
                    {/* Icon & ID Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div 
                        onClick={() => navigate(service.slug || service.id)}
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white cursor-pointer"
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {!service.image && (
                        <span className="font-mono text-[11px] px-2 py-1 rounded border font-semibold bg-blue-50 border-blue-200 text-blue-700">
                          0{index + 1} // DOMAIN
                        </span>
                      )}
                    </div>

                    {/* Title & Short Desc */}
                    <h3 
                      onClick={() => navigate(service.slug || service.id)}
                      className="text-xl font-display font-bold text-[#0A0F2E] group-hover:text-blue-600 transition-colors mb-3 cursor-pointer"
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 font-sans text-slate-600">
                      {service.fullDesc}
                    </p>

                    {/* Metrics Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.metrics.map((m, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-50 border border-blue-200 text-blue-800"
                        >
                          <Zap className="w-3 h-3 text-blue-600" />
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Deliverables Preview */}
                    <div className="border-t border-slate-200 pt-4 mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-wider mb-3 flex items-center gap-1.5 font-semibold text-blue-700">
                        <Terminal className="w-3.5 h-3.5" />
                        Core Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.slice(0, 3).map((d, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-600" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded border bg-slate-100 border-slate-200 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => navigate(service.slug || service.id)}
                      className="text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer font-bold text-blue-600 hover:text-blue-800"
                    >
                      <span>Explore Dedicated Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => navigate('contact')}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-xs bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white"
                    >
                      <span>Scope Service</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. Global Architecture Assurance Banner: Full Dark Theme Section */}
      <section className="py-24 section-theme-dark relative border-t border-[#141e48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl card-dark-uniform p-8 sm:p-12 shadow-2xl border border-[#1a2a5e] overflow-hidden"
          >
            {/* Ambient Noida Campus Visual */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-15 pointer-events-none hidden lg:block"
              style={{ backgroundImage: `url(${campusImg})` }}
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="badge-dark-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#00C2FF] font-mono text-xs uppercase mb-4 font-semibold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00C2FF]" />
                  <span>Enterprise SLA Guarantee</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                  Need a Custom Tailored Multi-Domain Architecture?
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  Our senior enterprise architects in Sector 62, Noida collaborate directly with your technical leads. We conduct zero-cost preliminary code audits, architecture reviews, and produce actionable SOW blueprints within 48 hours.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => navigate('contact')}
                  className="w-full px-6 py-3.5 min-h-[44px] rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[#00C2FF] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={companyInfo.socials.phone}
                  className="w-full px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-[#070e28] hover:bg-[#0c1844] border border-[#1a2a5e] transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Call Noida NOC Direct</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Deep-Dive Blueprint Modal */}
      <AnimatePresence>
      {activeModalService && (
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
            className="relative w-full max-w-2xl rounded-2xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-[var(--text-secondary)]"
          >
            
            {/* Modal Tech Visual Preview */}
            {activeModalService.image && (
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 h-48 overflow-hidden rounded-t-2xl border-b border-[var(--border-color)] bg-[var(--bg-panel-subtle)]">
                <img 
                  src={activeModalService.image} 
                  alt={activeModalService.title} 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel)] via-[var(--bg-panel)]/40 to-transparent pointer-events-none" />
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 z-20 p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-panel-subtle)]/85 backdrop-blur-md border border-[var(--border-color)] hover:border-[var(--accent-blue)] transition-colors cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)]">
                {(() => {
                  const ModalIcon = iconMap[activeModalService.icon] || Code2;
                  return <ModalIcon className="w-5 h-5" />;
                })()}
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[var(--accent-blue)] tracking-wider font-semibold">
                  Service Architecture Blueprint
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            {/* SLA Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {activeModalService.metrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/20 text-center">
                  <div className="text-xs font-mono font-bold text-[var(--accent-blue)]">{metric}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">SLA Target</div>
                </div>
              ))}
            </div>

            {/* All Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Full Production Deliverables:
              </h4>
              <div className="space-y-2.5 bg-[var(--bg-panel-subtle)]/70 p-4 rounded-xl border border-[var(--accent-blue)]/15">
                {activeModalService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                Engineered With:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.tags.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/25 text-[var(--text-secondary)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick SOW Scope Form */}
            <div className="border-t border-[var(--border-color)] pt-6">
              {scopingSubmitted ? (
                <div className="p-4 rounded-xl bg-[var(--bg-panel-subtle)] border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Requirement received. An engineer from Sector 62 will contact you within 2 business hours.</span>
                </div>
              ) : (
                <form onSubmit={handleScopeSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={scopingEmail}
                    onChange={(e) => setScopingEmail(e.target.value)}
                    placeholder="Enter work email for SOW blueprint..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 focus:outline-none text-sm text-white font-mono placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.25)] transition-all cursor-pointer whitespace-nowrap"
                  >
                    Get Scope Blueprint
                  </button>
                </form>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  );
}
