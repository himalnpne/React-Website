const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing build issues...');

const buildDir = './build';

function fixHTMLPaths() {
  console.log('📝 Fixing HTML paths...');
  const indexPath = path.join(buildDir, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error('❌ No index.html found');
    return;
  }

  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Fix incorrect paths
  html = html.replace(/%PUBLIC_URL%\//g, './');
  
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✅ HTML paths fixed');
}

function checkBuildFiles() {
  console.log('🔍 Checking build files...');
  
  const staticDir = path.join(buildDir, 'static');
  const jsDir = path.join(staticDir, 'js');
  const cssDir = path.join(staticDir, 'css');
  
  if (fs.existsSync(jsDir)) {
    const jsFiles = fs.readdirSync(jsDir);
    console.log(`📦 JavaScript files: ${jsFiles.length}`);
    jsFiles.forEach(file => console.log(`   - ${file}`));
  }
  
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir);
    console.log(`🎨 CSS files: ${cssFiles.length}`);
    cssFiles.forEach(file => console.log(`   - ${file}`));
  }
}

// Main execution
if (fs.existsSync(buildDir)) {
  fixHTMLPaths();
  checkBuildFiles();
  console.log('\n✅ BUILD FIXED!\n');
} else {
  console.error('❌ No build directory found');
  process.exit(1);
}