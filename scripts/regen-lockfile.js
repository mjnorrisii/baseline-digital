import { execSync } from 'child_process';
import { unlinkSync, existsSync } from 'fs';

const projectDir = '/vercel/share/v0-project';
const lockFile = `${projectDir}/package-lock.json`;

// Remove existing lock file
if (existsSync(lockFile)) {
  unlinkSync(lockFile);
  console.log('Deleted existing package-lock.json');
}

// Run npm install to generate a fresh lock file
try {
  execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
  console.log('Successfully regenerated package-lock.json');
} catch (e) {
  console.error('npm install failed:', e.message);
}
