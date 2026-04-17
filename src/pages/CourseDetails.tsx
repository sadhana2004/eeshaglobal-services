// src/pages/CourseDetails.tsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Course = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  careers: string[];
  avgFees: string;
  duration?: string;
  prerequisites?: string[];
  keySkills?: string[];
  demand?: string;
  sampleUniversities?: string[];
  curriculumHighlights?: string[];
};

const COURSE_DATA: Record<string, Course> = {
  cs: {
    id: "cs",
    emoji: "💻",
    title: "Computer Science & IT",
    description:
      "Computer Science & IT covers programming, algorithms, operating systems, databases, distributed systems and software engineering. Strong focus on problem-solving, systems design and scalable architectures.",
    careers: [
      "Software Developer",
      "Backend Engineer",
      "Full-stack Developer",
      "Site Reliability Engineer",
      "Cloud Engineer",
    ],
    avgFees: "$15,000 - $60,000/year",
    duration: "3-4 years (Bachelors), 1-2 years (Masters)",
    prerequisites: ["High school math for UG", "Bachelor’s degree for PG", "Programming fundamentals"],
    keySkills: ["Data structures", "Algorithms", "System design", "Databases", "Networking"],
    demand: "Very High",
    sampleUniversities: ["MIT", "Stanford", "University of Toronto", "NUS"],
    curriculumHighlights: [
      "Programming (Python/Java/C++)",
      "Data Structures & Algorithms",
      "Operating Systems & Networking",
      "Databases & Web Development",
    ],
  },

  ds: {
    id: "ds",
    emoji: "📊",
    title: "Data Science",
    description:
      "Data Science focuses on extracting insights from data using statistics, machine learning, data engineering and visualization. Emphasis on practical projects and domain knowledge.",
    careers: [
      "Data Scientist",
      "Data Analyst",
      "ML Engineer",
      "Business Intelligence Analyst",
      "Data Engineer",
    ],
    avgFees: "$18,000 - $65,000/year",
    duration: "1-2 years (Masters), shorter diplomas",
    prerequisites: ["Statistics & probability", "Programming (Python/R)", "Linear algebra basics"],
    keySkills: ["Python/R", "Pandas", "SQL", "ML algorithms", "Data visualization"],
    demand: "Very High",
    sampleUniversities: ["Carnegie Mellon", "Imperial College London", "ETH Zurich"],
    curriculumHighlights: [
      "Exploratory Data Analysis",
      "Statistical Modeling",
      "Supervised & Unsupervised Learning",
      "Big Data Tools (Spark, Hadoop)",
    ],
  },

  ai: {
    id: "ai",
    emoji: "🤖",
    title: "Artificial Intelligence",
    description:
      "AI focuses on building intelligent systems using deep learning, reinforcement learning, natural language processing and computer vision.",
    careers: [
      "AI/ML Researcher",
      "Machine Learning Engineer",
      "Computer Vision Engineer",
      "NLP Engineer",
    ],
    avgFees: "$22,000 - $70,000/year",
    duration: "1-2 years (Masters / MSc) or specialized programs",
    prerequisites: ["Strong math (linear algebra, calculus)", "Programming", "Statistics"],
    keySkills: ["Deep learning", "PyTorch/TensorFlow", "NLP", "Computer Vision"],
    demand: "Very High",
    sampleUniversities: ["Stanford", "MIT", "Oxford", "NUS"],
    curriculumHighlights: [
      "Neural Networks & Deep Learning",
      "Reinforcement Learning",
      "NLP & Transformers",
      "Computer Vision & Perception",
    ],
  },

  mba: {
    id: "mba",
    emoji: "💼",
    title: "Business Administration (MBA)",
    description:
      "MBA programs cover leadership, finance, marketing, strategy, operations and entrepreneurship. Suited for those seeking managerial roles or startups.",
    careers: ["Product Manager", "Consultant", "Business Analyst", "Founder", "Finance Manager"],
    avgFees: "$20,000 - $90,000/course",
    duration: "1-2 years",
    prerequisites: ["Undergraduate degree", "Work experience for many top programs", "GMAT/GRE sometimes"],
    keySkills: ["Leadership", "Strategy", "Finance", "Marketing", "Analytical thinking"],
    demand: "High",
    sampleUniversities: ["IIM Ahmedabad", "Harvard Business School", "London Business School"],
    curriculumHighlights: [
      "Corporate Finance & Accounting",
      "Marketing Strategy",
      "Operations & Supply Chain",
      "Leadership & Organizational Behavior",
    ],
  },

  me: {
    id: "me",
    emoji: "🛠️",
    title: "Mechanical Engineering",
    description:
      "Mechanical Engineering focuses on mechanics, thermodynamics, materials, CAD, and manufacturing processes. Strong application in design and industry.",
    careers: ["Mechanical Engineer", "Design Engineer", "R&D Engineer", "Manufacturing Engineer"],
    avgFees: "$10,000 - $45,000/year",
    duration: "3-4 years (UG), 1-2 years (PG)",
    prerequisites: ["Physics & math background", "Strong calculus knowledge"],
    keySkills: ["CAD/CAE", "Thermodynamics", "Materials", "Control systems"],
    demand: "Medium-High",
    sampleUniversities: ["Technical Univ. Munich", "MIT", "University of Melbourne"],
    curriculumHighlights: [
      "Statics & Dynamics",
      "Thermodynamics & Heat Transfer",
      "Fluid Mechanics",
      "Machine Design & Manufacturing",
    ],
  },

  ce: {
    id: "ce",
    emoji: "🏗️",
    title: "Civil Engineering",
    description:
      "Civil Engineering covers structural engineering, geotechnical engineering, construction management and transportation systems.",
    careers: ["Structural Engineer", "Site Engineer", "Geotechnical Engineer", "Project Manager"],
    avgFees: "$8,000 - $30,000/year",
    duration: "3-4 years (UG), 1-2 years (PG)",
    prerequisites: ["Physics", "Maths: calculus and geometry"],
    keySkills: ["Structural analysis", "CAD", "Soil mechanics", "Project management"],
    demand: "Medium",
    sampleUniversities: ["IITs", "TU Munich", "University of Cambridge"],
    curriculumHighlights: [
      "Structural Design",
      "Concrete & Steel Design",
      "Transportation Engineering",
      "Construction Management",
    ],
  },

  ee: {
    id: "ee",
    emoji: "🔌",
    title: "Electrical & Electronics",
    description:
      "Covers circuits, electronics, embedded systems, signal processing and telecommunications.",
    careers: ["Electronics Engineer", "Embedded Systems Engineer", "Control Systems Engineer"],
    avgFees: "$12,000 - $45,000/year",
    duration: "3-4 years (UG), 1-2 years (PG)",
    prerequisites: ["Maths, basic physics, circuits knowledge"],
    keySkills: ["PCB design", "Embedded C", "Signal processing", "Power systems"],
    demand: "Medium-High",
    sampleUniversities: ["Imperial College London", "ETH Zurich", "IIT Bombay"],
    curriculumHighlights: [
      "Circuit Theory & Electronics",
      "Signals & Systems",
      "Embedded Systems & IoT",
      "Power Systems & Controls",
    ],
  },

  med: {
    id: "med",
    emoji: "🩺",
    title: "Medicine & Healthcare",
    description:
      "Long professional programs covering human biology, diagnostics, clinical practice and research. Intensive practical training.",
    careers: ["Doctor", "Surgeon", "Clinical Researcher", "Public Health Specialist"],
    avgFees: "Varies widely; often subsidized in public institutions",
    duration: "5-6 years (MBBS) + specialization",
    prerequisites: ["High school biology/chemistry", "Entrance exams (varies by country)"],
    keySkills: ["Clinical skills", "Medical knowledge", "Research methodology"],
    demand: "Very High (doctors & healthcare workers)",
    sampleUniversities: ["AIIMS", "University of Melbourne", "McGill"],
    curriculumHighlights: [
      "Anatomy & Physiology",
      "Clinical Rotations",
      "Pathology & Pharmacology",
      "Public Health & Ethics",
    ],
  },

  nursing: {
    id: "nursing",
    emoji: "👩‍⚕️",
    title: "Nursing",
    description:
      "Professional nursing programs train clinical care, patient management, community health and nursing research.",
    careers: ["Registered Nurse", "Clinical Nurse Specialist", "Nurse Educator", "Public Health Nurse"],
    avgFees: "$3,000 - $20,000/year",
    duration: "2-4 years (diploma/degree)",
    prerequisites: ["Biology/chemistry background"],
    keySkills: ["Patient care", "Clinical procedures", "Communication", "Emergency care"],
    demand: "Very High",
    sampleUniversities: ["Johns Hopkins", "NUS", "University of Toronto"],
    curriculumHighlights: [
      "Fundamentals of Nursing",
      "Clinical Practicum",
      "Community & Public Health Nursing",
      "Nursing Research & Ethics",
    ],
  },

  cyber: {
    id: "cyber",
    emoji: "🛡️",
    title: "Cyber Security",
    description:
      "Focuses on securing systems, networks, applications, incident response, and ethical hacking.",
    careers: ["Security Analyst", "Penetration Tester", "Security Engineer", "SOC Analyst"],
    avgFees: "$12,000 - $45,000/year",
    duration: "1-2 years (Masters) or short professional courses",
    prerequisites: ["Networking basics", "Linux & scripting knowledge"],
    keySkills: ["Network security", "Pen testing", "SIEM", "Cryptography"],
    demand: "Very High",
    sampleUniversities: ["Carnegie Mellon", "Imperial College", "ETH Zurich"],
    curriculumHighlights: [
      "Network Security & Cryptography",
      "Ethical Hacking & Pen Testing",
      "Incident Response & Forensics",
      "Secure Software Development",
    ],
  },

  finance: {
    id: "finance",
    emoji: "💱",
    title: "Finance & Accounting",
    description:
      "Covers corporate finance, investment analysis, accounting, financial modeling and risk management.",
    careers: ["Financial Analyst", "Investment Banker", "Risk Manager", "Accountant"],
    avgFees: "$10,000 - $60,000/year",
    duration: "1-2 years (Masters / MSc / MBA finance tracks)",
    prerequisites: ["Basic accounting and quantitative skills"],
    keySkills: ["Financial modeling", "Excel", "Valuation", "Risk analysis"],
    demand: "High",
    sampleUniversities: ["London Business School", "Wharton", "IIM Ahmedabad"],
    curriculumHighlights: [
      "Corporate Finance",
      "Investment & Portfolio Management",
      "Accounting & Audit",
      "Financial Derivatives & Risk",
    ],
  },

  bio: {
    id: "bio",
    emoji: "🧬",
    title: "Biotechnology",
    description:
      "Biotech blends biology, chemistry, and engineering to develop products for healthcare, agriculture and industry.",
    careers: ["Biotech Researcher", "Process Development Scientist", "Clinical Trials Manager"],
    avgFees: "$8,000 - $40,000/year",
    duration: "3-4 years (UG), 1-2 years (PG)",
    prerequisites: ["Biology & chemistry foundation"],
    keySkills: ["Molecular biology", "Bioprocessing", "Lab techniques", "Data analysis"],
    demand: "Medium-High",
    sampleUniversities: ["ETH Zurich", "University of Cambridge", "NUS"],
    curriculumHighlights: [
      "Molecular Biology & Genetics",
      "Bioprocess Engineering",
      "Cell Culture & Biotech Lab Methods",
      "Regulatory Affairs & Bioethics",
    ],
  },

  hotel: {
    id: "hotel",
    emoji: "🏨",
    title: "Hotel Management & Tourism",
    description:
      "Covers hospitality operations, tourism management, F&B, housekeeping, event management and customer service.",
    careers: ["Hotel Manager", "F&B Manager", "Event Manager", "Tourism Planner"],
    avgFees: "$6,000 - $30,000/year",
    duration: "1-3 years diplomas / 3-4 years degree",
    prerequisites: ["Customer service aptitude", "Good communication skills"],
    keySkills: ["Hospitality operations", "Event planning", "Service excellence"],
    demand: "Medium",
    sampleUniversities: ["Cornell (Hotel School)", "University of Melbourne", "NUS"],
    curriculumHighlights: [
      "Hospitality Operations",
      "Food & Beverage Management",
      "Housekeeping & Front Office",
      "Tourism & Event Management",
    ],
  },

  arch: {
    id: "arch",
    emoji: "🏛️",
    title: "Architecture",
    description:
      "Architecture combines creative design, technical drawing, structural understanding and urban planning.",
    careers: ["Architect", "Urban Planner", "Interior Designer", "Construction Consultant"],
    avgFees: "$12,000 - $50,000/year",
    duration: "5 years (B.Arch) / 1-2 years (M.Arch)",
    prerequisites: ["Design aptitude", "Portfolio for many programs"],
    keySkills: ["Design thinking", "CAD", "Building technology", "Sustainable design"],
    demand: "Medium",
    sampleUniversities: ["University of Cambridge (Architecture)", "ETH Zurich", "MIT"],
    curriculumHighlights: [
      "Design Studio Projects",
      "Architectural History & Theory",
      "Building Science & Materials",
      "Urban Design & Planning",
    ],
  },

  media: {
    id: "media",
    emoji: "🎬",
    title: "Media & Communication",
    description:
      "Covers journalism, digital media, content creation, film/video production and strategic communication.",
    careers: ["Journalist", "Content Strategist", "Film Producer", "Social Media Manager"],
    avgFees: "$8,000 - $40,000/year",
    duration: "3-4 years (UG), 1-2 years (PG)",
    prerequisites: ["Portfolio or sample work for creative programs"],
    keySkills: ["Storytelling", "Video production", "Analytics", "SEO/Content strategy"],
    demand: "High (digital media growth)",
    sampleUniversities: ["NYU (Tisch)", "Goldsmiths", "NUS"],
    curriculumHighlights: [
      "Media Theory & Ethics",
      "Digital Content Production",
      "Journalism & Reporting",
      "Media Analytics & Strategy",
    ],
  },
};

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

