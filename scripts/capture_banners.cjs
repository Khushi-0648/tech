const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePath = fs.existsSync('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe')
  ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  : 'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe';

const targetDir = path.resolve(__dirname, '../src/assets/mockups/projects');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const projects = [
  { id: 'glowsoft', url: 'https://glowsoftsuppliers.com', name: 'GlowSoft Suppliers' },
  { id: 'glowpath', url: 'https://glowpathventures.com', name: 'GlowPath Ventures' },
  { id: 'kidzgem', url: 'https://kidzgem.com', name: 'KidzGem' },
  { id: 'lovoa', url: 'https://lovoa.org', name: 'Lovoa Community' },
  { id: 'indian_kitchen', url: 'https://indian-kitchen-seven.vercel.app', name: 'Indian Kitchen' },
  { id: 'maschalls_kitchen', url: 'https://maschalls-kitchen.vercel.app', name: 'Maschalls Kitchen' },
  { id: 'chef_lama', url: 'https://chef-lama-motion.vercel.app', name: 'Chef Lama' },
  { id: 'social_sips', url: 'https://social-sips-motion.vercel.app', name: 'Social Sips Lounge' }
];

async function captureAll() {
  console.log('Launching browser at:', edgePath);
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1.5
    },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1440,900'
    ]
  });

  for (const proj of projects) {
    const page = await browser.newPage();
    const destPath = path.join(targetDir, `${proj.id}.png`);
    console.log(`\n========================================`);
    console.log(`Capturing banner for ${proj.name} (${proj.url})...`);

    try {
      // Set user agent so full desktop responsive version loads
      await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0'
      );

      // Navigate to URL and wait for load
      await page.goto(proj.url, {
        waitUntil: ['domcontentloaded', 'networkidle2'],
        timeout: 30000
      });

      // Wait 3.5s for CSS entrance animations, video banners, sliders, and images to complete rendering
      console.log('Waiting for banner animations and assets to settle...');
      await new Promise(r => setTimeout(r, 4000));

      // Ensure all images are loaded and visible in DOM
      await page.evaluate(async () => {
        const imgs = Array.from(document.querySelectorAll('img'));
        await Promise.all(
          imgs.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
              img.addEventListener('load', resolve);
              img.addEventListener('error', resolve);
              setTimeout(resolve, 2000);
            });
          })
        );
      });

      // Dismiss any cookie / notice banners if present so they don't block the hero banner
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button, a'));
        for (const btn of buttons) {
          const text = (btn.innerText || '').toLowerCase();
          if (text.includes('accept') || text.includes('agree') || text.includes('got it') || text.includes('close')) {
            try { btn.click(); } catch(e) {}
          }
        }
      });

      // Brief pause to allow banner dismiss to animate out
      await new Promise(r => setTimeout(r, 1000));

      // Take screenshot of the top visible banner/hero viewport (1440x900)
      await page.screenshot({
        path: destPath,
        type: 'png',
        clip: {
          x: 0,
          y: 0,
          width: 1440,
          height: 900
        }
      });

      const stats = fs.statSync(destPath);
      console.log(`✓ Successfully captured visible banner for ${proj.name}: ${destPath} (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✕ Error capturing ${proj.name}:`, err.message);
      // Fallback: take screenshot anyway
      try {
        await page.screenshot({ path: destPath, type: 'png' });
        console.log(`✓ Saved fallback screenshot for ${proj.name}`);
      } catch (fbErr) {
        console.error('Fallback failed too:', fbErr.message);
      }
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nAll project banner screenshots captured successfully!');
}

captureAll().catch(err => {
  console.error('Script failed:', err);
  process.exit(1);
});
