// src/App.tsx

import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import VisaServicesPages from "./components/VisaServicesPages";
import VisaServicesDetails from "./components/VisaServicesDetails";
import WorkingProfessionals from "./components/WorkingProfessionals";
import Graduates from "./components/Graduates";
import Chatbot from "./components/Chatbot";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudyAbroad from "./pages/StudyAbroad";
import CourseDetails from "@/pages/CourseDetails";
import CountryDetails from "./pages/CountryDetails";
import ExamDetails from "./pages/ExamDetails";
import UniversityDetails from "./pages/UniversityDetails";
import DomesticColleges from "./pages/DomesticColleges";
import DomesticCollegeDetails from "./pages/DomesticCollegeDetails";
import Exams from "./pages/Exams";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ROUTING */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Visa */}
            <Route path="/visa-services" element={<VisaServicesPages />} />
            <Route path="/visa-services/:id" element={<VisaServicesDetails />} />

            {/* Study Abroad */}
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/study-abroad/:country" element={<CountryDetails />} />

            {/* University */}
            <Route path="/university/:id" element={<UniversityDetails />} />

            {/* Courses */}
            <Route path="/course/:id" element={<CourseDetails />} />

            {/* Exams */}
            <Route path="/exams" element={<Exams />} />
            <Route path="/exam/:exam" element={<ExamDetails />} />

            {/* Domestic Colleges */}
            <Route path="/domestic-colleges" element={<DomesticColleges />} />
            <Route
              path="/domestic-colleges/:id"
              element={<DomesticCollegeDetails />}
            />

            {/* Others */}
            <Route
              path="/working-professionals"
              element={<WorkingProfessionals />}
            />
            <Route path="/graduates" element={<Graduates />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {/* ⭐ CHATBOT — GLOBAL, ALWAYS VISIBLE */}
        <Chatbot />

        {/* ⭐ WHATSAPP FLOATING BUTTON */}
        <div className="fixed bottom-6 right-6 z-[99999] group pointer-events-auto">
          <span
            className="
              absolute right-16 top-1/2 -translate-y-1/2 
              bg-black text-white text-xs px-3 py-1 rounded-md 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
              whitespace-nowrap shadow-md
            "
          >
            Chat on WhatsApp
          </span>

          <a
            href="https://wa.me/918374163689"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="
              bg-[#25D366] hover:bg-[#1ebe5d]
              p-4 rounded-full shadow-xl 
              transition-all duration-300 
              flex items-center justify-center 
              hover:scale-110 
              animate-pulse-slow
            "
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="h-7 w-7"
            />
          </a>
        </div>

        {/* ⭐ BACK TO TOP */}
        <div
          className={`fixed bottom-6 left-6 z-[99999] transition-transform duration-300 ${
            showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          <button
            onClick={scrollToTop}
            className="bg-slate-800/90 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg transition-all"
          >
            ↑
          </button>
        </div>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
