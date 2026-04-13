"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 bg-bg-elevated border border-border text-sm text-text focus:outline-none focus:border-gold font-body placeholder:text-text-faint transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-semibold text-text-muted tracking-[0.15em] uppercase mb-2 font-heading">Your Name *</label>
          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className={inputClass} placeholder="Enter your name" />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-text-muted tracking-[0.15em] uppercase mb-2 font-heading">Email Address *</label>
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className={inputClass} placeholder="Enter your email" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-semibold text-text-muted tracking-[0.15em] uppercase mb-2 font-heading">Phone Number</label>
          <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="Enter your phone" />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-text-muted tracking-[0.15em] uppercase mb-2 font-heading">Subject *</label>
          <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required className={`${inputClass} bg-bg-elevated`}>
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="order">Order Related</option>
            <option value="custom">Custom Order</option>
            <option value="wholesale">Wholesale Inquiry</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-semibold text-text-muted tracking-[0.15em] uppercase mb-2 font-heading">Your Message *</label>
        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} className={`${inputClass} resize-none`} placeholder="Write your message here..." />
      </div>
      <button type="submit" className="bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
