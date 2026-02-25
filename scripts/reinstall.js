// Regenerate package-lock.json
import { execSync } from 'child_process';
console.log('Running npm install to regenerate lock file...');
execSync('cd /vercel/share/v0-project && npm install --package-lock-only', { stdio: 'inherit' });
console.log('Done!');
