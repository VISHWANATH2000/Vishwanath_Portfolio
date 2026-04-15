const fs = require('fs');

function processFile(file) {
  let code = fs.readFileSync(file, 'utf8');
  const replacements = [
    [/bg-slate-950\/30/g, 'bg-slate-50/80'],
    [/bg-slate-950\/35/g, 'bg-slate-50/80'],
    [/bg-slate-950\/50/g, 'bg-white/70'],
    [/bg-slate-950\/90/g, 'bg-slate-100/90'],
    [/border-white\/10/g, 'border-rose-900/10'],
    [/text-white/g, 'text-slate-900'],
    [/text-slate-300\/8[0-9]/g, 'text-slate-600'],
    [/text-slate-200\/9[0-9]/g, 'text-slate-700'],
    [/text-slate-300/g, 'text-slate-600'],
    [/text-slate-200/g, 'text-slate-700'],
    [/text-slate-100/g, 'text-slate-800'],
    [/text-slate-400/g, 'text-slate-500'],
    [/text-cyan-100/g, 'text-rose-900'],
    [/text-cyan-200\/[0-9]+/g, 'text-rose-600'],
    [/text-cyan-200/g, 'text-rose-600'],
    [/text-cyan-300/g, 'text-rose-600'],
    [/bg-cyan-300\/10/g, 'bg-rose-500/10'],
    [/border-cyan-300\/20/g, 'border-rose-500/20'],
    [/border-cyan-300\/30/g, 'border-rose-500/30'],
    [/border-cyan-300\/40/g, 'border-rose-500/30'],
    [/shadow-cyan-500\/10/g, 'shadow-rose-500/10'],
    [/text-fuchsia-100/g, 'text-rose-900'],
    [/text-fuchsia-200\/[0-9]+/g, 'text-rose-600'],
    [/text-fuchsia-300/g, 'text-rose-600'],
    [/bg-white\/[0-9]+/g, 'bg-slate-900/5'],
    [/bg-white\/\[0\.0[0-9]+\]/g, 'bg-slate-900/5'],
    [/hover:bg-white\/\[0\.[0-9]+\]/g, 'hover:bg-slate-900/10'],
    [/bg-cyan-400\/18/g, 'bg-rose-400/30'],
    [/bg-fuchsia-400\/14/g, 'bg-rose-500/20'],
    [/bg-amber-300\/12/g, 'bg-orange-300/20'],
    [/border-fuchsia-300\/30/g, 'border-rose-500/30'],
    [/rgba\(103, 232, 249/g, 'rgba(244, 63, 94'], 
  ];

  if (file.includes('card.tsx')) {
    code = code.replace(
      'border border-white/10 bg-white/[0.045]',
      'border border-rose-900/10 bg-white/70'
    );
  }

  if (file.includes('custom-cursor.tsx')) {
    code = code.replace(/cyan-300/g, 'rose-500');
    code = code.replace(/cyan-400/g, 'rose-500');
  }

  replacements.forEach(([reg, rep]) => { code = code.replace(reg, rep); });
  fs.writeFileSync(file, code);
}

processFile('src/App.tsx');
processFile('src/components/ui/card.tsx');
processFile('src/components/custom-cursor.tsx');
console.log('Theme conversion completed.');
