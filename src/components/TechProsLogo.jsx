import React from 'react';
import { useTheme } from '../context/ThemeContext';
import emblemLight from '../assets/techpros-emblem-light.png';
import emblemDark from '../assets/techpros-emblem-dark.png';
import logoLight from '../assets/techpros-logo-light.png';
import logoDark from '../assets/techpros-logo-dark.png';

/**
 * Official TechPros Logo Component
 * Automatically adapts between Dark and Light mode.
 * - 'mark': Displays the large, high-resolution shield emblem (no text)
 * - 'full': Displays the complete logo with branding
 */
export default function TechProsLogo({ 
  className = "h-14 sm:h-16 w-auto", 
  variant = "mark", // 'mark' (shield icon) or 'full' (with text)
  themeOverride,
  ...props 
}) {
  const { theme: currentTheme } = useTheme();
  const activeTheme = themeOverride || currentTheme;
  
  const emblemSrc = activeTheme === 'light' ? emblemLight : emblemDark;
  const fullLogoSrc = activeTheme === 'light' ? logoLight : logoDark;

  if (variant === 'full') {
    return (
      <div className="inline-flex items-center select-none" {...props}>
        <img 
          src={fullLogoSrc} 
          alt="TechPros Global IT & BPM Solutions" 
          className={`${className} object-contain transition-all duration-300 ${
            activeTheme === 'dark' 
              ? 'filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]' 
              : 'filter drop-shadow-[0_2px_8px_rgba(10,15,46,0.12)]'
          }`}
        />
      </div>
    );
  }

  // Mark variant: display the high-res shield emblem standalone
  return (
    <div className="relative inline-flex items-center justify-center select-none shrink-0" {...props}>
      <img 
        src={emblemSrc} 
        alt="TechPros" 
        className={`${className} object-contain transition-all duration-300 ${
          activeTheme === 'dark' 
            ? 'filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]' 
            : 'filter drop-shadow-[0_2px_8px_rgba(10,15,46,0.15)]'
        }`}
      />
    </div>
  );
}

