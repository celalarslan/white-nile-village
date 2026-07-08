const fs = require('fs');
const path = './src/app/[locale]/registration/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Hide desktop stepper on mobile
content = content.replace(
  'className="bg-white rounded-2xl border border-[#E7E0D2]/40 p-5 shadow-soft overflow-x-auto scrollbar-none"',
  'className="hidden md:block bg-white rounded-2xl border border-[#E7E0D2]/40 p-5 shadow-soft overflow-x-auto scrollbar-none"'
);

// 2. Form internal spacing
content = content.replace(
  'className="p-6 md:p-10 space-y-6"',
  'className="p-6 md:p-10 space-y-8"'
);
content = content.replace(
  /<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">/g,
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">'
);
content = content.replace(
  /<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-2">/g,
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 pt-2">'
);
content = content.replace(
  /className="pt-6 border-t border-gray-100"/g,
  'className="pt-8 mt-2 border-t border-gray-100"'
);
content = content.replace(
  /className="pt-6 border-t border-gray-100 space-y-4"/g,
  'className="pt-8 mt-2 border-t border-gray-100 space-y-6"'
);
// Replace step space-y-6 with space-y-8
content = content.replace(
  /<div className="space-y-6 animate-fade-in">/g,
  '<div className="space-y-8 animate-fade-in">'
);

// 3. Application Details - Move to appear after trust notice on mobile
// We will extract the summary card HTML and insert it before the stepper for mobile (lg:hidden)
// And keep it in the right column (hidden lg:block).
// The summary card HTML is:
const summaryStart = `            <div className="bg-white rounded-[2rem] border border-[#E7E0D2] p-6 shadow-soft space-y-5">`;
const summaryEnd = `            </div>\n          </div>\n\n        </div>`;

// Wait, doing this via string manipulation might be fragile. 
// Let's use simpler regex to find the right column.
const summaryRegex = /(<div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\);)/;
const match = content.match(summaryRegex);
if (match) {
  let summaryContent = match[2];
  
  // Make the right column one hidden lg:block
  let newRightCol = `${match[1]}\n            <div className="hidden lg:block">\n  ${summaryContent}            </div>\n${match[3]}`;
  
  content = content.replace(summaryRegex, newRightCol);
  
  // Now inject the mobile version right before the stepper
  const stepperStart = `            {/* 4. Multi-step progress indicator */}`;
  const mobileSummary = `            {/* 3. Application Summary Panel (Mobile) */}\n            <div className="lg:hidden block">\n  ${summaryContent}            </div>\n\n`;
  content = content.replace(stepperStart, mobileSummary + stepperStart);
}

// 4. Line height for inputs and labels (better RTL)
content = content.replace(
  /className="block text-\[10px\] font-bold text-gray-400 uppercase tracking-widest mb-1\.5"/g,
  'className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2 leading-relaxed"'
);
content = content.replace(
  /className="block text-\[9px\] font-bold text-gray-400 uppercase tracking-wider mb-1"/g,
  'className="block text-[9px] font-medium text-gray-500 uppercase tracking-wider mb-2 leading-relaxed"'
);
// Trust notice compacting
content = content.replace(
  'className="bg-[#FAF7EF]/90 rounded-2xl p-5 border border-[#E7E0D2] shadow-soft flex items-start gap-4"',
  'className="bg-[#FAF7EF]/90 rounded-xl p-4 border border-[#E7E0D2] shadow-soft flex items-start gap-3"'
);
content = content.replace(
  '<ul className="text-[11px] text-gray-655 leading-relaxed font-semibold space-y-1 list-disc list-inside">',
  '<ul className="text-[11px] text-gray-655 leading-loose font-medium space-y-1 list-disc list-inside">'
);

// Form card styling
content = content.replace(
  'className="bg-white rounded-3xl border border-[#E7E0D2] shadow-soft overflow-hidden"',
  'className="bg-white rounded-3xl border border-[#E7E0D2] shadow-sm overflow-hidden"'
);

// Application details styling (Softer weight)
content = content.replace(
  /className="bg-white rounded-\[2rem\] border border-\[#E7E0D2\] p-6 shadow-soft space-y-5"/g,
  'className="bg-white rounded-[1.5rem] border border-[#E7E0D2]/60 p-6 shadow-sm space-y-5 bg-gradient-to-b from-white to-gray-50/30"'
);
content = content.replace(
  /className="text-xs font-semibold text-gray-700"/g,
  'className="space-y-4 text-xs font-medium text-gray-600"'
);
content = content.replace(
  /className="text-primary-850 font-bold"/g,
  'className="text-primary-900 font-semibold"'
);
content = content.replace(
  /className="font-mono text-\[11px\] font-bold text-primary-900 bg-gray-50 px-2 py-0\.5 rounded border border-gray-100"/g,
  'className="font-mono text-[11px] font-medium text-primary-800 bg-gray-50 px-2 py-0.5 rounded border border-gray-100"'
);

// Upload areas more padding
content = content.replace(
  /className="border border-dashed border-\[#E7E0D2\] rounded-xl p-4 sm:p-6 text-center bg-\[#FAF7EF\]\/30 flex flex-col items-center justify-center relative hover:bg-gray-50 transition-colors"/g,
  'className="border border-dashed border-[#E7E0D2] rounded-xl p-6 sm:p-8 text-center bg-[#FAF7EF]/30 flex flex-col items-center justify-center relative hover:bg-[#FAF7EF]/60 transition-colors"'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Update complete!');
