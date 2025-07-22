/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zestaccessories.netlify.app/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin"],
};
