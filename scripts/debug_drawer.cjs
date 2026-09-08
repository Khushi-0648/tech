const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5185/#/home', { waitUntil: 'networkidle2' });
  await page.click('button[aria-label="Toggle navigation menu"]');
  await new Promise(r => setTimeout(r, 800));
  
  const info = await page.evaluate(() => {
    const drawer = document.querySelector('.fixed.inset-0');
    if (!drawer) return 'No drawer found';
    return {
      drawerHtml: drawer.outerHTML.slice(0, 500),
      drawerRect: drawer.getBoundingClientRect(),
      parentRect: drawer.parentElement.getBoundingClientRect(),
      parentTag: drawer.parentElement.tagName,
      parentStyle: window.getComputedStyle(drawer.parentElement).cssText
    };
  });
  console.log(info);
  await browser.close();
})();
