import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const BASE_URL = 'https://www.lakbaypalawan.online';
const BUILD_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Define all routes with their priority and change frequency
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/#/car-rental',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/#/car-rental/el-nido',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/#/car-rental/coron',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/#/car-rental/puerto-princesa',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/#/tours',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/#/destinations',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/#/contact',
    priority: '0.5',
    changefreq: 'monthly'
  }
];

// Generate sitemap XML
const generateSitemap = () => {
  const urls = routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

// Write sitemap to public directory
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');
    
    writeFileSync(outputPath, sitemap, 'utf8');
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: public/sitemap.xml`);
    console.log(`📅 Build date: ${BUILD_DATE}`);
    console.log(`🔗 Total URLs: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Execute
writeSitemap();
