// src/pages/ExamDetails.tsx

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// === IMPORT HERO IMAGES FOR EACH EXAM ===
import heroIELTS from "@/assets/IELTS.png";
import heroTOEFL from "@/assets/TOEFL.png";
import heroGRE from "@/assets/GRE.png";
import heroGMAT from "@/assets/GMAT.png";
import heroPTE from "@/assets/PTE.png";
import heroSAT from "@/assets/SAT.png";

// === DATA MODEL ===
interface ExamData {
  title: string;
  longTitle: string;
  hero: string;
  overview: string;
  format: string[];
  preparation: string[];
  key: {
    duration: string;
    score: string;
    validity?: string;
  };
}

// === THEME COLORS ===
const BLUE = "#0D6EFD";
const GREEN = "#34A853";

// === ALL EXAM DATA WITH HERO IMAGES ===
const EXAM_DATA: Record<string, ExamData> = {
  ielts: {
    title: "IELTS",
    longTitle: "International English Language Testing System",
    hero: heroIELTS,
    overview:
      "IELTS is the world's most popular English language proficiency test accepted for education, work, and migration by over 11,000 organizations worldwide.",
    format: [
      "Listening — 30 minutes",
      "Reading — 60 minutes",
      "Writing — 60 minutes",
      "Speaking — 11–14 minutes",
    ],
    preparation: [
      "Practice all four modules regularly",
      "Take mock tests under timed conditions",
      "Read English newspapers and academic articles",
      "Watch English movies and documentaries",
      "Join IELTS preparation courses",
      "Focus on vocabulary building",
      "Practice speaking with native speakers",
    ],
    key: {
      duration: "2 hours 45 minutes",
      score: "Band Score 0–9",
      validity: "2 years",
    },
  },

  toefl: {
    title: "TOEFL",
    longTitle: "Test of English as a Foreign Language",
    hero: heroTOEFL,
    overview:
      "TOEFL is a standardized English proficiency exam widely used for university admissions across the world.",
    format: [
      "Reading — 54–72 minutes",
      "Listening — 41–57 minutes",
      "Speaking — 17 minutes",
      "Writing — 50 minutes",
    ],
    preparation: [
      "Practice integrated speaking tasks",
      "Improve listening through podcasts",
      "Take computer-based mock tests",
      "Practice academic writing tasks",
    ],
    key: {
      duration: "3 hours",
      score: "0 – 120",
      validity: "2 years",
    },
  },

  gre: {
    title: "GRE",
    longTitle: "Graduate Record Examination",
    hero: heroGRE,
    overview:
      "GRE is widely accepted for MS, MBA, and PhD programs globally, assessing quantitative, verbal, and analytical skills.",
    format: [
      "Analytical Writing — 60 minutes",
      "Verbal Reasoning — 30 minutes",
      "Quantitative Reasoning — 35 minutes",
    ],
    preparation: [
      "Strengthen quantitative fundamentals",
      "Build strong vocabulary",
      "Practice AWA essays",
      "Solve GRE-style mock tests",
    ],
    key: {
      duration: "3 hours 45 minutes",
      score: "130–170",
      validity: "5 years",
    },
  },

  gmat: {
    title: "GMAT",
    longTitle: "Graduate Management Admission Test",
    hero: heroGMAT,
    overview:
      "GMAT is used globally for MBA and business school admissions, testing analytical, quantitative, and verbal reasoning.",
    format: [
      "AWA — 30 minutes",
      "Integrated Reasoning — 30 minutes",
      "Quantitative — 62 minutes",
      "Verbal — 65 minutes",
    ],
    preparation: [
      "Strengthen data interpretation",
      "Practice quant problem solving",
      "Improve reading comprehension",
      "Take adaptive mock tests",
    ],
    key: {
      duration: "3 hours 30 minutes",
      score: "200–800",
      validity: "5 years",
    },
  },

  pte: {
    title: "PTE",
    longTitle: "Pearson Test of English",
    hero: heroPTE,
    overview:
      "PTE Academic is a computer-based English exam accepted worldwide for admissions, migration, and work visas.",
    format: [
      "Speaking & Writing — 54–67 minutes",
      "Reading — 29–30 minutes",
      "Listening — 30–43 minutes",
    ],
    preparation: [
      "Practice with computer-based speaking tools",
      "Improve writing structure",
      "Listen to academic audio samples",
      "Solve full-length mock tests",
    ],
    key: {
      duration: "3 hours",
      score: "10–90",
      validity: "2 years",
    },
  },

  sat: {
    title: "SAT",
    longTitle: "Scholastic Assessment Test",
    hero: heroSAT,
    overview:
      "The SAT is widely used for undergraduate admissions and evaluates reading, writing, and mathematical skills.",
    format: ["Reading", "Writing", "Math"],
    preparation: [
      "Practice algebra & geometry",
      "Improve reading comprehension",
      "Solve past SAT papers",
      "Take full-length mock tests",
    ],
    key: {
      duration: "3 hours",
      score: "400–1600",
    },
  },
};

