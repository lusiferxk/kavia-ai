const fs = require('fs');
const path = require('path');

console.log('🔍 Starting migration debug...\n');

// Check current directory
console.log('📁 Current directory:', process.cwd());

// Check if confluence-export exists
const exportPath = './confluence-export';
console.log('\n📂 Checking for confluence-export folder...');

if (fs.existsSync(exportPath)) {
    console.log('✅ Found confluence-export folder');
    
    // List files in the folder
    const files = fs.readdirSync(exportPath);
    console.log('\n📄 Files found:');
    files.forEach(file => {
        console.log(`   - ${file}`);
    });
} else {
    console.log('❌ confluence-export folder NOT found!');
    console.log('   Please create a folder called "confluence-export" in your project root');
    console.log('   and put your HTML files there.');
}

// Check if scripts folder exists
console.log('\n📂 Checking scripts folder...');
if (fs.existsSync('./scripts')) {
    console.log('✅ Scripts folder exists');
} else {
    console.log('❌ Scripts folder not found');
}

// Check for node_modules
console.log('\n📂 Checking dependencies...');
const dependencies = ['cheerio', 'turndown', 'fs-extra'];
let missingDeps = [];

dependencies.forEach(dep => {
    const depPath = path.join('node_modules', dep);
    if (fs.existsSync(depPath)) {
        console.log(`✅ ${dep} installed`);
    } else {
        console.log(`❌ ${dep} NOT installed`);
        missingDeps.push(dep);
    }
});

if (missingDeps.length > 0) {
    console.log('\n⚠️  Missing dependencies! Run:');
    console.log('   npm install cheerio turndown turndown-plugin-gfm fs-extra');
}

console.log('\n📍 Your project structure should be:');
console.log(`
your-project/
├── confluence-export/          <-- Put your HTML files here
│   ├── index.html
│   ├── Kavia-Documentation-v2.3_57344004.html
│   └── (other HTML files)
├── scripts/
│   └── migrate-confluence.js   <-- Your migration script
└── src/
    └── app/
        └── documentation/      <-- Output will go here
`);