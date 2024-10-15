const fs = require('fs');
const path = require('path');

function snakeToCapitalized(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const iconsDirectory = './icons'; // Adjust the path to your icons folder if needed

fs.readdir(iconsDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const exportStatements = files
    .filter(file => file.endsWith('.tsx'))
    .map(file => {
      const componentName = snakeToCapitalized(path.basename(file, '.tsx'));
      return `export { default as ${componentName} } from './${path.basename(file)}';`;
    })
    .join('\n');

  const indexContent = `${exportStatements}\n`;

  fs.writeFile(path.join(iconsDirectory, 'index.ts'), indexContent, err => {
    if (err) {
      console.error('Error writing index.ts:', err);
      return;
    }

    console.log('index.ts file created successfully.');
  });
});
