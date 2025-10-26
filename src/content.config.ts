import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

// const artGallery = defineCollection({
//   loader: glob({ pattern: ["*.md"], base: "src/content/art-gallery" }),
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       image: image(),
//     }),
// });

const transformativCoachning = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/transformativ-coachning",
  }),
  schema: ({}) =>
    z.object({
      title: z.string(),
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

export const collections = {
  transformativCoachning,
  testimonials,
};
