import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  RotateCcw,
  Sparkles,
  Bot,
  User,
  ShieldCheck,
  CheckCheck,
  ArrowRight,
  Clock,
} from "lucide-react";
import { useAudit } from "../context/AuditContext";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  time: string;
}

const presetPrompts = [
  "Emergency boiler leak in SW19, water leaking fast",
  "Need an EICR electrical certificate for a rental flat",
  "Roof tiles blown off in windstorm, need urgent repair",
  "Quote for complete bathroom renovation in Birmingham",
];

const initialMessages: ChatMessage[] = [
  {
    id: "init-1",
    sender: "ai",
    text: "Hi! Thanks for reaching out to Apex Heating & Plumbing. What trade service or emergency can we help you with today?",
    time: "Just now",
  },
];

export const LiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { openAuditModal } = useAudit();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    // Dynamic trade-aware response generation
    setTimeout(() => {
      let aiResponseText = "";
      const lower = text.toLowerCase();

      if (lower.includes("boiler") || lower.includes("leak") || lower.includes("emergency") || lower.includes("pipe") || lower.includes("water")) {
        aiResponseText =
          "Understood! For urgent leaks & boiler emergencies, our nearest engineer can attend within 60 minutes. Could you confirm your UK postcode and whether you can isolate the main stopcock?";
      } else if (lower.includes("eicr") || lower.includes("electrical") || lower.includes("fuse") || lower.includes("wiring")) {
        aiResponseText =
          "Thanks! We carry out NICEIC-certified EICR reports from £140 + VAT. How many bedrooms is the property and what is your target completion date?";
      } else if (lower.includes("roof") || lower.includes("tile") || lower.includes("gutter") || lower.includes("chimney")) {
        aiResponseText =
          "We can definitely inspect that roof repair. We provide free drone & ladder surveys. What town or postcode are you located in, and is water coming through ceilings?";
      } else if (lower.includes("bath") || lower.includes("kitchen") || lower.includes("renovation") || lower.includes("quote")) {
        aiResponseText =
          "Great project! We provide turnkey bathroom renovations with 10-year guarantees. Would you prefer a free on-site survey this Wednesday or Thursday afternoon?";
      } else {
        aiResponseText =
          "Thank you for contacting us! We cover all general and emergency trade jobs across the area. Please share your UK postcode and a brief description of the job so we can lock in an engineer for you.";
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: aiResponseText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleReset = () => {
    setMessages(initialMessages);
    setInputValue("");
    setIsTyping(false);
  };

  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/40">
      <div className="container-x">
        {/* Section Header */}
        <div className="grid md:grid-cols-12 md:items-end gap-6 mb-12">
          <div className="md:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              Interactive Sandbox · 24/7 WhatsApp & SMS AI
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-normal tracking-tight leading-[1.08]">
              Test the Trade AI Engine <br />
              Before You Deploy It.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-stone leading-relaxed">
              Experience the sub-second qualification conversational flow that stops homeowners
              from dialing your local competitors. Test a scenario below or type your own.
            </p>
          </div>
        </div>

        {/* Sandbox Frame */}
        <div className="max-w-3xl mx-auto rounded-sm border border-border bg-card shadow-lg overflow-hidden">
          {/* Top Bar */}
          <div className="bg-primary text-primary-foreground p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base sm:text-lg text-primary-foreground font-normal">
                    Apex Trade AI Assistant
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-xs text-primary-foreground/75">
                  Live Simulated 24/7 WhatsApp & SMS Qualifier
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-primary-foreground/80 hover:text-accent bg-primary-foreground/10 hover:bg-primary-foreground/15 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              title="Reset sandbox conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Sandbox</span>
            </button>
          </div>

          {/* Prompt Chips */}
          <div className="p-4 bg-secondary/40 border-b border-border">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-stone mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Quick Test Prompts (Click to Send):</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {presetPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-xs text-left bg-card hover:bg-primary hover:text-primary-foreground text-foreground px-3 py-1.5 rounded-full border border-border transition-all cursor-pointer shadow-xs"
                >
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages Stream */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[380px] min-h-[260px] overflow-y-auto bg-background/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-sm p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground border border-border"
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`text-[10px] mt-1.5 flex items-center gap-1 ${
                      msg.sender === "user"
                        ? "text-primary-foreground/70 justify-end"
                        : "text-stone justify-end"
                    }`}
                  >
                    <span>{msg.time}</span>
                    {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-accent" />}
                  </div>
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-secondary text-stone flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-card text-stone border border-border rounded-sm px-4 py-2.5 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] ml-1.5 text-stone font-medium">
                    AI qualifying inquiry...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-4 bg-card border-t border-border flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a customer inquiry (e.g. 'Burst pipe in kitchen SW19')..."
              className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="rounded-full bg-primary text-primary-foreground p-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-primary/90 transition-all flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
              aria-label="Send test inquiry"
            >
              <span className="hidden sm:inline">Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Sandbox Footer CTA Banner */}
          <div className="bg-secondary/70 p-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-stone">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>
                Trained on your exact trade catalogue, callout pricing, and postcodes.
              </span>
            </div>
            <button
              onClick={() => openAuditModal("24/7 WhatsApp AI Assistant")}
              className="rounded-full bg-accent text-ink font-medium px-4 py-2 hover:bg-accent/90 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
            >
              <span>Install On Your Business Number</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
