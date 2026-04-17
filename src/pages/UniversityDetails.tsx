// src/pages/UniversityDetails.tsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Hero images per university
import heroHarvard from "@/assets/Harvard.png";
import herostanforduniversity from "@/assets/Stanford University.png";
import heroanu from "@/assets/ANU.png";
import heroez from "@/assets/EZ.png";
import heroicl from "@/assets/ICL.png";
import heromit from "@/assets/MIT.png";
import heromu from "@/assets/MU.png";
import heronus from "@/assets/NUS.png";
import herotum from "@/assets/TUM.png";
import heroum from "@/assets/UM.png";
import herouobc from "@/assets/UOBC.png";
import herouoc from "@/assets/UOC.png";
import herouoo from "@/assets/UOO.png";
import herouot from "@/assets/UOT.png";

import heroDefault from "@/assets/hero-students.png";

type Uni = {
  id: string;
  title: string;
  country: string;
  location?: string;
  short: string;
  fees?: string;
  programs?: string[];
  ranking?: string;
  acceptanceRate?: string;
};

// ******** HERO MAP ********
const HERO_MAP: Record<string, string> = {
  harvard: heroHarvard,
  mit: heromit,
  stanford: herostanforduniversity,
  oxford: herouoo,
  cambridge: herouoc,
  imperial: heroicl,
  utoronto: herouot,
  ubc: herouobc,
  mcgill: heroum,
  melbourne: heromu,
  anu: heroanu,
  ethz: heroez,
  tum: herotum,
  nus: heronus,
};

