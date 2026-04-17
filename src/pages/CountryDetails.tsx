// src/pages/CountryDetails.tsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * CountryDetails page (hero-only per country)
 *
 * - Each country uses a single hero image (country-specific)
 * - Gallery removed as requested
 * - The UI is themed to EduEliteGlobal (blue -> green gradient, services-style cards, lift + green hover)
 */

// country-specific hero imports (ensure these files exist in src/assets)
import heroUS from "@/assets/US.png";
import heroUK from "@/assets/UK.png";
import heroGermany from "@/assets/GERMANY.png";
import heroCanada from "@/assets/CANADA.png";
import heroEurope from "@/assets/EUROPE.png";
import heroAustralia from "@/assets/AUSTRALIA.png";

// fallback / default hero (ensure this exists)
import heroDefault from "@/assets/study-abroad.jpg";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

const IMAGE_MAP: Record<string, string> = {
  usa: heroUS || heroDefault,
  uk: heroUK || heroDefault,
  germany: heroGermany || heroDefault,
  canada: heroCanada || heroDefault,
  europe: heroEurope || heroDefault,
  australia: heroAustralia || heroDefault,
  default: heroDefault,
};

const COUNTRY_DATA: Record<
  string,
  {
    title: string;
    short: string;
    universities: string;
    tuition: string;
    livingCost: string;
    highlights: string[];
    key: { language: string; tuition: string; living: string };
  }
> = {
  usa: {
    title: "Study in United States",
    short:
      "Home to world-renowned universities and diverse academic programs. The USA offers cutting-edge research facilities, flexible education systems and excellent career opportunities.",
    universities: "450+ Universities",
    tuition: "$30,000 - $60,000/year",
    livingCost: "$15,000 - $25,000/year",
    highlights: [
      "Wide range of world-class institutions",
      "Strong industry-academia collaboration",
      "Post-study work options (OPT/H1B routes)",
    ],
    key: { language: "English", tuition: "$30,000 - $60,000/yr", living: "$15,000 - $25,000/yr" },
  },
  uk: {
    title: "Study in United Kingdom",
    short:
      "Rich academic heritage with universities dating back centuries. UK offers shorter degree programs, multicultural environment, and strong global recognition.",
    universities: "160+ Universities",
    tuition: "£15,000 - £35,000/year",
    livingCost: "£10,000 - £18,000/year",
    highlights: [
      "Shorter master's programs (1 year)",
      "Strong research & scholarship opportunities",
      "Good post-study work options",
    ],
    key: { language: "English", tuition: "£15,000 - £35,000/yr", living: "£10,000 - £18,000/yr" },
  },
  canada: {
    title: "Study in Canada",
    short:
      "Known for high quality education, affordable tuition, and welcoming immigration policies. Canada offers excellent work opportunities and pathway to permanent residency.",
    universities: "100+ Universities",
    tuition: "CAD 20,000 - 35,000/year",
    livingCost: "CAD 12,000 - 20,000/year",
    highlights: [
      "Friendly immigration & PR pathways",
      "Strong campus safety and student support",
      "Growing tech and healthcare sectors",
    ],
    key: { language: "English/French", tuition: "CAD 20,000 - 35,000/yr", living: "CAD 12,000 - 20,000/yr" },
  },
  germany: {
    title: "Study in Germany",
    short: "Low or no tuition at many public universities; strong engineering and research programs.",
    universities: "200+ Universities (including Fachhochschulen)",
    tuition: "Low / Minimal tuition at many public unis",
    livingCost: "€8,000 - €14,000/year",
    highlights: [
      "Low-cost public universities",
      "Strong engineering & automotive sector",
      "Industry internship opportunities",
    ],
    key: { language: "German / English", tuition: "Varies", living: "€8,000 - €14,000/yr" },
  },
  australia: {
    title: "Study in Australia",
    short: "High-quality education with welcoming student visas and good post-study work options.",
    universities: "40+ Group of Eight & many institutions",
    tuition: "AUD 20,000 - 45,000/year",
    livingCost: "AUD 15,000 - 25,000/year",
    highlights: ["Strong research programs", "Good post-study work pathways", "Vibrant student cities"],
    key: { language: "English", tuition: "AUD 20,000 - 45,000/yr", living: "AUD 15,000 - 25,000/yr" },
  },
  europe: {
    title: "Study in Europe",
    short: "Affordable options across many countries with strong cultural and academic diversity.",
    universities: "Thousands of institutions across EU countries",
    tuition: "Often low / affordable (depends on country)",
    livingCost: "Varies by country/city",
    highlights: ["Many English-taught programs", "Affordable tuition in several countries", "Erasmus / mobility options"],
    key: { language: "English / Local", tuition: "Varies", living: "Varies" },
  },
  default: {
    title: "Study Abroad",
    short: "Explore top universities, programs and student life in this country.",
    universities: "Top Universities",
    tuition: "Varies",
    livingCost: "Varies",
    highlights: ["Top-ranked programs", "Scholarships", "Work opportunities"],
    key: { language: "English", tuition: "Varies", living: "Varies" },
  },
};

