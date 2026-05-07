import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_l18bnzm",
        "template_4r6rx1m",
        formData,
        "o_82vsp2ga2doRfIB"
      )
      .then(
        () => {
          setLoading(false);
          setShowPopup(true);

          // CLEAR FORM
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-blue-50/40">
      <div className="container mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 text-lg">
            Reach out to us for expert guidance and support.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            {/* FORM */}
            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                />

                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                required
              />

              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                required
              />

              <Button
                type="submit"
                className="w-full text-white"
                style={{
                  background: `linear-gradient(90deg, ${BLUE}, ${GREEN})`,
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* OFFICE HOURS */}
            <div className="mt-8 bg-blue-50 border border-blue-100 p-5 rounded-xl">
              <h4 className="font-semibold flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5 text-blue-600" />
                Office Hours
              </h4>

              <p className="text-sm text-gray-600">
                Monday - Saturday: 10:00 AM - 6:00 PM
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Sunday: Closed
              </p>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mt-6 bg-white border p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-3">
                Why Choose Us?
              </h4>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>✔ Expert Guidance</li>
                <li>✔ 100% Visa Assistance</li>
                <li>✔ Trusted by Students</li>
                <li>✔ End-to-End Support</li>
              </ul>
            </div>

            {/* GOOGLE MAP */}
            <div className="mt-6 bg-white border p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                Head Office Location
              </h4>

              <div className="overflow-hidden rounded-xl">
                <iframe
                  src="https://maps.app.goo.gl/gm1WbF3QrCwLUpu37?g_st=ac"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Darsi Head Office Location"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* CONTACT INFO */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-5">
                Get in Touch
              </h3>

              {/* EMAIL */}
              <div className="flex items-center gap-3 mb-5">
                <Mail className="h-5 w-5 text-blue-600" />

                <a
                  href="mailto:contactus@eeshaglobalservices.com"
                  className="hover:underline text-gray-700"
                >
                  contactus@eeshaglobalservices.com
                </a>
              </div>

              {/* PHONE NUMBERS */}
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-600 mt-1" />

                <div className="space-y-1 text-gray-700">
                  <a
                    href="tel:+917093548281"
                    className="block hover:underline"
                  >
                    +91 7093548281
                  </a>

                  <a
                    href="tel:+918341617304"
                    className="block hover:underline"
                  >
                    +91 8341617304
                  </a>

                  <a
                    href="tel:+919599964658"
                    className="block hover:underline"
                  >
                    +91 9959562169
                  </a>
                </div>
              </div>
            </div>

            {/* HEAD OFFICE */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="font-bold flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-red-500" />
                Head Office – Darsi
              </h4>

              <p className="text-sm text-gray-600 leading-7">
                GNR Complex, 1st Floor <br />
                Addanki Road, Darsi <br />
                Andhra Pradesh - 523247
              </p>
            </div>

            {/* VIJAYAWADA BRANCH */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="font-bold flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-red-500" />
                Vijayawada Branch
              </h4>

              <p className="text-sm text-gray-600 leading-7">
                Benz Circle, Nara Chandrababu Naidu Colony <br />
                Patamatalanka, Vijayawada <br />
                Andhra Pradesh - 520010
              </p>
            </div>

            {/* HYDERABAD BRANCH */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="font-bold flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-red-500" />
                Hyderabad Branch
              </h4>

              <p className="text-sm text-gray-600 leading-7">
                1st Floor, 16/A <br />
                Near Abhiruchi Sweets <br />
                Sanjeeva Reddy Nagar <br />
                Hyderabad, Telangana - 500038
              </p>
            </div>

            {/* DELHI BRANCH */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="font-bold flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-red-500" />
                Delhi Branch
              </h4>

              <p className="text-sm text-gray-600 leading-7">
                C-2/13A, Second Floor <br />
                Street No. 2, Acharya Niketan <br />
                Mayur Vihar Phase-1, Delhi
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

          <div className="bg-white rounded-2xl p-8 w-[320px] text-center shadow-2xl">

            {/* SUCCESS ICON */}
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Message Sent!
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Thank you! We’ll contact you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:scale-105 transition"
            >
              OK
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
