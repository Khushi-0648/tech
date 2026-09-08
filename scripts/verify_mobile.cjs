const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  
  // Mobile home
  await page.goto('http://localhost:5185/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: 'src/assets/test-mobile-dark.png' });

  // Open mobile menu
  await page.click('button[aria-label="Toggle navigation menu"]');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'src/assets/test-mobile-drawer.png' });

  // Click theme toggle inside mobile drawer
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Toggle theme"]');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'src/assets/test-mobile-drawer-light.png' });

  await browser.close();
  console.log('Mobile screenshots complete.');
})();
