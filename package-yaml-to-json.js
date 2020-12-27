const yaml = require('js-yaml');
const fs = require('fs');

try {
    const packageJson = yaml.safeLoad(fs.readFileSync('package.yaml', 'utf8'));
    fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 4));
} catch (e) {
    console.log(e);
    throw e;
}