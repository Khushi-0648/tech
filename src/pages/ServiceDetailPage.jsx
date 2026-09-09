import React, { useEffect, useState } from 'react';
import { 
  Code2, Cpu, BarChart3, Cloud, Compass, ShieldCheck, 
  Database, Layers, Bot, Network, ArrowRight, Phone, Mail, 
  CheckCircle2, Sparkles, Terminal, Copy, Check, Shield, 
  ExternalLink, Zap, Clock, Activity, Building2, ChevronDown, 
  ChevronUp, CheckCircle, Workflow, Gauge, Globe
} from 'lucide-react';
import { exactLiveServicesData } from '../data/exactLiveServicesData';
import { companyInfo } from '../data/siteData';

// High-Fidelity Enterprise Imagery
import {
  dashboardImg, 
  campusImg, 
  fintechImg, 
  healthtechImg,
  cloudDevopsImg,
  aiAutomationImg,
  cyberSecurityImg,
  modernWebImg,
  realNocEngineersImg,
  realDeveloperWorkspaceImg,
  realCloudDatacenterImg,
  realTechConsultingImg,
  industryBankingImg,
  industryHealthcareImg,
  industryRetailImg,
  industryTravelImg,
  industryTelecomImg,
  industryManufacturingImg,
  industryGovernmentImg,
  industryEducationImg,
  glowsoftSiteImg,
  glowpathSiteImg,
  kidzgemSiteImg,
  lovoaSiteImg,
  indianKitchenSiteImg,
  maschallsKitchenSiteImg,
  chefLamaSiteImg,
  socialSipsSiteImg
} from '../assets/images';

const iconMap = {
  'web-development': Code2,
  'artificial-intelligence-and-automation': Bot,
  'business-analytics': BarChart3,
  'cloud-infrastructure': Cloud,
  'consulting-operations': Compass,
  'cybersecurity': ShieldCheck,
  'data-analytics': Database,
  'enterprise-solutions': Layers,
  'industrial-autonomy-and-engineering': Cpu,
  'network-solutions-and-services': Network
};

// Domain Hero & Scoping Architecture Images
const serviceImageMap = {
  'web-development': realDeveloperWorkspaceImg,
  'artificial-intelligence-and-automation': aiAutomationImg,
  'business-analytics': dashboardImg,
  'cloud-infrastructure': realCloudDatacenterImg,
  'consulting-operations': realTechConsultingImg,
  'cybersecurity': cyberSecurityImg,
  'data-analytics': fintechImg,
  'enterprise-solutions': campusImg,
  'industrial-autonomy-and-engineering': industryManufacturingImg,
  'network-solutions-and-services': realNocEngineersImg
};

// Live Project Website Mockups
const projectImageMap = {
  'glowsoftsuppliers.com': glowsoftSiteImg,
  'GlowSoft Suppliers': glowsoftSiteImg,
  'indian-kitchen-seven.vercel.app': indianKitchenSiteImg,
  'Indian Kitchen': indianKitchenSiteImg,
  'chef-lama-motion.vercel.app': chefLamaSiteImg,
  'Chef Lama Dining': chefLamaSiteImg,
  'glowpath': glowpathSiteImg,
  'kidzgem': kidzgemSiteImg,
  'lovoa': lovoaSiteImg,
  'socialsips': socialSipsSiteImg
};

