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

function AppContent() {
  // Sync route with URL hash for browser history & static link support
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validRoutes = [
      'home', 'about', 'services', 'projects', 
      'industries', 'softwares', 'security-scanner', 'contact'
    ];
    return validRoutes.includes(hash) ? hash : 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validRoutes = [
        'home', 'about', 'services', 'projects', 
        'industries', 'softwares', 'security-scanner', 'contact'
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      } else if (!hash) {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-secondary)] selection:bg-[var(--accent-blue)] selection:text-white overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Background Mesh Canvas */}
      <GalaxyCanvas />

      {/* Cybernetic Header & Mega-Navigation */}
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      {/* Main Routed Page Content with Silk Page Transitions */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentRoute === 'home' && <HomePage navigate={navigate} />}
            {currentRoute === 'about' && <AboutPage navigate={navigate} />}
            {currentRoute === 'services' && <ServicesPage navigate={navigate} />}
            {currentRoute === 'projects' && <ProjectsPage navigate={navigate} />}
            {currentRoute === 'industries' && <IndustriesPage navigate={navigate} />}
            {currentRoute === 'softwares' && <SoftwaresPage navigate={navigate} />}
            {currentRoute === 'security-scanner' && <SecurityScannerPage navigate={navigate} />}
            {currentRoute === 'contact' && <ContactPage navigate={navigate} />}
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
