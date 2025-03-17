import { minify } from 'html-minifier-terser';
import fs from 'fs/promises';
import path from 'path';

async function minifyHtml() {
  const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
  const html = await fs.readFile(htmlPath, 'utf8');
  
  const minified = await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    preserveLineBreaks: false,
    keepClosingSlash: false,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeTagWhitespace: true
  });

  await fs.writeFile(htmlPath, minified);
  console.log('HTML minified successfully!');
}

minifyHtml().catch(console.error); 