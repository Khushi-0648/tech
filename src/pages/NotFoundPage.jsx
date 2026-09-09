import React, { useEffect } from 'react';
import { Home, ArrowLeft, Phone, Search, HelpCircle } from 'lucide-react';

export default function NotFoundPage({ navigate }) {
  useEffect(() => {
    document.title = "404 - Page Not Found | TechPros Network";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative min-h-[85vh] bg-white text-slate-800 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 transition-colors">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        
        {/* Simple pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>Error 404</span>
        </div>

        {/* Large 404 Number */}
        <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-slate-900 mb-4 select-none">
          4<span className="text-sky-600">0</span>4
        </h1>

        {/* Simple Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          Page Not Found
        </h2>

        {/* Clear, simple explanation */}
        <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist, may have been moved, or the link you followed might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <button
            onClick={() => navigate('home')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-98"
          >
            <Home className="w-4 h-4 text-white" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-sky-600 hover:text-sky-700 font-semibold text-sm transition-all shadow-xs cursor-pointer active:scale-98"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>Contact Support</span>
          </button>
        </div>

        {/* Quick Links Row */}
        <div className="pt-6 border-t border-slate-200/80">
          <p className="text-xs text-slate-500 mb-3 font-medium">
            Helpful links to get you back on track:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <button
              onClick={() => navigate('services')}
              className="text-sky-600 hover:text-sky-700 hover:underline font-medium cursor-pointer"
            >
              Services
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => navigate('projects')}
              className="text-sky-600 hover:text-sky-700 hover:underline font-medium cursor-pointer"
            >
              Projects
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => navigate('about')}
              className="text-sky-600 hover:text-sky-700 hover:underline font-medium cursor-pointer"
            >
              About Us
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => navigate('softwares')}
              className="text-sky-600 hover:text-sky-700 hover:underline font-medium cursor-pointer"
            >
              Softwares
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
