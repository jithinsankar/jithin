// import { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: "https://jithin.vercel.app/",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: "https://jithin.vercel.app/notes",
//       lastModified: new Date(),
//       changeFrequency: "daily",
//       priority: 0.8,
//     },

//   ];
// }


import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  // Path to the directory containing your MDX files
  const blogDirectory = path.join(process.cwd(), "app/notes"); // your blog directory maybe different

  // Retrieve all MDX file paths recursively
  const mdxFilePaths = getAllMdxFilePaths(blogDirectory).filter(path => path.endsWith('mdx') && (!path.endsWith('notes/page.mdx')));

  console.log(mdxFilePaths)

  // Generate URLs and add them to the sitemap
  const sitemap = mdxFilePaths.map((filePath) => {
    const slug = path.basename(filePath, ".mdx"); // remove the .mdx extension from the file name to get the slug
    const category = path.basename(path.dirname(filePath));
    const url = `https://jithin.vercel.app/notes/${category}`;
    const lastModified = fs.statSync(filePath).mtime;
    return {
      url,
      lastModified,

    };
  });

  // Add other URLs to the sitemap
  sitemap.push(
    {
      url: "https://jithin.vercel.app",
      lastModified: new Date(),

    },

    {
      url: "https://jithin.vercel.app/notes",
      lastModified: new Date(),

    },
    // Add other URLs here
  );

  return sitemap;
}

// Recursively retrieve all MDX file paths
function getAllMdxFilePaths(directory: string): string[] {
  const fileNames = fs.readdirSync(directory);
  const filePaths = fileNames.map((fileName) => {
    const filePath = path.join(directory, fileName);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      return getAllMdxFilePaths(filePath);
    } else {
      return filePath;
    }
  });

  return Array.prototype.concat(...filePaths);
}
