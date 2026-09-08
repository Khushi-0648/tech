import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ navigate }) {
  const [monthlySpend, setMonthlySpend] = useState(15000);
  const [teamSize, setTeamSize] = useState(25);
  const [manualHoursWeekly, setManualHoursWeekly] = useState(30);

  // Formulas aligned with TechPros verified benchmark:
  // Up to 40-60% cloud cost reduction, 70% manual operations automated
  const estimatedMonthlySavings = Math.round(monthlySpend * 0.45);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const annualHoursSaved = Math.round(manualHoursWeekly * 0.7 * 50);
  const projectedRoiMultiplier = (2.8 + (teamSize / 50) * 0.8).toFixed(1);

  return (
    <div className="rounded-3xl bg-[var(--bg-panel)] border border-[var(--border-color)] p-6 sm:p-10 shadow-2xl transition-colors duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-blue)] shadow-xs">
            <Calculator className="w-6 h-6 text-[var(--accent-blue)]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                Cloud & AI Modernization ROI Estimator
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--accent-blue)]/15 text-[var(--accent-blue)] border border-[var(--accent-blue)]/30 font-bold uppercase">
                Interactive
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5 font-mono">
              Based on empirical client outcomes across 500+ deployed enterprise platforms
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-[var(--accent-blue)] bg-[var(--bg-panel-subtle)] px-3.5 py-2 rounded-xl border border-[var(--border-color)] flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)]" />
          <span>Outcome-Based SLA Guarantee</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders (Left 7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1 */}
          <div className="p-4 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--border-color)] space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[var(--text-secondary)]">Current Monthly Cloud & Infrastructure Spend</span>
              <span className="text-[var(--accent-blue)] font-bold text-sm">${monthlySpend.toLocaleString()} / mo</span>
            </div>
            <input
              type="range"
              min="2000"
              max="100000"
              step="1000"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full h-2 bg-[var(--btn-bg)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-blue)]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[var(--text-secondary)]">
              <span>$2,000</span>
              <span>$50,000</span>
              <span>$100,000+</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div className="p-4 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--border-color)] space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[var(--text-secondary)]">Internal Engineering & Operations Team Size</span>
              <span className="text-[var(--accent-blue)] font-bold text-sm">{teamSize} Engineers / Ops</span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-[var(--btn-bg)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-blue)]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[var(--text-secondary)]">
              <span>5 Members</span>
              <span>100 Members</span>
              <span>200+ Members</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div className="p-4 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--border-color)] space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[var(--text-secondary)]">Estimated Weekly Hours Spent on Manual Data/Ops</span>
              <span className="text-[var(--accent-blue)] font-bold text-sm">{manualHoursWeekly} Hours / Week</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={manualHoursWeekly}
              onChange={(e) => setManualHoursWeekly(Number(e.target.value))}
              className="w-full h-2 bg-[var(--btn-bg)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-blue)]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[var(--text-secondary)]">
              <span>10 hrs</span>
              <span>75 hrs</span>
              <span>150+ hrs</span>
            </div>
          </div>

        </div>

        {/* Results Card (Right 5 Cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--border-color)] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-blue)]/10 rounded-full blur-2xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] font-semibold">
            Projected Enterprise ROI
          </span>

          <div className="mt-4 mb-6">
            <div className="text-xs font-mono text-[var(--text-secondary)]">Estimated Annualized Cost Reduction</div>
            <div className="font-display font-black text-3xl sm:text-4xl text-[var(--accent-blue)] mt-1">
              ${estimatedAnnualSavings.toLocaleString()}
              <span className="text-xs font-mono text-[var(--text-secondary)] font-normal"> / year</span>
            </div>
            <div className="text-[11px] font-mono text-[var(--accent-blue)] mt-1">
              &approx; ${estimatedMonthlySavings.toLocaleString()} saved every month
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[var(--border-color)] text-xs font-mono mb-6">
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                Annual Hours Automated:
              </span>
              <span className="text-[var(--text-primary)] font-bold">{annualHoursSaved.toLocaleString()} hrs / yr</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                Projected ROI Return:
              </span>
              <span className="text-[var(--accent-blue)] font-bold">{projectedRoiMultiplier}x Return</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Availability SLA:
              </span>
              <span className="text-emerald-400 font-bold">99.99% Guaranteed</span>
            </div>
          </div>

          <button
            onClick={() => navigate('contact')}
            className="w-full py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[var(--accent-blue)] hover:brightness-110 shadow-[0_4px_16px_rgba(0,194,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
          >
            <span>Request Custom Scoping Report</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

      </div>

    </div>
  );
}
