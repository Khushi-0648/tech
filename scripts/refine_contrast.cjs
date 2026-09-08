const fs = require('fs');

const files = [
  'src/pages/HomePage.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/ServicesPage.jsx',
  'src/pages/ProjectsPage.jsx',
  'src/pages/IndustriesPage.jsx',
  'src/pages/SoftwaresPage.jsx',
  'src/pages/SecurityScannerPage.jsx',
  'src/pages/ContactPage.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace text-white in headings and elements where it's not inside a solid colored button
  content = content.replace(/<(h[1-6]|span|p|div)([^>]*?)text-white([^>]*?)>/g, (match, tag, before, after) => {
    // If it's a solid colored button or badge, keep text-white
    if (before.includes('bg-[var(--accent-blue)]') || after.includes('bg-[var(--accent-blue)]') ||
        before.includes('bg-emerald') || after.includes('bg-emerald') ||
        before.includes('bg-red') || after.includes('bg-red') ||
        before.includes('bg-sky') || after.includes('bg-sky') ||
        before.includes('bg-blue') || after.includes('bg-blue')) {
      return match;
    }
    return '<' + tag + before + 'text-[var(--text-primary)]' + after + '>';
  });

  // In hover states: hover:text-white -> hover:text-[var(--text-primary)]
  content = content.replace(/hover:text-white/g, 'hover:text-[var(--text-primary)]');
  content = content.replace(/group-hover:text-white/g, 'group-hover:text-[var(--accent-blue)]');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Refined typography contrast in:', file);
}
