import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, 
  Terminal, Sparkles, Clock, Globe, MessageSquare, Building, 
  User, AtSign, Briefcase, HelpCircle, ArrowRight, Building2,
  AlertTriangle
} from 'lucide-react';
import { companyInfo, faqList } from '../data/siteData';
import { campusImg } from '../assets/images';
import { 
  sanitizeInput, 
  validateEmail, 
  validatePhone, 
  checkRateLimit, 
  verifyHoneypot, 
  logSecurityEvent 
} from '../utils/security';

export default function ContactPage({ navigate }) {
  const [inquiryType, setInquiryType] = useState('Web Engineering');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formError, setFormError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development & Scalable Engineering',
    message: ''
  });

  const inquiryOptions = [
    'Web Engineering',
    'AI & Automation',
    'Cloud & DevOps',
    'Cybersecurity Audit',
    'Enterprise ERP/CRM',
    'Career / General'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // 1. Anti-Bot Honeypot Defense (OWASP A04: Insecure Design)
    if (!verifyHoneypot(honeypot)) {
      logSecurityEvent('BOT_HONEYPOT_TRIGGERED', { form: 'contact' });
      setSubmitted(true);
      setTicketId('TPN-' + Math.floor(10000 + Math.random() * 90000));
      return;
    }

    // 2. Client-Side Rate Limiting (OWASP A04: Denial of Service / Flooding)
    const rateLimit = checkRateLimit('contact_form', 3, 60);
    if (!rateLimit.allowed) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { form: 'contact' });
      setFormError(`Transmission rate limit exceeded. Please wait ${rateLimit.remainingSeconds}s before sending another scope.`);
      return;
    }

    // 3. Email Format & Anti-CRLF Injection Check (OWASP A03: Injection)
    if (!validateEmail(formData.email)) {
      logSecurityEvent('INVALID_EMAIL_REJECTED', { form: 'contact' });
      setFormError('Please enter a valid enterprise business email address (e.g. name@company.com).');
      return;
    }

    // 4. Phone Format Check
    if (formData.phone && !validatePhone(formData.phone)) {
      logSecurityEvent('INVALID_PHONE_REJECTED', { form: 'contact' });
      setFormError('Please enter a valid international or standard phone number.');
      return;
    }

    // 5. Input Sanitization & Boundary Caps (OWASP A03: XSS & HTML Injection)
    const cleanFirstName = sanitizeInput(formData.firstName, 50);
    const cleanLastName = sanitizeInput(formData.lastName, 50);
    const cleanCompany = sanitizeInput(formData.company, 80);
    const cleanMessage = sanitizeInput(formData.message, 2000);

    if (!cleanFirstName || !cleanMessage) {
      setFormError('First name and technical scope problem statement are required.');
      return;
    }

    // Generate authenticated dispatch ticket
    const generatedTicket = 'TPN-' + Math.floor(10000 + Math.random() * 90000);
    setTicketId(generatedTicket);
    setFormData(prev => ({
      ...prev,
      firstName: cleanFirstName,
      lastName: cleanLastName,
      company: cleanCompany,
      message: cleanMessage
    }));
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormError('');
    setHoneypot('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: 'Web Development & Scalable Engineering',
      message: ''
    });
  };

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Page Header: Full Dark Theme Section */}
      <section className="pt-32 pb-20 section-theme-dark hero-banner-permanent-dark bg-[#05081A] relative overflow-hidden">
        <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[var(--accent-blue)]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-4"
          >
            <div className="badge-dark-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#00C2FF] font-mono text-xs tracking-wider uppercase mb-6 shadow-sm font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span>Noida Sector 62 Global Delivery Hub &bull; 24/7 Rapid Response</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
              Connect Directly with our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38d6ff] to-[var(--accent-blue)]">
                Engineering Command Pod
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Schedule a confidential discovery call, request an architectural blueprint, or initiate an urgent cybersecurity pentest audit with our senior engineering leads in Sector 62, Noida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Contact Console & Dossier: Full Light Theme Section */}
      <section className="py-24 section-theme-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Inquiry Form Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl card-light-uniform p-8 sm:p-10 shadow-xl border border-slate-200 bg-white"
              >
                
                <div className="pb-6 mb-6 border-b border-slate-200">
                  <h3 className="text-2xl font-display font-bold text-[#0A0F2E]">
                    Submit Project Scope
                  </h3>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-slate-50 border border-emerald-300 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-400 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <h4 className="text-2xl font-display font-bold text-[#0A0F2E]">
                      Requirement Transmitted to Noida NOC
                    </h4>
                    
                    <div className="p-3 max-w-xs mx-auto rounded-xl bg-white border border-blue-200 font-mono text-xs text-blue-700">
                      Dispatch Ticket: <span className="font-bold text-[#0A0F2E]">{ticketId}</span>
                    </div>

                    <p className="text-sm text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
                      Thank you, {formData.firstName}. An assigned solutions architect from Sector 62 has received your brief and will review your technical parameters within 2 hours.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl font-mono text-xs text-blue-700 hover:text-blue-900 bg-white border border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer font-semibold"
                      >
                        Submit Another Inquiry &rarr;
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Security Validation Error Banner */}
                    {formError && (
                      <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-mono flex items-center gap-2.5 animate-in fade-in">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Anti-Bot Security Honeypot (OWASP A04) - Hidden from humans, traps automated bots */}
                    <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }} aria-hidden="true">
                      <label htmlFor="contact-website-trap">Leave this security field empty</label>
                      <input
                        id="contact-website-trap"
                        type="text"
                        name="website_trap"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Inquiry Type Chips */}
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
                        Select Focus Domain:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setInquiryType(opt)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                              inquiryType === opt
                                ? 'bg-blue-600 text-white font-bold shadow-xs'
                                : 'bg-slate-100 text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-200'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-first-name" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                          <input
                            id="contact-first-name"
                            name="firstName"
                            type="text"
                            required
                            maxLength={50}
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="Satya"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-last-name" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                          Last Name
                        </label>
                        <input
                          id="contact-last-name"
                          name="lastName"
                          type="text"
                          maxLength={50}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Singh"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                          Work Email *
                        </label>
                        <div className="relative">
                          <AtSign className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            maxLength={100}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="satya@enterprise.com"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                          Direct Phone
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            maxLength={25}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 ..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company & Estimated Scope */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-company" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                          Organization / Company
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                          <input
                            id="contact-company"
                            name="company"
                            type="text"
                            maxLength={80}
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Global Corp Inc"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                          Services
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans outline-none cursor-pointer"
                        >
                          <option value="Web Development & Scalable Engineering">Web Development &amp; Scalable Engineering</option>
                          <option value="Artificial Intelligence & Automation">Artificial Intelligence &amp; Automation</option>
                          <option value="Business Analytics">Business Analytics</option>
                          <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure &amp; DevOps</option>
                          <option value="Consulting & Operations">Consulting &amp; Operations</option>
                          <option value="Cybersecurity & Zero-Trust">Cybersecurity &amp; Zero-Trust</option>
                          <option value="Data Analytics & Intelligence">Data Analytics &amp; Intelligence</option>
                          <option value="Enterprise Solutions & ERP">Enterprise Solutions &amp; ERP</option>
                          <option value="Industrial Autonomy & Engineering">Industrial Autonomy &amp; Engineering</option>
                          <option value="Network Solutions & Infrastructure">Network Solutions &amp; Infrastructure</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono text-slate-700 uppercase mb-1.5 font-bold">
                        Technical Scope &amp; Problem Statement *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        required
                        maxLength={2000}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your architectural requirements, performance targets, current tech stack, or desired deployment timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 font-sans placeholder:text-slate-400 outline-none"
                      />
                    </div>

                    {/* Security Assurance Note */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Transmitted over TLS 1.3 encryption. Mutual NDA provided prior to technical discovery.</span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Scope to Engineering Lead &rarr;</span>
                    </button>

                  </form>
                )}

              </motion.div>
            </div>

            {/* Contact Dossier Column (5 cols) - Uniform Light Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Noida HQ Terminal Card - Uniform Light Card */}
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="rounded-3xl card-light-uniform p-6 sm:p-8 shadow-xl border border-slate-200 bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold">
                    Global Delivery Headquarters
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <h4 className="text-2xl font-display font-bold text-[#0A0F2E] mb-2">
                  TechPros Network Pvt Ltd
                </h4>

                <div className="space-y-4 pt-4 border-t border-slate-200 text-sm">
                  
                  {/* Physical Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">Physical Address</div>
                      <div className="text-[#0A0F2E] font-sans leading-snug font-medium">
                        Noida, Uttar Pradesh, India<br />
                        Sector 62, Noida, UP 201309
                      </div>
                    </div>
                  </div>

                  {/* Direct Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">Direct Hotline (24/7)</div>
                      <a 
                        href={companyInfo.socials.phone}
                        className="text-blue-700 font-mono hover:underline text-base font-bold"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email Helpdesk */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">Official Helpdesk</div>
                      <a 
                        href={companyInfo.socials.email}
                        className="text-blue-700 font-mono hover:underline font-semibold"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* NOC Telemetry Badge */}
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 font-mono text-xs text-slate-700 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">NOC Latency:</span>
                      <span className="text-emerald-700 font-bold">&lt; 8ms (APAC Hub)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Cloud Operations:</span>
                      <span className="text-blue-700 font-semibold">AWS / Azure / GCP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Compliance:</span>
                      <span className="text-blue-700 font-semibold">ISO 27001 &bull; SOC 2</span>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* Sector 62 Engineering Command Center Visual Card */}
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl card-light-uniform overflow-hidden shadow-xl border border-slate-200 bg-white group"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img 
                    src={campusImg} 
                    alt="TechPros Noida Engineering Center, Sector 62" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2E]/90 via-[#0A0F2E]/35 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 text-[10px] font-mono font-bold text-blue-700 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Sector 62 Campus &bull; Active Command Floor</span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <div className="text-sm font-display font-bold text-white flex items-center gap-1.5 mb-1">
                      <Building2 className="w-4 h-4 text-[#00C2FF]" />
                      <span>Logix Cyber Park &bull; Tower B</span>
                    </div>
                    <div className="text-xs text-slate-200 font-sans leading-relaxed">
                      180+ Full-Time Systems Architects &bull; ISO 27001 Certified Global Delivery Pods
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. FAQ Section: Full Dark Theme Section */}
      <section className="py-24 section-theme-dark relative border-t border-[#141e48]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-dark-pill px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#00C2FF] mb-3 inline-block">
              Client Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Client Scoping FAQs
            </h3>
            <p className="text-xs font-mono text-slate-300 mt-2">
              Common questions prior to formal discovery sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqList.slice(0, 4).map((faq, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-6 rounded-2xl card-dark-uniform shadow-md border border-[#1a2a5e]"
              >
                <h5 className="font-display font-bold text-sm text-white mb-2 flex items-start gap-2">
                  <span className="text-[#00C2FF] font-mono text-xs">0{i + 1}.</span>
                  <span>{faq.question}</span>
                </h5>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
