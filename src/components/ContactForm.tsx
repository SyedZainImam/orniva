"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-text-primary tracking-wider uppercase mb-2 font-heading">
            Your Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-gold font-body transition-colors"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-text-primary tracking-wider uppercase mb-2 font-heading">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-gold font-body transition-colors"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-text-primary tracking-wider uppercase mb-2 font-heading">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-gold font-body transition-colors"
            placeholder="Enter your phone"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-text-primary tracking-wider uppercase mb-2 font-heading">
            Subject *
          </label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-gold font-body transition-colors bg-white"
          >
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
        <label className="block text-xs font-semibold text-text-primary tracking-wider uppercase mb-2 font-heading">
          Your Message *
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-gold font-body transition-colors resize-none"
          placeholder="Write your message here..."
        />
      </div>

      <button
        type="submit"
        className="bg-gold hover:bg-gold-dark text-white font-heading text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
