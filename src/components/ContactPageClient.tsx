"use client";

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

interface Settings {
  contactEmail?: string;
  contactPhone?: string;
  whatsappNumber?: string;
  address?: string;
  workingHours?: string;
}

export default function ContactPageClient({ settings }: { settings: Settings | null }) {
  const email = settings?.contactEmail || "info@orniva.com";
  const phone = settings?.contactPhone || "+92 300 0000000";
  const whatsapp = settings?.whatsappNumber || "+92 300 0000000";
  const address = settings?.address || "Pakistan";
  const hours = settings?.workingHours || "Mon - Sat: 10:00 AM - 8:00 PM";

  const contactInfo = [
    { icon: HiOutlineMail, title: "Email Us", info: email },
    { icon: HiOutlinePhone, title: "Call Us", info: phone },
    { icon: FaWhatsapp, title: "WhatsApp", info: whatsapp },
    { icon: HiOutlineLocationMarker, title: "Location", info: address },
    { icon: HiOutlineClock, title: "Working Hours", info: hours },
  ];

  return (
    <>
      <section className="bg-bg-card border-b border-border py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <p className="text-gold font-heading text-[11px] tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-text mb-4">Contact Us</h1>
          <p className="text-text-faint text-sm md:text-base max-w-xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question, feedback, or a custom order request, feel free to reach out.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-text mb-8">We&apos;re Here For You</h2>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, info }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 flex-shrink-0 rounded-full border border-border flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-text mb-1">{title}</h3>
                    <p className="text-text-faint text-sm">{info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-text mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
