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
  
  // 1. Desktop Dark View: Click Services Button
  await page.setViewport({ width: 1440, height: 950 });
  await page.goto('http://localhost:5185/#/home', { waitUntil: 'networkidle2' });
  await page.evaluate(() => { window.scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 1200));

  // Find and click the Services button
  await page.evaluate(() => {
    const servicesBtn = Array.from(document.querySelectorAll('nav button')).find(b => 
      b.textContent.includes('Services')
    );
    if (servicesBtn) servicesBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  const darkOptionBarPath = path.join(ARTIFACT_DIR, 'services_option_bar_dark.png');
  await page.screenshot({ path: darkOptionBarPath });
  console.log('Captured dark Services Option Bar');

  // 2. Desktop Light View: Click theme toggle, then click Services
  await page.evaluate(() => {
    const themeBtn = Array.from(document.querySelectorAll('button')).find(b => 
      b.getAttribute('title')?.includes('Mode') || 
      b.getAttribute('aria-label')?.toLowerCase().includes('theme')
    );
    if (themeBtn) themeBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  // Ensure Services Option Bar is open in light mode
  await page.evaluate(() => {
    const servicesBtn = Array.from(document.querySelectorAll('nav button')).find(b => 
      b.textContent.includes('Services')
    );
    // If it closed or is open, make sure it's open
    const isExpanded = servicesBtn?.getAttribute('aria-expanded') === 'true';
    if (!isExpanded && servicesBtn) servicesBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  const lightOptionBarPath = path.join(ARTIFACT_DIR, 'services_option_bar_light.png');
  await page.screenshot({ path: lightOptionBarPath });
  console.log('Captured light Services Option Bar');

  // 3. Mobile View: Open drawer, click Services accordion
  // Switch back to dark mode
  await page.evaluate(() => {
    const themeBtn = Array.from(document.querySelectorAll('button')).find(b => 
      b.getAttribute('title')?.includes('Mode') || 
      b.getAttribute('aria-label')?.toLowerCase().includes('theme')
    );
    if (themeBtn) themeBtn.click();
  });

  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5185/#/home', { waitUntil: 'networkidle2' });
  await page.evaluate(() => { window.scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 1000));

  // Click hamburger menu
  await page.click('button[aria-label="Toggle navigation menu"]');
  await new Promise(r => setTimeout(r, 800));

  // Click Services Accordion in mobile drawer
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const svcAccordionBtn = buttons.find(b => b.textContent.includes('Services Options'));
    if (svcAccordionBtn) svcAccordionBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  const mobileAccordionPath = path.join(ARTIFACT_DIR, 'mobile_services_accordion_open.png');
  await page.screenshot({ path: mobileAccordionPath });
  console.log('Captured mobile services accordion open');

  await browser.close();
  console.log('All option bar screenshots successfully taken!');
})();
