"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function JobTicketForm() {
  const [orderId, setOrderId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [service, setService] = useState<string>("Single Cover Art");
  const [title, setTitle] = useState<string>("");
  const [brief, setBrief] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [contactPref, setContactPref] = useState<string>("Email");

  const [generatedTicket, setGeneratedTicket] = useState<{
    id: string;
    mailtoUrl: string;
    igUrl: string;
    copied: boolean;
  } | null>(null);

  const generateNewOrderId = () => {
    const date = new Date();
    const yy = String(date.getFullYear()).slice(-2);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const rand = Math.floor(Math.random() * 90 + 10);
    return `${yy}${mm}${dd}-${rand}`;
  };

  useEffect(() => {
    setOrderId(generateNewOrderId());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentId = orderId || generateNewOrderId();

    const subject = encodeURIComponent(
      `[JOB TICKET #${currentId}] ${service} - ${name || "New Client"}`
    );
    const bodyText = `JOB TICKET #${currentId}
=============================
Name/Brand: ${name}
Contact Info: ${contact}
Service Requested: ${service}
Project Title: ${title}
Target Deadline: ${deadline}
Preferred Contact: ${contactPref}

PROJECT BRIEF:
${brief}
=============================`;

    const body = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:iyeredivine15@gmail.com?subject=${subject}&body=${body}`;
    const igUrl = `https://ig.me/m/jhaysanyay`;

    setGeneratedTicket({
      id: currentId,
      mailtoUrl,
      igUrl,
      copied: false,
    });
  };

  const handleCopySummary = () => {
    if (!generatedTicket) return;
    const text = `JOB TICKET #${generatedTicket.id}
Name/Brand: ${name}
Contact: ${contact}
Service: ${service}
Title: ${title}
Deadline: ${deadline}
Contact Pref: ${contactPref}

Brief:
${brief}`;

    navigator.clipboard.writeText(text);
    setGeneratedTicket({ ...generatedTicket, copied: true });
    setTimeout(() => {
      setGeneratedTicket((prev) => (prev ? { ...prev, copied: false } : null));
    }, 3000);
  };

  return (
    <section id="order" className="ticket-build-section py-[72px] bg-[var(--ink)] text-[var(--paper)]">
      <div className="wrap max-w-[800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="section-head mb-8 text-center"
        >
          <div className="eyebrow font-mono text-xs text-[var(--yellow)] tracking-[0.12em] uppercase mb-[18px] inline-flex items-center gap-[10px] before:content-[''] before:w-5 before:h-[2px] before:bg-[var(--yellow)] after:content-[''] after:w-5 after:h-[2px] after:bg-[var(--yellow)]">
            Commission Order Form
          </div>
          <h2 className="text-[clamp(36px,6vw,56px)] font-anton uppercase text-[var(--paper)]">
            Create Job Ticket
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="ticket relative bg-[var(--ink)] color-[var(--paper)] border-2 border-[var(--paper)] p-6 md:p-12 shadow-[12px_12px_0_var(--red)]"
        >
          {/* Corner Notches */}
          <div className="notch tl"></div>
          <div className="notch tr"></div>
          <div className="notch bl"></div>
          <div className="notch br"></div>

          <div className="ticket-header flex justify-between items-center border-b-2 border-dashed border-[var(--paper-2)] pb-4 mb-8">
            <div className="font-anton text-2xl tracking-wider text-[var(--yellow)]">
              JHAY SANYAY STUDIO
            </div>
            <div className="font-mono text-xs md:text-sm text-[var(--paper-2)] tracking-widest uppercase">
              TICKET NO: <span className="font-bold text-[var(--red)]">{orderId}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--paper-2)] mb-2">
                  Client / Stage Name <span className="text-[var(--red)]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Starboy / Divine"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[var(--ink)] border-2 border-[var(--paper-2)] p-3 text-[var(--paper)] font-sans focus:outline-none focus:border-[var(--yellow)] focus:-translate-y-1 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--paper-2)] mb-2">
                  Email or Social Handle <span className="text-[var(--red)]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. @artist / email@domain.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-[var(--ink)] border-2 border-[var(--paper-2)] p-3 text-[var(--paper)] font-sans focus:outline-none focus:border-[var(--yellow)] focus:-translate-y-1 transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--paper-2)] mb-2">
                  Service Category
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[var(--ink)] border-2 border-[var(--paper-2)] p-3 text-[var(--paper)] font-sans focus:outline-none focus:border-[var(--yellow)] focus:-translate-y-1 transition-all duration-200"
                >
                  <option value="Single Cover Art">Single Cover Art</option>
                  <option value="EP / Album Art">EP / Album Art</option>
                  <option value="Logo / Brand Mark">Logo / Brand Mark</option>
                  <option value="Comic Page">Comic Page</option>
                  <option value="Motion / Animated Cover">Motion / Animated Cover</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--paper-2)] mb-2">
                  Project / Release Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Midnight Riddim EP"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[var(--ink)] border-2 border-[var(--paper-2)] p-3 text-[var(--paper)] font-sans focus:outline-none focus:border-[var(--yellow)] focus:-translate-y-1 transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--paper-2)] mb-2">
                  Target Release / Deadline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Oct 15th / ASAP"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full bg-[var(--ink)] border-2 border-[var(--paper-2)] p-3 text-[var(--paper)] font-sans focus:outline-none focus:border-[var(--yellow)] focus:-translate-y-1 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--paper-2)] mb-2">
                  Preferred Contact Method
                </label>
                <select
                  value={contactPref}
                  onChange={(e) => setContactPref(e.target.value)}
                  className="w-full bg-[var(--ink)] border-2 border-[var(--paper-2)] p-3 text-[var(--paper)] font-sans focus:outline-none focus:border-[var(--yellow)] focus:-translate-y-1 transition-all duration-200"
                >
                  <option value="Email">Email</option>
                  <option value="Instagram DM">Instagram DM</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[var(--paper-2)] mb-2">
                Project Brief &amp; Visual Notes <span className="text-[var(--red)]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your vision, color themes, reference links, mood or key characters..."
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                className="w-full bg-[var(--ink)] border-2 border-[var(--paper-2)] p-3 text-[var(--paper)] font-sans focus:outline-none focus:border-[var(--yellow)] focus:-translate-y-1 transition-all duration-200"
              />
            </div>

            <div className="text-center pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="stamp-btn"
              >
                STAMP &amp; GENERATE TICKET
              </motion.button>
            </div>
          </form>

          {generatedTicket && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-10 p-6 bg-[var(--paper)] text-[var(--ink)] border-2 border-[var(--ink)] overflow-hidden"
            >
              <div className="font-anton text-2xl uppercase mb-2 text-[var(--red)]">
                Ticket Stamp Validated: #{generatedTicket.id}
              </div>
              <p className="text-sm font-sans mb-4 text-[var(--muted)]">
                Your job ticket has been formatted and stamped. Send it directly to Jhay Sanyay Studio via Email or Instagram DM:
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={generatedTicket.mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid !border-[var(--red)]"
                >
                  Send via Email (mailto)
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={generatedTicket.igUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn !border-[var(--ink)] !text-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--paper)]"
                >
                  Send via Instagram DM
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleCopySummary}
                  className="btn !border-[var(--ink)] !text-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--paper)]"
                >
                  {generatedTicket.copied ? "Copied to Clipboard! ✓" : "Copy Ticket Summary"}
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
