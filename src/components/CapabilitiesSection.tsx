"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config";

/* ═══════════════════════════════════════════════════════════════
   CUSTOM SVG INFOGRAPHIC COMPONENTS — from Gemini
   System diagrams with arrows, nodes, and clean geometry
   ═══════════════════════════════════════════════════════════════ */

/* ── Card 1: Omni-Channel Sub-25ms RAG Systems ─────────────────
   Pipeline: Document stacks → Search/Retrieval → CPU Processing → Chat Output
*/
const RagSystemIcon = ({ className = "w-full h-32" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Document Stack */}
    <rect x="25" y="25" width="40" height="55" rx="4" fill="currentColor" fillOpacity="0.05" />
    <path d="M30 20h30a4 4 0 0 1 4 4v50" />
    <path d="M35 15h30a4 4 0 0 1 4 4v50" />
    <path d="M35 45h20M35 55h20M35 65h10" />

    {/* Arrow */}
    <path d="M85 55h25M100 45l10 10-10 10" />

    {/* Search / Retrieval */}
    <circle cx="145" cy="45" r="18" fill="currentColor" fillOpacity="0.05" />
    <path d="M158 58l12 12" />
    <path d="M135 45h20M135 40h10" />

    {/* Arrow */}
    <path d="M190 55h25M205 45l10 10-10 10" />

    {/* Processing Node (CPU) */}
    <rect x="240" y="30" width="50" height="50" rx="8" fill="currentColor" fillOpacity="0.05" />
    <rect x="250" y="40" width="30" height="30" rx="4" />
    <path d="M265 30v-6M265 80v6M240 55h-6M290 55h6" />

    {/* Arrow */}
    <path d="M315 55h25M330 45l10 10-10 10" />

    {/* Omni-Channel Output */}
    <path d="M360 30h20a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8h-6l-8 8v-8h-6a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8z" fill="currentColor" fillOpacity="0.05" />
    <circle cx="365" cy="50" r="2" fill="currentColor" />
    <circle cx="375" cy="50" r="2" fill="currentColor" />
    <circle cx="385" cy="50" r="2" fill="currentColor" />
  </svg>
);

/* ── Card 2: DB Based Text2SQL Agents ──────────────────────────
   Natural language → SQL translation → Database query → JSON/Data output
*/
const Text2SqlIcon = ({ className = "w-full h-32" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* User Input */}
    <circle cx="45" cy="40" r="12" />
    <path d="M25 75c0-10 8-15 20-15s20 5 20 15" />
    <path d="M55 30h15a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H60l-5 5v-5h-5a5 5 0 0 1-5-5v-2" fill="currentColor" fillOpacity="0.05" />

    {/* Arrow */}
    <path d="M90 55h25M105 45l10 10-10 10" />

    {/* SQL Translation Node */}
    <rect x="135" y="35" width="55" height="40" rx="6" fill="currentColor" fillOpacity="0.05" />
    <text x="162" y="59" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor" strokeWidth="0.5">SQL</text>

    {/* Arrow */}
    <path d="M205 55h25M220 45l10 10-10 10" />

    {/* Database Cylinder */}
    <ellipse cx="270" cy="35" rx="20" ry="8" />
    <path d="M250 35v40c0 4.4 9 8 20 8s20-3.6 20-8V35" fill="currentColor" fillOpacity="0.05" />
    <path d="M250 55c0 4.4 9 8 20 8s20-3.6 20-8" strokeWidth="1.5" />

    {/* Arrow */}
    <path d="M310 55h25M325 45l10 10-10 10" />

    {/* Code / Data Output */}
    <rect x="350" y="30" width="40" height="50" rx="4" fill="currentColor" fillOpacity="0.05" />
    <path d="M365 45l-5 10 5 10M375 45l5 10-5 10" />
  </svg>
);

/* ── Card 3: Production Multi-Agent Systems ────────────────────
   Interconnected agents with a central orchestrator
*/
const MultiAgentIcon = ({ className = "w-full h-32" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Network Connections (Dashed) */}
    <path d="M100 55h200" strokeDasharray="6 6" strokeWidth="1.5" strokeOpacity="0.5" />
    <path d="M200 55l-50 40M200 55l50 40" strokeDasharray="6 6" strokeWidth="1.5" strokeOpacity="0.5" />

    {/* Agent 1 (Worker Left) */}
    <circle cx="80" cy="55" r="22" fill="var(--background)" />
    <circle cx="80" cy="48" r="8" />
    <path d="M66 68c0-6 6-10 14-10s14 4 14 10" />
    <rect x="65" y="75" width="30" height="12" rx="4" fill="currentColor" fillOpacity="0.1" />
    <text x="80" y="84" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" strokeWidth="0">TEXT</text>

    {/* Agent 2 (Orchestrator Center) */}
    <circle cx="200" cy="55" r="30" fill="var(--background)" strokeWidth="3" />
    <circle cx="200" cy="45" r="10" />
    <path d="M182 72c0-8 8-12 18-12s18 4 18 12" />
    <path d="M200 15v10M200 85v10M160 55h10M230 55h10" />

    {/* Agent 3 (Worker Right) */}
    <circle cx="320" cy="55" r="22" fill="var(--background)" />
    <circle cx="320" cy="48" r="8" />
    <path d="M306 68c0-6 6-10 14-10s14 4 14 10" />
    <rect x="305" y="75" width="30" height="12" rx="4" fill="currentColor" fillOpacity="0.1" />
    <text x="320" y="84" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" strokeWidth="0">VOICE</text>
  </svg>
);

