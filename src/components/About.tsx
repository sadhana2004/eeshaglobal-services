import { Award, Target, Heart } from "lucide-react";
import studyImage from "@/assets/study-abroad.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-50/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-green-500 rounded-full" />
              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in
              <span className="text-blue-600 block">Global Education</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              EduEliteGlobal Agencies helps students achieve their dreams of studying abroad.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              We guide you from university selection to visa success with expert support.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="group p-4 text-center bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="p-4 rounded-lg w-fit mx-auto mb-3 bg-blue-100">
                  <Award className="h-8 w-8 text-blue-600 group-hover:text-green-600 transition" />
                </div>
                <h3 className="font-bold">Excellence</h3>
                <p className="text-sm text-gray-600">Top-tier quality</p>
              </div>

              <div className="group p-4 text-center bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="p-4 rounded-lg w-fit mx-auto mb-3 bg-blue-100">
                  <Target className="h-8 w-8 text-blue-600 group-hover:text-green-600 transition" />
                </div>
                <h3 className="font-bold">Goal-Oriented</h3>
                <p className="text-sm text-gray-600">Focused success</p>
              </div>

              <div className="group p-4 text-center bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="p-4 rounded-lg w-fit mx-auto mb-3 bg-blue-100">
                  <Heart className="h-8 w-8 text-blue-600 group-hover:text-green-600 transition" />
                </div>
                <h3 className="font-bold">Caring</h3>
                <p className="text-sm text-gray-600">Personal support</p>
              </div>
            </div>

            {/* 🔥 PREMIUM LEADERSHIP */}
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Leadership
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                {/* Directors */}
                <div className="group relative bg-white p-6 rounded-2xl text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-500 opacity-0 translate-y-10 animate-fadeUp delay-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200 to-green-200 opacity-0 group-hover:opacity-100 blur-xl"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white text-xl font-bold">
                      D
                    </div>
                    <h3 className="font-bold text-lg">Directors</h3>
                    <p className="text-gray-600 mt-2">Singhamsetty Shiva</p>
                    <p className="text-gray-600">Kanakam Bhargav</p>
                  </div>
                </div>

                {/* Managing Director */}
                <div className="group relative bg-white p-6 rounded-2xl text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-500 opacity-0 translate-y-10 animate-fadeUp delay-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200 to-green-200 opacity-0 group-hover:opacity-100 blur-xl"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white text-xl font-bold">
                      MD
                    </div>
                    <h3 className="font-bold text-lg">Managing Director</h3>
                    <p className="text-gray-600 mt-2">Prudhvi Reddy Ayuluri</p>
                  </div>
                </div>

                {/* Managing Partner */}
                <div className="group relative bg-white p-6 rounded-2xl text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-500 opacity-0 translate-y-10 animate-fadeUp delay-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200 to-green-200 opacity-0 group-hover:opacity-100 blur-xl"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white text-xl font-bold">
                      MP
                    </div>
                    <h3 className="font-bold text-lg">Managing Partner</h3>
                    <p className="text-gray-600 mt-2">Timothy Martin</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-green-200/40 rounded-2xl rotate-3"></div>
            <img
              src={studyImage}
              alt="Students studying"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

        </div>
      </div>

      {/* 🔥 ANIMATION STYLES */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default About;