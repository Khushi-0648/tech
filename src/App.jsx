import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import GalaxyCanvas from './components/GalaxyCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import IndustriesPage from './pages/IndustriesPage';
import SoftwaresPage from './pages/SoftwaresPage';
import SecurityScannerPage from './pages/SecurityScannerPage';
import ContactPage from './pages/ContactPage';

// Full Legal Policy Pages
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

// 10 Dedicated Service Detail Pages
import ServiceDetailPage from './pages/ServiceDetailPage';

const serviceSlugs = [
  'web-development',
  'artificial-intelligence-and-automation',
  'business-analytics',
  'cloud-infrastructure',
  'consulting-operations',
  'cybersecurity',
  'data-analytics',
  'enterprise-solutions',
  'industrial-autonomy-and-engineering',
  'network-solutions-and-services'
];

const serviceAliases = {
  'ai-automation': 'artificial-intelligence-and-automation',
  'industrial-autonomy': 'industrial-autonomy-and-engineering',
  'network-solutions': 'network-solutions-and-services'
};

const legalRoutes = [
  'privacy-policy', 'privacy',
  'terms-of-service', 'terms',
  'cookie-policy', 'cookies'
];

const validRoutes = [
  'home', 'about', 'services', 'projects', 
  'industries', 'softwares', 'security-scanner', 'contact',
  ...legalRoutes,
  ...serviceSlugs,
  ...Object.keys(serviceAliases)
];

function AppContent() {
  // Sync route with URL hash for browser history & static link support
  const resolveRoute = (rawHash) => {
    const clean = rawHash.replace('#/', '').replace('#', '');
    const mapped = serviceAliases[clean] || clean;
    if (validRoutes.includes(mapped) || serviceSlugs.includes(mapped)) {
      return mapped;
    }
    if (validRoutes.includes(clean)) {
      return clean;
    }
    return 'home';
  };

  const getInitialRoute = () => {
    return resolveRoute(window.location.hash);
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  // Guarantee viewport always starts at top banner on initial load & reloads
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const target = resolveRoute(window.location.hash);
      setCurrentRoute(target);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route) => {
    const target = resolveRoute(route);
    setCurrentRoute(target);
    window.location.hash = `#/${target}`;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-secondary)] selection:bg-[var(--accent-blue)] selection:text-white overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Background Mesh Canvas */}
      <GalaxyCanvas />

      {/* Cybernetic Header & Mega-Navigation */}
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      {/* Main Routed Page Content with Silk Page Transitions */}
      <main className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentRoute}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Core Standalone Pages */}
            {currentRoute === 'home' && <HomePage navigate={navigate} />}
            {currentRoute === 'about' && <AboutPage navigate={navigate} />}
            {currentRoute === 'services' && <ServicesPage navigate={navigate} />}
            {currentRoute === 'projects' && <ProjectsPage navigate={navigate} />}
            {currentRoute === 'industries' && <IndustriesPage navigate={navigate} />}
            {currentRoute === 'softwares' && <SoftwaresPage navigate={navigate} />}
            {currentRoute === 'security-scanner' && <SecurityScannerPage navigate={navigate} />}
            {currentRoute === 'contact' && <ContactPage navigate={navigate} />}

            {/* Legal Pages */}
            {(currentRoute === 'privacy-policy' || currentRoute === 'privacy') && (
              <PrivacyPolicyPage navigate={navigate} />
            )}
            {(currentRoute === 'terms-of-service' || currentRoute === 'terms') && (
              <TermsPage navigate={navigate} />
            )}
            {(currentRoute === 'cookie-policy' || currentRoute === 'cookies') && (
              <CookiePolicyPage navigate={navigate} />
            )}

            {/* 10 Individual Service Pages */}
            {serviceSlugs.includes(currentRoute) && (
              <ServiceDetailPage serviceId={currentRoute} navigate={navigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Galaxy Footer with Legal Modals & Telemetry */}
      <Footer navigate={navigate} />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
