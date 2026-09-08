import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Sparkles, Shield, ArrowRight, CheckCircle2, 
  Terminal, Globe, Lock, Layers, Laptop, Eye, X, Filter,
  RotateCw, ChevronLeft, ChevronRight, Activity
} from 'lucide-react';
import { portfolioProjects, companyInfo } from '../data/siteData';

export default function ProjectsPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: `All Systems (${portfolioProjects.length})` },
    { id: 'web-app', label: `Web Apps & Motion (${portfolioProjects.filter(p => p.category === 'web-app').length})` },
    { id: 'enterprise', label: `Enterprise & B2B (${portfolioProjects.filter(p => p.category === 'enterprise').length})` },
    { id: 'ecommerce', label: `E-Commerce (${portfolioProjects.filter(p => p.category === 'ecommerce').length})` }
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Page Header: Full Dark Theme Section */}
      <section className="pt-32 pb-16 section-theme-dark hero-banner-permanent-dark bg-[#05081A] relative overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#00C2FF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#00C2FF]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 text-[#00C2FF] font-mono text-xs tracking-wider uppercase mb-6 shadow-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span>8 Live Production Builds &bull; Global Verified Domains</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
              Engineered for Impact: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38d6ff] to-[#00C2FF]">
                Featured Production Systems
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Every platform below was engineered by the TechPros engineering team in Noida. Verified live in production across high-traffic enterprise workflows, headless culinary apps, and scalable digital storefronts.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-white font-semibold">100% Production Live</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00C2FF]" />
                <span>OWASP Header Hardened</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#00C2FF]" />
                <span>Multi-Region CDN Cached</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Projects Catalog & Showcase Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[var(--accent-blue)] text-white font-bold shadow-[0_4px_16px_rgba(0,194,255,0.25)] border border-[var(--accent-blue)]'
                  : 'bg-[var(--bg-panel)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] border border-[var(--accent-blue)]/20 hover:border-[var(--accent-blue)]/50 shadow-sm'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-2xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 hover:border-[var(--accent-blue)]/60 overflow-hidden shadow-xl flex flex-col justify-between transition-all"
            >
              <div>
                {/* Executive Live Browser Frame Top Bar */}
                <div className="px-3.5 py-2.5 bg-[var(--bg-panel-subtle)] border-b border-[var(--border-color)] flex items-center justify-between gap-2">
                  
                  {/* Left: Window Controls + Active Tab */}
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
                    </div>

                    {/* Active Tab */}
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-panel)] border border-[var(--border-color)] text-[10px] font-mono text-slate-200 truncate max-w-[170px] shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="truncate font-medium">{project.title}</span>
                      <span className="text-slate-500 text-[9px] ml-auto">✕</span>
                    </div>
                  </div>

                  {/* Right: Pulsing Live Production Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold shrink-0 shadow-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>LIVE IN PRODUCTION</span>
                  </div>

                </div>

                {/* Browser Navigation Toolbar & Authentic Address Bar */}
                <div className="px-3 py-1.5 bg-[#0a0515] border-b border-[var(--border-color)] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-slate-500 shrink-0">
                    <span className="p-1 text-slate-600 cursor-default"><ChevronLeft className="w-3.5 h-3.5" /></span>
                    <span className="p-1 text-slate-600 cursor-default"><ChevronRight className="w-3.5 h-3.5" /></span>
                    <span className="p-1 text-slate-500 hover:text-[var(--text-primary)] transition-colors cursor-pointer" title="Refresh Live State"><RotateCw className="w-3 h-3" /></span>
                  </div>

                  {/* Interactive Domain URL Bar */}
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between gap-2 px-3 py-1 rounded-md bg-[var(--bg-panel)] border border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 transition-all font-mono text-[11px] text-slate-300 group/url cursor-pointer"
                    title={`Visit live production domain: ${project.domain}`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400/80 font-medium select-none">https://</span>
                      <span className="text-[var(--text-primary)] font-semibold group-hover/url:text-[var(--accent-blue)] transition-colors truncate">{project.domain}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] text-slate-400 shrink-0">
                      <span className="hidden sm:inline px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">TLS 1.3</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover/url:text-[var(--accent-blue)]" />
                    </div>
                  </a>
                </div>

                {/* Realistic Live Production Website Viewport */}
                {project.image && (
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative h-56 sm:h-64 overflow-hidden bg-[var(--bg-panel-subtle)] border-b border-[var(--border-color)] group/screen cursor-pointer"
                  >
                    {/* Live Website Image Screenshot */}
                    <img 
                      src={project.image} 
                      alt={`${project.title} live website preview`} 
                      className="w-full h-full object-cover object-top group-hover/screen:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top ambient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel)] via-transparent to-transparent pointer-events-none" />
                    
                    {/* Flagship Banner Pill */}
                    {project.isFlagship && (
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[var(--bg-panel-subtle)]/90 border border-[var(--accent-blue)]/40 text-[var(--accent-blue)] text-[10px] font-mono font-bold backdrop-blur-md shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[var(--accent-blue)]" />
                        <span>Flagship Architecture</span>
                      </div>
                    )}

                    {/* Live Telemetry & Open Live Action HUD */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 pointer-events-none">
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[var(--bg-panel-subtle)]/90 backdrop-blur-md border border-[var(--border-color)] text-[10px] font-mono text-slate-300 shadow-sm">
                        <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                        <span>P99: <strong className="text-white">12ms</strong></span>
                        <span className="text-slate-600">&bull;</span>
                        <span className="text-emerald-400 font-bold">200 OK</span>
                        <span className="hidden sm:inline text-slate-600">&bull;</span>
                        <span className="hidden sm:inline text-slate-400">HTTP/3</span>
                      </div>

                      <div className="opacity-90 group-hover/screen:opacity-100 transition-opacity pointer-events-auto">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1 rounded-md bg-[var(--accent-blue)] hover:brightness-110 text-white font-display font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md transition-all cursor-pointer"
                        >
                          <span>Open Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Body */}
                <div className="p-6 sm:p-7">
                  
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] font-semibold">
                      {project.categoryName}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      ID: #{project.id}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/20 text-[var(--text-secondary)] flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[var(--accent-blue)]" />
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack List */}
                  <div className="border-t border-[var(--border-color)] pt-4">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Engineered Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/25 text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-[var(--bg-panel-subtle)]/60 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                  <span>Inspect Spec</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[var(--accent-blue)] hover:brightness-110 text-white transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Visit Domain</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Production Architecture Standards Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 rounded-3xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 p-8 sm:p-12 relative overflow-hidden shadow-xl"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[var(--accent-blue)]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] font-mono text-xs uppercase mb-4 font-semibold shadow-xs">
              <Terminal className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
              <span>Production Deployment Standard</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-4">
              Ready to Launch Your Next Enterprise Digital Asset?
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8 font-sans">
              Whether you need high-motion frontend storytelling, high-conversion headless e-commerce, or enterprise portal integrations, our engineering pod in Sector 62, Noida delivers sub-second performance backed by contractual SLAs.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('contact')}
                className="px-6 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.25)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Initiate Project Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => navigate('security-scanner')}
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-[var(--accent-blue)] bg-[var(--bg-panel-subtle)] hover:bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 hover:text-[var(--accent-blue)] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Shield className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>Run Security Audit on Your Site</span>
              </button>
            </div>
          </div>
        </motion.div>

        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
      {selectedProject && (
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
            className="relative w-full max-w-xl rounded-2xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 p-6 sm:p-8 shadow-2xl text-[var(--text-secondary)]"
          >
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-panel-subtle)] hover:bg-[var(--btn-bg)] border border-[var(--border-color)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4 pr-10">
              <span className="text-[11px] font-mono uppercase text-[var(--accent-blue)] font-semibold">
                Production Case Audit &bull; {selectedProject.categoryName}
              </span>
              <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                {selectedProject.subtitle}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/25 mb-4 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Live Domain:</span>
              <a 
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-blue)] hover:underline flex items-center gap-1 font-semibold"
              >
                {selectedProject.domain}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Live Website Preview Frame in Modal */}
            {selectedProject.image && (
              <div className="rounded-xl overflow-hidden border border-[var(--border-color)] mb-5 bg-[var(--bg-panel-subtle)] shadow-lg">
                <div className="px-3 py-2 bg-[#0a0515] border-b border-[var(--border-color)] flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/90" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/90" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/90" />
                    <span className="ml-2 text-slate-300 font-semibold truncate max-w-[200px]">{selectedProject.domain}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>PRODUCTION LIVE</span>
                  </div>
                </div>
                <div className="h-48 sm:h-64 overflow-y-auto bg-[var(--bg-panel-subtle)]">
                  <img 
                    src={selectedProject.image} 
                    alt={`${selectedProject.title} live interface`} 
                    className="w-full object-cover object-top"
                  />
                </div>
              </div>
            )}

            <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                Audited Performance Highlights:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/20 text-center">
                    <div className="text-xs font-mono font-bold text-[var(--accent-blue)]">{m}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                Deployment Stack:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((s, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/25 text-[var(--text-secondary)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  navigate('contact');
                }}
                className="text-xs font-mono text-[var(--accent-blue)] hover:underline cursor-pointer font-semibold"
              >
                Request Similar Architecture &rarr;
              </button>

              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[var(--accent-blue)] text-white hover:brightness-110 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Launch Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  );
}
