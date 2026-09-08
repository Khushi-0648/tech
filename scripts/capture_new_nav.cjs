const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const ARTIFACT_DIR = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\affbbead-46fc-4950-b3e6-9757b49c6c6d';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });
  const page = await browser.newPage();
  
  // 1. Desktop Dark View on Home Page (Scrolled to Top)
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5185/#/home', { waitUntil: 'networkidle2' });
  await page.evaluate(() => { window.scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 1200));
  
  const darkNavPath = path.join(ARTIFACT_DIR, 'new_header_large_logo_dark.png');
  await page.screenshot({ path: darkNavPath });
  fs.copyFileSync(darkNavPath, 'src/assets/new-header-dark.png');
  console.log('Captured dark desktop header at top');

  // 2. Footer in Dark Mode (Full Logo)
  await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'end' });
  });
  await new Promise(r => setTimeout(r, 800));
  const footerDarkPath = path.join(ARTIFACT_DIR, 'footer_full_logo_dark.png');
  await page.screenshot({ path: footerDarkPath });
  fs.copyFileSync(footerDarkPath, 'src/assets/footer-dark.png');
  console.log('Captured footer in dark mode');

  // 3. Desktop Light View on Home Page
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => 
      b.getAttribute('title')?.includes('Mode') || 
      b.getAttribute('aria-label')?.toLowerCase().includes('theme')
    );
    if (btn) btn.click();
    window.scrollTo(0, 0);
  });
  await new Promise(r => setTimeout(r, 1000));
  const lightNavPath = path.join(ARTIFACT_DIR, 'new_header_large_logo_light.png');
  await page.screenshot({ path: lightNavPath });
  fs.copyFileSync(lightNavPath, 'src/assets/new-header-light.png');
  console.log('Captured light desktop header at top');

  // 4. Footer in Light Mode (Full Logo)
  await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'end' });
  });
  await new Promise(r => setTimeout(r, 800));
  const footerLightPath = path.join(ARTIFACT_DIR, 'footer_full_logo_light.png');
  await page.screenshot({ path: footerLightPath });
  fs.copyFileSync(footerLightPath, 'src/assets/footer-light.png');
  console.log('Captured footer in light mode');

  // 5. Mobile View Closed (Dark Mode)
  // Switch back to dark mode
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => 
      b.getAttribute('title')?.includes('Mode') || 
      b.getAttribute('aria-label')?.toLowerCase().includes('theme')
    );
    if (btn) btn.click();
  });
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5185/#/home', { waitUntil: 'networkidle2' });
  await page.evaluate(() => { window.scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 1000));
  const mobileClosedPath = path.join(ARTIFACT_DIR, 'new_header_mobile_closed.png');
  await page.screenshot({ path: mobileClosedPath });
  fs.copyFileSync(mobileClosedPath, 'src/assets/new-header-mobile-closed.png');
  console.log('Captured mobile closed header');

  // 6. Mobile Drawer Open
  await page.click('button[aria-label="Toggle navigation menu"]');
  await new Promise(r => setTimeout(r, 800));
  const mobileDrawerPath = path.join(ARTIFACT_DIR, 'new_header_mobile_drawer.png');
  await page.screenshot({ path: mobileDrawerPath });
  fs.copyFileSync(mobileDrawerPath, 'src/assets/new-header-mobile-drawer.png');
  console.log('Captured mobile drawer');

  await browser.close();
  console.log('All screenshots including footer successfully generated.');
})();
