// src/components/ui/SidebarCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

export default function SidebarCard({
  title = "Service Details",
  processing = "4-8 weeks",
  type = "student",
  stats,
  brochureUrl,
}: {
  title?: string;
  processing?: string;
  type?: string;
  stats?: { placed?: number; partners?: number } | null;
  brochureUrl?: string;
}) {
  const navigate = useNavigate();

  return (
    <aside
      className="bg-white rounded-lg shadow p-5 border self-start w-full max-h-[70vh] overflow-auto transition-all"
      style={{ borderColor: "rgba(13,110,253,0.10)" }}
    >
      <div className="text-sm" style={{ color: BLUE }}>
        {title}
      </div>

      <div className="mt-4 border-t pt-4 space-y-3">

        {/* Processing Time */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-600">Processing Time</div>
          <div className="text-sm font-semibold" style={{ color: GREEN }}>
            {processing}
          </div>
        </div>

        {/* Type */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-600">Type</div>
          <div className="text-sm" style={{ color: BLUE }}>
            {type}
          </div>
        </div>

        {/* Stats */}
        {stats && (
          <div className="mt-3">
            <div className="text-xs text-gray-500">Snapshot</div>
            <div className="flex gap-3 mt-2">
              <div className="text-center">
                <div className="text-lg font-bold" style={{ color: GREEN }}>
                  {stats.placed ?? "-"}
                </div>
                <div className="text-xs text-gray-500">Placed</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold" style={{ color: BLUE }}>
                  {stats.partners ?? "-"}
                </div>
                <div className="text-xs text-gray-500">Partners</div>
              </div>
            </div>
          </div>
        )}

        {/* Apply Button */}
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

        {/* Contact */}
        <div className="mt-4 text-xs text-gray-500">
          <div>Need help now?</div>
          <a
            className="text-sm font-medium hover:underline"
            style={{ color: GREEN }}
            href="tel:+919390769909"
          >
            Call: +91-8374163689
          </a>
        </div>
      </div>

      {/* Hover Outline */}
      <style>{`
        aside:hover {
          border-color: rgba(52,168,83,0.35) !important;
          box-shadow: 0 18px 45px rgba(52,168,83,0.06);
          transform: translateY(-4px);
        }
      `}</style>
    </aside>
  );
}
