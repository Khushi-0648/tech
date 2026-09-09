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
import ContactPage from './pages/ContactPage';

// Full Legal Policy Pages
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

// 10 Dedicated Service Detail Pages
import ServiceDetailPage from './pages/ServiceDetailPage';

// 404 Telemetry Fallback Page
import NotFoundPage from './pages/NotFoundPage';

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
  'industries', 'softwares', 'contact',
  '404', 'not-found',
  ...legalRoutes,
  ...serviceSlugs,
  ...Object.keys(serviceAliases)
];

function AppContent() {
  // Resolves clean paths (/about, /services) and legacy hashes (#/about, #about) to route keys
  const resolveRoute = (rawPath) => {
    if (!rawPath) return 'home';
    // Strip hash, query params, and leading/trailing slashes
    let clean = rawPath.split('?')[0].replace(/^#\/?/, '').replace(/^\/+/, '').replace(/\/+$/, '').trim();
    if (!clean || clean === 'home') {
      return 'home';
    }
    const mapped = serviceAliases[clean] || clean;
    if (validRoutes.includes(mapped) || serviceSlugs.includes(mapped)) {
      return mapped;
    }
    if (validRoutes.includes(clean)) {
      return clean;
    }
    return '404';
  };

  const getInitialRoute = () => {
    // If the visitor landed on an old hash URL like /#/about or /#about, extract route and clean URL
    if (typeof window !== 'undefined' && window.location.hash && window.location.hash.length > 1) {
      const rawClean = window.location.hash.replace(/^#\/?/, '').replace(/\/+$/, '').trim();
      const hashRoute = resolveRoute(window.location.hash);
      const cleanPath = !rawClean || rawClean === 'home' ? '/' : `/${rawClean}`;
      try {
        window.history.replaceState(null, '', cleanPath);
      } catch {}
      return hashRoute;
    }
    // Standard clean pathname: /about, /services, /
    return typeof window !== 'undefined' ? resolveRoute(window.location.pathname) : 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [requestedPath, setRequestedPath] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash && window.location.hash.length > 1) {
        const rawClean = window.location.hash.replace(/^#\/?/, '').replace(/\/+$/, '').trim();
        return !rawClean || rawClean === 'home' ? '/' : `/${rawClean}`;
      }
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Guarantee viewport always starts at top banner on initial load & reloads
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Clean any lingering hash immediately if present
    if (window.location.hash && window.location.hash.length > 1) {
      const rawClean = window.location.hash.replace(/^#\/?/, '').replace(/\/+$/, '').trim();
      const cleanUrl = !rawClean || rawClean === 'home' ? '/' : `/${rawClean}`;
      try {
        window.history.replaceState(null, '', cleanUrl);
      } catch {}
    }
  }, []);

  // Listen to browser Back / Forward history events (HTML5 History API)
  useEffect(() => {
    const handlePopState = () => {
      // Check if hash was somehow triggered or if pathname changed
      if (window.location.hash && window.location.hash.length > 1) {
        const rawClean = window.location.hash.replace(/^#\/?/, '').replace(/\/+$/, '').trim();
        const hashTarget = resolveRoute(window.location.hash);
        const cleanUrl = !rawClean || rawClean === 'home' ? '/' : `/${rawClean}`;
        try {
          window.history.replaceState(null, '', cleanUrl);
        } catch {}
        setCurrentRoute(hashTarget);
        setRequestedPath(cleanUrl);
      } else {
        const pathTarget = resolveRoute(window.location.pathname);
        setCurrentRoute(pathTarget);
        setRequestedPath(window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route) => {
    const target = resolveRoute(route);
    setCurrentRoute(target);
    const cleanUrl = target === 'home' ? '/' : `/${target}`;
    setRequestedPath(cleanUrl);
    try {
      if (window.location.pathname !== cleanUrl || window.location.hash) {
        window.history.pushState(null, '', cleanUrl);
      }
    } catch {}
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

            {/* 404 Telemetry Fallback Page */}
            {(currentRoute === '404' || currentRoute === 'not-found' || ![
              'home', 'about', 'services', 'projects', 'industries', 'softwares', 'contact',
              'privacy-policy', 'privacy', 'terms-of-service', 'terms', 'cookie-policy', 'cookies',
              ...serviceSlugs
            ].includes(currentRoute)) && (
              <NotFoundPage navigate={navigate} requestedPath={requestedPath} />
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
