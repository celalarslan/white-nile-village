const fs = require('fs');
const path = require('path');

const iconMap = {
  'Search': 'MagnifyingGlass',
  'CheckCircle': 'CheckCircle',
  'XCircle': 'XCircle',
  'MapPin': 'MapPin',
  'Phone': 'Phone',
  'Mail': 'Envelope',
  'Building': 'Buildings',
  'Sparkles': 'Sparkle',
  'Users': 'UsersThree',
  'Award': 'Medal',
  'Shield': 'ShieldCheck',
  'FileText': 'FileText',
  'Trees': 'Tree',
  'PiggyBank': 'PiggyBank',
  'Calendar': 'CalendarBlank',
  'CheckCircle2': 'CheckCircle',
  'ChevronRight': 'CaretRight',
  'ChevronLeft': 'CaretLeft',
  'Target': 'Target',
  'Activity': 'Activity',
  'Heart': 'Heart',
  'Lightbulb': 'Lightbulb',
  'Tag': 'Tag',
  'ImageIcon': 'Image',
  'Globe': 'GlobeHemisphereEast',
  'Landmark': 'Bank',
  'MessageSquare': 'ChatCircle',
  'Send': 'PaperPlaneRight',
  'Upload': 'UploadSimple',
  'X': 'X',
  'Download': 'DownloadSimple',
  'ArrowRight': 'ArrowRight',
  'Menu': 'List',
  'ChevronDown': 'CaretDown',
  'ArrowLeft': 'ArrowLeft',
  'Lock': 'LockKey',
  'Image': 'Image',
  'Check': 'Check',
  'ShieldAlert': 'ShieldWarning',
  'Clock': 'Clock',
  'ShieldCheck': 'ShieldCheck',
  'Database': 'Database',
  'Sprout': 'Plant',
  'Tractor': 'Tractor',
  'AlertCircle': 'WarningCircle',
  'BarChart3': 'ChartLine',
  'Beef': 'Cow',
  'GraduationCap': 'GraduationCap'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('admin')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let madeChanges = false;
  
  // Find lucide imports
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/g;
  content = content.replace(importRegex, (match, p1) => {
    madeChanges = true;
    let icons = p1.split(',').map(i => i.trim());
    let newIcons = icons.map(i => {
      let parts = i.split(' as ');
      let original = parts[0];
      let alias = parts[1] || original;
      
      let newName = iconMap[original];
      if (!newName) {
        console.log(`Missing map for ${original} in ${file}`);
        newName = original; // fallback
      }
      return newName === alias ? newName : `${newName} as ${alias}`;
    });
    
    // Replace with Phosphor import
    return `import { ${newIcons.join(', ')} } from '@phosphor-icons/react'`;
  });

  // Also replace individual icon names in mockData if any
  if (file.includes('mockData.ts') || file.includes('ProgramCard.tsx')) {
    // Specifically fix the ProgramCard icon mapping
    if (file.includes('ProgramCard.tsx')) {
        content = content.replace('import { Users, FileText, Trees, Leaf, Wheat, Beef, GraduationCap, BarChart3 } from \'lucide-react\';', 
                                  'import { UsersThree, FileText, Tree, Leaf, Farm, Cow, GraduationCap, ChartLine } from \'@phosphor-icons/react\';');
        
        content = content.replace(/const iconMap: Record<string, any> = \{([^}]+)\}/, (match, p1) => {
            return `const iconMap: Record<string, any> = {
    Trees: Tree,
    Leaf: Leaf,
    Wheat: Farm,
    Beef: Cow,
    Users: UsersThree,
    GraduationCap: GraduationCap,
    BarChart3: ChartLine,
  }`;
        });
        madeChanges = true;
    }
    
    // Fix mockData strings
    if (file.includes('mockData.ts')) {
        content = content.replace(/'Wheat'/g, "'Farm'");
        content = content.replace(/'Beef'/g, "'Cow'");
        content = content.replace(/'BarChart3'/g, "'ChartLine'");
        madeChanges = true;
    }
  }

  // Header tweaks
  if (file.includes('Header.tsx') || file.includes('page.tsx')) {
      content = content.replace(/<([A-Za-z]+)\s+className=/g, (match, p1) => {
          // If the tag is an icon and it doesn't have weight="duotone" and it's from our new icons, we could add weight
          return match;
      });
  }

  if (madeChanges) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
