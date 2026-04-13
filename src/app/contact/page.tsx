import type { Metadata } from "next";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Orniva",
  description: "Get in touch with Orniva. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emerald-brand py-12 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 text-center">
          <p className="text-gold-light font-heading text-xs tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question, feedback, or a custom
            order request, feel free to reach out.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-text-primary mb-8">
              We&apos;re Here For You
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gold-50 flex items-center justify-center">
                  <HiOutlineMail size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-text-primary mb-1">Email Us</h3>
                  <p className="text-text-secondary text-sm">info@orniva.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gold-50 flex items-center justify-center">
                  <HiOutlinePhone size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-text-primary mb-1">Call Us</h3>
                  <p className="text-text-secondary text-sm">+92 300 0000000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gold-50 flex items-center justify-center">
                  <FaWhatsapp size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-text-primary mb-1">WhatsApp</h3>
                  <p className="text-text-secondary text-sm">+92 300 0000000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gold-50 flex items-center justify-center">
                  <HiOutlineLocationMarker size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-text-primary mb-1">Location</h3>
                  <p className="text-text-secondary text-sm">Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gold-50 flex items-center justify-center">
                  <HiOutlineClock size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-text-primary mb-1">Working Hours</h3>
                  <p className="text-text-secondary text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-text-primary mb-8">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
