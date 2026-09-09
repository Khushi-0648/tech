import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Phone, Mail, 
  Sparkles, ShieldCheck, Download, ExternalLink, Cpu, 
  Code2, BarChart3, Cloud, Compass, Database, Layers, Bot, Network,
  Send, User, Building, MessageSquare, Check,
  Server, Zap, Globe, Box, Terminal, Lock, MapPin, Award, Users2, Activity,
  Maximize2, Eye, Shield, Laptop, RefreshCw, Play, Pause
} from 'lucide-react';
import HeroEditorialStagger from '../components/HeroEditorialStagger';
import { 
  servicesData, portfolioProjects, industriesData, 
  softwaresData, corePillars, clientTestimonials, 
  faqList, companyInfo, enterprisePartners, certificationsList 
} from '../data/siteData';
import { campusImg, fintechImg, healthtechImg, dashboardImg } from '../assets/images';
import { 
  sanitizeInput, 
  validateEmail, 
  checkRateLimit, 
  verifyHoneypot, 
  logSecurityEvent 
} from '../utils/security';

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

export default function HomePage({ navigate }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [homeFormError, setHomeFormError] = useState('');
  const [homeHoneypot, setHomeHoneypot] = useState('');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(portfolioProjects[0].id);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: 'Web Development & Engineering',
    message: ''
  });

  const selectedCaseStudy = portfolioProjects.find(p => p.id === selectedCaseStudyId) || portfolioProjects[0];
  const currentCaseIndex = portfolioProjects.findIndex(p => p.id === selectedCaseStudyId);
  const handlePrevCaseStudy = () => {
    const nextIdx = (currentCaseIndex - 1 + portfolioProjects.length) % portfolioProjects.length;
    setSelectedCaseStudyId(portfolioProjects[nextIdx].id);
  };
  const handleNextCaseStudy = () => {
    const nextIdx = (currentCaseIndex + 1) % portfolioProjects.length;
    setSelectedCaseStudyId(portfolioProjects[nextIdx].id);
  };

  const caseStudySliderRef = useRef(null);
  const [isCaseMouseDown, setIsCaseMouseDown] = useState(false);
  const caseStartX = useRef(0);
  const caseScrollLeftPos = useRef(0);
  const isCaseStudyInitialMount = useRef(true);

  // Smoothly center the active case study card in the horizontal slider (ONLY on user interaction, NEVER on initial page load)
  useEffect(() => {
    if (isCaseStudyInitialMount.current) {
      isCaseStudyInitialMount.current = false;
      return;
    }
    if (!caseStudySliderRef.current) return;
    const activeEl = caseStudySliderRef.current.querySelector(`[data-case-id="${selectedCaseStudyId}"]`);
    if (activeEl) {
      const slider = caseStudySliderRef.current;
      const cardOffset = activeEl.offsetLeft;
      const cardWidth = activeEl.offsetWidth;
      const sliderWidth = slider.offsetWidth;
      slider.scrollTo({
        left: cardOffset - (sliderWidth / 2) + (cardWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [selectedCaseStudyId]);

  const handleCaseMouseDown = (e) => {
    if (!caseStudySliderRef.current) return;
    setIsCaseMouseDown(true);
    caseStartX.current = e.pageX - caseStudySliderRef.current.offsetLeft;
    caseScrollLeftPos.current = caseStudySliderRef.current.scrollLeft;
  };

  const handleCaseMouseMove = (e) => {
    if (!isCaseMouseDown || !caseStudySliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - caseStudySliderRef.current.offsetLeft;
    const walk = (x - caseStartX.current) * 1.5;
    caseStudySliderRef.current.scrollLeft = caseScrollLeftPos.current - walk;
  };

  const handleCaseMouseUp = () => setIsCaseMouseDown(false);

  const [techCategory, setTechCategory] = useState('all');
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const techCategories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI & Security' },
  ];

  const checkSliderScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleSlide = (direction) => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.clientWidth * 0.75;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftPos.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    sliderRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleMouseUp = () => setIsMouseDown(false);

  const techStackList = [
    { 
      name: "React 19", 
      category: "frontend", 
      label: "Frontend Engine", 
      tag: "Concurrent SSR", 
      status: "Production Ready", 
      icon: Code2,
      accent: "cyan"
    },
    { 
      name: "Next.js 15", 
      category: "frontend", 
      label: "SSR & Edge Routing", 
      tag: "Turbopack / App Router", 
      status: "Edge Native", 
      icon: Globe,
      accent: "sky"
    },
    { 
      name: "Python 3.12", 
      category: "ai", 
      label: "AI, ML & Automation", 
      tag: "FastAPI / PyTorch", 
      status: "High Throughput", 
      icon: Cpu,
      accent: "emerald"
    },
    { 
      name: "PHP 8.3", 
      category: "backend", 
      label: "Enterprise Systems", 
      tag: "Laravel 11 / JIT", 
      status: "Core Platform", 
      icon: Server,
      accent: "purple"
    },
    { 
      name: "GoLang 1.23", 
      category: "backend", 
      label: "Cloud Microservices", 
      tag: "Low-Latency Concurrency", 
      status: "Sub-ms Latency", 
      icon: Zap,
      accent: "cyan"
    },
    { 
      name: "AWS Cloud", 
      category: "cloud", 
      label: "Cloud Infrastructure", 
      tag: "Multi-AZ Cloud Architecture", 
      status: "99.99% Uptime SLA", 
      icon: Cloud,
      accent: "amber"
    },
    { 
      name: "Microsoft Azure", 
      category: "cloud", 
      label: "Hybrid Cloud Operations", 
      tag: "Enterprise AD / AKS", 
      status: "SOC 2 Type II", 
      icon: Layers,
      accent: "sky"
    },
    { 
      name: "Google Cloud GCP", 
      category: "cloud", 
      label: "BigQuery & Vertex AI", 
      tag: "GKE / Anthos Hybrid", 
      status: "Auto-Scalable", 
      icon: Database,
      accent: "blue"
    },
    { 
      name: "Docker & K8s", 
      category: "devops", 
      label: "Container Orchestration", 
      tag: "Zero-Downtime Rolling Deploys", 
      status: "GitOps Native", 
      icon: Box,
      accent: "blue"
    },
    { 
      name: "PostgreSQL 16", 
      category: "backend", 
      label: "Relational Data Hub", 
      tag: "ACID Partitioned Clusters", 
      status: "Bank-Grade ACID", 
      icon: Database,
      accent: "indigo"
    },
    { 
      name: "Redis Enterprise", 
      category: "backend", 
      label: "In-Memory Caching", 
      tag: "Sub-Millisecond Read Ops", 
      status: "< 1ms Read Ops", 
      icon: Activity,
      accent: "rose"
    },
    { 
      name: "Apache Kafka", 
      category: "data", 
      label: "Event Stream Processing", 
      tag: "High-Volume Telemetry", 
      status: "1M+ Events/sec", 
      icon: Network,
      accent: "purple"
    },
    { 
      name: "Tailwind CSS v4", 
      category: "frontend", 
      label: "Modern UI Styling", 
      tag: "Rust-Based Oxide Engine", 
      status: "Lightning Fast", 
      icon: Sparkles,
      accent: "cyan"
    },
    { 
      name: "TypeScript 5.5", 
      category: "frontend", 
      label: "Static Type Safety", 
      tag: "Strict Type Inference", 
      status: "Zero Bug Policy", 
      icon: Terminal,
      accent: "blue"
    },
    { 
      name: "Swift / iOS", 
      category: "frontend", 
      label: "Mobile Native", 
      tag: "SwiftUI & Metal Acceleration", 
      status: "Apple Native", 
      icon: Bot,
      accent: "orange"
    },
    { 
      name: "Warden Pentest", 
      category: "security", 
      label: "Security & OWASP", 
      tag: "Automated Vulnerability Scan", 
      status: "ISO 27001", 
      icon: ShieldCheck,
      accent: "emerald"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setHomeFormError('');

    // 1. Anti-Bot Honeypot Defense
    if (!verifyHoneypot(homeHoneypot)) {
      logSecurityEvent('BOT_HONEYPOT_TRIGGERED', { form: 'homepage' });
      setContactSubmitted(true);
      return;
    }

    // 2. Rate Limiting Check
    const rateLimit = checkRateLimit('homepage_form', 3, 60);
    if (!rateLimit.allowed) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { form: 'homepage' });
      setHomeFormError(`Submission rate limit reached. Please wait ${rateLimit.remainingSeconds}s.`);
      return;
    }

    // 3. Email Validation
    if (!validateEmail(formData.email)) {
      logSecurityEvent('INVALID_EMAIL_REJECTED', { form: 'homepage' });
      setHomeFormError('Please provide a valid corporate email address.');
      return;
    }

    // 4. Input Sanitization
    const cleanFirstName = sanitizeInput(formData.firstName, 50);
    const cleanLastName = sanitizeInput(formData.lastName, 50);
    const cleanCompany = sanitizeInput(formData.company, 80);
    const cleanMessage = sanitizeInput(formData.message, 2000);

    if (!cleanFirstName) {
      setHomeFormError('First name is required.');
      return;
    }

    setFormData(prev => ({
      ...prev,
      firstName: cleanFirstName,
      lastName: cleanLastName,
      company: cleanCompany,
      message: cleanMessage
    }));

    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setHomeFormError('');
      setHomeHoneypot('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: 'Web Development & Engineering',
        message: ''
      });
    }, 5000);
  };

  const filteredTechStack = techCategory === 'all' 
    ? techStackList 
    : techStackList.filter(item => {
        if (techCategory === 'ai') return item.category === 'ai' || item.category === 'security';
        if (techCategory === 'cloud') return item.category === 'cloud' || item.category === 'devops';
        if (techCategory === 'backend') return item.category === 'backend' || item.category === 'data';
        return item.category === techCategory;
      });

  return (
    <div className="relative text-[var(--text-secondary)]">
      
      {/* 1. Hero Editorial Stagger & Command Center */}
      <HeroEditorialStagger navigate={navigate} />

      {/* 2. Core Technologies - 100% Light Theme Section */}
      <section className="py-16 section-theme-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shadow-xs">
                Enterprise Multi-Cloud Mesh &bull; Core Stack
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0A0F2E] tracking-tight mt-2">
                Core Technologies & System Architecture
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
                High-concurrency runtimes, distributed databases, and automated GitOps pipelines engineered for enterprise scale.
              </p>
            </div>

            {/* Filter Pills + Manual Arrows */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
                {techCategories.map((cat) => {
                  const isActive = techCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setTechCategory(cat.id);
                        setTimeout(checkSliderScroll, 50);
                      }}
                      className={`px-3.5 py-2 min-h-[44px] min-w-[44px] rounded-lg font-mono text-xs transition-all cursor-pointer flex items-center justify-center ${
                        isActive
                          ? 'bg-[#0090e7] text-white font-bold shadow-xs'
                          : 'text-slate-600 hover:text-[#0A0F2E]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Slider Prev / Next Arrows */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleSlide('left')}
                  disabled={!canScrollLeft}
                  title="Previous"
                  aria-label="Previous"
                  className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border transition-all cursor-pointer flex items-center justify-center active:scale-95 ${
                    canScrollLeft
                      ? 'bg-white border-slate-300 text-blue-600 hover:bg-slate-50 shadow-xs'
                      : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleSlide('right')}
                  disabled={!canScrollRight}
                  title="Next"
                  aria-label="Next"
                  className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border transition-all cursor-pointer flex items-center justify-center active:scale-95 ${
                    canScrollRight
                      ? 'bg-white border-slate-300 text-blue-600 hover:bg-slate-50 shadow-xs'
                      : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Technology Cards Horizontal Snap Slider - All Uniform Light Cards */}
          <div
            ref={sliderRef}
            onScroll={checkSliderScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar select-none ${
              isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
              scrollbarWidth: 'none'
            }}
          >
            {filteredTechStack.map((tech, idx) => {
              const TechIcon = tech.icon || Code2;
              return (
                <div
                  key={idx}
                  className="w-64 sm:w-72 flex-shrink-0 snap-start p-4.5 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center transition-all shadow-inner group-hover:bg-blue-600 group-hover:text-white">
                      <TechIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-blue-200 bg-blue-50 text-blue-700 font-semibold uppercase tracking-wider">
                      {tech.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-sm mb-0.5 text-[#0A0F2E] group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">{tech.label}</p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="uppercase text-[10px] font-bold text-blue-700">{tech.category}</span>
                    <span className="truncate max-w-[140px] text-right">{tech.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Services: 100% Dark Theme Section */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] text-xs font-mono font-bold uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> What We Do
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Full-Lifecycle Digital Engineering <br />
              <span className="text-gradient-galaxy">&amp; IT Solutions</span>
            </h2>
            <p className="mt-4 text-base text-slate-300">
              From enterprise web development and AI automation to cloud migrations and 24/7 cybersecurity operations, we deliver high-performance technology tailored to your business goals.
            </p>
          </div>

          {/* Quick Preview Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {servicesData.map((svc) => {
              const IconComponent = iconMap[svc.icon] || Code2;
              return (
                <button
                  key={svc.id}
                  onClick={() => navigate('services')}
                  className="px-4 py-2.5 rounded-full bg-[#0c1438] border border-[var(--accent-blue)]/25 hover:border-[var(--accent-blue)] hover:bg-[#101b4c] text-white text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer group shadow-sm hover:shadow-[0_4px_16px_rgba(0,194,255,0.15)] hover:-translate-y-0.5"
                >
                  <IconComponent className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
                  <span>{svc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Asymmetric Bento Grid Layout - All Uniform Dark Cyber Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            
            {/* Bento 1: Flagship Web Engineering (Spans 7 Cols) - Cyber Dark */}
            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="lg:col-span-7 rounded-3xl card-dark-uniform p-8 sm:p-10 flex flex-col justify-between relative"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-blue)]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a1438] border border-[var(--accent-blue)]/40 flex items-center justify-center text-[var(--accent-blue)] shadow-md">
                    <Code2 className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#0a1438] border border-[var(--accent-blue)]/35 text-[var(--accent-blue)] font-semibold">
                    Flagship Domain • 01
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                  {servicesData[0].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-sans">
                  {servicesData[0].fullDesc}
                </p>

                {/* Simulated Architecture Flow / Blueprint Preview */}
                <div className="p-4 rounded-2xl bg-[#0a1438]/90 border border-[var(--accent-blue)]/20 mb-6 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-[var(--accent-blue)] pb-2 border-b border-[#1a2858] font-bold">
                    <span>ARCHITECTURAL TARGET</span>
                    <span>SLA VERIFICATION</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="p-2 rounded bg-[#060c24] border border-[var(--accent-blue)]/25">
                      <div className="text-[var(--accent-blue)] font-bold">&lt; 0.8s</div>
                      <div className="text-[10px] text-slate-400">Largest Contentful Paint</div>
                    </div>
                    <div className="p-2 rounded bg-[#060c24] border border-[var(--accent-blue)]/25">
                      <div className="text-emerald-400 font-bold">100% SSR</div>
                      <div className="text-[10px] text-slate-400">Next.js Edge Runtime</div>
                    </div>
                    <div className="p-2 rounded bg-[#060c24] border border-[var(--accent-blue)]/25">
                      <div className="text-[var(--accent-blue)] font-bold">OWASP A+</div>
                      <div className="text-[10px] text-slate-400">Hardened Headers</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {servicesData[0].deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1a2858] flex items-center justify-between">
                <button
                  onClick={() => navigate('services')}
                  className="text-xs font-mono font-bold text-[var(--accent-blue)] hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inspect Complete Engineering Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-slate-400">Noida Pod Lead Direct</span>
              </div>
            </motion.div>

            {/* Bento 2: AI & Cloud Infrastructure (Spans 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* AI Tile - Uniform Cyber Dark Card */}
              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="rounded-3xl card-dark-uniform p-6 sm:p-7 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0a1438] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)] shadow-sm">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0a1438] border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] font-semibold">
                      Autonomous Intelligence
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {servicesData[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {servicesData[1].fullDesc}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {servicesData[1].deliverables.slice(0, 2).map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate('services')}
                  className="pt-3 border-t border-[#1a2858] text-xs font-mono font-bold text-[var(--accent-blue)] hover:text-white flex items-center justify-between cursor-pointer"
                >
                  <span>Review AI Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>

              {/* Cloud Tile - Deep Cyber Midnight Card */}
              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="rounded-3xl card-dark-uniform p-6 sm:p-7 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0a1438] border border-[var(--accent-blue)]/30 flex items-center justify-center text-[var(--accent-blue)]">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0a1438] border border-emerald-500/40 text-emerald-400 font-semibold">
                      99.99% Uptime SLA
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {servicesData[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {servicesData[2].fullDesc}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {servicesData[2].deliverables.slice(0, 2).map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate('services')}
                  className="pt-3 border-t border-[#1a2858] text-xs font-mono font-bold text-[var(--accent-blue)] hover:text-white flex items-center justify-between cursor-pointer"
                >
                  <span>Review Cloud Blueprints</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>

            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('services')}
              className="px-8 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.25)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore All 10 Capabilities &rarr;
            </button>
          </div>

        </div>
      </motion.section>

      {/* 3.5 Featured Production Case Studies: 100% Light Theme Section */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-20 section-theme-light relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Executive Badge and Prev/Next Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>Proven Production Deployments</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0A0F2E] tracking-tight leading-[1.15]">
                Enterprise Case Studies:
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-700">
                  Real Systems in Production
                </span>
              </h2>
              <p className="mt-4 text-base text-slate-600 max-w-2xl font-sans leading-relaxed">
                Bespoke digital platforms engineered by our Noida delivery teams. Each architecture is hardened for enterprise traffic, zero-downtime compliance, and sub-second response times.
              </p>
            </div>

            {/* Quick Architecture Switcher & Catalog Button - Unified Navigation Button with Number in Same Button */}
            <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
              <div className="inline-flex items-center rounded-xl bg-white border border-slate-200 shadow-xs p-1 font-mono text-xs">
                <button
                  onClick={handlePrevCaseStudy}
                  title="Previous Architecture"
                  className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-lg !text-blue-700 hover:!text-blue-900 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label="Previous Case Study"
                >
                  <ChevronLeft className="w-4 h-4 !text-blue-700" />
                </button>

                <div className="px-3.5 py-1 flex items-center gap-1.5 select-none">
                  <span className="!text-blue-700 font-semibold uppercase text-[10px] tracking-wider">Node</span>
                  <span className="!text-blue-700 font-bold text-sm">{String(currentCaseIndex + 1).padStart(2, '0')}</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-slate-500 font-semibold">{String(portfolioProjects.length).padStart(2, '0')}</span>
                </div>

                <button
                  onClick={handleNextCaseStudy}
                  title="Next Architecture"
                  className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-lg !text-blue-700 hover:!text-blue-900 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label="Next Case Study"
                >
                  <ChevronRight className="w-4 h-4 !text-blue-700" />
                </button>
              </div>

              <button
                onClick={() => navigate('projects')}
                className="px-5 py-2.5 rounded-xl border border-blue-200 !text-blue-700 hover:bg-blue-50 bg-white font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
              >
                <span className="!text-blue-700">Explore All 8 Client Builds</span>
                <ArrowRight className="w-3.5 h-3.5 !text-blue-700" />
              </button>
            </div>
          </div>

          {/* Master Stage: Studio Viewport Chassis with Clean Daylight Frame */}
          <div className="rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative bg-white">
            {/* Clean Light Top Chrome Bar */}
            <div className="relative z-10 px-5 sm:px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono shadow-xs">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-slate-400 select-none hidden sm:inline">https://</span>
                  <span className="text-blue-700 font-semibold">{selectedCaseStudy.domain}</span>
                  <a
                    href={selectedCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Live Domain"
                    className="text-slate-400 hover:text-blue-700 transition-colors ml-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-[11px] shadow-xs">
                  <Server className="w-3 h-3 text-blue-600" /> Noida NOC &bull; Edge Routed
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Live
                </span>
              </div>
            </div>

            {/* Split Viewport: Left Visual Monitor + Right Engineering Dossier */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Visual Device Viewport (7 Cols) */}
              <div className="lg:col-span-7 relative flex flex-col justify-between bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-5 sm:p-6 lg:p-7">
                
                {/* Cinematic Screenshot Canvas */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] flex items-center justify-center group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedCaseStudy.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full absolute inset-0"
                    >
                      {selectedCaseStudy.image ? (
                        <img
                          src={selectedCaseStudy.image}
                          alt={selectedCaseStudy.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-500 font-mono text-xs">
                          Production Telemetry Active
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Floating Prev/Next Viewport Controls */}
                  <div className="absolute inset-y-0 left-3 flex items-center z-20 pointer-events-none">
                    <button
                      onClick={handlePrevCaseStudy}
                      aria-label="Previous Architecture"
                      className="pointer-events-auto w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200 hover:border-blue-500 text-blue-600 hover:text-blue-700 flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-90"
                    >
                      <ChevronLeft className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-3 flex items-center z-20 pointer-events-none">
                    <button
                      onClick={handleNextCaseStudy}
                      aria-label="Next Architecture"
                      className="pointer-events-auto w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200 hover:border-blue-500 text-blue-600 hover:text-blue-700 flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-90"
                    >
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>

                  {/* Direct Live Preview Overlay Action */}
                  <div className="absolute top-3.5 right-3.5 z-20">
                    <a
                      href={selectedCaseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200 !text-blue-700 hover:!text-blue-900 font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
                    >
                      <span className="!text-blue-700">Visit Live Domain</span>
                      <ExternalLink className="w-3.5 h-3.5 !text-blue-700" />
                    </a>
                  </div>
                </div>

                {/* Floating KPI HUD Grid */}
                <div className="mt-4 grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  {selectedCaseStudy.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      <div className="font-display font-bold text-sm sm:text-base text-blue-700 truncate">{m}</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Audited KPI</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Engineering Dossier (5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {selectedCaseStudy.categoryName}
                      </span>
                      {selectedCaseStudy.isFlagship && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Flagship
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      SYS_ID: #{selectedCaseStudy.id}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-1.5">
                    {selectedCaseStudy.subtitle}
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0A0F2E] tracking-tight mb-3">
                    {selectedCaseStudy.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    {selectedCaseStudy.description}
                  </p>

                  {/* Hardened Engineering Stack */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2.5">
                      <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                        <Cpu className="w-3.5 h-3.5" /> Deployment Stack:
                      </span>
                      <span className="text-emerald-700 text-[10px] font-medium">Production Live</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCaseStudy.stack.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white border border-slate-200 text-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enterprise Guarantees Bar */}
                  <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs font-mono text-slate-600">
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="truncate">Noida Sector 62 NOC</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">Zero-Downtime Release</span>
                    </div>
                  </div>
                </div>

                {/* Dual CTA Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-200">
                  <a
                    href={selectedCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 rounded-xl font-mono text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Visit Live Domain</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => navigate('projects')}
                    className="px-5 py-3 rounded-xl font-mono text-xs font-bold !text-blue-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span className="!text-blue-700">Inspect Full Specification</span>
                    <ArrowRight className="w-3.5 h-3.5 !text-blue-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-Project Architecture Manual Slider Track - Clean Light Deck */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
                  <Terminal className="w-3.5 h-3.5" />
                </span>
                <div>
                  <div className="text-xs font-mono font-bold text-[#0A0F2E] uppercase tracking-wider">
                    Production Architectures Slider
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    Swipe, drag, or slide to inspect live deployments &bull; Node {String(currentCaseIndex + 1).padStart(2, '0')} of {String(portfolioProjects.length).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Slider Prev / Next Controls - Unified Navigation Button with Number in Same Button */}
              <div className="inline-flex items-center rounded-xl bg-white border border-slate-200 shadow-xs p-1 font-mono text-xs">
                <button
                  onClick={handlePrevCaseStudy}
                  aria-label="Previous Project"
                  className="px-2.5 py-1.5 rounded-lg hover:bg-slate-100 !text-blue-700 hover:!text-blue-900 font-bold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4 !text-blue-700" />
                  <span className="hidden sm:inline !text-blue-700">Prev</span>
                </button>
                <div className="px-3 py-1 border-x border-slate-200 !text-blue-700 font-semibold select-none flex items-center gap-1">
                  <span className="font-bold">{String(currentCaseIndex + 1).padStart(2, '0')}</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-slate-500">{String(portfolioProjects.length).padStart(2, '0')}</span>
                </div>
                <button
                  onClick={handleNextCaseStudy}
                  aria-label="Next Project"
                  className="px-2.5 py-1.5 rounded-lg hover:bg-slate-100 !text-blue-700 hover:!text-blue-900 font-bold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                >
                  <span className="hidden sm:inline !text-blue-700">Next</span>
                  <ChevronRight className="w-4 h-4 !text-blue-700" />
                </button>
              </div>
            </div>

            {/* Draggable & Scrollable Slider Track */}
            <div
              ref={caseStudySliderRef}
              onMouseDown={handleCaseMouseDown}
              onMouseMove={handleCaseMouseMove}
              onMouseUp={handleCaseMouseUp}
              onMouseLeave={handleCaseMouseUp}
              className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 cursor-grab active:cursor-grabbing select-none scroll-smooth snap-x snap-mandatory no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {portfolioProjects.map((p, idx) => {
                const isSelected = p.id === selectedCaseStudyId;
                return (
                  <div
                    key={p.id}
                    data-case-id={p.id}
                    onClick={() => setSelectedCaseStudyId(p.id)}
                    className={`w-72 sm:w-80 flex-shrink-0 snap-start p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                      isSelected
                        ? 'bg-white border-2 border-blue-600 shadow-md ring-2 ring-blue-100 -translate-y-0.5'
                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    {/* Top mini image thumbnail banner */}
                    <div className="w-full h-24 rounded-xl overflow-hidden border border-slate-200 mb-3 relative bg-slate-100">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-[10px]">
                          Telemetry Node Active
                        </div>
                      )}
                      
                      {/* Node Index Badge */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold text-blue-700 shadow-xs">
                        NODE #{String(idx + 1).padStart(2, '0')}
                      </div>

                      {p.isFlagship && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-amber-500 text-white text-[9px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                          <Sparkles className="w-2.5 h-2.5" /> Flagship
                        </div>
                      )}
                    </div>

                    {/* Metadata & Title */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                        <span className="text-blue-700 font-semibold truncate max-w-[65%]">
                          {p.categoryName}
                        </span>
                        <span className="text-slate-400 text-[10px] truncate">
                          {p.domain}
                        </span>
                      </div>

                      <h4 className={`font-display font-bold text-base line-clamp-1 mb-1.5 transition-colors ${
                        isSelected ? 'text-blue-700' : 'text-[#0A0F2E] group-hover:text-blue-700'
                      }`}>
                        {p.title}
                      </h4>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                        {p.subtitle}
                      </p>
                    </div>

                    {/* Footer: Audited Metric & Active Status Indicator */}
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-medium truncate max-w-[60%]">
                        {p.metrics[0]}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                        isSelected ? 'text-blue-700' : 'text-slate-500 group-hover:text-slate-700'
                      }`}>
                        {isSelected ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                            Active View
                          </>
                        ) : (
                          'Inspect →'
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </motion.section>

      {/* 4. Industries We Serve: 100% Dark Theme Section */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a1438] border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] text-xs font-mono font-bold uppercase mb-4 shadow-sm">
                Domain Expertise
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Deep Domain Expertise Across Key Verticals
              </h2>
              <p className="mt-3 text-sm text-slate-300 max-w-2xl font-sans leading-relaxed">
                We engineer custom digital solutions tailored to the strict compliance, security, and scalability demands of regulated, high-growth industries.
              </p>
            </div>

            <button
              onClick={() => navigate('industries')}
              className="px-6 py-3 rounded-xl border border-[var(--accent-blue)]/40 text-white hover:bg-[#0a1438] bg-[#070e28] font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
            >
              View All 8 Sectors &rarr;
            </button>
          </div>

          {/* 4 Sector Cards - All Uniform Cyber Dark Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.slice(0, 4).map((ind) => {
              return (
                <motion.div
                  key={ind.id}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  onClick={() => navigate('industries')}
                  className="rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between shadow-xl transition-all card-dark-uniform"
                >
                  <div>
                    <div className="h-36 relative overflow-hidden bg-slate-900">
                      <img 
                        src={ind.image} 
                        alt={ind.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070e28] via-[#070e28]/40 to-transparent" />
                    </div>

                    <div className="p-5">
                      <h3 className="font-display font-bold text-lg mb-2 transition-colors text-white group-hover:text-[var(--accent-blue)]">
                        {ind.title}
                      </h3>
                      <p className="text-xs leading-relaxed mb-4 text-slate-300">
                        {ind.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {ind.compliance.slice(0, 2).map((comp, cIdx) => (
                          <span key={cIdx} className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#0a1438] text-[var(--accent-blue)] border border-[var(--accent-blue)]/25">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <span className="text-xs font-mono font-bold flex items-center gap-1 text-[var(--accent-blue)] group-hover:text-white">
                      Explore Solutions &rarr;
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* 5. Featured Software: 100% Light Theme Section */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase mb-4 shadow-xs">
              <Download className="w-3.5 h-3.5" /> Our Software
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A0F2E] tracking-tight">
              Free Tools Built by TechPros
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Alongside our enterprise engineering and consulting services, we build focused software that solves one problem well — and give it away free with zero contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {softwaresData.map((tool) => {
              return (
                <motion.div
                  key={tool.id}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between group shadow-lg transition-all card-light-uniform bg-white border border-slate-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-700">
                        <Check className="w-3 h-3" /> Free Download
                      </span>
                      <span className="text-xs font-mono font-semibold text-blue-700">
                        {tool.version}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl mb-2 transition-colors text-[#0A0F2E] group-hover:text-blue-600">
                      {tool.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 text-slate-600">
                      {tool.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {tool.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-blue-600" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => navigate('softwares')}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white transition-colors flex items-center gap-2 cursor-pointer shadow-md transform hover:-translate-y-0.5 active:translate-y-0 bg-blue-600 hover:bg-blue-700"
                    >
                      <span>Get it Free</span>
                      <Download className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => navigate('softwares')}
                      className="text-xs font-mono cursor-pointer font-semibold text-blue-700 hover:text-blue-900"
                    >
                      Product Specs &rarr;
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('softwares')}
              className="text-xs font-mono text-blue-700 hover:underline font-semibold"
            >
              Browse Complete Software Catalog &rarr;
            </button>
          </div>

        </div>
      </motion.section>

      {/* 6. Why TechPros: 4 Core Pillars */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="badge-dark-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase mb-4 shadow-sm">
                Why TechPros
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                We're Not Just an Outsourcing Company.
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                We're your strategic growth partner. With deep domain expertise, cutting-edge technology, and a global delivery model, we help you achieve operational excellence while you focus on what matters most — your core business.
              </p>

              <div className="mt-8">
                <button
                  onClick={() => navigate('about')}
                  className="px-6 py-3.5 min-h-[44px] rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[#00C2FF] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.3)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Our Story &amp; Leadership &rarr;
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {corePillars.map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="p-6 rounded-2xl card-dark-uniform group transition-all"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#0a1438] border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base mb-2 text-white group-hover:text-[var(--accent-blue)] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </motion.section>

      {/* 6.5 Noida Delivery Campus & Engineering Headquarters Showcase */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-light overflow-hidden"
      >
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge-light-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase mb-4 shadow-sm text-blue-700">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> Physical Engineering Headquarters &bull; Sector 62, Noida
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0F2E] tracking-tight leading-tight">
              Inside Our Noida Engineering Hub &amp; Innovation Lab
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Where 180+ full-time systems architects, cloud engineers, and AI developers build and manage enterprise software for global leaders. Real engineering pods, audited compliance, and 24/7 NOC oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img 
                  src={campusImg} 
                  alt="TechPros Noida Sector 62 Engineering Headquarters & Development Floor" 
                  className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-900 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold">Noida HQ Pod B &bull; Live Operations Floor</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono shadow-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#0A0F2E] text-sm">
                        Logix Cyber Park, Tower B, Sector 62, Noida, UP 201309
                      </div>
                      <div className="text-slate-600 text-[11px] mt-0.5">
                        Direct fiber interconnects to AWS Mumbai (ap-south-1) &bull; 24/7 Security Operations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              
              {/* Pod 1: Uniform Light Card */}
              <div className="p-5 rounded-2xl card-light-uniform shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-base text-[#0A0F2E]">
                    24/7 Dedicated NOC Operations
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Our Noida operations floor maintains continuous real-time telemetry across multi-cloud clusters, guaranteeing our 99.99% uptime SLA with sub-minute incident response.
                </p>
              </div>

              {/* Pod 2: Uniform Light Card */}
              <div className="p-5 rounded-2xl card-light-uniform shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-base text-[#0A0F2E]">
                    Air-Gapped Secure Client Delivery Bays
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Biometric access-controlled developer suites compliant with ISO/IEC 27001:2022 and SOC 2 Type II strict data privacy and isolation protocols.
                </p>
              </div>

              {/* Pod 3: Uniform Light Card */}
              <div className="p-5 rounded-2xl card-light-uniform shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-base text-[#0A0F2E]">
                    180+ Full-Time Systems Architects
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  No freelancers or fragmented handoffs. Dedicated full-time engineering pods specialized in React 19, Next.js, Python AI pipelines, and Kubernetes.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
                <button
                  onClick={() => navigate('contact')}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all cursor-pointer shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Schedule Noida Campus Briefing &rarr;
                </button>
                <a
                  href={companyInfo.socials.phone}
                  className="px-4 py-3 rounded-xl bg-white border border-slate-300 text-blue-700 hover:bg-slate-50 transition-colors font-semibold shadow-xs"
                >
                  Direct: +91 88514 22486
                </a>
              </div>

            </div>

          </div>

        </div>
      </motion.section>

      {/* 8. How We Work: Connected Pipeline Circuit */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-dark-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#00C2FF]">
              Disciplined Methodology
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-2">
              A Proven Path From Problem to Outcome
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Every engagement — whether a single automation pilot or a full enterprise transformation — follows the same rigorous engineering process.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Glowing Connecting Circuit Track (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent -translate-y-6 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { num: "01", title: "Discovery & Diagnostic", desc: "We audit your current operations, interview key stakeholders, and map every friction point across your value chain." },
                { num: "02", title: "Strategy & Roadmap", desc: "We co-design a transformation roadmap with clear architectural milestones, ownership, and projected ROI at each stage." },
                { num: "03", title: "Hands-On Execution", desc: "Our senior engineers embed directly with your team and drive implementation — not passive advisory, real production execution." },
                { num: "04", title: "Sustain & Scale", desc: "We set up automated governance, security scanning, and 24/7 NOC monitoring so results compound long after deployment." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="p-6 rounded-2xl card-dark-uniform relative overflow-hidden group transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-display font-black text-[#00C2FF]/40 group-hover:text-[#00C2FF] transition-colors">
                      {step.num}
                    </div>
                    <span className="w-3 h-3 rounded-full bg-[#0a1438] border-2 border-[#00C2FF] group-hover:bg-[#00C2FF] transition-colors" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-[#00C2FF] transition-colors mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* 7. Client Testimonials: Luminous Daylight Contrast Slab */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-light-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
              Client Stories
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A0F2E] tracking-tight mt-3">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Don't just take our word for it. Here's what business leaders say about working with TechPros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map((t, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-8 rounded-3xl card-light-uniform shadow-md flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="text-sm tracking-wider mb-4 text-amber-500">★★★★★</div>
                  <p className="text-sm leading-relaxed italic mb-6 text-slate-600">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs shadow-xs bg-blue-50 border border-blue-200 text-blue-700">
                    {t.avatar}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-[#0A0F2E]">{t.author}</h5>
                    <p className="text-xs font-mono text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* 11. FAQ: Dual-Column Interactive Accordion */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-dark"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="badge-dark-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#00C2FF]">
              Frequently Asked Questions
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-2">
              Common Questions
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Can't find what you're looking for?{' '}
              <button onClick={() => navigate('contact')} className="text-[#00C2FF] hover:underline font-semibold cursor-pointer">
                Get in touch with our solutions team
              </button>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl card-dark-uniform overflow-hidden transition-all shadow-md self-start border border-[#1a2a5e]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#0c1844] cursor-pointer transition-colors"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#00C2FF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono border-t border-[#1a2a5e] bg-[#050b20] animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* 12. Contact Form: Encrypted Command Pod Dispatch Terminal */}
      <motion.section 
        id="contact-section" 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative section-theme-light"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="badge-light-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
              Contact Us &bull; Sector 62, Noida
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A0F2E] tracking-tight mt-2">
              Get in Touch with Our Engineers
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
              Fill out the form and our lead solutions architect in Noida will review your requirements and reach out within 24 hours.
            </p>
          </div>

          <div className="rounded-3xl card-light-uniform p-8 sm:p-12 shadow-2xl relative overflow-hidden bg-white border border-slate-200">
            {contactSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#0A0F2E]">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-sm font-mono text-slate-600 max-w-md mx-auto">
                  Thank you! Our engineering team in Sector 62, Noida will review your specifications and contact you at <strong className="text-blue-700">{formData.email || 'your email'}</strong> within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Security Validation Error Banner */}
                {homeFormError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-mono flex items-center gap-2.5 animate-in fade-in">
                    <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{homeFormError}</span>
                  </div>
                )}

                {/* Anti-Bot Security Honeypot (OWASP A04) */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }} aria-hidden="true">
                  <label htmlFor="hp-website-trap">Leave this field blank</label>
                  <input
                    id="hp-website-trap"
                    type="text"
                    name="website_trap"
                    value={homeHoneypot}
                    onChange={(e) => setHomeHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="hp-first-name" className="block text-xs font-mono text-slate-700 mb-2 uppercase font-bold">First Name *</label>
                    <input
                      id="hp-first-name"
                      name="firstName"
                      type="text"
                      required
                      maxLength={50}
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Rahul"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="hp-last-name" className="block text-xs font-mono text-slate-700 mb-2 uppercase font-bold">Last Name *</label>
                    <input
                      id="hp-last-name"
                      name="lastName"
                      type="text"
                      required
                      maxLength={50}
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="hp-email" className="block text-xs font-mono text-slate-700 mb-2 uppercase font-bold">Business Email *</label>
                    <input
                      id="hp-email"
                      name="email"
                      type="email"
                      required
                      maxLength={100}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="hp-company" className="block text-xs font-mono text-slate-700 mb-2 uppercase font-bold">Company Name</label>
                    <input
                      id="hp-company"
                      name="company"
                      type="text"
                      maxLength={80}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Global"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hp-service" className="block text-xs font-mono text-slate-700 mb-2 uppercase font-bold">Service You're Interested In</label>
                  <select
                    id="hp-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title} className="bg-white text-slate-900">
                        {s.title}
                      </option>
                    ))}
                    <option value="General Scoping / Other" className="bg-white text-slate-900">
                      General Scoping / Other Inquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hp-message" className="block text-xs font-mono text-slate-700 mb-2 uppercase font-bold">Project Details &amp; Requirements</label>
                  <textarea
                    id="hp-message"
                    name="message"
                    rows="4"
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your technical stack, timeline, or current bottlenecks..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Mutual Non-Disclosure Agreement (NDA) executed upon request.</span>
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider !text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="!text-white">Send Message</span>
                    <Send className="w-3.5 h-3.5 !text-white" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </motion.section>

      {/* 13. Bottom CTA Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="py-20 relative section-theme-dark border-t border-[#141e48]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-dark-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#00C2FF]">
            Ready to Transform?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mt-3 mb-4">
            Let's Build Your <br />
            <span className="text-gradient-galaxy">Operational Advantage.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Schedule a free 30-minute consultation with our solutions architects in Sector 62, Noida.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white bg-[#00C2FF] hover:brightness-110 shadow-[0_4px_20px_rgba(0,194,255,0.35)] transition-all cursor-pointer"
            >
              Get Free Consultation &rarr;
            </button>

            <a
              href={companyInfo.socials.phone}
              className="px-7 py-4 rounded-xl font-mono text-sm font-semibold text-white bg-[#070e28] border border-[#1a2a5e] hover:bg-[#0c1844] transition-all flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>{companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
