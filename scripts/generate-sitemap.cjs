// scripts/generate-sitemap.cjs
const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");

// ✅ Your live site URL
const siteUrl = "https://redeemtransfer.net";

// ✅ All your React Router paths
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/contactus", changefreq: "monthly", priority: 0.8 },
  { url: "/help", changefreq: "monthly", priority: 0.8 },
  { url: "/aboutus", changefreq: "monthly", priority: 0.8 },
  { url: "/onboarding-faq", changefreq: "monthly", priority: 0.7 },
  { url: "/general-faq", changefreq: "monthly", priority: 0.7 },
  { url: "/onboarding", changefreq: "monthly", priority: 0.7 },
  { url: "/livenesscheck", changefreq: "monthly", priority: 0.6 },
  { url: "/finish", changefreq: "monthly", priority: 0.6 },
  { url: "/data-safety", changefreq: "monthly", priority: 0.6 },
  { url: "/cookie-policy", changefreq: "monthly", priority: 0.6 },
  { url: "/complaint-policy", changefreq: "monthly", priority: 0.6 },
  { url: "/privacy-policy", changefreq: "monthly", priority: 0.6 },
  { url: "/terms-and-conditions", changefreq: "monthly", priority: 0.6 },
  { url: "/money-transfer", changefreq: "weekly", priority: 0.9 },
  // ❌ not including wildcard 404 (/*), since it’s not useful in sitemap
];

function generateSitemap() {
  const stream = new SitemapStream({ hostname: siteUrl });
  const writeStream = createWriteStream("./dist/sitemap.xml");

  stream.pipe(writeStream);
  links.forEach((link) => stream.write(link));
  stream.end();

  writeStream.on("finish", () => {
    console.log("✅ sitemap.xml generated at dist/sitemap.xml");
  });
}

generateSitemap();
