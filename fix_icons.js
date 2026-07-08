const fs = require('fs');

const fixMap = {
  'Leaf': 'Leaf',
  'HelpCircle': 'Question',
  'BookOpen': 'BookOpen',
  'Droplets': 'Drop',
  'TreePine': 'TreeEvergreen',
  'Wheat': 'Farm',
  'Wrench': 'Wrench',
  'HandHeart': 'HandHeart',
  'LucideIcon': 'IconProps'
};

const filesToFix = [
  'src/app/[locale]/about/page.tsx',
  'src/app/[locale]/page.tsx',
  'src/components/sections/ProgramCard.tsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix Phosphor imports that have original names
    content = content.replace(/import\s*\{([^}]+)\}\s*from\s*['"]@phosphor-icons\/react['"]/g, (match, p1) => {
      let icons = p1.split(',').map(i => i.trim()).filter(Boolean);
      let newIcons = icons.map(i => {
        let parts = i.split(' as ');
        let original = parts[0];
        let alias = parts[1] || original;
        
        if (original === 'LucideIcon' || original === 'type LucideIcon') {
           return 'IconProps';
        }

        let newName = fixMap[original] || original;
        return newName === alias ? newName : `${newName} as ${alias}`;
      });
      return `import { ${newIcons.join(', ')} } from '@phosphor-icons/react'`;
    });
    
    // Replace specific usages in ProgramCard
    if (file.includes('ProgramCard.tsx')) {
       content = content.replace(/type LucideIcon/g, 'IconProps');
       content = content.replace(/LucideIcon/g, 'IconProps');
       content = content.replace(/Wheat:/g, 'Farm:');
       content = content.replace(/Beef:/g, 'Cow:');
       content = content.replace(/BarChart3:/g, 'ChartLine:');
       content = content.replace(/Trees:/g, 'Tree:');
       // If there's any stray lucide-react imports left
       content = content.replace(/import.*lucide-react.*/g, '');
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
});
