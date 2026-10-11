# Anubhav Sharma portfolio: deploy notes

Files
- `index.html`: the whole site (HTML, CSS, JS in one file)
- `404.html`: shown by Vercel for unknown URLs
- `og.png`: 1200x630 social preview image
- `robots.txt`, `sitemap.xml`: for search engines

Before you go live
1. Replace `__SITE_URL__` with your real address (for example `https://anubhavsharma.dev`) in `index.html`, `robots.txt` and `sitemap.xml`.
   macOS/Linux: `sed -i 's#__SITE_URL__#https://your-domain#g' index.html robots.txt sitemap.xml`
2. Contact form: it cannot send mail by itself. Create a free form endpoint (Formspree or Web3Forms) and paste its URL into `CONFIG.formEndpoint` near the bottom of `index.html`. Until then, visitors get a prepared email they send themselves, and the page never claims it was sent.
3. WhatsApp: add your number with country code (digits only) to `CONFIG.whatsapp`. The button stays hidden while it is empty.
4. Screenshots: save a 1600x1000 WebP per project (for example `shots/spendlens.webp`) and set `shot: '/shots/spendlens.webp'` on that project in the `PROJECTS` list. Until then the card shows a stylised preview.
5. Budget ranges: edit `BUDGETS` to match your pricing. Currency switches automatically when a visitor types India, United States, United Kingdom, Canada or Australia as their country.
6. Availability badge: set `CONFIG.available` to `false` when you are fully booked.
7. Facts to confirm: the strip under the hero (Top 10, Finalist, research, Intel AI Academy), the "More builds" cards, and the About section were written from details you gave me. Remove anything that is not accurate.

Deploy on Vercel: put these files in a folder, then run `vercel` in it, or drag the folder into the Vercel dashboard.
