# Portfolio Site Context

## SEO Conventions

- The production canonical origin is `https://kaien.mai-mee.com`.
- Keep shared SEO constants in `lib/seo.ts`.
- Page-level routes should use `createPageMetadata()` so canonical, Open Graph, and Twitter metadata stay consistent.
- `app/sitemap.ts` should list only canonical public URLs.
- Update `SITE_LAST_MODIFIED` in `lib/seo.ts` when public page content changes materially.
- Google Search Console ownership can use the `GOOGLE_SITE_VERIFICATION` environment variable when using the HTML meta tag method.
