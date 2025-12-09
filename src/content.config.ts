import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const transformativeCoaching = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/transformative-coaching",
  }),
  schema: ({}) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
    }),
});

const testimonials = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/testimonials",
  }),
  schema: ({}) =>
    z.object({
      name: z.string(),
    }),
});

const blogPosts = defineCollection({
  loader: glob({ pattern: ["*.md"], base: "src/content/blog-posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

export const collections = {
  transformativeCoaching,
  testimonials,
  blogPosts,
};
