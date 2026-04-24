import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "general", title: "General" },
    { name: "contact", title: "Contact Info" },
    { name: "social", title: "Social Links" },
    { name: "checkout", title: "Checkout & Payment" },
    { name: "currency", title: "Currency" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Orniva",
      group: "general",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Where Elegance Adorns You",
      group: "general",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      group: "general",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      group: "general",
    }),

    // Contact Info
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number (with country code, e.g. +923001234567)",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "workingHours",
      title: "Working Hours",
      type: "string",
      group: "contact",
      initialValue: "Mon - Sat: 10:00 AM - 8:00 PM",
    }),

    // Social Links
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "tiktokUrl",
      title: "TikTok URL",
      type: "url",
      group: "social",
    }),

    // Checkout & Payment
    defineField({
      name: "paymentMethods",
      title: "Payment Methods",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Method Name", type: "string" }),
            defineField({ name: "details", title: "Details (e.g. account number)", type: "text" }),
          ],
          preview: {
            select: { title: "name" },
          },
        },
      ],
      group: "checkout",
    }),
    defineField({
      name: "checkoutMessage",
      title: "Checkout Instructions",
      type: "text",
      description: "Message shown to buyer at checkout (e.g. 'Send payment proof via WhatsApp')",
      group: "checkout",
    }),
    defineField({
      name: "freeShippingThreshold",
      title: "Free Shipping Threshold (in base currency CAD)",
      type: "number",
      group: "checkout",
      initialValue: 3000,
    }),

    // Currency
    defineField({
      name: "baseCurrency",
      title: "Base Currency",
      type: "string",
      initialValue: "CAD",
      group: "currency",
      readOnly: true,
      description: "Product prices are stored in CAD",
    }),
    defineField({
      name: "currencies",
      title: "Available Currencies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "code",
              title: "Currency Code",
              type: "string",
              description: "e.g. USD, PKR, EUR, GBP",
            }),
            defineField({
              name: "symbol",
              title: "Symbol",
              type: "string",
              description: "e.g. $, €, £",
            }),
            defineField({
              name: "rate",
              title: "Exchange Rate (1 CAD = ? of this currency)",
              type: "number",
              description: "e.g. for PKR: 204 means 1 CAD = 204 PKR",
            }),
          ],
          preview: {
            select: { title: "code", subtitle: "symbol" },
          },
        },
      ],
      group: "currency",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
