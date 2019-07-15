const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Endormi.io | Portfolio', // Navigation and Site Title
  siteTitleAlt: 'My portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Endormi', // short_name for manifest
  siteHeadline: 'Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://endormi.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteDescription: 'Portfolio for Endormi',
  author: 'Endormi', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.black,
  backgroundColor: tailwind.colors.blue,
}
