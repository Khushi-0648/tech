import React, { useState } from 'react';
import { 
  Landmark, Activity, ShoppingBag, Plane, Radio, 
  Cpu, Building2, GraduationCap, ShieldCheck, Sparkles, 
  ArrowRight, CheckCircle2, ChevronRight, Lock, Terminal, FileCheck
} from 'lucide-react';
import { industriesData, companyInfo } from '../data/siteData';

const iconMap = {
  Landmark,
  Activity,
  ShoppingBag,
  Plane,
  Radio,
  Cpu,
  Building2,
  GraduationCap
};

export default function IndustriesPage({ navigate }) {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Page Header: Full Dark Theme Section */}
      <section className="pt-32 pb-16 section-theme-dark hero-banner-permanent-dark bg-[#05081A] relative overflow-hidden">
        <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#00C2FF]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#00C2FF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] font-mono text-xs tracking-wider uppercase mb-6 shadow-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span>8 Enterprise Verticals &bull; High Compliance & Zero-Trust</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
              Specialized Domain Engineering for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38d6ff] to-[#00C2FF]">
                Heavily Regulated Industries
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Every vertical demands its own rigorous compliance frameworks, concurrency characteristics, and latency thresholds. We engineer tailor-fit platforms adhering to global statutory mandates.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Industry Deep Dive Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Interactive Industry Deep Dive Showcase (Split Screen Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Vertical Selector List (Left Side, 5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] mb-2 flex items-center gap-2 font-semibold">
              <Terminal className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
              <span>Select Enterprise Vertical:</span>
            </div>

            {industriesData.map((ind) => {
              const Icon = iconMap[ind.icon] || Landmark;
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--bg-panel)] border-[var(--accent-blue)] shadow-md text-white'
                      : 'bg-[var(--bg-panel-subtle)] border-[var(--accent-blue)]/20 hover:border-[var(--accent-blue)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)] shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-[var(--accent-blue)]/25 shrink-0 bg-[var(--bg-panel-subtle)]">
                      <img 
                        src={ind.image} 
                        alt={ind.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 transition-colors flex items-center justify-center ${
                        isSelected ? 'bg-[var(--accent-blue)]/85 text-white' : 'bg-[var(--bg-panel-subtle)]/60 text-white'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm sm:text-base text-[var(--text-primary)]">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] font-sans line-clamp-1">
                        {ind.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[var(--accent-blue)] translate-x-1' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Vertical Panel (Right Side, 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 p-6 sm:p-8 shadow-xl sticky top-28 text-[var(--text-secondary)]">
              
              {/* Header */}
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-[var(--border-color)] mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] shadow-sm">
                    {(() => {
                      const SelectedIcon = iconMap[selectedIndustry.icon] || Landmark;
                      return <SelectedIcon className="w-7 h-7" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent-blue)] font-semibold">
                      Sector Blueprint Specification
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
                      {selectedIndustry.title}
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-panel-subtle)] border border-emerald-500/30 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Audit Ready
                </span>
              </div>

              {/* High-Fidelity Industry Showcase Visual */}
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden mb-6 border border-[var(--border-color)] group shadow-lg bg-[var(--bg-panel-subtle)]">
                <img 
                  src={selectedIndustry.image} 
                  alt={selectedIndustry.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel)] via-[var(--bg-panel)]/25 to-transparent" />
                
                {/* Telemetry pill overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-[var(--bg-panel-subtle)]/90 backdrop-blur-md border border-[var(--accent-blue)]/30 text-[var(--text-primary)] flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                    {selectedIndustry.title} Production Architecture
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-[var(--bg-panel)]/90 text-slate-300 border border-[var(--border-color)]">
                    ISO/SOC-2 Aligned
                  </span>
                </div>
              </div>

              {/* Core Summary */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Executive Brief:
                </h4>
                <p className="text-base text-[var(--text-secondary)] font-sans leading-relaxed">
                  {selectedIndustry.summary}
                </p>
              </div>

              {/* In-Depth Implementation Detail */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Engineering Blueprint & Operations:
                </h4>
                <div className="p-4 rounded-xl bg-[var(--bg-panel-subtle)]/80 border border-[var(--accent-blue)]/15 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                  {selectedIndustry.detail}
                </div>
              </div>

              {/* Regulatory & Compliance Framework Badges */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] mb-3 flex items-center gap-2 font-semibold">
                  <Lock className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                  <span>Statutory Compliance & Standards Enforced:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.compliance.map((comp, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/20 flex items-center gap-2.5 text-xs font-mono text-[var(--text-secondary)]"
                    >
                      <FileCheck className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 font-mono">
                  SLA Backed &bull; Sector 62 Engineering Pod
                </div>
                <button
                  onClick={() => navigate('contact')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.25)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request {selectedIndustry.title} Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 8 Industry Grid Summary Cards */}
        <div className="pt-10 border-t border-[var(--border-color)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-2">
              Full Industry Capability Matrix
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Explore how TechPros Network serves cross-border regulatory standards across our 8 core verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industriesData.map((ind) => {
              const GridIcon = iconMap[ind.icon] || Landmark;
              return (
                <div
                  key={ind.id}
                  onClick={() => {
                    setSelectedIndustry(ind);
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="rounded-xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 hover:border-[var(--accent-blue)] overflow-hidden shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Card Image Header */}
                    <div className="h-36 relative overflow-hidden bg-[var(--bg-panel-subtle)]">
                      <img 
                        src={ind.image} 
                        alt={ind.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel)] via-[var(--bg-panel)]/40 to-transparent" />
                      
                      {/* Floating Category Icon Badge */}
                      <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-[var(--bg-panel-subtle)]/85 backdrop-blur-md border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] shadow-sm">
                        <GridIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-base font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors mb-1.5">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] line-clamp-2 mb-3">
                        {ind.summary}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {ind.compliance.slice(0, 2).map((comp, idx) => (
                          <span key={idx} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[var(--bg-panel-subtle)] text-[var(--accent-blue)] border border-[var(--accent-blue)]/20">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <span className="text-[11px] font-mono text-[var(--accent-blue)] flex items-center gap-1 group-hover:underline font-semibold">
                      Inspect Blueprint &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>

  </div>
);
}
