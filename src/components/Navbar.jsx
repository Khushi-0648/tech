import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  Menu, X, ChevronDown, Phone, Shield, ArrowRight, 
  Code2, Cpu, BarChart3, Cloud, Compass, ShieldCheck, 
  Database, Layers, Bot, Network, Sparkles, ExternalLink,
  Terminal, Zap, Activity, Globe, Building2, Laptop, Mail,
  ChevronRight, Home
} from 'lucide-react';
import { companyInfo, servicesData } from '../data/siteData';
import TechProsLogo from './TechProsLogo';

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

export default function Navbar({ currentRoute, navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const headerRef = useRef(null);

  // Close services option bar when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
      }
    };
    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNav = (route) => {
    navigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleServices = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setServicesDropdownOpen((prev) => !prev);
  };

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 250);
  };

  // Structured Categorized Pillars for the 10 Production Services
  const servicePillars = [
    {
      id: 'software-web',
      title: 'Software & Web Systems',
      tag: '3 Domains',
      icon: Code2,
      services: [
        {
          id: 'web-development',
          slug: 'web-development',
          title: 'Web Development & Scalable Apps',
          tag: 'React 19 / Next.js',
          shortDesc: 'Sub-second LCP, headless CMS, technical SEO & high concurrency',
          icon: Code2
        },
        {
          id: 'enterprise-solutions',
          slug: 'enterprise-solutions',
          title: 'Enterprise Solutions (ERP & CRM)',
          tag: 'ERP / Salesforce',
          shortDesc: 'Custom ERP engineering, CRM sync & enterprise API microservices',
          icon: Layers
        },
        {
          id: 'industrial-autonomy',
          slug: 'industrial-autonomy-and-engineering',
          title: 'Industrial Autonomy & Robotics',
          tag: 'IoT / SCADA',
          shortDesc: 'Shop-floor telemetry, MQTT edge gateways & digital twins',
          icon: Bot
        }
      ]
    },
    {
      id: 'cloud-infra',
      title: 'Cloud, Networks & Ops',
      tag: '3 Domains',
      icon: Cloud,
      services: [
        {
          id: 'cloud-infrastructure',
          slug: 'cloud-infrastructure',
          title: 'Cloud Infrastructure & DevOps',
          tag: 'AWS / Azure / K8s',
          shortDesc: 'Multi-cloud migrations, automated GitOps CI/CD & 99.99% SLA',
          icon: Cloud
        },
        {
          id: 'network-solutions',
          slug: 'network-solutions-and-services',
          title: 'Network Solutions & SD-WAN',
          tag: 'SD-WAN / VPN',
          shortDesc: 'Zero-loss routing, enterprise VPNs & 24/7 managed connectivity',
          icon: Network
        },
        {
          id: 'consulting-operations',
          slug: 'consulting-operations',
          title: 'Consulting & Operations',
          tag: 'Strategy & ROI',
          shortDesc: 'Tech stack audits, modernization roadmaps & vendor management',
          icon: Compass
        }
      ]
    },
    {
      id: 'ai-security',
      title: 'AI, Data & Defense',
      tag: '4 Domains',
      icon: ShieldCheck,
      services: [
        {
          id: 'cybersecurity',
          slug: 'cybersecurity',
          title: 'Cybersecurity & Pentesting',
          tag: 'Zero-Trust / SOC',
          shortDesc: 'Bank-grade continuous pentests, OWASP Top 10 & ISO 27001 audits',
          icon: ShieldCheck
        },
        {
          id: 'ai-automation',
          slug: 'artificial-intelligence-and-automation',
          title: 'Artificial Intelligence & Agents',
          tag: 'LLMs / PyTorch',
          shortDesc: 'Autonomous agent architectures, RAG pipelines & bot automation',
          icon: Cpu
        },
        {
          id: 'business-analytics',
          slug: 'business-analytics',
          title: 'Business Analytics & BI',
          tag: 'Power BI / BigQuery',
          shortDesc: 'Executive C-Suite KPI dashboards & predictive revenue forecasting',
          icon: BarChart3
        },
        {
          id: 'data-analytics',
          slug: 'data-analytics',
          title: 'Big Data & Data Analytics',
          tag: 'Kafka / dbt',
          shortDesc: 'Terabyte streaming pipelines, cloud data lakes & vector DBs',
          icon: Database
        }
      ]
    }
  ];

  return (
    <>
      {/* Executive Command Header Bar - Permanently Dark */}
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-[#1a2656] header-permanent-dark"
        style={{
          backgroundColor: scrolled || servicesDropdownOpen ? 'rgba(5, 8, 26, 0.98)' : 'rgba(7, 12, 34, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled || servicesDropdownOpen
            ? '0 16px 40px rgba(0,0,0,0.75), 0 1px 0 rgba(0,194,255,0.25)' 
            : '0 6px 28px rgba(0,0,0,0.5), 0 1px 0 rgba(0,194,255,0.15)'
        }}
      >
        {/* Luminous Top Cyber Accent Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent opacity-85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 sm:gap-6">

          {/* 1. Left: LARGE Official TechPros Logo Standalone (Dark Mode Shield) */}
          <div className="flex items-center shrink-0">
            <button 
              onClick={() => handleNav('home')} 
              className="relative group p-1 transition-transform duration-300 active:scale-95 cursor-pointer flex items-center justify-center focus:outline-none"
              aria-label="TechPros Home"
              title="TechPros"
            >
              <TechProsLogo 
                variant="mark"
                themeOverride="dark"
                className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              />
            </button>
          </div>

          {/* 2. Center: Clean, Spacious Navigation Deck in exact requested hierarchy */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 shrink-0">
            
            {/* 0. Home */}
            <button
              onClick={() => handleNav('home')}
              className={`text-sm font-medium tracking-wide transition-all cursor-pointer py-1.5 relative ${
                currentRoute === 'home'
                  ? 'text-[var(--accent-blue)] font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent-blue)] after:rounded-full after:shadow-[0_0_8px_rgba(0,194,255,0.8)]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Home
            </button>

            {/* 1. About Us */}
            <button
              onClick={() => handleNav('about')}
              className={`text-sm font-medium tracking-wide transition-all cursor-pointer py-1.5 relative ${
                currentRoute === 'about'
                  ? 'text-[var(--accent-blue)] font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent-blue)] after:rounded-full after:shadow-[0_0_8px_rgba(0,194,255,0.8)]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              About Us
            </button>

            {/* 2. Services Link & Options Trigger */}
            <button
              onClick={() => handleNav('services')}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-label="Services Page and Options"
              className={`text-sm font-medium tracking-wide transition-all flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-xl relative ${
                servicesDropdownOpen
                  ? 'text-[var(--accent-blue)] bg-[var(--accent-blue)]/15 font-semibold ring-1 ring-[var(--accent-blue)]/40 shadow-[0_0_15px_rgba(0,194,255,0.25)]'
                  : currentRoute === 'services'
                  ? 'text-[var(--accent-blue)] font-semibold after:absolute after:-bottom-1.5 after:left-3 after:right-3 after:h-0.5 after:bg-[var(--accent-blue)] after:rounded-full after:shadow-[0_0_8px_rgba(0,194,255,0.8)]'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Services</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] font-bold">
                10
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[var(--accent-blue)]' : 'text-slate-300'}`} />
            </button>

            {/* 3. Projects */}
            <button
              onClick={() => handleNav('projects')}
              className={`text-sm font-medium tracking-wide transition-all flex items-center gap-1.5 cursor-pointer py-1.5 relative ${
                currentRoute === 'projects'
                  ? 'text-[var(--accent-blue)] font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent-blue)] after:rounded-full after:shadow-[0_0_8px_rgba(0,194,255,0.8)]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              <span>Projects</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] font-bold">
                8
              </span>
            </button>

            {/* 4. Industries */}
            <button
              onClick={() => handleNav('industries')}
              className={`text-sm font-medium tracking-wide transition-all cursor-pointer py-1.5 relative ${
                currentRoute === 'industries'
                  ? 'text-[var(--accent-blue)] font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent-blue)] after:rounded-full after:shadow-[0_0_8px_rgba(0,194,255,0.8)]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Industries
            </button>

            {/* 5. Softwares */}
            <button
              onClick={() => handleNav('softwares')}
              className={`text-sm font-medium tracking-wide transition-all cursor-pointer py-1.5 relative ${
                currentRoute === 'softwares'
                  ? 'text-[var(--accent-blue)] font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent-blue)] after:rounded-full after:shadow-[0_0_8px_rgba(0,194,255,0.8)]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Softwares
            </button>

            {/* 6. Contact */}
            <button
              onClick={() => handleNav('contact')}
              className={`text-sm font-medium tracking-wide transition-all cursor-pointer py-1.5 relative ${
                currentRoute === 'contact'
                  ? 'text-[var(--accent-blue)] font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent-blue)] after:rounded-full after:shadow-[0_0_8px_rgba(0,194,255,0.8)]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* 3. Right: Action Deck (Contact Number, Start Button, & Theme Switcher) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Sector 62 NOC Hotline Pill (Contact Number) */}
            <a
              href={companyInfo.socials.phone}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-white border border-[var(--border-color)] bg-[var(--btn-bg)] hover:border-[var(--accent-blue)]/60 hover:text-white transition-all shadow-xs group shrink-0"
              title="Direct Sector 62 NOC Hotline: +91 88514 22486"
            >
              <Phone className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform shrink-0" />
              <span>+91 88514 22486</span>
            </a>

            {/* Primary Start Button */}
            <button
              onClick={() => handleNav('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_18px_rgba(0,194,255,0.4)] hover:shadow-[0_6px_25px_rgba(0,194,255,0.55)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl border border-[var(--border-color)] text-[var(--accent-blue)] bg-[var(--btn-bg)] hover:border-[var(--accent-blue)] transition-all cursor-pointer flex items-center justify-center xl:hidden shrink-0 active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* 3. High-End Panoramic Services Option Bar */}
        {servicesDropdownOpen && (
          <div 
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
            className="w-full border-t border-[var(--header-border)] bg-[var(--header-bg)] backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7),0_10px_35px_rgba(0,194,255,0.15)] animate-in fade-in slide-in-from-top-2 duration-200"
            style={{
              backgroundColor: 'var(--header-bg)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)'
            }}
          >
            {/* Top Luminous Cyan Accent Hairline */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent-blue)]/60 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              
              {/* Option Bar Control Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[var(--accent-blue)]/15 border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[var(--accent-blue)]" />
                    <span>Enterprise Services Directory</span>
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] hidden md:inline">
                    10 Production-Grade Engineering Domains &bull; Sector 62 Delivery Hub
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => handleNav('services')}
                    className="text-xs font-mono font-bold text-white bg-[var(--accent-blue)] hover:brightness-110 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,194,255,0.3)] active:scale-95 shrink-0"
                  >
                    <span>All 10 Domains Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setServicesDropdownOpen(false)}
                    className="w-8 h-8 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] bg-[var(--btn-bg)] flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Close services options"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 4-Column Option Bar Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Pillar 1: Software & Web Systems */}
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)] flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-color)]">
                    <div className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Software & Web</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] font-bold">
                      3 Domains
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {servicePillars[0].services.map((svc) => {
                      const SvcIcon = svc.icon;
                      return (
                        <div
                          key={svc.id}
                          onClick={() => handleNav(svc.slug || svc.id)}
                          className="group/item p-2.5 rounded-xl border border-transparent hover:border-[var(--accent-blue)]/35 hover:bg-[var(--btn-bg)]/80 transition-all cursor-pointer flex items-start gap-3"
                        >
                          <div className="p-2 rounded-lg bg-[var(--btn-bg)] border border-[var(--border-color)] text-[var(--accent-blue)] group-hover/item:bg-[var(--accent-blue)] group-hover/item:text-white group-hover/item:border-[var(--accent-blue)] group-hover/item:scale-105 transition-all shrink-0 mt-0.5 shadow-xs">
                            <SvcIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h5 className="text-xs font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--accent-blue)] transition-colors truncate">
                                {svc.title}
                              </h5>
                            </div>
                            <span className="inline-block text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border border-[var(--accent-blue)]/20 my-0.5">
                              {svc.tag}
                            </span>
                            <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 group-hover/item:text-[var(--text-primary)] transition-colors">
                              {svc.shortDesc}
                            </p>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 self-center" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pillar 2: Cloud, Networks & Infrastructure */}
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#38d6ff] flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-color)]">
                    <div className="flex items-center gap-1.5">
                      <Cloud className="w-3.5 h-3.5" />
                      <span>Cloud & Networks</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#38d6ff]/10 text-[#38d6ff] font-bold">
                      3 Domains
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {servicePillars[1].services.map((svc) => {
                      const SvcIcon = svc.icon;
                      return (
                        <div
                          key={svc.id}
                          onClick={() => handleNav(svc.slug || svc.id)}
                          className="group/item p-2.5 rounded-xl border border-transparent hover:border-[var(--accent-blue)]/35 hover:bg-[var(--btn-bg)]/80 transition-all cursor-pointer flex items-start gap-3"
                        >
                          <div className="p-2 rounded-lg bg-[var(--btn-bg)] border border-[var(--border-color)] text-[#38d6ff] group-hover/item:bg-[var(--accent-blue)] group-hover/item:text-white group-hover/item:border-[var(--accent-blue)] group-hover/item:scale-105 transition-all shrink-0 mt-0.5 shadow-xs">
                            <SvcIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h5 className="text-xs font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--accent-blue)] transition-colors truncate">
                                {svc.title}
                              </h5>
                            </div>
                            <span className="inline-block text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#38d6ff]/10 text-[#38d6ff] border border-[#38d6ff]/20 my-0.5">
                              {svc.tag}
                            </span>
                            <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 group-hover/item:text-[var(--text-primary)] transition-colors">
                              {svc.shortDesc}
                            </p>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 self-center" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pillar 3: AI, Data & Defense */}
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)] flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-color)]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>AI, Data & Defense</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] font-bold">
                      4 Domains
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {servicePillars[2].services.map((svc) => {
                      const SvcIcon = svc.icon;
                      return (
                        <div
                          key={svc.id}
                          onClick={() => handleNav(svc.slug || svc.id)}
                          className="group/item p-2.5 rounded-xl border border-transparent hover:border-[var(--accent-blue)]/35 hover:bg-[var(--btn-bg)]/80 transition-all cursor-pointer flex items-start gap-3"
                        >
                          <div className="p-2 rounded-lg bg-[var(--btn-bg)] border border-[var(--border-color)] text-[var(--accent-blue)] group-hover/item:bg-[var(--accent-blue)] group-hover/item:text-white group-hover/item:border-[var(--accent-blue)] group-hover/item:scale-105 transition-all shrink-0 mt-0.5 shadow-xs">
                            <SvcIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h5 className="text-xs font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--accent-blue)] transition-colors truncate">
                                {svc.title}
                              </h5>
                            </div>
                            <span className="inline-block text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border border-[var(--accent-blue)]/20 my-0.5">
                              {svc.tag}
                            </span>
                            <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 group-hover/item:text-[var(--text-primary)] transition-colors">
                              {svc.shortDesc}
                            </p>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 self-center" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pillar 4: Executive Command Hub & Dispatch */}
                <div className="flex flex-col">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-1.5 pb-2 mb-3 border-b border-[var(--border-color)]">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>NOC Dispatch Hub</span>
                  </div>
                  
                  <div className="flex-1 rounded-2xl bg-[var(--bg-panel)] border border-[var(--accent-blue)]/30 p-4.5 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--accent-blue)]/10 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8" />
                    
                    <div>
                      {/* Live indicator badge */}
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          Sector 62 NOC Live
                        </span>
                      </div>

                      <h4 className="text-sm font-display font-bold text-[var(--text-primary)] mt-2 leading-snug">
                        24/7 Global IT Support & Architecture
                      </h4>
                      <p className="text-[11px] text-[var(--text-secondary)] mt-1 leading-relaxed">
                        Sector 62, Noida. Senior system engineers standby for zero-downtime deployment.
                      </p>

                      {/* SLA metrics strip */}
                      <div className="mt-3 p-2.5 rounded-xl bg-[var(--bg-main)]/70 border border-[var(--border-color)] flex items-center justify-between text-[10px] font-mono">
                        <div>
                          <div className="text-[var(--text-secondary)]">Incident SLA</div>
                          <div className="font-bold text-emerald-400">&lt; 15 Mins</div>
                        </div>
                        <div className="h-6 w-[1px] bg-[var(--border-color)]" />
                        <div>
                          <div className="text-[var(--text-secondary)]">Uptime SLA</div>
                          <div className="font-bold text-[var(--accent-blue)]">99.99%</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Hotlines */}
                    <div className="mt-4 space-y-2">
                      <a
                        href={companyInfo.socials.phone}
                        className="w-full py-2 px-3 rounded-xl bg-[var(--btn-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-primary)] hover:text-[var(--accent-blue)] text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
                      >
                        <Phone className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                        <span>+91 88514 22486</span>
                      </a>
                      <button
                        onClick={() => handleNav('contact')}
                        className="w-full py-2 px-3 rounded-xl bg-[var(--accent-blue)] hover:brightness-110 text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-[0_2px_12px_rgba(0,194,255,0.35)] active:scale-95"
                      >
                        <span>Schedule Architecture Discovery</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>

              </div>

              {/* Bottom Option Bar Telemetry Strip */}
              <div className="mt-5 pt-3.5 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0" />
                  <span>ISO 27001 & OWASP Compliant &bull; 500+ Platforms Delivered across 18 Countries</span>
                </div>
                <button
                  onClick={() => handleNav('projects')}
                  className="text-[var(--accent-blue)] hover:underline font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Explore Enterprise Projects & Case Studies &rarr;</span>
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* 4. High-Fidelity Executive Mobile Drawer rendered via Portal */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-2xl p-4 sm:p-6 flex flex-col justify-center xl:hidden animate-in fade-in duration-200">
          <div className="w-full max-w-lg mx-auto rounded-3xl border border-[var(--border-color)] bg-[var(--bg-panel)] shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-5 sm:p-6 flex flex-col max-h-[92vh] overflow-hidden">
            
            {/* Mobile Header Bar: Large Logo Only + Theme Switcher + Close (Zero Cramp, No NOC text) */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)] shrink-0">
              <div className="flex items-center shrink-0">
                <button 
                  onClick={() => handleNav('home')} 
                  className="focus:outline-none cursor-pointer flex items-center group"
                  aria-label="TechPros Home"
                >
                  <TechProsLogo className="h-13 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform" />
                </button>
              </div>

              {/* Right Mobile Drawer Controls */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-blue)] bg-[var(--btn-bg)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Mobile Navigation Links (Spacious Rows matching exact requested hierarchy) */}
            <div className="flex-1 overflow-y-auto overscroll-contain py-1 pr-1 space-y-2 no-scrollbar">
              
              {/* 0. Home */}
              <button
                onClick={() => handleNav('home')}
                className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  currentRoute === 'home'
                    ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)]/50 text-[var(--accent-blue)] font-bold'
                    : 'bg-[var(--bg-panel-subtle)] border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--btn-bg)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Home className="w-4.5 h-4.5 text-[var(--accent-blue)] shrink-0" />
                  <span className="text-sm font-medium">Home</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-secondary)]" />
              </button>

              {/* 1. About Us */}
              <button
                onClick={() => handleNav('about')}
                className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  currentRoute === 'about'
                    ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)]/50 text-[var(--accent-blue)] font-bold'
                    : 'bg-[var(--bg-panel-subtle)] border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--btn-bg)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-4.5 h-4.5 text-[var(--accent-blue)] shrink-0" />
                  <span className="text-sm font-medium">About Us</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-secondary)]" />
              </button>

              {/* 2. Services Accordion Panel with Categorized Option Deck */}
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-panel-subtle)] overflow-hidden">
                <div className="w-full flex items-center justify-between p-3.5">
                  <button
                    onClick={() => handleNav('services')}
                    className="flex items-center gap-3 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-blue)] cursor-pointer transition-colors flex-1 text-left"
                  >
                    <Code2 className="w-4.5 h-4.5 text-[var(--accent-blue)]" />
                    <span>Services</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] font-bold">10</span>
                  </button>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1.5 text-[var(--accent-blue)] hover:bg-[var(--btn-bg)] rounded-lg cursor-pointer transition-colors"
                    aria-label="Toggle services list"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 pt-1 border-t border-[var(--border-color)] bg-[var(--bg-main)]/50 space-y-2 max-h-64 overflow-y-auto no-scrollbar">
                    <button
                      onClick={() => handleNav('services')}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs font-mono font-bold text-[var(--accent-blue)] hover:bg-[var(--btn-bg)] flex items-center justify-between cursor-pointer border border-[var(--accent-blue)]/20"
                    >
                      <span>Explore All 10 Domains Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {servicePillars.map((pillar) => (
                      <div key={pillar.id} className="pt-1.5 first:pt-0">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-blue)] px-1 mb-1">
                          {pillar.title}
                        </div>
                        <div className="space-y-1">
                          {pillar.services.map((svc) => {
                            const SvcIcon = svc.icon;
                            return (
                              <button
                                key={svc.id}
                                onClick={() => handleNav(svc.slug || svc.id)}
                                className="w-full text-left p-2 rounded-lg text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--btn-bg)] flex items-center justify-between gap-2 cursor-pointer transition-colors"
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <SvcIcon className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0" />
                                  <span className="truncate">{svc.title}</span>
                                </div>
                                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] shrink-0">
                                  {svc.tag}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Projects */}
              <button
                onClick={() => handleNav('projects')}
                className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  currentRoute === 'projects'
                    ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)]/50 text-[var(--accent-blue)] font-bold'
                    : 'bg-[var(--bg-panel-subtle)] border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--btn-bg)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4.5 h-4.5 text-[var(--accent-blue)] shrink-0" />
                  <span className="text-sm font-medium">Projects</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] font-bold">8 Live</span>
              </button>

              {/* 4. Industries */}
              <button
                onClick={() => handleNav('industries')}
                className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  currentRoute === 'industries'
                    ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)]/50 text-[var(--accent-blue)] font-bold'
                    : 'bg-[var(--bg-panel-subtle)] border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--btn-bg)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Compass className="w-4.5 h-4.5 text-[var(--accent-blue)] shrink-0" />
                  <span className="text-sm font-medium">Industries</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-secondary)]" />
              </button>

              {/* 5. Softwares */}
              <button
                onClick={() => handleNav('softwares')}
                className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  currentRoute === 'softwares'
                    ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)]/50 text-[var(--accent-blue)] font-bold'
                    : 'bg-[var(--bg-panel-subtle)] border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--btn-bg)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Laptop className="w-4.5 h-4.5 text-[var(--accent-blue)] shrink-0" />
                  <span className="text-sm font-medium">Softwares</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-secondary)]" />
              </button>

              {/* 6. Contact */}
              <button
                onClick={() => handleNav('contact')}
                className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  currentRoute === 'contact'
                    ? 'bg-[var(--accent-blue)]/15 border-[var(--accent-blue)]/50 text-[var(--accent-blue)] font-bold'
                    : 'bg-[var(--bg-panel-subtle)] border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--btn-bg)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4.5 h-4.5 text-[var(--accent-blue)] shrink-0" />
                  <span className="text-sm font-medium">Contact</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-secondary)]" />
              </button>

            </div>

            {/* Mobile Footer Hotlines & Primary CTA */}
            <div className="pt-3.5 border-t border-[var(--border-color)] space-y-2 mt-auto shrink-0">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={companyInfo.socials.phone}
                  className="py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-white border border-[var(--accent-blue)]/30 bg-[var(--btn-bg)] hover:brightness-110 flex items-center justify-center gap-1.5 transition-colors min-w-0"
                >
                  <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="truncate">+91 88514 22486</span>
                </a>
                <a
                  href={companyInfo.socials.email}
                  className="py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-white border border-[var(--border-color)] bg-[var(--btn-bg)] hover:text-white flex items-center justify-center gap-1.5 transition-colors min-w-0"
                >
                  <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="truncate">Email NOC</span>
                </a>
              </div>

              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.35)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
}
