export async function GET() {
  // Check if we're in production/deployed environment
  const isProduction = 
    process.env.NODE_ENV === 'production' || 
    process.env.VERCEL_ENV === 'production' ||
    process.env.FLY_APP_NAME ||  // Fly.io specific environment variable
    process.env.FLY_REGION;      // Another Fly.io specific variable
  
  const robotsTxt = isProduction 
    ? `User-agent: *
Disallow: /

# Block all indexing in production
# This site is not ready for public indexing`
    : `User-agent: *
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