// === MAIN PAGE COMPONENT ===
export default function ExamDetails() {
  const { exam } = useParams();
  const key = (exam || "").toLowerCase();
  const navigate = useNavigate();

  const data = EXAM_DATA[key];

  if (!data) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Exam not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F8FF] text-[#0b1f3b]">
      {/* HERO SECTION */}
      <div
        className="w-full h-72 md:h-96 bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${data.hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <Link
            to="/exams"
            className="inline-flex items-center gap-2 mb-4 text-sm bg-white/20 px-3 py-1 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Exams
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold">{data.longTitle}</h1>

          <p className="max-w-3xl mt-4 text-white/90 text-sm md:text-base">
            {data.overview}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-10 lg:grid-cols-3">
        {/* LEFT CONTENT */}
        <section className="lg:col-span-2 space-y-10">
          {/* Exam Format */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Exam Format</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {data.format.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl border p-4 transition-all shadow-sm"
                  style={{ borderColor: "rgba(13,110,253,0.08)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="p-3 rounded-lg w-fit flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${BLUE}22, ${GREEN}10)`,
                      }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0b1f3b] transition-colors group-hover:text-[${GREEN}]" />
                    </div>

                    <div>
                      <div className="font-medium text-[#0b1f3b]">{item}</div>
                      <div className="text-sm text-[#64748b]">Key section</div>
                    </div>
                  </div>

                  <style>{`
                    .group:hover {
                      transform: translateY(-6px);
                      box-shadow: 0 18px 45px rgba(52,168,83,0.06);
                      border-color: rgba(52,168,83,0.35) !important;
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Tips */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Preparation Tips</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {data.preparation.map((tip, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl border p-4 transition-all shadow-sm flex items-start gap-3"
                  style={{ borderColor: "rgba(13,110,253,0.08)" }}
                >
                  <div
                    className="p-3 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE}22, ${GREEN}10)`,
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0b1f3b]" />
                  </div>

                  <div className="text-sm text-[#1e293b]">{tip}</div>

                  <style>{`
                    .group:hover {
                      transform: translateY(-6px);
                      box-shadow: 0 18px 45px rgba(52,168,83,0.06);
                      border-color: rgba(52,168,83,0.35) !important;
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT SIDE DETAILS CARD */}
        <aside>
          <div
            className="bg-white shadow-md border rounded-2xl p-6 sticky top-24"
            style={{ borderColor: "rgba(13,110,253,0.06)" }}
          >
            <h3 className="text-lg font-semibold mb-4">Exam Details</h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium">{data.key.duration}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Score Range</span>
                <span className="font-medium">{data.key.score}</span>
              </div>

              {data.key.validity && (
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Validity</span>
                  <span className="font-medium">{data.key.validity}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 w-full py-2 rounded-lg text-sm font-medium text-white transition shadow"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
            >
              Register for Coaching
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