export default function CourseDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = id ? COURSE_DATA[id.toLowerCase()] : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-[#F3F8FF] text-[#0b1f3b]">
        <div className="max-w-lg text-center p-8">
          <h2 className="text-2xl font-semibold mb-3">Course not found</h2>
          <p className="text-sm text-[#64748b]">We couldn't find details for that course.</p>
          <div className="mt-6">
            <Link
              to="/study-abroad"
              className="inline-block rounded-full px-4 py-2 font-medium text-white"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
            >
              Back to Study Abroad
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F8FF] text-[#0b1f3b]">
      {/* HERO */}
      <div
        className="w-full h-48 md:h-56 lg:h-64 flex items-end"
        style={{
          background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
        }}
      >
        <div className="max-w-6xl mx-auto w-full px-4 py-6">
          <Link to="/study-abroad" className="inline-flex items-center gap-2 text-white text-sm mb-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <span className="text-2xl">{course.emoji}</span> {course.title}
          </h1>
          <p className="text-white/90 mt-2 max-w-3xl">{course.description}</p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-3">
        {/* Left / main */}
        <div className="md:col-span-2 space-y-6">
          {/* Overview (services-style card) */}
          <section
            className="group bg-white p-6 rounded-2xl border transition-all shadow-sm"
            style={{ borderColor: "rgba(13,110,253,0.08)" }}
          >
            <div
              className="p-3 rounded-lg w-fit mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))",
              }}
            >
              <div className="h-8 w-8 text-lg flex items-center justify-center">{course.emoji}</div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-[#475569] leading-7">{course.description}</p>

            <style>{`
              .group:hover {
                transform: translateY(-6px);
                border-color: rgba(52,168,83,0.35) !important;
                box-shadow: 0 18px 45px rgba(52,168,83,0.06);
              }
            `}</style>
          </section>

          {/* Curriculum Highlights */}
          <section
            className="group bg-white p-6 rounded-2xl border transition-all shadow-sm"
            style={{ borderColor: "rgba(13,110,253,0.08)" }}
          >
            <div
              className="p-3 rounded-lg w-fit mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))",
              }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="text-xl font-semibold mb-3">Curriculum Highlights</h2>
            <ul className="list-disc list-inside text-[#475569] space-y-2">
              {course.curriculumHighlights?.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <style>{`
              .group:hover {
                transform: translateY(-6px);
                border-color: rgba(52,168,83,0.35) !important;
                box-shadow: 0 18px 45px rgba(52,168,83,0.06);
              }
            `}</style>
          </section>

          {/* Key Skills */}
          <section
            className="group bg-white p-6 rounded-2xl border transition-all shadow-sm"
            style={{ borderColor: "rgba(13,110,253,0.08)" }}
          >
            <div
              className="p-3 rounded-lg w-fit mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))",
              }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="text-xl font-semibold mb-3">What you'll learn / Key skills</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {(course.keySkills || []).map((k) => (
                <div key={k} className="p-3 rounded-lg bg-white border border-[#eef6ff] text-sm">
                  {k}
                </div>
              ))}
            </div>

            <style>{`
              .group:hover {
                transform: translateY(-6px);
                border-color: rgba(52,168,83,0.35) !important;
                box-shadow: 0 18px 45px rgba(52,168,83,0.06);
              }
            `}</style>
          </section>

          {/* Career Paths */}
          <section
            className="group bg-white p-6 rounded-2xl border transition-all shadow-sm"
            style={{ borderColor: "rgba(13,110,253,0.08)" }}
          >
            <div
              className="p-3 rounded-lg w-fit mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))",
              }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="text-xl font-semibold mb-3">Career Paths</h2>
            <ul className="list-disc list-inside text-[#475569] space-y-2">
              {course.careers.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <style>{`
              .group:hover {
                transform: translateY(-6px);
                border-color: rgba(52,168,83,0.35) !important;
                box-shadow: 0 18px 45px rgba(52,168,83,0.06);
              }
            `}</style>
          </section>

          {/* Prerequisites */}
          <section
            className="group bg-white p-6 rounded-2xl border transition-all shadow-sm"
            style={{ borderColor: "rgba(13,110,253,0.08)" }}
          >
            <div
              className="p-3 rounded-lg w-fit mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(13,110,253,0.12), rgba(52,168,83,0.08))",
              }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M6 8l6 8 6-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 className="text-xl font-semibold mb-3">Typical prerequisites</h2>
            <ul className="list-disc list-inside text-[#475569] space-y-2">
              {(course.prerequisites || []).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <style>{`
              .group:hover {
                transform: translateY(-6px);
                border-color: rgba(52,168,83,0.35) !important;
                box-shadow: 0 18px 45px rgba(52,168,83,0.06);
              }
            `}</style>
          </section>
        </div>

        {/* Right aside — services-styled quick facts + CTA */}
        <aside className="p-6 bg-white rounded-2xl shadow border border-[#eef6ff] h-fit">
          <h3 className="font-semibold mb-3">Quick Facts</h3>

          <div className="divide-y divide-[#f1f5f9] text-sm">
            <div className="py-3 flex justify-between">
              <span className="text-[#64748b]">Duration</span>
              <span className="font-medium">{course.duration ?? "Varies"}</span>
            </div>

            <div className="py-3 flex justify-between">
              <span className="text-[#64748b]">Avg. Fees</span>
              <span className="font-medium">{course.avgFees}</span>
            </div>

            <div className="py-3 flex justify-between">
              <span className="text-[#64748b]">Demand</span>
              <span className="font-medium">{course.demand ?? "High"}</span>
            </div>

            <div className="py-3">
              <span className="text-[#64748b]">Sample Universities</span>
              <div className="mt-2 text-sm">
                {(course.sampleUniversities || []).map((s) => (
                  <div key={s} className="text-[#0b1f3b]">{s}</div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-white font-semibold transition shadow"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }}
            onMouseEnter={(e: any) => (e.currentTarget.style.background = `linear-gradient(90deg, ${GREEN}, ${BLUE})`)}
            onMouseLeave={(e: any) => (e.currentTarget.style.background = `linear-gradient(90deg, ${BLUE}, ${GREEN})`)}
          >
            Apply Now
          </button>

          <Link to="/study-abroad" className="block mt-3 text-center text-sm text-[#1f4f9a] hover:underline">
            Back to Study Abroad
          </Link>
        </aside>
      </main>
    </div>
  );
}