const UNIVERSITY_DATA: Uni[] = [
  {
    id: "harvard",
    title: "Harvard University",
    country: "United States",
    location: "Cambridge, Massachusetts",
    short:
      "Established in 1636, Harvard is one of the most prestigious universities in the world, known for its rigorous academic programs and influential alumni network.",
    fees: "$55,000 - $65,000/year",
    programs: ["Business", "Law", "Engineering", "Arts & Sciences", "Medicine"],
    ranking: "#1",
    acceptanceRate: "3.4%",
  },
  {
    id: "mit",
    title: "Massachusetts Institute of Technology (MIT)",
    country: "United States",
    location: "Cambridge, Massachusetts",
    short:
      "A world leader in engineering, computer science, and innovation with strong industry collaborations and entrepreneurship focus.",
    fees: "$50,000 - $60,000/year",
    programs: ["Engineering", "Computer Science", "Management", "Physics"],
    ranking: "#2",
    acceptanceRate: "4.0%",
  },
  {
    id: "stanford",
    title: "Stanford University",
    country: "United States",
    location: "Stanford, California",
    short:
      "Located in Silicon Valley, famous for entrepreneurship, tech innovation, and close ties to industry and startups.",
    fees: "$55,000 - $65,000/year",
    programs: ["Computer Science", "Engineering", "Business", "Humanities"],
    ranking: "#3",
    acceptanceRate: "4.3%",
  },
  {
    id: "oxford",
    title: "University of Oxford",
    country: "United Kingdom",
    location: "Oxford, England",
    short:
      "Historic colleges and tutorials — Oxford is globally renowned for academic excellence across many disciplines.",
    fees: "£20,000 - £45,000/year",
    programs: ["Humanities", "Law", "Medicine", "Sciences"],
    ranking: "#4",
    acceptanceRate: "17%",
  },
  {
    id: "cambridge",
    title: "University of Cambridge",
    country: "United Kingdom",
    location: "Cambridge, England",
    short:
      "Renowned for research and teaching excellence with a strong tradition in STEM and the arts alike.",
    fees: "£20,000 - £45,000/year",
    programs: ["Engineering", "Sciences", "Arts & Humanities", "Business"],
    ranking: "#5",
    acceptanceRate: "21%",
  },
  {
    id: "imperial",
    title: "Imperial College London",
    country: "United Kingdom",
    location: "London, England",
    short:
      "A leading science, engineering, medicine and business university with strong global rankings and research output.",
    fees: "£22,000 - £45,000/year",
    programs: ["Engineering", "Medicine", "Computing", "Business"],
    ranking: "#6",
    acceptanceRate: "14%",
  },
  {
    id: "utoronto",
    title: "University of Toronto",
    country: "Canada",
    location: "Toronto, Ontario",
    short:
      "Canada’s top-ranked university, known for diverse programs, cutting-edge research and strong industry links.",
    fees: "CAD 40,000 - 60,000/year",
    programs: ["Computer Science", "Engineering", "Business", "Medicine"],
    ranking: "#7",
    acceptanceRate: "43%",
  },
  {
    id: "ubc",
    title: "University of British Columbia",
    country: "Canada",
    location: "Vancouver, British Columbia",
    short:
      "A globally-recognized institution offering strong research programs and beautiful campus locations.",
    fees: "CAD 30,000 - 55,000/year",
    programs: ["Forestry", "Engineering", "Computer Science", "Life Sciences"],
    ranking: "#8",
    acceptanceRate: "52%",
  },
  {
    id: "mcgill",
    title: "McGill University",
    country: "Canada",
    location: "Montreal, Quebec",
    short:
      "Located in Montreal, known for medical research, global student community and a strong academic reputation.",
    fees: "CAD 30,000 - 50,000/year",
    programs: ["Medicine", "Engineering", "Arts & Science", "Management"],
    ranking: "#9",
    acceptanceRate: "46%",
  },
  {
    id: "melbourne",
    title: "University of Melbourne",
    country: "Australia",
    location: "Parkville, Melbourne",
    short:
      "Australia’s top university with high-quality education, strong research and excellent graduate employability.",
    fees: "AUD 30,000 - 50,000/year",
    programs: ["Engineering", "Business", "Arts & Science", "Medicine"],
    ranking: "#10",
    acceptanceRate: "30%",
  },
  {
    id: "anu",
    title: "Australian National University",
    country: "Australia",
    location: "Canberra, ACT",
    short:
      "Renowned for research excellence, policy studies and strong graduate outcomes across STEM and humanities.",
    fees: "AUD 28,000 - 48,000/year",
    programs: ["Policy", "Science", "Engineering", "Arts & Social Sciences"],
    ranking: "#11",
    acceptanceRate: "35%",
  },
  {
    id: "ethz",
    title: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich",
    short:
      "World-leading STEM and engineering university with top-tier research and close industry partnerships.",
    fees: "Varies (often low tuition + living costs)",
    programs: ["Engineering", "Computer Science", "Architecture"],
    ranking: "#12",
    acceptanceRate: "27%",
  },
  {
    id: "tum",
    title: "Technical University of Munich (TUM)",
    country: "Germany",
    location: "Munich",
    short:
      "Germany’s top technical university specializing in engineering, technology and applied sciences with strong industry ties.",
    fees: "Low / nominal tuition (public universities)",
    programs: ["Engineering", "Computer Science", "Natural Sciences"],
    ranking: "#13",
    acceptanceRate: "48%",
  },
  {
    id: "nus",
    title: "National University of Singapore (NUS)",
    country: "Singapore",
    location: "Singapore",
    short:
      "Asia’s leading university — strong in engineering, computing, business and a global research footprint.",
    fees: "SGD 30,000 - 50,000/year",
    programs: ["Engineering", "Business", "Computer Science", "Life Sciences"],
    ranking: "#14",
    acceptanceRate: "7%",
  },
];

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

