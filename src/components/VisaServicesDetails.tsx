// src/components/VisaServicesDetails.tsx
import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import actual images from assets
import studentvisa from "@/assets/Studentvisa.png";
import workvisa from "@/assets/Workvisa.png";
import touristvisa from "@/assets/Touristvisa.png";
import prvisa from "@/assets/PermanentResidency.png";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

const SERVICE_DATA: Record<string, any> = {
  student: {
    title: "Student Visa Services",
    subtitle:
      "Complete assistance for student visa applications to study abroad. We handle documentation, interview preparation, and application submission for all major study destinations.",
    timeline: "4-8 weeks (varies by country)",
    type: "student",
    requirements: [
      "Valid passport",
      "University admission letter",
      "Financial proof (bank statements, sponsorship)",
      "English proficiency test scores (IELTS/TOEFL)",
      "Academic transcripts and certificates",
      "Statement of Purpose (SOP)",
      "Visa application form",
      "Passport-size photographs",
      "Medical examination reports",
      "Police clearance certificate",
    ],
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "Ireland"],
    image: studentvisa,
  },

  work: {
    title: "Work Visa & Immigration",
    subtitle:
      "Assistance for work visas, intra-company transfers and skilled worker programs.",
    timeline: "8-16 weeks (varies by visa type)",
    type: "work",
    requirements: [
      "Valid passport",
      "Employment offer letter",
      "Employer sponsorship documents",
      "Proof of qualifications/experience",
      "Labour market test (if required)",
    ],
    countries: ["USA", "UK", "Canada"],
    image: workvisa,
  },

  tourist: {
    title: "Tourist & Visit Visa",
    subtitle: "Short-term visas for leisure, family visits and travel.",
    timeline: "1-4 weeks",
    type: "tourist",
    requirements: [
      "Valid passport",
      "Travel itinerary",
      "Proof of funds",
      "Hotel bookings / invitation letters",
    ],
    countries: ["USA", "UK", "Europe"],
    image: touristvisa,
  },

  pr: {
    title: "Permanent Residency (PR)",
    subtitle: "Pathways and application support for permanent residency.",
    timeline: "Varies by program",
    type: "pr",
    requirements: [
      "Valid passport",
      "Proof of work/education",
      "Language test (if required)",
      "Police clearance certificate",
    ],
    countries: ["Canada", "Australia", "USA"],
    image: prvisa,
  },
};

export default function VisaServicesDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const data = useMemo(() => SERVICE_DATA[id || "student"], [id]);

  if (!data) {
    return (
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Service not found</h2>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <div
        className="h-48 md:h-72 bg-center bg-cover flex items-end"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      >
        <div
          className="w-full text-white p-8"
          style={{
            background: `linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%), linear-gradient(135deg, ${BLUE}66 0%, ${GREEN}44 100%)`,
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>
          <p className="mt-2 max-w-2xl text-sm">{data.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* left: requirements */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Requirements</h2>

          <div className="space-y-3">
            {data.requirements.map((req: string) => (
              <div
                key={req}
                className="rounded p-3 transition-all"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(13,110,253,0.06)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      border: `1px solid rgba(13,110,253,0.18)`,
                      color: BLUE,
                      background: "rgba(13,110,253,0.04)",
                      minWidth: 24,
                    }}
                  >
                    ✓
                  </div>
                  <div className="text-sm text-gray-800">{req}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Countries Covered</h3>
          <div className="flex flex-wrap gap-2">
            {data.countries.map((c: string) => (
              <div
                key={c}
                className="text-xs px-2 py-1 rounded"
                style={{
                  background: "rgba(13,110,253,0.06)",
                  color: BLUE,
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* right: service card */}
        <aside
          className="bg-white rounded-lg shadow p-5 border self-start max-h-[70vh] overflow-auto transition-all"
          style={{ borderColor: "rgba(13,110,253,0.10)" }}
        >
          <div className="text-sm" style={{ color: BLUE }}>
            Service Details
          </div>

          <div className="mt-4 border-t pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-600">Processing Time</div>
              <div className="text-sm font-semibold" style={{ color: GREEN }}>
                {data.timeline}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-600">Type</div>
              <div className="text-sm" style={{ color: BLUE }}>
                {data.type}
              </div>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-4 w-full text-white py-2 rounded transition-all shadow"
              style={{
                background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
              }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`;
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`;
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
