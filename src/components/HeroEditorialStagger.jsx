import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Zap, Activity, CheckCircle2, 
  Terminal, Sparkles, Server, Lock, Cpu, Code2, 
  Layers, Play, Check, ShieldAlert, Maximize2, ExternalLink
} from 'lucide-react';
import { companyInfo } from '../data/siteData';
import { dashboardImg } from '../assets/images';

export default function HeroEditorialStagger({ navigate }) {

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.02,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden z-10 hero-banner-permanent-dark section-theme-dark bg-[#05081A]">
      
      {/* Ambient Electric Cyan & Blue Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-[#00C2FF]/[0.08] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00C2FF]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      {/* Enterprise Technical Grid Overlay */}
      <div 
        className="absolute inset-0 enterprise-grid pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial={false}
          animate="visible"
        >

          {/* Left Column: Command Center Editorial Wing */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Stagger Item 1: High-Density Status Header */}
            <motion.div variants={itemVariants} className="mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0c1330]/90 border border-[#1a2656] backdrop-blur-xl shadow-lg group hover:border-[#00C2FF] transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C2FF]" />
                </span>
                <span className="text-xs font-mono font-bold tracking-wider text-[#00C2FF] uppercase">
                  Noida Sector 62 Hub &bull; 24/7 Global NOC Active
                </span>
                <span className="hidden sm:inline-block text-slate-500">•</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[#00C2FF] font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#00C2FF]" /> ISO 27001 / SOC 2
                </span>
              </div>
            </motion.div>

            {/* Stagger Item 2: Main Headline */}
            <motion.div variants={itemVariants} className="mb-6 w-full">
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
                Enterprise Web <br />
                <span className="text-slate-400">Engineering for</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38d6ff] to-[#00C2FF] font-black tracking-tight drop-shadow-[0_4px_16px_rgba(0,194,255,0.25)]">
                  High-Concurrency Digital Systems
                </span>
              </h1>
            </motion.div>

            {/* Stagger Item 3: Editorial Description */}
            <motion.div variants={itemVariants} className="mb-8 max-w-2xl">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Headquartered in <span className="text-[#00C2FF] font-semibold">Sector 62, Noida</span>, <strong className="text-white font-bold">TechPros Network</strong> architects bespoke full-stack web platforms, autonomous AI agent pipelines, resilient multi-cloud clusters, and bank-grade zero-trust architectures for global industry leaders.
              </p>
            </motion.div>

            {/* Stagger Item 4: Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <button
                onClick={() => navigate('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white bg-[#00C2FF] hover:bg-[#38d6ff] shadow-[0_4px_20px_rgba(0,194,255,0.35)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Initiate Project Discovery</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => navigate('services')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-[#0c1330] hover:bg-[#121c46] border border-[#1a2656] hover:border-[#00C2FF] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore 10 Domains</span>
                <Layers className="w-4 h-4 text-white" />
              </button>
            </motion.div>

            {/* Stagger Item 5: Hero Stats Ticker Matrix (Permanent Dark Theme) */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-[#1a2656] w-full"
            >
              {/* Card 1: Deep Midnight Cyber Dark Card */}
              <div className="p-3.5 rounded-2xl bg-[#070e28]/95 border border-[#1a2858] text-center relative overflow-hidden group shadow-lg transition-all duration-300 hover:border-[#00C2FF]">
                <div className="font-display font-black text-2xl sm:text-3xl text-[#00C2FF]">
                  500+
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 mt-1">
                  Platforms Delivered
                </div>
                <div className="text-[9px] font-mono text-emerald-400 font-bold mt-0.5">
                  ● Verified Production
                </div>
              </div>

              {/* Card 2: Deep Midnight Cyber Dark Card */}
              <div className="p-3.5 rounded-2xl bg-[#070e28]/95 border border-[#1a2858] text-center relative overflow-hidden group shadow-lg transition-all duration-300 hover:border-[#00C2FF]">
                <div className="font-display font-black text-2xl sm:text-3xl text-[#00C2FF]">
                  99.99%
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 mt-1">
                  Cloud Uptime SLA
                </div>
                <div className="text-[9px] font-mono text-[#00C2FF] font-bold mt-0.5">
                  ● Zero Downtime
                </div>
              </div>

              {/* Card 3: Deep Midnight Cyber Dark Card */}
              <div className="p-3.5 rounded-2xl bg-[#070e28]/95 border border-[#1a2858] text-center relative overflow-hidden group shadow-lg transition-all duration-300 hover:border-[#00C2FF]">
                <div className="font-display font-black text-2xl sm:text-3xl text-white">
                  &lt; 0.8s
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 mt-1">
                  Core Web Vitals
                </div>
                <div className="text-[9px] font-mono text-[#00C2FF] font-bold mt-0.5">
                  ● Sub-Second LCP
                </div>
              </div>

              {/* Card 4: Deep Midnight Cyber Dark Card */}
              <div className="p-3.5 rounded-2xl bg-[#070e28]/95 border border-[#1a2858] text-center relative overflow-hidden group shadow-lg transition-all duration-300 hover:border-[#00C2FF]">
                <div className="font-display font-black text-2xl sm:text-3xl text-emerald-400">
                  24/7
                </div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 mt-1">
                  Noida NOC Guard
                </div>
                <div className="text-[9px] font-mono text-emerald-400 font-bold mt-0.5">
                  ● Live Dispatch
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-Tech Interactive Command Console Chassis (100% Dark Theme) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            {/* Console Ambient Glow Frame */}
            <div className="absolute -inset-1 bg-[#00C2FF]/15 rounded-3xl blur-xl opacity-50 pointer-events-none" />

            <div className="relative rounded-2xl bg-[#070e28] border border-[#1a2656] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(0,194,255,0.1)] overflow-hidden">
              
              {/* Realistic macOS Browser Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#05081A] border-b border-[#1a2656]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs" />
                  </div>
                  {/* URL Bar */}
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 ml-2 rounded-md bg-[#0c1330] border border-[#1a2656] text-[11px] font-mono text-slate-400 shadow-xs">
                    <Lock className="w-3 h-3 text-[#00C2FF]" />
                    <span>telemetry.techpros.net/clusters/noida-dc-01</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-[11px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-ping" />
                    Live NOC Feed
                  </span>
                </div>
              </div>

              {/* Direct Telemetry Data Showcase */}
              <div className="p-4 space-y-3 bg-[#070e28]">
                {/* Dashboard Mockup Image with HUD Overlays */}
                <div className="relative rounded-xl overflow-hidden border border-[#1a2656] group">
                  <img 
                    src={dashboardImg} 
                    alt="TechPros Cloud NOC Telemetry & Kubernetes Management Dashboard" 
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-[220px] sm:h-[240px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05081A]/95 via-transparent to-black/40 pointer-events-none" />

                  {/* Floating HUD Badges on Top of Realistic Dashboard */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-[#05081A]/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#00C2FF]/30 text-[10px] font-mono text-[#00C2FF] font-semibold shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Cluster ap-south-1a: 100% HEALTHY</span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-[#05081A]/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#00C2FF]/30 text-[10px] font-mono text-[#00C2FF] font-semibold shadow-md">
                    <ShieldCheck className="w-3 h-3 text-[#00C2FF]" />
                    <span>SOC 2 Type II</span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between bg-[#05081A]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#1a2656] text-[11px] font-mono shadow-md">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-300 font-medium">1,420 Active Pods</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-emerald-400 font-semibold">0 Failed Nodes</span>
                    </div>
                    <span className="text-[#00C2FF] font-semibold">P99: 8.4ms</span>
                  </div>
                </div>

                {/* 2 Telemetry Metric Badges */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-[#0c1330] border border-[#1a2656] shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Uptime SLA</span>
                      <span className="text-[9px] font-mono text-[#00C2FF] bg-[#00C2FF]/15 px-1.5 py-0.5 rounded font-semibold">Verified</span>
                    </div>
                    <div className="font-display font-bold text-lg text-white mt-0.5">
                      99.999%
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      Zero unplanned downtime
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#0c1330] border border-[#1a2656] shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">P99 Latency</span>
                      <span className="text-[9px] font-mono text-[#00C2FF] bg-[#00C2FF]/15 px-1.5 py-0.5 rounded font-semibold">&lt; 10ms</span>
                    </div>
                    <div className="font-display font-bold text-lg text-white mt-0.5">
                      8.4 ms
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      Edge routing via Cloudflare
                    </div>
                  </div>
                </div>

                {/* Physical NOC Location Badge */}
                <div className="p-2.5 rounded-xl bg-[#0c1330] border border-[#1a2656] font-mono text-[11px] flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
                    <span className="text-white font-medium">Noida Hub • Sector 62</span>
                  </div>
                  <span className="text-[#00C2FF] font-medium text-[11px]">Direct Fiber to AWS ap-south-1</span>
                </div>
              </div>

              {/* Console Quick Footer Callout */}
              <div className="px-4 py-3 bg-[#05081A] border-t border-[#1a2656] flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  Direct Engineering Escalation:
                </span>
                <a
                  href={companyInfo.socials.phone}
                  className="font-mono text-[#00C2FF] hover:underline flex items-center gap-1 font-semibold transition-colors"
                >
                  <span>{companyInfo.phone}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00C2FF]" />
                </a>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
