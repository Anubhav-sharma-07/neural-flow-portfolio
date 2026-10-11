# Anubhav Sharma portfolio

Live: https://neural-flow-portfolio.vercel.app/

## Files
- `index.html`: the whole site (HTML, CSS and JS in one file)
- `404.html`: shown by Vercel for unknown URLs
- `og.png`: 1200x630 social preview image
- `robots.txt`, `sitemap.xml`, `vercel.json`: search and security settings
- `capture-screenshots.mjs`: saves real project screenshots into `shots/`

## Things only you can add
1. **Contact form.** Create a free form at formspree.io (or web3forms.com) and paste its URL into `CONFIG.formEndpoint` near the bottom of `index.html`. For Web3Forms, also paste your access key into `CONFIG.formKey`. Until then, visitors get a prepared email to send themselves.
2. **WhatsApp.** Put your number (country code, digits only) into `CONFIG.whatsapp`. The button stays hidden while it is empty.
3. **Project screenshots.** Run the three commands at the top of `capture-screenshots.mjs`, then commit the new `shots/` folder. Cards use the real screenshot when it exists and the stylised preview when it does not.
4. **Your photo.** Save a portrait (4:5, about 800x1000) as `me.jpg` next to `index.html`. It appears in the About section. Without it, the photo slot is hidden.
5. **Credential links.** Add a URL for each item in `CONFIG.proofLinks` (Hack2Hire result, Vibe to Ship, the paper, the Intel certificate). Linked credentials are more believable.
6. **Analytics.** In the Vercel dashboard, open your project, then Analytics, and click Enable. The snippet is already in the page.
7. **Budget ranges.** Edit `BUDGETS` to match your pricing.
8. **Facts to confirm.** The strip under the hero, "More builds" and "Right now" were written from details you gave me. Remove anything that is not accurate.

## Update the live site
```
git add .
git commit -m "Describe your change"
git push
```
Vercel redeploys on every push to `main`.
