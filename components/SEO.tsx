import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  keywords?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Lakbay Palawan Car Rentals | Tours and Destinations in Palawan';
const DEFAULT_DESCRIPTION = 'Book the best Palawan car rentals, tours, island hopping adventures, and destinations in El Nido, Coron, and Puerto Princesa with Lakbay Palawan.';
const DEFAULT_OG_IMAGE = 'https://github.com/bxxmzilla1/lakbay-palawan/blob/main/hero.jpg?raw=true';
const BASE_URL = 'https://bxxmzilla1.github.io/lakbay-palawan-online';

/**
 * SEO Component - Handles all meta tags, Open Graph, Twitter Cards, and structured data
 * 
 * SEO Benefits:
 * - Title tags: Primary ranking factor, improves CTR in search results
 * - Meta descriptions: Increases click-through rates from search engines
 * - Canonical URLs: Prevents duplicate content issues, consolidates ranking signals
 * - Open Graph: Improves social media sharing appearance and engagement
 * - Twitter Cards: Optimizes Twitter sharing for better visibility
 * - Structured Data: Enables rich snippets, improves search visibility, helps with local SEO
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  structuredData,
  keywords,
  noindex = false,
}) => {
  // Generate canonical URL compatible with HashRouter
  const getCanonicalUrl = () => {
    if (canonical) {
      // If canonical starts with /, it's a path - prepend base URL
      if (canonical.startsWith('/')) {
        return `${BASE_URL}${canonical}`;
      }
      // If it's a full URL, use as-is
      if (canonical.startsWith('http')) {
        return canonical;
      }
      // Otherwise, treat as path
      return `${BASE_URL}/${canonical}`;
    }
    return BASE_URL;
  };

  // Construct full title with site name
  // If title already contains "Lakbay Palawan", use it as-is
  const fullTitle = title 
    ? (title.includes('Lakbay Palawan') ? title : `${title} | Lakbay Palawan`)
    : DEFAULT_TITLE;

  // Generate keywords string for meta tag
  const keywordsString = keywords 
    ? keywords 
    : 'Palawan, Palawan car rental, El Nido tours, Coron tours, Puerto Princesa, Palawan destinations, island hopping Palawan, Palawan travel, Palawan booking';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywordsString} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL - Critical for HashRouter to prevent duplicate content */}
      <link rel="canonical" href={getCanonicalUrl()} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Lakbay Palawan" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
