const { execSync } = require('child_process');
const fs = require('fs');
try {
  execSync('npx eslint . -f json', { stdio: 'pipe', encoding: 'utf-8' });
  fs.writeFileSync('lint_results_custom.txt', "No lint errors.");
} catch (e) {
  try {
    let out = "";
    const results = JSON.parse(e.stdout);
    results.forEach(file => {
      if (file.errorCount > 0 || file.warningCount > 0) {
        out += `\n=== ${file.filePath} ===\n`;
        file.messages.forEach(msg => {
          out += `Line ${msg.line}: ${msg.message} (${msg.ruleId})\n`;
        });
      }
    });
    fs.writeFileSync('lint_results_custom.txt', out);
  } catch(err) {
    fs.writeFileSync('lint_results_custom.txt', "Failed to parse JSON");
  }
}
