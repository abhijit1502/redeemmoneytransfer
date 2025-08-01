const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const versionData = {
  version: pkg.version,
  buildDate: new Date().toISOString(),
};

const outputPath = path.join(__dirname, '..', 'public', 'version.json');

fs.writeFileSync(outputPath, JSON.stringify(versionData, null, 2));
console.log(`✅ version.json generated at: ${outputPath}`);
