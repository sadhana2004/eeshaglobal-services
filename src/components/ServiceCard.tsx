// src/components/ServiceCard.tsx
import React from "react";
import { Link } from "react-router-dom";

type VisaService = {
  id: string;
  title: string;
  description: string;
  timeline: string;
  tags: string[];
  img: string;
};

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

export default function ServiceCard({ service }: { service: VisaService }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden border group transition-all"
      style={{ borderColor: "rgba(13,110,253,0.10)" }}
    >
      <div
        className="h-40 w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${service.img})` }}
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
        <p className="text-gray-600 mt-3 text-sm">{service.description}</p>

        {/* bottom section with timeline + learn more */}
        <div className="flex items-center justify-between mt-6 border-t pt-4">
          <div className="text-sm text-gray-500">{service.timeline}</div>

          <Link
            to={`/visa-services/${service.id}`}
            className="px-4 py-2 text-sm text-white rounded transition-all shadow-sm"
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
            Learn More
          </Link>
        </div>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags?.map((t: string) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded"
              style={{
                background: "rgba(13,110,253,0.08)",
                color: BLUE,
                border: `1px solid rgba(13,110,253,0.18)`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover animation */}
      <style>{`
        .group:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 45px rgba(52,168,83,0.08);
          border-color: rgba(52,168,83,0.35) !important;
        }
      `}</style>
    </div>
  );
}
