const fs = require('fs');
const cp = require('child_process');

const files = cp.execSync('git ls-files', { encoding: 'utf8' })
  .trim()
  .split(/\r?\n/)
  .filter(Boolean);

const set = new Set(files.map((f) => f.replace(/\\/g, '/')));
const codeFiles = files.filter((f) => /\.(js|jsx|ts|tsx)$/.test(f));
const re = /(?:import\s+[^'"\n]+from\s+|require\()\s*['"]([^'"\n]+)['"]/g;
const bad = [];

function normalize(p) {
  return p.replace(/\\/g, '/').replace(/^\.\//, '');
}

function resolveRelative(importer, request) {
  const base = importer.split('/').slice(0, -1).join('/');
  const p = normalize(`${base}/${request}`);
  if (set.has(p)) return p;
  const exts = ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
  for (const ext of exts) {
    if (set.has(p + ext)) return p + ext;
  }
  return null;
}

for (const f of codeFiles) {
  const txt = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = re.exec(txt))) {
    const s = m[1];
    if (s.startsWith('assets/')) {
      const rel = `public/${s}`;
      const withJs = `${rel}.js`;
      if (!set.has(rel) && !set.has(withJs)) bad.push(`${f} -> ${s} (expected ${rel} or ${withJs})`);
    }
    if (s.startsWith('./') || s.startsWith('../')) {
      const looksLikeImage = /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(s);
      if (looksLikeImage) {
        const resolved = resolveRelative(f, s);
        if (!resolved) bad.push(`${f} -> ${s} (relative image import not found by exact path)`);
      }
    }
  }
}

if (!bad.length) {
  console.log('No missing assets/* imports by exact git path.');
} else {
  bad.slice(0, 200).forEach((x) => console.log(x));
  console.log('Total:', bad.length);
}
