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

/* ✅ UPDATED 14 COLLEGES DATA */
export const COLLEGE_DATA: College[] = [
  {
    id: "bharath",
    name: "Bharath Institute of Higher Education and Research",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Leading deemed university offering engineering, medical, and research programs.",
    programs: ["Engineering", "Medical", "Management"],
    ranking: "Top Private",
    accreditation: "NAAC A",
    fees: "₹1L - ₹3L/year",
  },
  {
    id: "avit",
    name: "Aarupadai Veedu Institute of Technology (AVIT)",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Engineering college under Vinayaka Missions group.",
    programs: ["Engineering", "CSE", "ECE"],
    ranking: "Top Private",
    accreditation: "AICTE",
    fees: "₹80k - ₹2L/year",
  },
  {
    id: "avmc",
    name: "Aarupadai Veedu Medical College (AVMC)",
    city: "Puducherry",
    state: "Puducherry",
    about: "Recognized medical college offering MBBS and healthcare programs.",
    programs: ["MBBS", "Nursing"],
    ranking: "Medical Institute",
    accreditation: "NMC",
    fees: "₹5L - ₹15L/year",
  },
  {
    id: "mgr",
    name: "Dr. M.G.R. Educational and Research Institute",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Deemed university offering engineering and health sciences.",
    programs: ["Engineering", "Medical"],
    ranking: "Top Private",
    accreditation: "NAAC A+",
    fees: "₹1L - ₹4L/year",
  },
  {
    id: "hindustan",
    name: "Hindustan Institute of Technology and Science",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Known for engineering and aviation programs.",
    programs: ["Engineering", "Aviation"],
    ranking: "Top Private",
    accreditation: "NAAC A",
    fees: "₹1L - ₹3L/year",
  },
  {
    id: "kalasalingam",
    name: "Kalasalingam Academy of Research and Education",
    city: "Krishnankoil",
    state: "Tamil Nadu",
    about: "Research-focused university with strong engineering programs.",
    programs: ["Engineering", "AI/ML"],
    ranking: "Top 100 India",
    accreditation: "NAAC A++",
    fees: "₹1L - ₹3L/year",
  },
  {
    id: "prist",
    name: "PRIST University",
    city: "Thanjavur",
    state: "Tamil Nadu",
    about: "Private university offering multiple UG and PG programs.",
    programs: ["Engineering", "Arts"],
    ranking: "Private University",
    accreditation: "UGC",
    fees: "₹50k - ₹2L/year",
  },
  {
    id: "sathyabama",
    name: "Sathyabama Institute of Science and Technology",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Top-ranked institute known for placements.",
    programs: ["Engineering", "Architecture"],
    ranking: "Top 50 India",
    accreditation: "NAAC A++",
    fees: "₹1.5L - ₹3L/year",
  },
  {
    id: "saveetha",
    name: "Saveetha University",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Popular for medical, dental, and engineering programs.",
    programs: ["Medical", "Dental", "Engineering"],
    ranking: "Top Private",
    accreditation: "NAAC A++",
    fees: "₹1L - ₹5L/year",
  },
  {
    id: "srm",
    name: "SRM Institute of Science and Technology",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Well-known university with strong placements.",
    programs: ["Engineering", "Management"],
    ranking: "Top 100 India",
    accreditation: "NAAC A++",
    fees: "₹1L - ₹4L/year",
  },
  {
    id: "takshashila",
    name: "Takshashila University",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Emerging university focused on innovation.",
    programs: ["Engineering", "Science"],
    ranking: "Emerging",
    accreditation: "UGC",
    fees: "₹1L - ₹2L/year",
  },
  {
    id: "veltech",
    name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    city: "Chennai",
    state: "Tamil Nadu",
    about: "Engineering-focused university with research orientation.",
    programs: ["Engineering", "Robotics"],
    ranking: "Top 150 India",
    accreditation: "NAAC A",
    fees: "₹1L - ₹3L/year",
  },
  {
    id: "vit",
    name: "Vellore Institute of Technology (VIT)",
    city: "Vellore",
    state: "Tamil Nadu",
    about: "Top private university known for placements.",
    programs: ["Engineering", "Business"],
    ranking: "Top 20 India",
    accreditation: "NAAC A++",
    fees: "₹1.5L - ₹4L/year",
  },
  {
    id: "amrita",
    name: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore",
    state: "Tamil Nadu",
    about: "Top-ranked private university focused on research.",
    programs: ["Engineering", "Medical", "AI/ML"],
    ranking: "Top 10 Private",
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

      <main className="max-w-7xl mx-auto px-6 py-10">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search colleges..."
          className="w-full px-4 py-3 rounded-xl border mb-8"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div key={c.id} className="bg-white p-6 rounded-2xl shadow">

              <h3 className="text-lg font-semibold">{c.name}</h3>

              <p className="text-sm text-gray-500">
                {c.city}, {c.state}
              </p>

              <p className="text-sm mt-3">{c.about}</p>

              <Link
                to={`/domestic-colleges/${c.id}`}
                className="block mt-4 text-white text-center py-2 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
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
