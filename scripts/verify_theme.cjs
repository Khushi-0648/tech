const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  
  // 1. Visit homepage
  await page.goto('http://localhost:5185/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));
  
  // Check Dark Mode styling
  const darkState = await page.evaluate(() => {
    const root = document.documentElement;
    const body = document.body;
    const computed = window.getComputedStyle(body);
    return {
      dataTheme: root.getAttribute('data-theme'),
      classList: Array.from(root.classList),
      bg: computed.backgroundColor,
      color: computed.color
    };
  });
  console.log('Dark Mode State:', darkState);
  await page.screenshot({ path: 'src/assets/test-dark-mode.png' });

  // 2. Click Theme Switcher button
  const clicked = await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => 
      b.getAttribute('title')?.includes('Mode') || 
      b.getAttribute('aria-label')?.toLowerCase().includes('theme')
    );
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  });
  console.log('Theme button clicked:', clicked);
  await new Promise(r => setTimeout(r, 1000));

  // Check Light Mode styling
  const lightState = await page.evaluate(() => {
    const root = document.documentElement;
    const body = document.body;
    const computed = window.getComputedStyle(body);
    return {
      dataTheme: root.getAttribute('data-theme'),
      classList: Array.from(root.classList),
      bg: computed.backgroundColor,
      color: computed.color
    };
  });
  console.log('Light Mode State:', lightState);
  await page.screenshot({ path: 'src/assets/test-light-mode.png' });

  await browser.close();
  console.log('Theme toggle verification complete.');
})();
