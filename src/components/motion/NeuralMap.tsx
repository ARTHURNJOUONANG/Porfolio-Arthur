"use client";

import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import { Portrait } from "../ui/Portrait";

type Node = {
  id: string;
  href: string;
  x: number;
  y: number;
  label: string;
  size?: "core" | "md" | "sm";
};

export function NeuralMap({ dict }: { dict: Dictionary }) {
  const nodes: Node[] = [
    { id: "core", href: "/about", x: 50, y: 48, label: "Arthur", size: "core" },
    { id: "about", href: "/about", x: 50, y: 16, label: dict.nav.about, size: "md" },
    { id: "projects", href: "/projects", x: 80, y: 32, label: dict.nav.projects, size: "md" },
    { id: "skills", href: "/skills", x: 78, y: 68, label: dict.nav.skills, size: "md" },
    { id: "contact", href: "/contact", x: 22, y: 68, label: dict.nav.contact, size: "md" },
    { id: "experience", href: "/experience", x: 20, y: 32, label: dict.nav.experience, size: "md" },
    { id: "cv", href: "/cv", x: 14, y: 50, label: dict.nav.cv, size: "md" },
    { id: "ia", href: "/skills#ia", x: 50, y: 84, label: "IA", size: "md" },
    { id: "careerai", href: "/projects/careerai", x: 68, y: 14, label: "CareerAI", size: "sm" },
    { id: "crm", href: "/projects/crm", x: 90, y: 46, label: "CRM", size: "sm" },
    { id: "compta", href: "/projects/compta-pilot", x: 88, y: 62, label: "Compta Pilot", size: "sm" },
    { id: "protech", href: "/projects/protech-occitanie", x: 66, y: 52, label: "ProTech", size: "sm" },
    { id: "symfo", href: "/projects/symfoconnect", x: 36, y: 90, label: "SymfoConnect", size: "sm" },
    { id: "treevas", href: "/projects/treevas-agents", x: 64, y: 86, label: "Treevas", size: "sm" },
  ];

  const core = nodes[0];
  const satellites = nodes.slice(1);

  return (
    <section className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-10" aria-label={dict.brain.title}>
      <p className="mb-6 text-center text-sm text-mute">{dict.brain.hint}</p>
      <div className="neural-stage">
        <div className="neural-glow" aria-hidden="true" />
        <div className="neural-board">
          <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {satellites.map((node) => (
              <line
                key={node.id}
                className="neural-link"
                x1={core.x}
                y1={core.y}
                x2={node.x}
                y2={node.y}
              />
            ))}
          </svg>
          {nodes.map((node, index) => (
            <div
              key={node.id}
              className="neuron-slot"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <Link
                href={node.href}
                className={`neuron neuron-${node.size ?? "md"} neuron-float-${index % 4}`}
                title={`${dict.brain.hint.replace(/\.$/, "")} — ${node.label}`}
              >
                {node.size === "core" ? <Portrait size="core" /> : <span className="neuron-dot" />}
                <span className="neuron-label">{node.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
