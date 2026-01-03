# Build Scripts

## generate-sitemap.js

Automatically generates `public/sitemap.xml` at build time.

### Usage

**Manual generation:**
```bash
npm run generate:sitemap
```

**Automatic generation (runs before build):**
```bash
npm run build
```

### Configuration

Edit `scripts/generate-sitemap.js` to modify:
- **BASE_URL**: Website domain
- **routes**: Add/remove pages with priority and changefreq

### Output

- **File:** `public/sitemap.xml`
- **Format:** Valid XML sitemap (schema.org/sitemaps)
- **lastmod:** Uses build date (YYYY-MM-DD)

### Adding New Routes

To add a new route to the sitemap, edit the `routes` array in `generate-sitemap.js`:

```javascript
{
  path: '/#/new-page',
  priority: '0.8',
  changefreq: 'weekly'
}
```

Priority levels:
- `1.0` - Homepage
- `0.9` - Primary service pages
- `0.8` - Important pages
- `0.5` - Utility pages (contact, etc.)
