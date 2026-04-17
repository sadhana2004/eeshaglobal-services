import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/image.png";

/* College Type */
type College = {
  id: string;
  name: string;
  city: string;
  state: string;
  about: string;
  programs: string[];
  ranking: string;
  accreditation: string;
  fees: string;
};

/* COLLEGE DATA */
export const COLLEGE_DATA: College[] = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology (IIT) Delhi",
    city: "New Delhi",
    state: "Delhi",
    about:
      "One of India’s top engineering institutes, known for research, innovation, and excellence across STEM fields.",
    programs: ["Engineering", "Technology", "Management", "Sciences", "Humanities"],
    ranking: "NIRF Rank 2",
    accreditation: "NAAC A++, NBA Accredited",
    fees: "₹1L - ₹3L/year",
  },
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology (IIT) Bombay",
    city: "Mumbai",
    state: "Maharashtra",
    about:
      "Premier engineering institute with global recognition, strong placements, and leading research output.",
    programs: ["Engineering", "AI/ML", "Sciences", "Management"],
    ranking: "NIRF Rank 3",
    accreditation: "NAAC A++, NBA Accredited",
    fees: "₹1L - ₹3L/year",
  },
  {
    id: "iim-ahmedabad",
    name: "Indian Institute of Management (IIM) Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    about:
      "India’s top management school renowned for leadership programs, MBA excellence, and global reputation.",
    programs: ["MBA", "Management", "Business Analytics"],
    ranking: "NIRF Rank 1 (MBA)",
    accreditation: "AACSB Accredited",
    fees: "₹15L - ₹25L/course",
  },
  {
    id: "aiims-delhi",
    name: "All India Institute of Medical Sciences (AIIMS) Delhi",
    city: "New Delhi",
    state: "Delhi",
    about:
      "India’s #1 medical institute known for world-class education, clinical excellence, and research.",
    programs: ["MBBS", "Nursing", "Medical Specializations"],
    ranking: "NIRF Rank 1 (Medical)",
    accreditation: "NMC Approved",
    fees: "₹5k - ₹50k/year",
  },
  {
    id: "nlsiu",
    name: "National Law School of India University (NLSIU)",
    city: "Bengaluru",
    state: "Karnataka",
    about:
      "India's top law school known for academic excellence, top-tier moot competitions, and strong placements.",
    programs: ["BA LLB", "LLM", "Public Policy"],
    ranking: "NIRF Rank 1 (Law)",
    accreditation: "NAAC A+",
    fees: "₹2L - ₹4L/year",
  },
  {
    id: "delhi-university",
    name: "University of Delhi (DU)",
    city: "New Delhi",
    state: "Delhi",
    about:
      "Central university known for strong academics, vibrant campus culture, and world-class humanities programs.",
    programs: ["Arts", "Commerce", "Sciences", "Management"],
    ranking: "Top 20 India",
    accreditation: "NAAC A+",
    fees: "₹10k - ₹1L/year",
  },
  {
    id: "iith",
    name: "Indian Institute of Technology Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    about:
      "Top engineering institute with strong research culture and leading technology innovation.",
    programs: ["Engineering", "Computer Science", "Design"],
    ranking: "Top 10 India",
    accreditation: "NBA Accredited",
    fees: "₹1L - ₹3L/year",
  },
  {
    id: "iisc",
    name: "Indian Institute of Science (IISc)",
    city: "Bengaluru",
    state: "Karnataka",
    about:
      "India’s premier science and research university with elite global research collaborations.",
    programs: ["Science", "Engineering", "Interdisciplinary Research"],
    ranking: "Top 2 India",
    accreditation: "NAAC A++",
    fees: "₹1L - ₹4L/year",
  },
  {
    id: "nit-warangal",
    name: "NIT Warangal",
    city: "Warangal",
    state: "Telangana",
    about:
      "One of India’s top NITs with strong faculty, labs, and excellent placements.",
    programs: ["Engineering", "Computer Science", "Electronics"],
    ranking: "Top 50 India",
    accreditation: "NBA Accredited",
    fees: "₹70k - ₹2L/year",
  },
  {
    id: "vit",
    name: "Vellore Institute of Technology (VIT)",
    city: "Vellore",
    state: "Tamil Nadu",
    about:
      "Popular private university known for placements, strong engineering programs, and modern campus.",
    programs: ["Engineering", "Computer Science", "Business"],
    ranking: "Top 100 India",
    accreditation: "NAAC A++",
    fees: "₹1.5L - ₹4L/year",
  },
  {
    id: "srm",
    name: "SRM Institute of Science and Technology",
    city: "Chennai",
    state: "Tamil Nadu",
    about:
      "Large private university offering diverse programs and strong placement opportunities.",
    programs: ["Engineering", "Management", "Medicine"],
    ranking: "Top 150 India",
    accreditation: "NAAC A++",
    fees: "₹1L - ₹4L/year",
  },
];

export default function DomesticColleges(): JSX.Element {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return COLLEGE_DATA.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const BLUE = "#0D6EFD";
  const GREEN = "#34A853";

  return (
    <div className="min-h-screen bg-[#f1f7ff] text-[#0b1f3b]">

      {/* HERO */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="bg-black/40 p-6 rounded-xl max-w-xl ml-10">
          <h1 className="text-3xl font-bold text-white">Domestic Colleges</h1>
          <p className="text-white/90 text-sm mt-2">
            Premier institutions for higher education in India
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* SEARCH BAR */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search colleges..."
          className="
            w-full px-4 py-3 rounded-xl border border-[#e5efff] shadow-sm
            focus:outline-none focus:ring-2 focus:ring-[#1f4f9a] mb-8
          "
        />

        {/* COLLEGE GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="
                group bg-white p-6 rounded-2xl border border-[#e6eef9] 
                shadow-sm transition-all
                hover:shadow-xl hover:border-[#22c55e] hover:-translate-y-2
              "
            >
              <h3 className="text-lg font-semibold group-hover:text-[#1f4f9a] transition">
                {c.name}
              </h3>

              <p className="text-sm text-[#64748b] mt-1">
                {c.city}, {c.state}
              </p>

              <p className="text-sm text-[#475569] mt-3 line-clamp-3">
                {c.about}
              </p>

              {/* VIEW DETAILS BUTTON (EduElite Theme) */}
              <Link
                to={`/domestic-colleges/${c.id}`}
                className="inline-block w-full text-center px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 shadow"
                style={{
                  background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px rgba(34,165,90,0.18)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`;
                  (e.currentTarget as HTMLElement).style.boxShadow = ``;
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
