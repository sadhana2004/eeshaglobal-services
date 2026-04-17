// src/components/Graduates.tsx
import React from "react";
import SidebarCard from "./SidebarCard";
import { BookOpen, FileText, Award, Target } from "lucide-react";

// Using the hero image you uploaded (local path)
import heroImage from "../assets/Graduates.png";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

export default function Graduates(): JSX.Element {
  const cards = [
    {
      icon: BookOpen,
      title: "Masters (MS / MA / MCom)",
      description:
        "Research & taught programs across engineering, business, arts and more.",
    },
    {
      icon: FileText,
      title: "Scholarship Search & Applications",
      description:
        "We help identify scholarships, prepare persuasive applications and SOPs.",
    },
    {
      icon: Award,
      title: "PG Diplomas & Short Courses",
      description:
        "Fast-track courses for quicker international exposure and job readiness.",
    },
    {
      icon: Target,
      title: "Research & PhD Guidance",
      description:
        "Supervisor search, proposal review and application support.",
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
          className="w-full h-full flex flex-col justify-center px-6 md:px-24 text-white"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.62), rgba(0,0,0,0.28))",
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            Your next step: Masters, Scholarships & Global Opportunities
          </h1>
          <p className="mt-2 text-sm max-w-xl">
            Tailored admission support, scholarship search and step-by-step guidance for fresh graduates.
          </p>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="px-4 md:px-6 py-3 rounded text-sm text-white font-semibold shadow-md transition-all"
              style={{
                background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
              }}
            >
              Start Application
            </button>

            <a
              href="/services"
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
              Find Programs
            </a>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* main content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Top Programs & Destinations</h2>

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
                    /* green border + lift on hover */
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

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Application Support</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>✔ SOP & LOR review and editing</li>
            <li>✔ Resume for academia & industry</li>
            <li>✔ Document checklist & verification</li>
            <li>✔ Mock interviews and admission strategy</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Timeline & Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-white border rounded-lg" style={{ borderColor: "rgba(13,110,253,0.12)" }}>
              <h4 className="font-semibold">Pre-Application</h4>
              <p className="text-gray-600 mt-1">Tests, transcripts, and profile prep.</p>
            </div>

            <div className="p-4 bg-white border rounded-lg" style={{ borderColor: "rgba(13,110,253,0.12)" }}>
              <h4 className="font-semibold">Application Phase</h4>
              <p className="text-gray-600 mt-1">SOP, LOR, document submission & follow-ups.</p>
            </div>

            <div className="p-4 bg-white border rounded-lg" style={{ borderColor: "rgba(13,110,253,0.12)" }}>
              <h4 className="font-semibold">Post-Offer</h4>
              <p className="text-gray-600 mt-1">Acceptance, scholarship processing & visa help.</p>
            </div>
          </div>
        </div>

        {/* right sidebar */}
        <SidebarCard
          title="Graduate Services"
          processing="4-10 weeks (admissions & scholarships)"
          type="graduate"
          stats={{ placed: 800, partners: 120 }}
          brochureUrl="/assets/graduates-brochure.pdf"
        />
      </div>
    </div>
  );
}
