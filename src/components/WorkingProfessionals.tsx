// src/components/WorkingProfessionals.tsx
import React from "react";
import SidebarCard from "./SidebarCard";

import { Briefcase, Globe, Layers, Users } from "lucide-react";
import heroImage from "../assets/WorkingProfessionals.png";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

export default function WorkingProfessionals(): JSX.Element {

  const cards = [
    {
      icon: Briefcase,
      title: "Executive / Global MBA",
      description:
        "Designed for professionals seeking leadership roles and global exposure.",
    },
    {
      icon: Globe,
      title: "Work Visa & PR Pathways",
      description:
        "End-to-end guidance for skilled worker visas and international relocation.",
    },
    {
      icon: Layers,
      title: "Skill Enhancement Courses",
      description:
        "Programs in AI, Cloud, Data Science, Cybersecurity & more.",
    },
    {
      icon: Users,
      title: "Employer Connect & Placement",
      description:
        "Interview prep, resume optimization and employer introductions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <div
        className="h-56 md:h-72 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div
          className="w-full h-full flex flex-col justify-center px-8 md:px-24 text-white"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.62), rgba(0,0,0,0.28))",
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            Upskill. Advance. Move Abroad.
          </h1>
          <p className="mt-2 text-sm max-w-xl">
            Personalized guidance for working professionals seeking global education,
            skill upgrades, and international work opportunities.
          </p>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="px-4 md:px-6 py-3 rounded text-sm text-white font-semibold shadow-md transition-all"
              style={{
                background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
              }}
            >
              Book Free Consultation
            </button>

            <a
              href="/visa-services#work"
              className="px-4 md:px-6 py-3 rounded text-sm font-semibold transition-all border"
              style={{
                background: "white",
                color: BLUE,
                borderColor: BLUE,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = GREEN;
                (e.currentTarget as HTMLElement).style.borderColor = GREEN;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = BLUE;
                (e.currentTarget as HTMLElement).style.borderColor = BLUE;
              }}
            >
              Explore Work Visa Pathways
            </a>
          </div>
        </div>
      </div>

      {/* CONTENT + SIDEBAR */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* main content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Career Advancement Programs
          </h2>

          {/* SERVICE CARDS (same as Graduates.tsx style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white p-5 rounded-lg border transition-all shadow-sm"
                  style={{ borderColor: "rgba(13,110,253,0.08)" }}
                >
                  <div
                    className="p-4 rounded-lg w-fit mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))",
                    }}
                  >
                    <Icon className="h-8 w-8 text-blue-600 transition-colors duration-200 group-hover:text-green-600" />
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900">{c.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{c.description}</p>

                  <style>{`
                    .group:hover {
                      transform: translateY(-6px);
                      box-shadow: 0 18px 45px rgba(52,168,83,0.06);
                      border-color: rgba(52,168,83,0.35) !important;
                    }
                    .group:hover svg {
                      color: ${GREEN} !important;
                    }
                  `}</style>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
            Why Professionals Choose Us
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>✔ Tailored pathways for 1–15 years experience</li>
            <li>✔ Assistance with Resume, LinkedIn & SOP crafting</li>
            <li>✔ Faster application and visa processing</li>
            <li>✔ Partnerships with 100+ global universities & employers</li>
          </ul>

          {/* Process */}
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-white border rounded-lg" style={{ borderColor: "rgba(13,110,253,0.12)" }}>
              <h4 className="font-semibold">Profile Assessment</h4>
              <p className="text-gray-600 mt-1">We evaluate your experience & goals.</p>
            </div>

            <div className="p-4 bg-white border rounded-lg" style={{ borderColor: "rgba(13,110,253,0.12)" }}>
              <h4 className="font-semibold">Career Roadmap</h4>
              <p className="text-gray-600 mt-1">We build a step-by-step plan for you.</p>
            </div>

            <div className="p-4 bg-white border rounded-lg" style={{ borderColor: "rgba(13,110,253,0.12)" }}>
              <h4 className="font-semibold">Apply & Move</h4>
              <p className="text-gray-600 mt-1">We help with applications & visas.</p>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <SidebarCard
          title="Professional Services"
          processing="4-8 weeks (Visa)"
          type="working professional"
          stats={{ placed: 1200, partners: 100 }}
          brochureUrl="/assets/working-pro-brochure.pdf"
        />
      </div>
    </div>
  );
}
