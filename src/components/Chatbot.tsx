import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const BLUE = "#0D6EFD";
const GREEN = "#34A853";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "👋 Hello! I'm your EeshaGlobal Assistant.\nHow can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const responses: Record<string, string> = {
    "study abroad":
      "Studying abroad opens global opportunities! 🌍 Which country are you targeting?\nOptions:\n🇺🇸 USA\n🇬🇧 UK\n🇨🇦 Canada\n🇦🇺 Australia\n🇩🇪 Germany\n🇪🇺 Europe",
    visa:
      "We help with complete visa processing including documents, DS-160, biometrics & mock interviews! ✈️",
    ielts:
      "IELTS/TOEFL is required for most universities. Minimum scores:\n📌 IELTS: 6.0 – 7.0\n📌 TOEFL: 80 – 100",
    cost:
      "Average cost per year:\n🇺🇸 USA → 25–40 lakhs\n🇬🇧 UK → 15–30 lakhs\n🇨🇦 Canada → 12–25 lakhs\n🇦🇺 Australia → 20–35 lakhs",
    contact:
      "📞 Contact Us\nEmail: info@edueliteglobal.com\nWhatsApp: Chat button below 👇",
    usa: "🇺🇸 USA Requirements:\n• IELTS 6.0+\n• SOP & LOR\n• Passport\n• Financial proof\nAsk: *“USA universities”* for more.",
    uk: "🇬🇧 UK Requirements:\n• IELTS 6.0+\n• No GRE required\n• Fast visa processing\nAsk: *“UK universities”* for more.",
    canada:
      "🇨🇦 Canada Requirements:\n• IELTS 6.0 (6 each)\n• Academic transcripts\n• GIC mandatory\nAsk: *“Canada colleges”* for more.",
  };

  const handleSend = (value?: string) => {
    const text = value || input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      const key = Object.keys(responses).find((k) => lower.includes(k));

      const reply = key
        ? responses[key]
        : "I’m here to assist! 😊\nAsk about:\n• Study abroad\n• Visa help\n• IELTS\n• Costs\n• USA / UK / Canada / Australia";

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Chat Icon (Pulse Like WhatsApp + Blue Glow) */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-32 right-6
          p-4 rounded-full 
          text-white shadow-2xl
          transition-all duration-300 
          hover:scale-110
          animate-chatbot-pulse
          z-[999999]
          chatbot-glow
        "
        style={{ background: BLUE }}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <style>
        {`
          /* Smooth pulse like WhatsApp */
          @keyframes chatbot-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
          .animate-chatbot-pulse {
            animation: chatbot-pulse 2s infinite ease-in-out;
          }

          /* Blue outer glow ring */
          .chatbot-glow {
            box-shadow: 0 0 0 rgba(13,110,253,0.4);
            animation: chatbot-glow-ring 2s infinite;
          }
          @keyframes chatbot-glow-ring {
            0% { box-shadow: 0 0 0 0 rgba(13,110,253,0.5); }
            70% { box-shadow: 0 0 15px 10px rgba(13,110,253,0); }
            100% { box-shadow: 0 0 0 0 rgba(13,110,253,0); }
          }
        `}
      </style>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-40 right-6 w-80 bg-white rounded-xl shadow-2xl z-[999999] flex flex-col"
          style={{ animation: "chatSlideUp 0.35s ease" }}
        >
          {/* Slide Animation */}
          <style>
            {`
              @keyframes chatSlideUp {
                from { 
                  opacity: 0; 
                  transform: translateY(40px); 
                }
                to { 
                  opacity: 1; 
                  transform: translateY(0); 
                }
              }
            `}
          </style>

          {/* Header */}
          <div
            className="p-4 text-white flex items-center justify-between rounded-t-xl"
            style={{
              background: `linear-gradient(135deg, ${BLUE} 0%, ${GREEN} 100%)`,
            }}
          >
            <div className="flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
                alt="bot"
                className="h-7 w-7"
              />
              <h2 className="text-lg font-semibold">EeshaGlobal Assistant</h2>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-3 h-72 overflow-y-auto bg-gray-50 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                  msg.from === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-white text-gray-900 shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
          </div>

          {/* Quick Buttons */}
          <div className="p-2 flex flex-wrap gap-2 bg-gray-100 border-t">
            {["Study abroad", "Visa help", "IELTS", "Cost", "Canada", "USA"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleSend(item)}
                  className="px-3 py-1 text-xs bg-white border rounded-full shadow-sm hover:bg-blue-50"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg text-sm"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

          {/* WhatsApp fallback */}
          <a
            href="https://wa.me/918374163689"
            target="_blank"
            className="block text-center py-2 text-sm font-semibold text-green-600 bg-green-50 border-t hover:bg-green-100"
          >
            💬 Chat on WhatsApp
          </a>

          {/* Typing Animation */}
          <style>{`
            .typing-dot {
              height: 6px;
              width: 6px;
              background: #999;
              border-radius: 50%;
              display: inline-block;
              animation: blink 1s infinite;
            }
            @keyframes blink {
              0% { opacity: 0.2; }
              50% { opacity: 1; }
              100% { opacity: 0.2; }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Chatbot;