/* ── Card 4: ML Based Financial Analysis ───────────────────────
   Market data → Currency inputs → ML/Brain model → Predictive output
*/
const FinanceMlIcon = ({ className = "w-full h-32" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Trend Chart */}
    <rect x="25" y="30" width="60" height="50" rx="4" fill="currentColor" fillOpacity="0.05" />
    <path d="M35 65l15-20 10 10 15-20" />
    <path d="M75 35h-10v10" />

    {/* Arrow */}
    <path d="M95 55h20M105 45l10 10-10 10" />

    {/* Currency Data Points */}
    <circle cx="150" cy="35" r="12" />
    <text x="150" y="39" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor" strokeWidth="0">$</text>

    <circle cx="175" cy="75" r="12" />
    <text x="175" y="79" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor" strokeWidth="0">€</text>

    <circle cx="200" cy="35" r="12" />
    <text x="200" y="39" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor" strokeWidth="0">¥</text>

    {/* Merging Arrows */}
    <path d="M165 45l15 30M190 45l-15 30" strokeDasharray="4 4" strokeWidth="1.5" />

    {/* Arrow */}
    <path d="M230 55h35M255 45l10 10-10 10" />

    {/* ML Model / Brain */}
    <path d="M320 30c-15 0-20 10-20 20 0 5 2 10 5 15v10h30v-10c3-5 5-10 5-15 0-10-5-20-20-20z" fill="currentColor" fillOpacity="0.05" />
    <path d="M320 30v25M300 50h40" strokeOpacity="0.3" />
    <circle cx="320" cy="55" r="6" fill="var(--background)" stroke="currentColor" />
  </svg>
);

/* ── Card 5: Custom MCP & Agent Tools ──────────────────────────
   API/Globe → Logic/Tool → MCP Server → Foundational Model
*/
const McpToolsIcon = ({ className = "w-full h-32" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* API / Globe Connection */}
    <circle cx="45" cy="55" r="20" fill="currentColor" fillOpacity="0.05" />
    <ellipse cx="45" cy="55" rx="8" ry="20" />
    <path d="M25 55h40" />

    {/* Arrow */}
    <path d="M75 55h25M90 45l10 10-10 10" />

    {/* Logic / Tool Node */}
    <rect x="115" y="30" width="50" height="50" rx="10" />
    <path d="M130 50h20M130 60h10" />
    <circle cx="140" cy="40" r="3" fill="currentColor" />

    {/* Arrow */}
    <path d="M175 55h25M190 45l10 10-10 10" />

    {/* MCP Server / Integration */}
    <rect x="215" y="25" width="45" height="60" rx="6" fill="currentColor" fillOpacity="0.05" />
    <line x1="225" y1="40" x2="250" y2="40" />
    <line x1="225" y1="55" x2="250" y2="55" />
    <line x1="225" y1="70" x2="250" y2="70" />
    <circle cx="225" cy="40" r="2" fill="currentColor" />
    <circle cx="225" cy="55" r="2" fill="currentColor" />
    <circle cx="225" cy="70" r="2" fill="currentColor" />

    {/* Arrow */}
    <path d="M275 55h25M290 45l10 10-10 10" />

    {/* Foundational Model / Claude */}
    <path d="M350 25c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z" fill="currentColor" fillOpacity="0.05" />
    <circle cx="340" cy="48" r="3" fill="currentColor" />
    <circle cx="360" cy="48" r="3" fill="currentColor" />
    <path d="M340 65c5 5 15 5 20 0" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════
   FLOW MAP — connects capability IDs to their SVG diagrams
   ═══════════════════════════════════════════════════════════════ */
const flowMap: Record<string, React.ComponentType<{ className?: string }>> = {
  rag: RagSystemIcon,
  text2sql: Text2SqlIcon,
  "multi-agent": MultiAgentIcon,
  financial: FinanceMlIcon,
  mcp: McpToolsIcon,
};

/* ── Single Capability Card ───────────────────────────────────── */
function CapabilityCard({
  cap,
}: {
  cap: (typeof siteConfig.capabilities)[number];
}) {
  const [expanded, setExpanded] = useState(false);
  const FlowDiagram = flowMap[cap.id] || RagSystemIcon;

  return (
    <motion.div
      className="info-card px-4 py-3.5 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      id={`capability-${cap.id}`}
    >
      {/* Header row: Title + Interactive badge */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-[13px] font-extrabold text-gray-900 uppercase leading-tight tracking-wide">
          {cap.title}
        </h3>
        <button
          className="badge-interactive shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          Interactive
          <ChevronDown
            size={10}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Flow diagram — Gemini's custom SVG infographics */}
      <FlowDiagram className="w-full h-28 text-gray-500 my-1" />

      {/* Subtitle */}
      <p className="text-[12px] text-gray-500 mb-2 leading-relaxed">
        {cap.subtitle}.
      </p>

      {/* Learn More link */}
      <div className="flex justify-end">
        <span className="learn-more">
          Learn More <ChevronDown size={10} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
        </span>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-2 border-t border-gray-100">
              <ul className="details-list space-y-1">
                {cap.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Capabilities Section ─────────────────────────────────────── */
export default function CapabilitiesSection() {
  return (
    <section className="px-5 pb-4" id="capabilities">
      <div className="space-y-3">
        {siteConfig.capabilities.map((cap) => (
          <CapabilityCard key={cap.id} cap={cap} />
        ))}
      </div>
    </section>
  );
}
