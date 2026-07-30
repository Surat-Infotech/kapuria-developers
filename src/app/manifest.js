// Next.js serves this at /manifest.webmanifest and links it automatically.
// The icons live in `public/favicons/`, alongside every other favicon.
export default function manifest() {
  return {
    name: "Kapuria Developers",
    short_name: "Kapuria",
    description: "The best minds in villa, farmhouse architecture & design.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffbf6",
    theme_color: "#082235",
    icons: [
      {
        src: "/favicons/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicons/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