// Contextual Matrix Card Imagery
const getMatrixCardImage = (cardTitle, serviceSlug) => {
  const t = (cardTitle || '').toLowerCase();
  if (t.includes('bank') || t.includes('financ') || t.includes('pci')) return industryBankingImg;
  if (t.includes('health') || t.includes('clinic') || t.includes('pharma')) return industryHealthcareImg;
  if (t.includes('manufactur') || t.includes('factory') || t.includes('shop') || t.includes('plant')) return industryManufacturingImg;
  if (t.includes('retail') || t.includes('commerce') || t.includes('store')) return industryRetailImg;
  if (t.includes('travel') || t.includes('logistic') || t.includes('warehouse') || t.includes('supply')) return industryTravelImg;
  if (t.includes('telecom') || t.includes('energy') || t.includes('utilities')) return industryTelecomImg;
  if (t.includes('security') || t.includes('owasp') || t.includes('palo alto') || t.includes('pentest') || t.includes('threat') || t.includes('gdpr') || t.includes('privacy')) return cyberSecurityImg;
  if (t.includes('gov') || t.includes('public') || t.includes('iso 27001') || t.includes('compliance')) return industryGovernmentImg;
  if (t.includes('aws') || t.includes('amazon') || t.includes('datacenter')) return realCloudDatacenterImg;
  if (t.includes('azure') || t.includes('hybrid') || t.includes('dbt') || t.includes('devops')) return cloudDevopsImg;
  if (t.includes('google') || t.includes('gcp') || t.includes('soc 2')) return fintechImg;
  if (t.includes('cisco') || t.includes('network') || t.includes('fortinet') || t.includes('aruba')) return realNocEngineersImg;
  if (t.includes('power bi') || t.includes('tableau') || t.includes('snowflake') || t.includes('bigquery') || t.includes('sap') || t.includes('analytics') || t.includes('dynamics') || t.includes('microsoft')) return dashboardImg;
  if (t.includes('consult') || t.includes('servicenow') || t.includes('strategy')) return realTechConsultingImg;
  if (t.includes('code') || t.includes('clean') || t.includes('open source') || t.includes('custom')) return realDeveloperWorkspaceImg;
  if (t.includes('ai') || t.includes('robot') || t.includes('kafka') || t.includes('spark')) return aiAutomationImg;
  if (t.includes('salesforce')) return campusImg;
  if (t.includes('seo') || t.includes('web')) return modernWebImg;
  if (t.includes('looker')) return fintechImg;
  return serviceImageMap[serviceSlug] || modernWebImg;
};

