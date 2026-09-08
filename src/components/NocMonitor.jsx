import React, { useState, useEffect } from 'react';
import { Server, Activity, Globe, Wifi, CheckCircle2, Shield } from 'lucide-react';
import { globalNocCenters } from '../data/siteData';

export default function NocMonitor() {
  const [centers, setCenters] = useState(globalNocCenters);
  const [selectedCenter, setSelectedCenter] = useState(globalNocCenters[0]);

  // Subtle real-time latency fluctuation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCenters((prev) =>
        prev.map((c) => {
          const currentPing = parseInt(c.ping, 10);
          const delta = Math.floor(Math.random() * 5) - 2;
          const newPing = Math.max(5, currentPing + delta);
          return { ...c, ping: `${newPing}ms` };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl bg-[var(--bg-panel)] border border-[var(--border-color)] p-6 sm:p-10 shadow-2xl transition-colors duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-blue)] shadow-xs">
            <Server className="w-6 h-6 text-[var(--accent-blue)]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                Global NOC & Edge Infrastructure
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--accent-blue)]/15 text-[var(--accent-blue)] border border-[var(--accent-blue)]/30 font-bold uppercase">
                32 Centers &bull; 18 Countries
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5 font-mono">
              Continuous 24/7/365 telemetry monitored from Sector 62, Noida Primary Hub
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-panel-subtle)] text-[var(--accent-blue)] border border-[var(--border-color)] font-medium">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
            Zero Packet Loss
          </span>
        </div>
      </div>

      {/* Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
        {centers.map((node) => {
          const isSelected = selectedCenter.city === node.city;
          return (
            <div
              key={node.city}
              onClick={() => setSelectedCenter(node)}
              className={`p-4 rounded-xl border transition-all cursor-pointer group ${
                isSelected
                  ? 'bg-[var(--bg-panel-subtle)] border-[var(--accent-blue)] shadow-md'
                  : 'bg-[var(--bg-panel-subtle)]/60 border-[var(--border-color)] hover:border-[var(--accent-blue)]/50 hover:bg-[var(--bg-panel-subtle)]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                  <span className="font-display font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                    {node.city}
                  </span>
                </div>
                <span className="font-mono text-xs text-[var(--accent-blue)] font-semibold">
                  {node.ping}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                <span>{node.country}</span>
                <span className="opacity-70">Load: {node.load}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Node Detailed Status Telemetry */}
      <div className="p-5 rounded-2xl bg-[var(--bg-panel-subtle)] border border-[var(--border-color)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[var(--btn-bg)] border border-[var(--border-color)] text-[var(--accent-blue)] shadow-xs">
            <Activity className="w-5 h-5 animate-pulse text-[var(--accent-blue)]" />
          </div>
          <div>
            <div className="text-[var(--text-primary)] font-bold text-sm">
              {selectedCenter.city} ({selectedCenter.country}) &mdash; {selectedCenter.status}
            </div>
            <div className="text-[var(--text-secondary)] mt-0.5">
              Encrypted IPsec Mesh &bull; TLS 1.3 Strict &bull; Cloudflare Magic Transit Active
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div>
            <span className="text-[var(--text-secondary)]">Uptime: </span>
            <span className="text-emerald-400 font-bold">100.00% (30d)</span>
          </div>
          <div className="w-px h-4 bg-[var(--border-color)]" />
          <div>
            <span className="text-[var(--text-secondary)]">Fiber Cross-Connect: </span>
            <span className="text-[var(--accent-blue)] font-bold">100 Gbps Dark Fiber</span>
          </div>
        </div>
      </div>

    </div>
  );
}
