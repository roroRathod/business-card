"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Database, Globe, MessageSquare, Mic, Code, Workflow } from "lucide-react";

interface NetworkNode {
  id: string;
  label: string;
  icon: React.ElementType;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface Connection {
  from: string;
  to: string;
}

const nodes: NetworkNode[] = [
  { id: "orchestrator", label: "Orchestrator", icon: Workflow, x: 50, y: 16, size: 44, delay: 0 },
  { id: "rag", label: "RAG Engine", icon: Cpu, x: 18, y: 38, size: 38, delay: 0.1 },
  { id: "text2sql", label: "Text2SQL", icon: Database, x: 82, y: 38, size: 38, delay: 0.15 },
  { id: "voice", label: "Voice Agent", icon: Mic, x: 15, y: 62, size: 34, delay: 0.2 },
  { id: "text", label: "Text Agent", icon: MessageSquare, x: 50, y: 55, size: 34, delay: 0.25 },
  { id: "mcp", label: "MCP Server", icon: Code, x: 85, y: 62, size: 34, delay: 0.3 },
  { id: "channels", label: "Omni-channels", icon: Globe, x: 50, y: 80, size: 40, delay: 0.35 },
];

const connections: Connection[] = [
  { from: "orchestrator", to: "rag" },
  { from: "orchestrator", to: "text2sql" },
  { from: "orchestrator", to: "text" },
  { from: "rag", to: "voice" },
  { from: "text2sql", to: "mcp" },
  { from: "voice", to: "channels" },
  { from: "text", to: "channels" },
  { from: "mcp", to: "channels" },
  { from: "rag", to: "text" },
];

function getNodePos(nodeId: string): { x: number; y: number } {
  const node = nodes.find((n) => n.id === nodeId);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
}

export default function NetworkModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Bottom sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[88vh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className="bg-white rounded-t-3xl border-t border-x border-gray-200 overflow-hidden shadow-xl">
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-gray-200" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-3">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">
                    System Architecture
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Multi-agent network topology
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  id="close-network-modal"
                >
                  <X size={14} className="text-gray-400" />
                </button>
              </div>

              {/* Network Diagram */}
              <div className="px-4 pb-6">
                <div className="relative w-full aspect-square max-w-[360px] mx-auto info-card overflow-hidden p-4">
                  {/* Background grid */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f3f4f6" strokeWidth="0.4" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {connections.map((conn, i) => {
                      const from = getNodePos(conn.from);
                      const to = getNodePos(conn.to);
                      return (
                        <line
                          key={i}
                          x1={from.x}
                          y1={from.y}
                          x2={to.x}
                          y2={to.y}
                          stroke="#d1d5db"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      );
                    })}
                  </svg>

                  {/* Nodes */}
                  {nodes.map((node) => (
                    <motion.div
                      key={node.id}
                      className="absolute flex flex-col items-center gap-1"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: node.delay + 0.3,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div
                        className="rounded-full flex items-center justify-center border-[1.5px] border-gray-300 bg-white relative z-10"
                        style={{ width: node.size, height: node.size }}
                      >
                        <node.icon
                          size={node.size * 0.4}
                          className="text-gray-500"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-[7px] font-semibold text-gray-400 whitespace-nowrap relative z-10 tracking-wide uppercase">
                        {node.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-4 grid grid-cols-2 gap-2 px-2">
                  {[
                    { label: "Orchestration Layer" },
                    { label: "RAG & Retrieval" },
                    { label: "Data Agents" },
                    { label: "Communication" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-[10px] text-gray-400">
                      <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