export default function UniversityDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const uni = UNIVERSITY_DATA.find((u) => u.id === (id || "").toLowerCase());

  if (!uni) {
    return (
      <div className="min-h-screen bg-[#F3F8FF] text-[#0b1f3b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
          <h2 className="text-2xl font-semibold">University not found</h2>
          <p className="text-sm text-[#64748b] mt-2">
            We couldn't find the university you're looking for.
          </p>
          <div className="mt-6">
            <Link
              to="/study-abroad"
              className="inline-block px-4 py-2 rounded-full text-white font-medium"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
            >
              Back to Study Abroad
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const heroImage = HERO_MAP[uni.id] || heroDefault;

  return (
    <div className="min-h-screen bg-[#fbfdff] text-[#0b1f3b]">
      {/* HERO */}
      <div
        className="w-full h-64 md:h-72 lg:h-96 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
          <div className="bg-black/40 rounded-xl p-4 md:p-6 max-w-3xl">
            <Link
              to="/study-abroad"
              className="inline-flex items-center gap-2 text-white text-sm mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Study Abroad
            </Link>

            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {uni.title}
            </h1>

            <p className="text-sm text-white/90 mt-2">{uni.short}</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14 grid gap-8 lg:grid-cols-3">
        {/* Left / main content */}
        <section className="lg:col-span-2 space-y-6">
          {/* About */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="text-sm text-[#475569]">{uni.short}</p>
          </div>

          {/* Programs offered — services-style cards */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Programs Offered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(uni.programs ?? []).map((p, idx) => (
                <article
                  key={p + idx}
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
                    {/* simple icon using initials */}
                    <div className="h-8 w-8 flex items-center justify-center font-semibold text-[#0b1f3b]">
                      {p.split(" ").slice(0,2).map(w => w[0]).join("").toUpperCase()}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#0b1f3b] mb-2">{p}</h3>
                  <p className="text-sm text-[#475569]">Top curriculum, industry-aligned content and strong placement support.</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-[#64748b]">Duration & pathways vary</div>
                  </div>

                  <style>{`
                    .group:hover {
                      transform: translateY(-6px);
                      box-shadow: 0 18px 45px rgba(52,168,83,0.06);
                      border-color: rgba(52,168,83,0.35) !important;
                    }
                    .group:hover div svg, .group:hover div div {
                      color: ${GREEN} !important;
                    }
                  `}</style>
                </article>
              ))}
            </div>
          </div>

          {/* Additional sections: Research, Admissions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Research & Campus</h2>
            <p className="text-sm text-[#475569]">
              {uni.title} is known for its research strengths and strong industry collaborations. Campus life varies by campus — check specific program pages for housing, student services and clubs.
            </p>

            <h2 className="text-2xl font-semibold">Admissions & Application Tips</h2>
            <ul className="list-disc list-inside text-[#475569] space-y-2">
              <li>Prepare transcripts, letters of recommendation and a strong statement of purpose.</li>
              <li>Check program-specific prerequisites and deadlines (Rolling / Fall / Spring intakes).</li>
              <li>Standardized test score submissions may be required for some programs.</li>
            </ul>
          </div>
        </section>

        {/* Right aside: Quick Facts */}
        <aside className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-[#eef6ff] shadow-sm sticky top-24">
            <h3 className="font-semibold mb-3">Quick Facts</h3>

            <div className="divide-y divide-[#f1f5f9]">
              <div className="py-3 flex justify-between text-sm">
                <span className="text-[#64748b]">World Ranking</span>
                <span className="font-medium">{uni.ranking ?? "—"}</span>
              </div>

              <div className="py-3 flex justify-between text-sm">
                <span className="text-[#64748b]">Tuition Range</span>
                <span className="font-medium">{uni.fees ?? "Varies"}</span>
              </div>

              <div className="py-3 flex justify-between text-sm">
                <span className="text-[#64748b]">Acceptance Rate</span>
                <span className="font-medium">{uni.acceptanceRate ?? "Varies"}</span>
              </div>

              <div className="py-3 flex justify-between text-sm">
                <span className="text-[#64748b]">Country</span>
                <span className="font-medium">{uni.country}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-white font-semibold transition shadow"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
            >
              Apply Now
            </button>
          </div>

          <div className="p-4 rounded-xl bg-white/60 border border-[#eef6ff]">
            <h4 className="font-semibold mb-2">Contact & Next Steps</h4>
            <p className="text-sm text-[#475569]">Book a counselling session, check scholarship options, and request application help.</p>
            <div className="mt-3">
              <Link to="/study-abroad" className="inline-block text-sm text-[#1f4f9a] hover:underline">Book counseling</Link>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
