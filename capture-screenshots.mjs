// Captures real homepage screenshots for the Selected Work cards.
// Run from this folder:
//   npm install --no-save playwright
//   npx playwright install chromium
//   node capture-screenshots.mjs
// Files are saved to shots/<id>.jpg. The site picks them up automatically.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const TARGETS = [
  ['spendlens', 'https://credex-audit-eight.vercel.app/'],
  ['cliniva', 'https://neuralflow-cliniva-preview.vercel.app/'],
  ['cafe', 'https://cafe-bar-self.vercel.app/'],
  ['portfolio', 'https://anubhav-portfolio-wine.vercel.app/'],
  // Aura Interview: add a live demo URL here, or save your own screenshot as shots/aura.jpg
  // ['aura', 'https://YOUR-AURA-DEMO-URL/'],
];

await mkdir('shots', { recursive: true });
const browser = await chromium.launch();
for (const [id, url] of TARGETS) {
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(2000); // let animations and fonts settle
    await page.screenshot({ path: `shots/${id}.jpg`, type: 'jpeg', quality: 85 });
    console.log('saved  shots/' + id + '.jpg');
  } catch (err) {
    console.log('FAILED ' + id + ': ' + err.message);
  }
  await page.close();
}
await browser.close();
