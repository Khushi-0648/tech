import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * TechPros Electric Blue & Enterprise Midnight Ambient Canvas
 * Dynamically renders dark cosmic navy space or clean enterprise sky/ice blue mesh.
 */
export default function GalaxyCanvas() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#05081A]' : 'bg-[#f8faff]'
    }`}>
      {/* Primary Cyan & Blue Radial Glow Orbs */}
      <div 
        className={`absolute -top-[15%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[600px] rounded-full blur-[160px] pointer-events-none transition-all duration-500 ${
          isDark ? 'bg-[#00C2FF]/[0.12]' : 'bg-[#0090e7]/[0.08]'
        }`} 
      />
      <div 
        className={`absolute top-[35%] -left-[10%] w-[50vw] max-w-[700px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-500 ${
          isDark ? 'bg-[#1a2656]/[0.55]' : 'bg-[#dbeafe]/[0.6]'
        }`} 
      />
      <div 
        className={`absolute top-[65%] -right-[10%] w-[50vw] max-w-[700px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-500 ${
          isDark ? 'bg-[#00C2FF]/[0.08]' : 'bg-[#0284c7]/[0.06]'
        }`} 
      />

      {/* Modern Technical Cyber Grid Pattern */}
      <div 
        className={`absolute inset-0 enterprise-grid [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)] transition-opacity duration-500 ${
          isDark ? 'opacity-30' : 'opacity-20'
        }`} 
      />

      {/* Soft Bottom Fade */}
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-b from-transparent via-[#05081A]/40 to-[#05081A]' 
          : 'bg-gradient-to-b from-transparent via-[#f8faff]/40 to-[#f8faff]'
      }`} />
    </div>
  );
}
