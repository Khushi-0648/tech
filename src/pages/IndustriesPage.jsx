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

      {/* 2. Interactive Industry Deep Dive: Full Light Theme Section */}
      <section className="py-20 section-theme-light relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Interactive Industry Deep Dive Showcase (Split Screen Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
          
          {/* Vertical Selector List (Left Side, 5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-2 flex items-center gap-2 font-semibold">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>Select Enterprise Vertical:</span>
            </div>

            {industriesData.map((ind) => {
              const Icon = iconMap[ind.icon] || Landmark;
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 shadow-md text-white'
                      : 'bg-white border-slate-200 hover:border-slate-400 text-blue-700 hover:!text-black shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                      <img 
                        src={ind.image} 
                        alt={ind.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 transition-colors flex items-center justify-center ${
                        isSelected ? 'bg-blue-800/85 text-white' : 'bg-slate-900/50 text-white'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-display font-semibold text-sm sm:text-base transition-colors duration-150 ${
                        isSelected ? '!text-white' : 'text-blue-700 group-hover:!text-black'
                      }`}>
                        {ind.title}
                      </h4>
                      <p className={`text-xs font-sans line-clamp-1 transition-colors duration-150 ${
                        isSelected ? 'text-blue-100' : 'text-slate-500 group-hover:!text-black'
                      }`}>
                        {ind.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-150 ${
                    isSelected ? 'text-white translate-x-1' : 'text-slate-400 group-hover:!text-black group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Vertical Panel (Right Side, 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl card-light-uniform bg-white border border-slate-200 p-6 sm:p-8 shadow-xl sticky top-28 text-slate-700">
              
              {/* Header */}
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                    {(() => {
                      const SelectedIcon = iconMap[selectedIndustry.icon] || Landmark;
                      return <SelectedIcon className="w-7 h-7" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-semibold">
                      Sector Blueprint Specification
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0A0F2E]">
                      {selectedIndustry.title}
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 border border-emerald-300 text-emerald-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Audit Ready
                </span>
              </div>

              {/* High-Fidelity Industry Showcase Visual */}
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden mb-6 border border-slate-200 group shadow-md bg-slate-100">
                <img 
                  src={selectedIndustry.image} 
                  alt={selectedIndustry.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Telemetry pill overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    {selectedIndustry.title} Production Architecture
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-white/95 text-slate-700 border border-slate-200">
                    ISO/SOC-2 Aligned
                  </span>
                </div>
              </div>

              {/* Core Summary */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">
                  Executive Brief:
                </h4>
                <p className="text-base text-slate-700 font-sans leading-relaxed">
                  {selectedIndustry.summary}
                </p>
              </div>

              {/* In-Depth Implementation Detail */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">
                  Engineering Blueprint & Operations:
                </h4>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed font-sans">
                  {selectedIndustry.detail}
                </div>
              </div>

              {/* Regulatory & Compliance Framework Badges */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-2 font-semibold">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Statutory Compliance & Standards Enforced:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.compliance.map((comp, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs font-mono text-slate-700"
                    >
                      <FileCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-end">
                <button
                  onClick={() => navigate('contact')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request {selectedIndustry.title} Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        </div>
      </section>

      {/* 3. Full Industry Capability Matrix: Full Dark Theme Section */}
      <section className="py-24 section-theme-dark bg-[#05081A] relative border-t border-[#141e48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-dark-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#00C2FF] mb-3 inline-block">
              Complete Cross-Border Spectrum
            </span>
            <h3 className="text-3xl font-display font-bold text-white mb-3">
              Full Industry Capability Matrix
            </h3>
            <p className="text-sm text-slate-300">
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
                  className="rounded-2xl card-dark-uniform bg-[#0a1232] border border-[#1a2a5e] hover:border-[#00C2FF] overflow-hidden shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Card Image Header */}
                    <div className="h-36 relative overflow-hidden bg-slate-900">
                      <img 
                        src={ind.image} 
                        alt={ind.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1232] via-[#0a1232]/40 to-transparent" />
                      
                      {/* Floating Category Icon Badge */}
                      <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-[#05081A]/85 backdrop-blur-md border border-[#00C2FF]/30 flex items-center justify-center text-[#00C2FF] shadow-sm">
                        <GridIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-base font-display font-bold text-white group-hover:text-[#00C2FF] transition-colors mb-1.5">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                        {ind.summary}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {ind.compliance.slice(0, 2).map((comp, idx) => (
                          <span key={idx} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#05081A] text-[#00C2FF] border border-[#1a2a5e]">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

  </div>
);
}
