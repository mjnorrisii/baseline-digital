import { execSync } from 'child_process';

try {
  console.log('Running npm install to regenerate package-lock.json...');
  execSync('cd /vercel/share/v0-project && rm -f package-lock.json && npm install --package-lock-only', { 
    stdio: 'inherit',
    timeout: 120000
  });
  console.log('Done! package-lock.json regenerated.');
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
