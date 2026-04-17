// src/pages/StudyAbroad.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-students.png";

import usaImg from "@/assets/US.png";
import ukImg from "@/assets/UK.png";
import australiaImg from "@/assets/AUSTRALIA.png";
import europeImg from "@/assets/EUROPE.png";
import germanyImg from "@/assets/GERMANY.png";
import canadaImg from "@/assets/CANADA.png";

/* --- COURSES --- */
const courses = [
  { id: "cs", title: "Computer Science & IT", emoji: "💻", short: "Software, systems, and algorithms." },
  { id: "ds", title: "Data Science", emoji: "📊", short: "Analytics, ML and big data workflows." },
  { id: "ai", title: "Artificial Intelligence", emoji: "🤖", short: "Deep learning, vision, NLP." },
  { id: "mba", title: "Business Administration (MBA)", emoji: "💼", short: "Leadership, strategy and finance." },
  { id: "me", title: "Mechanical Engineering", emoji: "🛠️", short: "Design, manufacturing, robotics." },
  { id: "ce", title: "Civil Engineering", emoji: "🏗️", short: "Infrastructure, structural design." },
  { id: "ee", title: "Electrical & Electronics", emoji: "🔌", short: "Power systems, electronics, embedded." },
  { id: "med", title: "Medicine & Healthcare", emoji: "🩺", short: "Clinical practice and research." },
  { id: "nursing", title: "Nursing", emoji: "👩‍⚕️", short: "Patient care and clinical skills." },
  { id: "cyber", title: "Cyber Security", emoji: "🛡️", short: "Network security and ethical hacking." },
  { id: "finance", title: "Finance & Accounting", emoji: "💱", short: "Corporate finance and accounting." },
  { id: "bio", title: "Biotechnology", emoji: "🧬", short: "Bioengineering and lab research." },
  { id: "hotel", title: "Hotel Management & Tourism", emoji: "🏨", short: "Hospitality and tourism management." },
  { id: "arch", title: "Architecture", emoji: "🏛️", short: "Design, planning and urbanism." },
  { id: "media", title: "Media & Communication", emoji: "🎬", short: "Journalism, film and media studies." },
];

/* --- UNIVERSITIES --- */
const universities = [
  {
    id: "harvard",
    title: "Harvard University",
    country: "United States",
    location: "Cambridge, Massachusetts",
    short:
      "One of the most prestigious universities globally, known for academic excellence and research.",
    fees: "$55,000 - $65,000/year",
  },
  {
    id: "mit",
    title: "Massachusetts Institute of Technology (MIT)",
    country: "United States",
    location: "Cambridge, Massachusetts",
    short:
      "A world leader in engineering, computer science, and innovation with industry collaborations.",
    fees: "$50,000 - $60,000/year",
  },
  {
    id: "stanford",
    title: "Stanford University",
    country: "United States",
    location: "Stanford, California",
    short: "Located in Silicon Valley, famous for entrepreneurship and research.",
    fees: "$55,000 - $65,000/year",
  },
  {
    id: "oxford",
    title: "University of Oxford",
    country: "United Kingdom",
    location: "Oxford, England",
    short:
      "The world’s oldest English-speaking university, known for its historic colleges.",
    fees: "£20,000 - £45,000/year",
  },
  {
    id: "cambridge",
    title: "University of Cambridge",
    country: "United Kingdom",
    location: "Cambridge, England",
    short: "Renowned for academic excellence and research output.",
    fees: "£20,000 - £45,000/year",
  },
  {
    id: "imperial",
    title: "Imperial College London",
    country: "United Kingdom",
    location: "London, England",
    short:
      "A leading science, engineering, medicine, and business university with strong rankings.",
    fees: "£22,000 - £45,000/year",
  },
  {
    id: "utoronto",
    title: "University of Toronto",
    country: "Canada",
    location: "Toronto, Ontario",
    short:
      "Canada’s top-ranked university, known for diverse programs and global research.",
    fees: "CAD 40,000 - 60,000/year",
  },
  {
    id: "ubc",
    title: "University of British Columbia",
    country: "Canada",
    location: "Vancouver, British Columbia",
    short:
      "A globally recognized institution offering strong research and beautiful campuses.",
    fees: "CAD 30,000 - 55,000/year",
  },
  {
    id: "mcgill",
    title: "McGill University",
    country: "Canada",
    location: "Montreal, Quebec",
    short:
      "Known for medical research, international diversity, and academic reputation.",
    fees: "CAD 30,000 - 50,000/year",
  },
  {
    id: "melbourne",
    title: "University of Melbourne",
    country: "Australia",
    location: "Parkville, Melbourne",
    short:
      "Australia’s top university with strong academics and global links.",
    fees: "AUD 30,000 - 50,000/year",
  },
  {
    id: "anu",
    title: "Australian National University",
    country: "Australia",
    location: "Canberra, ACT",
    short: "Renowned for research excellence and graduate employability.",
    fees: "AUD 28,000 - 48,000/year",
  },
  {
    id: "ethz",
    title: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich",
    short:
      "World-leading STEM and engineering university with innovation excellence.",
    fees: "Low tuition + living costs",
  },
  {
    id: "tum",
    title: "Technical University of Munich (TUM)",
    country: "Germany",
    location: "Munich",
    short:
      "Germany’s top technical university specializing in engineering and applied sciences.",
    fees: "Low / nominal tuition",
  },
  {
    id: "nus",
    title: "National University of Singapore (NUS)",
    country: "Singapore",
    location: "Singapore",
    short:
      "Asia’s top university, known for innovation, rankings, and job outcomes.",
    fees: "SGD 30,000 - 50,000/year",
  },
];

