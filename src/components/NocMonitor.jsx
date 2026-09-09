import React from 'react';
import { Building2, Activity, Globe, ShieldCheck, Award } from 'lucide-react';

export default function NocMonitor({ themeOverride }) {
  const isLight = themeOverride === 'light';

  const pillars = [
    {
      icon: Building2,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50 border-blue-200',
      title: 'Physical Campus in Sector 62, Noida',
      description: 'Our engineering headquarters and operations facility is located at Sector 62, Noida, UP 201309. 100% of our software architects, DevOps engineers, and cloud specialists work in-house with zero outsourced freelance risk.',
    },
    {
      icon: Activity,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-200',
      title: '24/7 Centralized NOC Monitoring',
      description: 'Our in-house Noida Network Operations Center provides continuous real-time telemetry, automated anomaly detection, and rapid incident response, ensuring uninterrupted business continuity for all client workloads.',
    },
    {
      icon: Globe,
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-50 border-sky-200',
      title: 'Global Delivery Across 30+ Countries',
      description: 'From our centralized Noida hub, we engineer and edge-route high-speed digital platforms for enterprises across the US, UK, UAE, Europe, and APAC, backed by direct fiber cross-connects to AWS, Google Cloud, and Azure.',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50 border-indigo-200',
      title: 'ISO 27001 & SOC 2 Certified Security',
      description: 'Every system is engineered under strict zero-trust principles, TLS 1.3 encryption, and OWASP WSTG v4.2 standards. Rigorous compliance and governance are enforced directly across all service lines from our Noida campus.',
    },
  ];

  return (
    <div 
      style={{ fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}
      className={`rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl transition-all duration-300 ${
        isLight 
          ? 'bg-white border border-slate-200' 
          : 'bg-[#0a1232] border border-[#1a2a5e]'
      }`}
    >
      
      {/* Top Header Badge & Live Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-slate-200/80">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide shadow-xs">
          <Building2 className="w-4 h-4 text-blue-600" />
          <span>Engineering HQ: Sector 62, Noida</span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            24/7 NOC Active
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium">
            <Award className="w-3.5 h-3.5 text-slate-500" />
            ISO 27001 &bull; SOC 2 Type II
          </span>
        </div>
      </div>

      {/* Main Section Header */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
          Infrastructure &amp; Delivery Command
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0F2E] tracking-tight leading-tight">
          Global NOC &amp; Edge Infrastructure
          <span className="block mt-1 text-blue-600">
            Centrally Managed Exclusively from Noida
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          TechPros Network operates our centralized 24/7 Network Operations Center (NOC) and global engineering delivery exclusively from our physical headquarters in Sector 62, Noida. From this single unified campus, our full-time software architects and cloud engineers monitor, protect, and edge-route high-availability digital systems for enterprise clients across 30+ countries worldwide.
        </p>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${pillar.iconBg}`}>
                    <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                  </div>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#0A0F2E] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
