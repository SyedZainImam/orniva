import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  tagline,
  description,
  logo,
  contactEmail,
  contactPhone,
  whatsappNumber,
  address,
  workingHours,
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  paymentMethods,
  checkoutMessage,
  freeShippingThreshold,
  baseCurrency,
  currencies
}`;

export const heroQuery = groq`*[_type == "hero"][0]{
  heading,
  subheading,
  backgroundImage,
  ctaText,
  ctaLink
}`;

export const collectionsQuery = groq`*[_type == "collection"] | order(order asc){
  _id,
  title,
  slug,
  description,
  image
}`;

export const collectionBySlugQuery = groq`*[_type == "collection" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  image,
  "products": *[_type == "product" && references(^._id)] | order(_createdAt desc){
    _id,
    title,
    slug,
    price,
    compareAtPrice,
    images,
    badge
  }
}`;

export const featuredProductsQuery = groq`*[_type == "product" && featured == true] | order(_createdAt desc)[0...8]{
  _id,
  title,
  slug,
  price,
  compareAtPrice,
  images,
  badge,
  "collection": collection->{ title, slug }
}`;

export const allProductsQuery = groq`*[_type == "product"] | order(_createdAt desc){
  _id,
  title,
  slug,
  price,
  compareAtPrice,
  images,
  badge,
  "collection": collection->{ title, slug }
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  price,
  compareAtPrice,
  description,
  details,
  images,
  badge,
  sku,
  "collection": collection->{ title, slug },
  "relatedProducts": *[_type == "product" && collection._ref == ^.collection._ref && slug.current != $slug] | order(_createdAt desc)[0...4]{
    _id,
    title,
    slug,
    price,
    compareAtPrice,
    images,
    badge
  }
}`;

export const aboutQuery = groq`*[_type == "aboutPage"][0]{
  title,
  heroImage,
  content,
  philosophy,
  values
}`;

export const policyPageQuery = groq`*[_type == "policyPage" && slug.current == $slug][0]{
  title,
  slug,
  content,
  lastUpdated
}`;

export const allPolicyPagesQuery = groq`*[_type == "policyPage"]{
  title,
  slug
}`;
