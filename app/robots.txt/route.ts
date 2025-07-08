export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://mellingwebstudios.com/sitemap.xml

# Block specific paths that shouldn't be indexed
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /services
Allow: /work
Allow: /about
Allow: /contact
Allow: /insights
Allow: /free-redesign

# Allow all industry pages under /website/
Allow: /website/
Allow: /local/

# Important: Allow crawling of our dynamic routes
Allow: /website/*/website-redesign
Allow: /website/*/seo-optimisation
Allow: /website/*/conversion-boosting
Allow: /website/*/local-seo
Allow: /website/*/mobile-optimisation
Allow: /website/*/google-ads-landing-pages

# Allow local pages
Allow: /local/*

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
