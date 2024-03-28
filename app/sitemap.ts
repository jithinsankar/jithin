import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jithin.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jithin.vercel.app/notes",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

  ];
}
