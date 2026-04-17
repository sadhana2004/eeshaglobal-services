import { useState } from "react";
import emailjs from "emailjs-com";
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

          // clear form
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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            Contact Us
          </h2>
        </div>

        {/* FORM */}
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>

            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <Input
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />

            <Textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
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
        </div>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl text-center shadow-xl">

            <h3 className="text-lg font-bold text-green-600 mb-2">
              Message Sent!
            </h3>

            <p className="text-sm mb-4">
              Thank you! We will contact you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
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