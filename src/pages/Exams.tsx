// src/pages/Exams.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Clock, Award } from "lucide-react";

// Import exam images
import ieltsImg from "@/assets/IELTS.png";
import toeflImg from "@/assets/TOEFL.png";
import greImg from "@/assets/GRE.png";
import gmatImg from "@/assets/GMAT.png";
import pteImg from "@/assets/PTE.png";
import satImg from "@/assets/SAT.png";

// Fallback image
import fallbackImg from "@/assets/study-abroad.jpg";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

const exams = [
  {
    slug: "ielts",
    title: "IELTS",
    subtitle: "International English Language Testing System",
    duration: "2 hours 45 minutes",
    score: "Band Score 0–9",
    image: ieltsImg,
    description:
      "IELTS tests English proficiency for education, work, and migration with real-world listening, reading, writing, and speaking tasks.",
  },
  {
    slug: "toefl",
    title: "TOEFL",
    subtitle: "Test of English as a Foreign Language",
    duration: "3 hours",
    score: "Score: 0–120",
    image: toeflImg,
    description:
      "TOEFL measures your ability to use English in academic settings and is accepted by 11,000+ universities worldwide.",
  },
  {
    slug: "gre",
    title: "GRE",
    subtitle: "Graduate Record Examination",
    duration: "3 hours 45 minutes",
    score: "130–170 + AWA",
    image: greImg,
    description:
      "GRE evaluates analytical writing, quantitative reasoning, and verbal reasoning for graduate-level admissions.",
  },
  {
    slug: "gmat",
    title: "GMAT",
    subtitle: "Graduate Management Admission Test",
    duration: "3 hours 30 minutes",
    score: "200–800",
    image: gmatImg,
    description:
      "GMAT is used for business school admissions and tests critical reasoning, data interpretation, and analytical skills.",
  },
  {
    slug: "pte",
    title: "PTE",
    subtitle: "Pearson Test of English (Academic)",
    duration: "3 hours",
    score: "Score: 10–90",
    image: pteImg,
    description:
      "PTE Academic is an AI-scored English test offering fast results and evaluates speaking, writing, reading, and listening.",
  },
  {
    slug: "sat",
    title: "SAT",
    subtitle: "Scholastic Assessment Test",
    duration: "3 hours (4 hours w/ essay)",
    score: "400–1600",
    image: satImg,
    description:
      "SAT evaluates reading, writing, and math skills and is widely used for undergraduate admissions worldwide.",
  },
];

export default function Exams() {
  return (
    <div className="min-h-screen bg-[#F3F8FF] text-[#0b1f3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1f3b]">
            Exams & Test Preparation
          </h1>
          <p className="text-sm text-[#475569] mt-2 max-w-2xl">
            Comprehensive coaching for international exams
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exams.map((e) => (
            <article
              key={e.slug}
              className="group bg-white rounded-xl border shadow-sm overflow-hidden transition-all"
              style={{ borderColor: "rgba(13,110,253,0.08)" }}
            >
              {/* Banner */}
              <div className="h-40 md:h-44 lg:h-48 relative overflow-hidden">
                <img
                  src={e.image || fallbackImg}
                  alt={e.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(ev) => {
                    const img = ev.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = fallbackImg;
                  }}
                />

                {/* Label */}
                <div className="absolute left-4 top-4 bg-white/90 rounded-md px-3 py-1 text-xs font-semibold text-[#0b1f3b] shadow">
                  {e.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-[#0b1f3b]">
                  {e.subtitle}
                </h3>
                <p className="text-sm text-[#64748b] mt-2 line-clamp-3">
                  {e.description}
                </p>

                {/* Info */}
                <div className="mt-4 border-t border-[#eef4ff] pt-4 flex items-center justify-between text-sm text-[#475569]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#94a3b8]" />
                    <span>{e.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#94a3b8]" />
                    <span>{e.score}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4">
                  <Link
                    to={`/exam/${e.slug}`}
                    className="inline-block w-full text-center text-white py-2 rounded-lg text-sm font-medium shadow transition"
                    style={{
                      background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Hover style */}
              <style>{`
                .group:hover {
                  transform: translateY(-6px);
                  box-shadow: 0 18px 45px rgba(52,168,83,0.08);
                  border-color: rgba(52,168,83,0.4) !important;
                }
              `}</style>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