/* --- COUNTRIES (kept unchanged except style applied earlier) --- */
const countries = [
  {
    id: "usa",
    title: "United States",
    emoji: "🇺🇸",
    short: "Home to world-renowned universities and strong job markets.",
    image: usaImg,
  },
  {
    id: "uk",
    title: "United Kingdom",
    emoji: "🇬🇧",
    short: "Historic universities with world-leading academics.",
    image: ukImg,
  },
  {
    id: "australia",
    title: "Australia",
    emoji: "🇦🇺",
    short: "High-quality education and strong post-study work options.",
    image: australiaImg,
  },
  {
    id: "europe",
    title: "Europe",
    emoji: "🇪🇺",
    short: "Affordable study options across many countries.",
    image: europeImg,
  },
  {
    id: "germany",
    title: "Germany",
    emoji: "🇩🇪",
    short:
      "Low tuition and world-class engineering & technical universities.",
    image: germanyImg,
  },
  {
    id: "canada",
    title: "Canada",
    emoji: "🇨🇦",
    short: "Student-friendly policies with PR pathways.",
    image: canadaImg,
  },
];

const getInitials = (title: string) =>
  title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

const StudyAbroad: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#F3F8FF] text-[#0b1f3b]">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e6f3ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="EduEliteGlobal" className="h-10 w-auto" />
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-[#1f4f9a]">
                  EduEliteGlobal
                </div>
                <div className="text-xs text-[#64748b]">Agencies</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollTo("courses")}
                className="text-sm hover:text-[#1f4f9a] font-medium"
              >
                Courses
              </button>

              <button
                onClick={() => scrollTo("universities")}
                className="text-sm hover:text-[#1f4f9a] font-medium"
              >
                Universities
              </button>

              <button
                onClick={() => scrollTo("countries")}
                className="text-sm hover:text-[#1f4f9a] font-medium"
              >
                Countries
              </button>

              <Link
                to="/domestic-colleges"
                className="text-sm hover:text-[#1f4f9a] font-medium"
              >
                Domestic Colleges
              </Link>

              <Link
                to="/exams"
                className="text-sm hover:text-[#1f4f9a] font-medium"
              >
                Exams
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* Updated: Sign in now redirects to Contact (lead capture flow) */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#e6f3ff] text-sm"
              >
                Sign in
              </Link>

              <button
                className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-[#1f4f9a]"
                onClick={() => setMobileOpen((p) => !p)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="md:hidden pb-4">
              <div className="space-y-2 border-t border-white/30 pt-3">
                <button
                  onClick={() => {
                    scrollTo("courses");
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2"
                >
                  Courses
                </button>

                <button
                  onClick={() => {
                    scrollTo("universities");
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2"
                >
                  Universities
                </button>

                <button
                  onClick={() => {
                    scrollTo("countries");
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2"
                >
                  Countries
                </button>

                <Link
                  to="/domestic-colleges"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2"
                >
                  Domestic Colleges
                </Link>

                <Link
                  to="/exams"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2"
                >
                  Exams
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <p className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-[#1f4f9a] bg-[#e8f8ff] px-3 py-1 rounded-full">
              Study Abroad Programs
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold">
              Study abroad with confidence
            </h1>
            <p className="mt-3 text-sm text-[#475569] max-w-xl">
              Explore courses, universities and country options. We help you with
              exams, applications, scholarships and visas — end-to-end.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <button
                onClick={() => scrollTo("courses")}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white"
                style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
              >
                Explore courses <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("universities")}
                className="text-sm underline-offset-4 text-[#1f4f9a] hover:underline"
              >
                Top universities
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1f4f9a22] via-[#22c55e22] to-[#3b82f622] rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Study abroad hero"
                className="relative rounded-3xl shadow-xl w-full h-64 object-cover border border-white/30"
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          <div>
            <div className="text-2xl font-semibold text-[#1f4f9a]">300+</div>
            <div className="text-xs text-[#22c55e]">Partner Universities</div>
          </div>

          <div>
            <div className="text-2xl font-semibold text-[#1f4f9a]">98%</div>
            <div className="text-xs text-[#22c55e]">Visa Success Rate</div>
          </div>

          <div>
            <div className="text-2xl font-semibold text-[#1f4f9a]">20,000+</div>
            <div className="text-xs text-[#22c55e]">Students Counseled</div>
          </div>

          <div>
            <div className="text-2xl font-semibold text-[#1f4f9a]">₹15L+</div>
            <div className="text-xs text-[#22c55e]">Avg. Cost Savings</div>
          </div>
        </section>

        {/* COURSES — services-style cards */}
        <section id="courses" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Top Courses Abroad</h2>
          <p className="text-sm text-[#475569] mb-5">
            Popular and high-growth programs chosen by international students.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((c) => (
              <div
                key={c.id}
                className="group bg-white p-5 rounded-2xl border transition-all shadow-sm"
                style={{ borderColor: "rgba(13,110,253,0.08)" }}
              >
                <div
                  className="p-4 rounded-lg w-fit mb-4 transition-transform group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))",
                  }}
                >
                  <div className="h-8 w-8 text-2xl flex items-center justify-center text-blue-600 transition-colors group-hover:text-green-600">
                    {c.emoji}
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-[#0b1f3b]">{c.title}</h3>
                <p className="text-sm text-[#475569] mt-2">{c.short}</p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <Link
                    to={`/course/${c.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition"
                    style={{
                      background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`;
                    }}
                  >
                    Know more
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={`/study-abroad/courses`}
                    className="text-sm px-3 py-2 rounded-full border transition"
                    style={{
                      borderColor: "rgba(13,110,253,0.06)",
                      color: "#0b1f3b",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#0b1f3b")}
                  >
                    Browse
                  </Link>
                </div>

                <style>{`
                  .group:hover {
                    transform: translateY(-6px);
                    border-color: rgba(52,168,83,0.35) !important;
                    box-shadow: 0 18px 45px rgba(52,168,83,0.08);
                  }
                `}</style>
              </div>
            ))}
          </div>
        </section>

        {/* UNIVERSITIES — services-style cards */}
        <section id="universities" className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Top Universities Abroad</h2>
            <p className="text-sm text-[#475569]">Explore world-class institutions across the globe</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u) => (
              <article
                key={u.id}
                className="group bg-white p-5 rounded-2xl border transition-all shadow-sm"
                style={{ borderColor: "rgba(13,110,253,0.08)" }}
              >
                <div
                  className="p-4 rounded-lg w-fit mb-4 transition-transform group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))",
                  }}
                >
                  <div className="h-8 w-8 text-lg flex items-center justify-center rounded" style={{ color: "#0b1f3b", fontWeight: 700 }}>
                    {getInitials(u.title)}
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-[#0b1f3b]">{u.title}</h3>
                <div className="mt-2 text-sm text-[#475569] leading-5 h-16 overflow-hidden">{u.short}</div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-[#64748b]">Estimated fees</div>
                  <div className="font-medium text-[#0b1f3b]">{u.fees}</div>
                </div>

                <div className="mt-4">
                  <Link
                    to={`/university/${u.id}`}
                    className="inline-block w-full text-center px-4 py-2 rounded-full text-white text-sm font-medium transition"
                    style={{
                      background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`;
                    }}
                  >
                    View Details
                  </Link>
                </div>

                <style>{`
                  .group:hover {
                    transform: translateY(-6px);
                    border-color: rgba(52,168,83,0.35) !important;
                    box-shadow: 0 18px 45px rgba(52,168,83,0.08);
                  }
                  .group:hover svg, .group:hover div > svg {
                    color: ${GREEN} !important;
                  }
                `}</style>
              </article>
            ))}
          </div>
        </section>

        {/* COUNTRIES — services-style cards (kept from previous update) */}
        <section id="countries" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Top Countries</h2>
          <p className="text-sm text-[#475569] mb-5">
            Choose your dream destination for higher education
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <div
                key={c.id}
                className="group bg-white rounded-2xl border transition-all overflow-hidden shadow-sm"
                style={{ borderColor: "rgba(13,110,253,0.06)" }}
              >
                <div className="h-36 w-full overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold">{c.emoji} {c.title}</h3>

                      <div
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{
                          background: "rgba(13,110,253,0.06)",
                          color: BLUE,
                        }}
                      >
                        {c.title.split(" ")[0]}
                      </div>
                    </div>

                    <p className="text-sm text-[#475569]">{c.short}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <Link
                      to={`/study-abroad/${c.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition"
                      style={{
                        background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`;
                      }}
                    >
                      Know more
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to={`/visa-services#${c.id}`}
                      className="text-sm px-3 py-2 rounded-full border transition"
                      style={{
                        borderColor: "rgba(13,110,253,0.15)",
                        color: "#0b1f3b",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = GREEN)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#0b1f3b")
                      }
                    >
                      Visa
                    </Link>
                  </div>
                </div>

                <style>{`
                  .group:hover {
                    transform: translateY(-6px);
                    border-color: rgba(52,168,83,0.35) !important;
                    box-shadow: 0 18px 45px rgba(52,168,83,0.08);
                  }
                `}</style>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-24">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-[#f1fcff] to-[#f5fff3] border border-white/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Ready to begin?</h3>
              <p className="text-sm text-[#475569]">
                Book a 1:1 counseling session or explore exam preparation
                options.
              </p>
            </div>

            <div className="flex gap-3">
              <Link to="/domestic-colleges" className="px-4 py-2 rounded-full border bg-white">
                Domestic colleges
              </Link>
              <Link
                to="/exams"
                className="px-4 py-2 rounded-full text-white"
                style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
              >
                Exams & Prep
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudyAbroad;