export default function CountryDetails(): JSX.Element {
  const { country } = useParams<{ country: string }>();
  const navigate = useNavigate();
  const key = (country || "default").toLowerCase();
  const data = COUNTRY_DATA[key] ?? COUNTRY_DATA.default;
  const heroImage = IMAGE_MAP[key] ?? IMAGE_MAP.default;

  return (
    <div className="min-h-screen bg-[#F3F8FF] text-[#0b1f3b]">
      {/* HERO */}
      <div
        className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
          <div
            className="bg-black/40 rounded-2xl p-6 md:p-10 w-full max-w-3xl"
            style={{
              border: "1px solid rgba(13,110,253,0.06)",
              boxShadow: "0 12px 30px rgba(13,110,253,0.04)",
            }}
          >
            <Link to="/study-abroad" className="inline-flex items-center gap-2 text-white text-sm mb-3">
              <ArrowLeft className="w-4 h-4" /> Back to Study Abroad
            </Link>

            <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              {data.title}
            </h1>
            <p className="text-sm sm:text-base text-white/90 mt-3 max-w-2xl">{data.short}</p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold shadow transition"
                style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
                onMouseEnter={(e: any) => (e.currentTarget.style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`)}
                onMouseLeave={(e: any) => (e.currentTarget.style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`)}
              >
                Get Free Consultation
              </button>

              <Link
                to={`/visa-services#${key}`}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition"
                style={{
                  background: "white",
                  border: "1px solid rgba(13,110,253,0.06)",
                  color: "#0b1f3b",
                }}
                onMouseEnter={(e: any) => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={(e: any) => (e.currentTarget.style.color = "#0b1f3b")}
              >
                Visa options
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14 grid gap-8 lg:grid-cols-3">
        {/* Left / Main (2 cols on large screens) */}
        <section className="lg:col-span-2 space-y-6">
          {/* Quick highlights cards — converted to services-style cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className="group bg-white p-5 rounded-2xl border transition-all shadow-sm"
              style={{ borderColor: "rgba(13,110,253,0.08)" }}
            >
              <div
                className="p-3 rounded-lg w-fit mb-3"
                style={{ background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </div>
              <h4 className="text-sm text-[#64748b]">Universities</h4>
              <p className="text-lg font-semibold mt-2 text-[#0b1f3b]">{data.universities}</p>
              <p className="text-sm text-[#6b7280] mt-1">Wide range of world-class institutions</p>

              <style>{`
                .group:hover {
                  transform: translateY(-6px);
                  border-color: rgba(52,168,83,0.35) !important;
                  box-shadow: 0 18px 45px rgba(52,168,83,0.06);
                }
              `}</style>
            </div>

            <div
              className="group bg-white p-5 rounded-2xl border transition-all shadow-sm"
              style={{ borderColor: "rgba(13,110,253,0.08)" }}
            >
              <div
                className="p-3 rounded-lg w-fit mb-3"
                style={{ background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </div>
              <h4 className="text-sm text-[#64748b]">Estimated Tuition</h4>
              <p className="text-lg font-semibold mt-2 text-[#0b1f3b]">{data.tuition}</p>
              <p className="text-sm text-[#6b7280] mt-1">Average fees; vary by program & university</p>
            </div>

            <div
              className="group bg-white p-5 rounded-2xl border transition-all shadow-sm"
              style={{ borderColor: "rgba(13,110,253,0.08)" }}
            >
              <div
                className="p-3 rounded-lg w-fit mb-3"
                style={{ background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M6 8l6 8 6-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="text-sm text-[#64748b]">Work Opportunities</h4>
              <p className="text-lg font-semibold mt-2 text-[#0b1f3b]">Post-study work options</p>
              <p className="text-sm text-[#6b7280] mt-1">Check local rules for internships & work visas</p>
            </div>
          </div>

          {/* Visa information — services-card style */}
          <div className="group bg-white p-6 rounded-2xl border transition-all shadow-sm" style={{ borderColor: "rgba(13,110,253,0.08)" }}>
            <h2 className="text-xl font-semibold mb-3">Visa Information</h2>
            <div className="text-sm text-[#374151]">
              <p>
                Student visa requirements & processing times vary by country. Typical processing: 3–8 weeks.
                For work authorization, check post-study options relevant to the country (e.g. OPT in USA, Post-study work in UK, PR pathways in Canada).
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="p-3 rounded-lg border" style={{ borderColor: "rgba(13,110,253,0.06)" }}>
                  <div className="text-xs text-[#64748b]">Typical documents</div>
                  <ul className="text-sm mt-2 space-y-1 text-[#374151]">
                    <li>• Valid passport</li>
                    <li>• Admission letter</li>
                    <li>• Financial proof</li>
                  </ul>
                </div>

                <div className="p-3 rounded-lg border" style={{ borderColor: "rgba(13,110,253,0.06)" }}>
                  <div className="text-xs text-[#64748b]">Processing tips</div>
                  <ul className="text-sm mt-2 space-y-1 text-[#374151]">
                    <li>• Prepare documents early</li>
                    <li>• Use certified translations</li>
                    <li>• Seek professional guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            <style>{`
              .group:hover {
                transform: translateY(-6px);
                border-color: rgba(52,168,83,0.35) !important;
                box-shadow: 0 18px 45px rgba(52,168,83,0.06);
              }
            `}</style>
          </div>

          {/* Deeper content / program highlights — services-card style */}
          <div className="group bg-white p-6 rounded-2xl border transition-all shadow-sm" style={{ borderColor: "rgba(13,110,253,0.08)" }}>
            <h2 className="text-xl font-semibold mb-3">Why choose {data.title.replace("Study in ", "")}?</h2>
            <ul className="list-disc list-inside text-[#374151] space-y-2">
              {data.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold transition"
                style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
                onMouseEnter={(e: any) => (e.currentTarget.style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`)}
                onMouseLeave={(e: any) => (e.currentTarget.style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`)}
              >
                Book Counseling
              </button>

              <Link
                to="/services"
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "white",
                  border: "1px solid rgba(13,110,253,0.06)",
                  color: "#0b1f3b",
                }}
                onMouseEnter={(e: any) => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={(e: any) => (e.currentTarget.style.color = "#0b1f3b")}
              >
                View Services
              </Link>
            </div>

            <style>{`
              .group:hover {
                transform: translateY(-6px);
                border-color: rgba(52,168,83,0.35) !important;
                box-shadow: 0 18px 45px rgba(52,168,83,0.06);
              }
            `}</style>
          </div>
        </section>

        {/* Right column: Key information card / call to action (services-themed) */}
        <aside className="space-y-6">
          <div
            className="p-6 rounded-2xl bg-white border transition-all shadow-sm sticky top-24"
            style={{ borderColor: "rgba(13,110,253,0.08)" }}
          >
            <h3 className="font-semibold mb-3">Key Information</h3>

            <div className="divide-y divide-[#f1f5f9]">
              <div className="py-3 flex justify-between text-sm">
                <span className="text-[#64748b]">Language</span>
                <span className="font-medium">{data.key.language}</span>
              </div>

              <div className="py-3 flex justify-between text-sm">
                <span className="text-[#64748b]">Avg. Tuition</span>
                <span className="font-medium">{data.key.tuition}</span>
              </div>

              <div className="py-3 flex justify-between text-sm">
                <span className="text-[#64748b]">Living Cost</span>
                <span className="font-medium">{data.key.living}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-5 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-white font-semibold transition shadow"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
              onMouseEnter={(e: any) => (e.currentTarget.style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`)}
              onMouseLeave={(e: any) => (e.currentTarget.style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`)}
            >
              Get Free Consultation
            </button>
          </div>

          {/* quick facts card (services-style) */}
          <div
            className="p-4 rounded-2xl bg-white border transition-all shadow-sm"
            style={{ borderColor: "rgba(13,110,253,0.06)" }}
          >
            <h4 className="font-semibold mb-2">Quick Facts</h4>
            <ul className="text-sm text-[#475569] space-y-2">
              <li><strong>Top programs:</strong> CS, Data Science, Business, Engineering</li>
              <li><strong>Scholarship:</strong> Merit-based & need-based available</li>
              <li><strong>Application:</strong> Deadlines depend on the university & program</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
