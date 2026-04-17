// src/components/Services.tsx
import { FileText, Plane, BookOpen, CreditCard, Home, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: BookOpen,
    title: "University Selection",
    description:
      "Expert guidance to choose the perfect university and program that matches your goals, budget, and aspirations.",
  },
  {
    icon: FileText,
    title: "Profile Evaluation",
    description:
      "Comprehensive assistance with applications, essays, and documentation to maximize your acceptance chances.",
  },
  {
    icon: Plane,
    title: "Visa Guidance",
    description:
      "Step-by-step visa application support with document preparation, interview coaching, and submission assistance.",
  },
  {
    icon: CreditCard,
    title: "Financial Assistance",
    description:
      "Advice on scholarships, education loans, and financial planning to make studying abroad affordable.",
  },
  {
    icon: Home,
    title: "Mock Tests & Interviews",
    description:
      "Help finding safe, comfortable, and affordable accommodation near your university campus.",
  },
  {
    icon: Briefcase,
    title: "Accommodation & Pre-Departure Support",
    description:
      "Orientation sessions covering travel, culture adaptation, and essential tips for living abroad.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-1 w-12 rounded-full" style={{ backgroundColor: "#34A853" }} />
            <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: "#34A853" }}>
              Our Services
            </span>
            <div className="h-1 w-12 rounded-full" style={{ backgroundColor: "#34A853" }} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Support for
            <span className="block" style={{ color: "#0D6EFD" }}>
              Your Study Abroad Journey
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            From university selection to settling abroad, we provide end-to-end services to make your
            international education dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group transition-all duration-300 border rounded-lg"
                style={{
                  borderColor: "rgba(13,110,253,0.06)",
                  boxShadow: "0 6px 18px rgba(13,110,253,0.03)",
                }}
              >
                <CardContent className="p-6">
                  <div
                    className="p-4 rounded-lg w-fit mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(13,110,253,0.12) 0%, rgba(52,168,83,0.08) 100%)",
                    }}
                  >
                    <Icon
                      className="h-8 w-8 transition-colors duration-200"
                      style={{ color: "#0D6EFD" }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>

                {/* Green border + subtle lift on hover */}
                <style jsx>{`
                  .group:hover {
                    transform: translateY(-4px);
                    border-color: rgba(52,168,83,0.45) !important;
                    box-shadow: 0 12px 30px rgba(52,168,83,0.08) !important;
                  }
                  .group:hover svg {
                    color: #34A853 !important;
                  }
                `}</style>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