export default function ServiceDetailPage({ serviceId, navigate }) {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const service = exactLiveServicesData[serviceId] || exactLiveServicesData['web-development'];
  const ServiceIcon = iconMap[service.slug] || Code2;
  const DomainImage = serviceImageMap[service.slug] || realDeveloperWorkspaceImg;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setOpenFaq(null);
  }, [serviceId]);

  const handleCopyCode = () => {
    if (navigator.clipboard && service.consoleCode) {
      navigator.clipboard.writeText(service.consoleCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {/* ── 1. PERMANENT CYBER-DARK HERO BANNER ─────────────────── */}
      <section className="hero-banner-permanent-dark relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-[#1a2656] bg-[#05081A]">
        {/* Background Cybernetic Lattice */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c2ff08_1px,transparent_1px),linear-gradient(to_bottom,#00c2ff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-blue)]/12 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Action Triggers (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Breadcrumb & Domain Indicator */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-mono">
                <ServiceIcon className="w-4 h-4 shrink-0" />
                <button 
                  onClick={() => navigate('services')} 
                  className="hover:underline cursor-pointer opacity-80"
                >
                  SERVICES
                </button>
                <span>/</span>
                <span className="font-bold tracking-wider uppercase">{service.heroTag}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                {service.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
                {service.heroDesc}
              </p>

              {/* Trust Badges Strip */}
              {service.trustBadges && service.trustBadges.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {service.trustBadges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-mono flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#00C2FF]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-[var(--accent-blue)] hover:brightness-110 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(0,194,255,0.4)] transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={companyInfo.socials.phone}
                  className="px-5 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono font-semibold text-xs tracking-wide transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>{companyInfo.phone}</span>
                </a>
              </div>

              {/* Live Telemetry Ticker */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-bold">Noida Sector 62 NOC Live</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                  <span>SLA 99.99% Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ISO 27001 / OWASP Certified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Architecture Config Console (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#1a2656] bg-[#070D28]/95 shadow-2xl overflow-hidden backdrop-blur-md">
                {/* Console Window Header */}
                <div className="px-4 py-3 border-b border-[#1a2656] bg-[#05081A] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                      <span>{service.consoleTab || 'ServiceArchitecture.ts'}</span>
                    </span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg border border-white/10 hover:border-[var(--accent-blue)] text-slate-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
                    title="Copy configuration snippet"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="text-[10px] font-mono">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs overflow-x-auto text-left leading-relaxed max-h-72">
                  <pre className="text-slate-300 font-mono">
                    <code>{service.consoleCode}</code>
                  </pre>
                </div>

                {/* Console Footer */}
                <div className="px-4 py-2.5 bg-[#05081A]/90 border-t border-[#1a2656] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {service.consoleStat || '● Production Active'}
                  </span>
                  <span>RELEASE 2026.4</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. CYBER DARK METRICS STRIP ─────────────────────────── */}
      <section className="bg-[#0A0F2E] border-b border-[#1a2656] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className={`pt-4 lg:pt-0 ${idx > 0 ? 'lg:pl-6' : ''} text-center lg:text-left`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-[#00C2FF] tracking-tight">
                  {metric.val}
                </div>
                <div className="text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-wider mt-1.5">
                  {metric.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PORCELAIN LIGHT SECTION: OVERVIEW & INTRO SPLIT WITH IMAGE SCOPING CARD ─────── */}
      <section className="section-light py-20 sm:py-24 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left 7 cols: Authentic Scraped Intro & Capability Tags */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                ENTERPRISE ARCHITECTURE OVERVIEW
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                {service.introSplitHeading}
              </h2>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {service.introSplitDesc}
              </p>

              {/* Capability Focus Tags */}
              {service.introTags && service.introTags.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Technical Competencies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.introTags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-mono font-medium shadow-sm hover:border-sky-500 hover:text-sky-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 cols: Architecture Scoping Card WITH HIGH-TECH IMAGE BANNER */}
            <div className="lg:col-span-5">
              <div className="group rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                
                {/* Visual Engineering Banner */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 border-b border-slate-200">
                  <img 
                    src={DomainImage} 
                    alt={service.heroTitle} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-[#00C2FF] font-mono text-[11px] font-bold shadow">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SECTOR 62 NOIDA NOC</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                    <span className="text-slate-300 font-semibold">{service.heroTag}</span>
                    <span className="text-emerald-400 font-bold">24-48H DISPATCH</span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      Rapid Architecture Scoping
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our technical leads review requirements, assess existing code/cloud infrastructure, and deliver a production roadmap.
                    </p>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm font-sans text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>24–48 Hour Architecture Assessment</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Direct Access to Principal Solution Architects</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>OWASP Compliance &amp; Security Pentest Included</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Zero Vendor Lock-in / Transparent Git Handover</span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <button
                      onClick={() => navigate('contact')}
                      className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Request Engineering Scoping</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. PORCELAIN LIGHT SECTION: 6 CORE CAPABILITIES ─────────── */}
      <section className="section-light py-20 sm:py-24 bg-white text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
              CORE DOMAIN CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              {service.capHeading}
            </h2>
            {service.capDesc && (
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {service.capDesc}
              </p>
            )}
          </div>

          {/* 6 Capabilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.map((cap, idx) => (
              <div 
                key={idx}
                onClick={() => navigate(cap.link || 'contact')}
                className="group p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white text-sky-600 flex items-center justify-center font-bold text-base font-mono border border-slate-200 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      0{idx + 1}
                    </div>
                    {cap.tag && (
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200">
                        {cap.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono font-bold text-sky-600 group-hover:text-sky-700 group-hover:translate-x-1 transition-all">
                  <span className="group-hover:underline">DEPLOYMENT READY</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. STRATEGIC HIGHLIGHT BANNER (CONTRAST BREAK: CYBER NEON WITH AMBIENT IMAGE) ── */}
      <section className="py-20 bg-gradient-to-r from-[#05081A] via-[#0A1640] to-[#05081A] text-white border-b border-[#1a2656] relative overflow-hidden">
        {/* Ambient Engineering Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none" 
          style={{ backgroundImage: `url(${DomainImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c2ff05_1px,transparent_1px),linear-gradient(to_bottom,#00c2ff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] font-mono text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>MEASURABLE BUSINESS OUTCOMES</span>
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white max-w-3xl mx-auto font-display">
            {service.highlightTitle}
          </h3>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {service.highlightDesc}
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate('contact')}
              className="px-6 py-3 rounded-xl bg-[var(--accent-blue)] hover:brightness-110 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,194,255,0.35)]"
            >
              <span>Verify Your Potential ROI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. PORCELAIN LIGHT SECTION: 4-5 STAGE LIFECYCLE ───────── */}
      <section className="section-light py-20 sm:py-24 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
              SYSTEMATIC DELIVERY FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              {service.processHeading}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured milestone delivery with full code audits, security validation, and dedicated NOC monitoring.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${service.processStages.length >= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-6 text-left`}>
            {service.processStages.map((stage, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="text-3xl font-extrabold font-mono text-sky-600/30 mb-3">
                    {stage.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>PHASE GATE VERIFIED</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. PERMANENT CYBER-DARK SECTION: INDUSTRY MATRIX / PLATFORMS WITH VISUAL IMAGE CARDS ── */}
      <section className="py-20 sm:py-24 bg-[#05081A] text-white border-b border-[#1a2656]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00C2FF] px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30">
              DOMAIN DEPLOYMENT MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              {service.darkSectionHeading}
            </h2>
            {service.darkSectionDesc && (
              <p className="text-slate-300 text-sm sm:text-base">
                {service.darkSectionDesc}
              </p>
            )}
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 ${service.darkSectionCards.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6 text-left`}>
            {service.darkSectionCards.map((card, idx) => {
              const cardImage = getMatrixCardImage(card.title, service.slug);
              return (
                <div 
                  key={idx}
                  className="group rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--accent-blue)] transition-all hover:bg-white/8 flex flex-col justify-between overflow-hidden"
                >
                  {/* Contextual Photography Banner */}
                  <div className="relative h-36 overflow-hidden bg-slate-900 border-b border-white/10">
                    <img 
                      src={cardImage} 
                      alt={card.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      
                    />
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#070D28] to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/15 text-[#00C2FF] font-mono text-[9px] font-bold">
                      ACTIVE DOMAIN
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <Sparkles className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
                        <h3 className="text-base font-bold text-white font-mono">{card.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    {card.tags && card.tags.length > 0 && (
                      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                        {card.tags.map((t, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#00C2FF] border border-[#00C2FF]/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 8. DEEP DIVE: FEATURED PROJECTS WITH REAL WEBSITE SCREENSHOTS (WHEN PRESENT) ── */}
      {service.featuredProjects && service.featuredProjects.length > 0 && (
        <section className="section-light py-20 bg-white text-[#0F172A] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                PROVEN DEPLOYMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Featured Case Studies &amp; Engineering Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {service.featuredProjects.map((proj, idx) => {
                const projectScreenshot = projectImageMap[proj.domain] || projectImageMap[proj.title] || modernWebImg;
                return (
                  <div key={idx} className="group rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    
                    {/* Live Website Mockup Preview */}
                    <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                      <img 
                        src={projectScreenshot} 
                        alt={proj.title || proj.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                        
                      />
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/95 backdrop-blur-md border border-slate-200 text-sky-700 font-mono text-[10px] font-bold shadow-xs">
                        {proj.cat || 'Production'}
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-700">
                          CASE STUDY 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 mt-2 mb-1">
                          {proj.title || proj.name}
                        </h3>
                        {proj.domain && (
                          <div className="text-xs font-mono text-sky-600 font-semibold mb-3">
                            {proj.domain}
                          </div>
                        )}
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {proj.desc}
                        </p>
                      </div>

                      {proj.link && (
                        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                          <a 
                            href={proj.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs font-mono font-bold text-sky-600 hover:underline flex items-center gap-1.5"
                          >
                            <span>Visit Live Project</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Grid (If present) */}
      {service.techStack && service.techStack.length > 0 && (
        <section className="py-16 bg-[#070D28] text-white border-b border-[#1a2656]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-mono text-[#00C2FF] uppercase tracking-wider">PRODUCTION ECOSYSTEM</span>
              <h3 className="text-2xl font-bold text-white">Verified Tech Stack</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {service.techStack.map((tech, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-mono text-sm font-bold text-white">{tech.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 9. PORCELAIN LIGHT SECTION: WHY TECHPROS & CLIENT QUOTE ── */}
      <section className="section-light py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left 7 cols: 5 Bullet Points */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                THE TECHPROS ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                {service.whyUsHeading}
              </h2>
              {service.whyUsDesc && (
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.whyUsDesc}
                </p>
              )}

              <ul className="space-y-4 pt-2">
                {service.whyUsPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right 5 cols: Verified Client Quote Card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
                <div className="text-4xl font-serif text-sky-600/40 mb-3">&ldquo;</div>
                <p className="text-slate-800 italic text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {service.testimonialQuote}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {service.testimonialAuthor}
                    </h4>
                    <p className="text-xs text-slate-500 font-mono">
                      TechPros Enterprise Client
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                    VERIFIED CLIENT
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion (when available, e.g. web-dev) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-light py-20 bg-white text-[#0F172A] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="text-center mb-12 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                ENGINEERING CLARITY
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 font-display">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 overflow-hidden bg-[#F8FAFC]">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 10. PERMANENT CYBER-DARK SECTION: RELATED SERVICES (WITH THUMBNAILS) & NOC DESK ── */}
      <section className="py-20 bg-[#05081A] text-white border-t border-[#1a2656]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Related Services Navigator */}
          <div className="text-left space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[var(--accent-blue)] uppercase tracking-wider">EXPAND YOUR ARCHITECTURE</span>
                <h3 className="text-2xl font-bold text-white">Related Engineering Services</h3>
              </div>
              <button
                onClick={() => navigate('services')}
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-white hover:underline cursor-pointer"
              >
                <span>View All 10 Domains</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {service.relatedServices.map((relItem, relIdx) => {
                const relSlug = typeof relItem === 'string' ? relItem : relItem.slug;
                const rel = exactLiveServicesData[relSlug];
                if (!rel) return null;
                const RelIcon = iconMap[rel.slug] || Code2;
                const RelThumb = serviceImageMap[rel.slug] || modernWebImg;

                return (
                  <button
                    key={relIdx}
                    onClick={() => navigate(rel.slug)}
                    className="related-service-tab group rounded-2xl border border-white/10 bg-[#070e28] hover:border-[var(--accent-blue)] hover:bg-[#0c1438] transition-all text-left cursor-pointer overflow-hidden flex flex-col justify-between !text-white"
                  >
                    {/* Related Domain Image Header */}
                    <div className="relative h-28 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                      <img 
                        src={RelThumb} 
                        alt={rel.heroTitle} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                        
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D28] via-[#070D28]/50 to-transparent" />
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/15 !text-white font-mono text-[9px] font-bold">
                        EXPLORE
                      </div>
                      <div className="absolute bottom-2 left-3">
                        <RelIcon className="w-4 h-4 !text-white" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold !text-white transition-colors line-clamp-1">
                            {rel.heroTitle}
                          </h4>
                          <ArrowRight className="w-4 h-4 !text-white group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                        </div>
                        <p className="text-xs !text-white line-clamp-2 leading-relaxed">
                          {rel.heroDesc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Direct Noida NOC Discovery Call Card WITH SECTOR 62 HUB PHOTO */}
          <div className="relative rounded-3xl border border-[#1a2656] bg-gradient-to-br from-[#070D28] to-[#05081A] shadow-2xl overflow-hidden">
            {/* Ambient Campus Photo Glow */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-10 pointer-events-none hidden lg:block"
              style={{ backgroundImage: `url(${campusImg})` }}
            />
            
            <div className="relative p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] font-mono text-xs">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>SECTOR 62 NOIDA NOC HEADQUARTERS</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Ready to Engineer Your {service.heroTitle.split(',')[0].split('&')[0]} Platform?
                </h3>
                <p className="text-sm text-slate-300">
                  Connect directly with our solutions architects to review your technical architecture, security parameters, and project schedule.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <a
                  href={companyInfo.socials.phone}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>{companyInfo.phone}</span>
                </a>

                <button
                  onClick={() => navigate('contact')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--accent-blue)] hover:brightness-110 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,194,255,0.4)] cursor-pointer"
                >
                  <span>Book Free Architecture Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
