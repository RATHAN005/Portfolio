const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Center the main container
  if (content.includes('lg:px-20 py-24"')) {
    content = content.replace(/lg:px-20 py-24"/g, 'lg:px-20 py-24 flex flex-col items-center text-center"');
    changed = true;
  }
  
  // Center left-aligned text wrappers
  if (content.includes('max-w-xl"')) {
    content = content.replace(/max-w-xl"/g, 'max-w-xl flex flex-col items-center text-center"');
    changed = true;
  }
  
  if (content.includes('max-w-2xl"')) {
    if (!content.includes('max-w-2xl flex flex-col items-center text-center"')) {
        content = content.replace(/max-w-2xl"/g, 'max-w-2xl flex flex-col items-center text-center"');
        changed = true;
    }
  }

  // origin-left to origin-center for animated underlines
  if (content.includes('origin-left')) {
    content = content.replace(/origin-left/g, 'origin-center');
    changed = true;
  }
  
  // items-start to items-center
  if (content.includes('items-start')) {
    content = content.replace(/items-start/g, 'items-center');
    changed = true;
  }

  // max-w-4xl for the paragraph
  if (content.includes('max-w-4xl"')) {
      content = content.replace(/max-w-4xl"/g, 'max-w-4xl flex flex-col items-center text-center"');
      changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Centered: ' + filePath);
  }
}

const hobbiesDir = path.join(process.cwd(), 'src/components/hobbies');
const files = fs.readdirSync(hobbiesDir).filter(f => f.endsWith('.tsx') && f !== 'HobbiesChapters.tsx');

for (const file of files) {
  processFile(path.join(hobbiesDir, file));
}
