// src/pages/DomesticCollegeDetails.tsx

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { COLLEGE_DATA } from "./DomesticColleges";

export default function DomesticCollegeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const BLUE = "#0D6EFD";
  const GREEN = "#34A853";

  const college = COLLEGE_DATA.find((c) => c.id === id);

  if (!college)
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">College Not Found</h2>
          <Link
            to="/domestic-colleges"
            className="text-[#1f4f9a] underline text-sm"
          >
            Go Back
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F3F8FF] text-[#0b1f3b]">

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link
          to="/domestic-colleges"
          className="inline-flex items-center gap-2 text-[#1f4f9a] text-sm font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Domestic Colleges
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-3">

        {/* LEFT CONTENT */}
        <section className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-3">{college.name}</h1>

            <h2 className="text-2xl font-semibold mb-2">About</h2>
            <p className="text-[#475569] leading-7">
              {college.about || "Information will be updated soon."}
            </p>
          </div>

          {/* Programs Offered */}
<div>
  <h2 className="text-2xl font-semibold mb-4">Programs Offered</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {college.programs?.map((program) => (
      <div
        key={program}
        className="
          group bg-white p-6 rounded-2xl border border-[#e6eef9] 
          shadow-sm transition-all duration-300 
          hover:shadow-xl hover:border-[#22c55e] hover:-translate-y-2
          flex gap-4 items-center
        "
      >
        {/* Icon Box (same as services) */}
        <div className="w-12 h-12 rounded-xl bg-[#e8f8ff] flex items-center justify-center text-[#1f4f9a] text-2xl shadow-sm">
          📘
        </div>

        <div className="flex-1">
          <div className="font-semibold text-[#0b1f3b]">
            {program}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        </section>

        {/* RIGHT SIDEBAR */}
        <aside>
          <div className="bg-white p-6 rounded-2xl border border-[#e6eef9] shadow-sm sticky top-24">
            <h3 className="font-semibold text-lg mb-4">College Information</h3>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-[#64748b]">Ranking</span>
                <span className="font-medium">{college.ranking || "—"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#64748b]">Location</span>
                <span className="font-medium">
                  {college.city}, {college.state}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#64748b]">Accreditation</span>
                <span className="font-medium">{college.accreditation}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#64748b]">Fees</span>
                <span className="font-medium">{college.fees}</span>
              </div>
            </div>

            {/* APPLY NOW — EduElite Theme Button */}
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 w-full text-white py-2 rounded-full text-sm font-medium transition shadow"
              style={{
                background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`;
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 10px 25px rgba(34,165,90,0.22)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  `linear-gradient(90deg, ${BLUE}, ${GREEN})`;
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              Apply Now
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
