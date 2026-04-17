// src/components/VisaServicesPages.tsx
import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { useLocation } from "react-router-dom";

type Service = {
  id: string;
  title: string;
  description: string;
  timeline: string;
  tags: string[];
  img: string;
};

import studentvisa from "@/assets/Studentvisa.png";
import workvisa from "@/assets/Workvisa.png";
import touristvisa from "@/assets/Touristvisa.png";
import prvisa from "@/assets/PermanentResidency.png";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

const services: Service[] = [
  {
    id: "student",
    title: "Student Visa Services",
    description:
      "Complete assistance for student visa applications to study abroad. We handle documentation, interview preparation, and application submission for all major study destinations.",
    timeline: "4-8 weeks (varies by country)",
    tags: ["USA", "UK", "Canada"],
    img: studentvisa,
  },
  {
    id: "work",
    title: "Work Visa & Immigration",
    description:
      "Professional assistance for work visa applications and immigration processes. Skilled worker visas, intra-company transfers, and permanent residency applications.",
    timeline: "8-16 weeks (varies by visa type)",
    tags: ["USA", "UK", "Canada"],
    img: workvisa,
  },
  {
    id: "tourist",
    title: "Tourist & Visit Visa",
    description:
      "Quick and hassle-free tourist visa services for leisure travel, family visits, and short-term stays.",
    timeline: "1-4 weeks",
    tags: ["USA", "UK", "Europe"],
    img: touristvisa,
  },
  {
    id: "pr",
    title: "Permanent Residency (PR)",
    description:
      "Assistance for permanent residency pathways: eligibility, application documentation, and submission for selected countries.",
    timeline: "Varies by program",
    tags: ["Canada", "Australia", "USA"],
    img: prvisa,
  },
];

export default function VisaServicesPages(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash ? location.hash.replace("#", "") : "";
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  }, [location.hash]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-3" style={{ color: BLUE }}>
        Visa Services
      </h1>

      <p className="mb-8 text-gray-700">Complete assistance for all your visa needs</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            id={s.id}
            key={s.id}
            className="scroll-mt-20 group transition-all rounded-lg"
            style={{
              border: "1px solid rgba(13,110,253,0.08)",
            }}
          >
            <ServiceCard service={s} />

            {/* hover effect global */}
            <style>{`
              #${s.id}.group:hover {
                transform: translateY(-6px);
                border-color: rgba(52,168,83,0.35) !important;
                box-shadow: 0 18px 45px rgba(52,168,83,0.08);
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
}
