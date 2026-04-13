import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Banner",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Where Elegance Adorns You",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaText",
      title: "Button Text",
      type: "string",
      initialValue: "Explore Collections",
    }),
    defineField({
      name: "ctaLink",
      title: "Button Link",
      type: "string",
      initialValue: "/collections",
    }),
  ],
  preview: {
    select: { title: "heading" },
  },
});
