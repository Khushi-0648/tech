import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, Target, Eye, Shield, Award, 
  ArrowRight, CheckCircle2, Clock, MapPin, Briefcase, 
  Send, Sparkles, Terminal, Globe, ShieldCheck, Activity, Users2
} from 'lucide-react';
import NocMonitor from '../components/NocMonitor';
import { 
  companyInfo, timelineMilestones, corePillars, 
  careerOpenings 
} from '../data/siteData';
import { realNocEngineersImg } from '../assets/images';

export default function AboutPage({ navigate }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantEmail, setApplicantEmail] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    if (!applicantEmail) return;
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      setSelectedJob(null);
      setApplicantEmail('');
    }, 4000);
  };

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Page Header / Hero: Full Dark Theme Section */}
      <section className="pt-32 pb-20 section-theme-dark hero-banner-permanent-dark bg-[#05081A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-mono font-bold uppercase mb-4 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#00C2FF]" /> Who We Are &bull; Noida Engineering Hub
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Architecting Scalable Systems. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38d6ff] to-[#00C2FF]">
                Engineered for Global Impact.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Headquartered in Sector 62, Noida, TechPros Network pairs top-tier software architects with elite cloud and AI developers to build resilient, high-speed digital infrastructure for modern enterprises worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('contact')}
                className="px-6 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.25)] transition-all cursor-pointer"
              >
                Meet Our Engineers &rarr;
              </button>

              <div className="flex items-center gap-6 font-mono text-xs text-[var(--text-secondary)] pl-2">
                <div>
                  <span className="text-[var(--accent-blue)] font-bold block text-lg">20+</span>
                  Years Leadership
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <span className="text-emerald-400 font-bold block text-lg">500+</span>
                  Platforms Delivered
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <span className="text-[var(--accent-blue)] font-bold block text-lg">30+</span>
                  Countries Served
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Global Delivery NOC Console Matrix */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-12 relative bg-[var(--bg-panel-subtle)] border-y border-[var(--border-color)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NocMonitor />
        </div>
      </motion.section>

      {/* 3. Foundation: Mission & Vision */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)]">
              Our Foundation
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight mt-2">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 shadow-xl relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] mb-6 shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                To provide intelligent full-stack engineering and automated BPO solutions that empower modern businesses to focus on what they do best — innovation and growth — while we handle the complexities of their operational digital infrastructure with precision and care.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 shadow-xl relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] mb-6 shadow-xs">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                To become the world's most trusted technology-driven engineering and BPO partner — one that doesn't just reduce overhead costs, but fundamentally transforms how enterprises operate, compete, and lead in the digital era.
              </p>
            </motion.div>
          </div>

        </div>
      </motion.section>

      {/* 3.5 Physical Noida Delivery Campus & Engineering Floor */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-20 bg-[var(--bg-panel-subtle)] border-y border-[var(--border-color)] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Campus Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[var(--accent-blue)]/30 shadow-xl group">
                <img 
                  src={realNocEngineersImg} 
                  alt="TechPros Engineering Operations Floor, Sector 62, Noida" 
                  className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-panel-subtle)]/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 bg-[var(--bg-panel-subtle)]/90 backdrop-blur-md px-3 py-1 rounded-md border border-[var(--accent-blue)]/30 text-xs font-mono text-[var(--accent-blue)] font-semibold flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Sector 62 Campus &bull; Active Engineering Pods</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[var(--bg-panel-subtle)]/90 backdrop-blur-md border border-[var(--accent-blue)]/30 text-xs font-mono text-[var(--text-secondary)] shadow-xs">
                  <div className="font-bold text-[var(--text-primary)]">Logix Cyber Park, Tower B, Sector 62, Noida, UP</div>
                  <div className="text-[11px] text-slate-400">180+ Full-Time Systems Architects &bull; ISO 27001 Certified</div>
                </div>
              </div>
            </div>

            {/* Campus Capabilities Story */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] text-xs font-mono font-bold uppercase">
                <MapPin className="w-3.5 h-3.5" /> Our Physical Center of Excellence
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight leading-tight">
                An Engineering Culture Rooted in Precision, Not Outsourcing Clichés.
              </h2>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                Unlike traditional offshore body shops, TechPros operates high-density engineering pods where full-stack developers, DevOps leads, and machine learning specialists collaborate side-by-side.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 shadow-md">
                  <div className="font-display font-bold text-xl text-[var(--accent-blue)]">180+</div>
                  <div className="text-xs font-mono text-slate-400 uppercase mt-0.5">In-House Engineers</div>
                  <div className="text-[11px] text-[var(--text-secondary)] mt-1">Zero outsourced freelance risk</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 shadow-md">
                  <div className="font-display font-bold text-xl text-[var(--accent-blue)]">24/7/365</div>
                  <div className="text-xs font-mono text-slate-400 uppercase mt-0.5">Physical NOC Guard</div>
                  <div className="text-[11px] text-[var(--text-secondary)] mt-1">Direct escalation hotline</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('contact')}
                  className="px-6 py-3 rounded-xl bg-[var(--accent-blue)] text-white font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,194,255,0.25)]"
                >
                  Visit Our Noida Campus &rarr;
                </button>
              </div>
            </div>

          </div>

        </div>
      </motion.section>

      {/* 4. Stats Bar */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-14 bg-[var(--bg-panel)] border-y border-[var(--border-color)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--accent-blue)]">500+</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mt-1">Clients Worldwide</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--accent-blue)]">40%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mt-1">Average Cost Reduction</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--accent-blue)]">20+</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mt-1">Years of Experience</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--accent-blue)]">99.8%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mt-1">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. Core Pillars */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)]">
              Why TechPros
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight mt-2">
              Our Core Pillars
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              Four principles that underpin everything we do — from how we build software teams to how we deliver mission-critical results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {corePillars.map((p, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-8 rounded-3xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 shadow-xl group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] mb-4 group-hover:scale-110 transition-transform shadow-xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-xl text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors mb-2">
                  {p.title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* 6. Interactive 2-Decade Timeline Journey */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative bg-[var(--bg-panel-subtle)] border-t border-[var(--border-color)]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)]">
              Our Journey
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight mt-2">
              Two Decades of Engineering Growth
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              From a small team with a big idea, to a global powerhouse serving 500+ enterprise clients across 30+ countries.
            </p>
          </div>

          <div className="relative border-l-2 border-[var(--accent-blue)]/30 ml-4 sm:ml-32 space-y-12">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Year Marker Badge */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[var(--bg-panel-subtle)] border-2 border-[var(--accent-blue)] flex items-center justify-center text-[var(--accent-blue)] text-xs font-mono font-bold shadow-xs">
                  &bull;
                </div>

                <motion.div 
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="p-6 rounded-2xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 group-hover:border-[var(--accent-blue)] shadow-xl transition-all"
                >
                  <span className="text-xs font-mono font-extrabold text-[var(--accent-blue)] tracking-wider">
                    YEAR {m.year}
                  </span>
                  <h4 className="font-display font-bold text-lg text-[var(--text-primary)] mt-1 mb-2">
                    {m.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono text-xs sm:text-sm">
                    {m.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* 7. Careers Section */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative bg-[var(--bg-panel-subtle)] border-t border-[var(--border-color)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)]">
              Careers &bull; Join Our Tech Center
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight mt-2">
              Build Your Career at TechPros
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              We're expanding across engineering, cloud operations, and solutions architecture — and we're always looking for talented minds passionate about building resilient systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {careerOpenings.map((job, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-6 rounded-2xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/20 shadow-xl flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--accent-blue)] font-semibold">{job.type}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-panel-subtle)] text-emerald-400 border border-emerald-500/30 font-medium">
                      Open Position
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors mb-2">
                    {job.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {job.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-panel-subtle)] text-[var(--text-secondary)] border border-[var(--accent-blue)]/25">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full py-2.5 rounded-xl bg-[var(--bg-panel-subtle)] hover:bg-[var(--accent-blue)] border border-[var(--accent-blue)]/30 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs font-bold transition-all cursor-pointer text-center shadow-xs"
                >
                  Apply for Position &rarr;
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center p-8 rounded-3xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 max-w-2xl mx-auto shadow-xl">
            <h4 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">
              Interested in Joining Our Sector 62, Noida Center?
            </h4>
            <p className="text-xs font-mono text-[var(--text-secondary)] mb-4">
              Send your resume or GitHub portfolio directly to our engineering hiring leads at{' '}
              <a href="mailto:help@techprosnetwork.com" className="text-[var(--accent-blue)] underline font-semibold">
                help@techprosnetwork.com
              </a>.
            </p>
          </div>

        </div>
      </motion.section>

      {/* Career Application Modal */}
      <AnimatePresence>
      {selectedJob && (
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
            className="relative w-full max-w-md rounded-3xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/40 p-6 sm:p-8 shadow-2xl text-[var(--text-secondary)]"
          >
            {applicationSubmitted ? (
              <div className="text-center py-8 space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-display font-bold text-xl text-[var(--text-primary)]">Application Received!</h4>
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  Thank you! Our recruitment team in Noida will review your application and respond to <strong className="text-[var(--accent-blue)]">{applicantEmail}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                  <div>
                    <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase font-semibold">Application</span>
                    <h4 className="font-display font-bold text-lg text-[var(--text-primary)]">{selectedJob.title}</h4>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setSelectedJob(null)}
                    className="text-slate-400 hover:text-[var(--text-primary)] cursor-pointer text-xl"
                  >
                    &times;
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--accent-blue)] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 text-white font-mono text-xs focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--accent-blue)] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="aryan@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 text-white font-mono text-xs focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 outline-none placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--accent-blue)] mb-1">LinkedIn / GitHub Profile URL</label>
                  <input
                    type="url"
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-panel-subtle)] border border-[var(--accent-blue)]/30 text-white font-mono text-xs focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 py-2.5 rounded-xl border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer bg-[var(--bg-panel-subtle)]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 cursor-pointer shadow-[0_4px_16px_rgba(0,194,255,0.25)]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  );
}
