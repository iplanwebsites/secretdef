import { execSync } from 'node:child_process';

const args = process.argv.slice(2);
const command = args[0];

if (command === 'ui') {
  // Pass remaining args (e.g. --cwd ./packages/api) through to secretdef-ui
  const uiArgs = args.slice(1).join(' ');
  try {
    execSync(`npx secretdef-ui ${uiArgs}`, { stdio: 'inherit' });
  } catch {
    process.exit(1);
  }
} else {
  console.log(`secretdef — declare the secrets your packages require

Usage:
  secretdef ui [--cwd <path>]   Open the local dashboard (experimental)

Learn more: https://secretdef.com`);

  if (command && command !== 'help' && command !== '--help' && command !== '-h') {
    console.error(`\nUnknown command: ${command}`);
    process.exit(1);
  }
}
