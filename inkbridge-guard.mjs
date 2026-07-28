#!/usr/bin/env node
/**
 * Refuses to push (or publish/deploy) when this project's `inkbridge`
 * dependency is pointing at a local checkout via `file:` or `link:`.
 *
 * Why: `pnpm inkbridge:plugin:use-local` swaps the dep entry to
 *   "inkbridge": "file:../inkbridge/tools/figma-plugin"
 * which is great for iterating on the plugin source from this consumer,
 * BUT that path doesn't exist on anyone else's machine. If it ships in a
 * commit to main, fresh clones, CI, deploys, and downstream forks all
 * break with "Could not resolve dependency". The toggle `pnpm
 * inkbridge:plugin:use-beta` exists to swap back — this guard makes sure
 * we don't forget.
 *
 * Wired into `.husky/pre-push`. Reads HEAD's `package.json` (not the
 * working tree) so the check reflects what's actually about to be pushed
 * to origin, not whatever happens to be on disk at the moment.
 */

import { execSync } from 'node:child_process';

let pkg;
try {
  // git show HEAD:package.json returns the committed bytes — survives
  // unstaged working-tree edits.
  const raw = execSync('git show HEAD:package.json', { encoding: 'utf8' });
  pkg = JSON.parse(raw);
} catch (err) {
  console.error('inkbridge-guard: could not read HEAD package.json — ' + err.message);
  process.exit(1);
}

const dep =
  (pkg.dependencies && pkg.dependencies.inkbridge) ||
  (pkg.devDependencies && pkg.devDependencies.inkbridge) ||
  '';

if (dep.startsWith('file:') || dep.startsWith('link:')) {
  console.error('');
  console.error('  ✗ inkbridge-guard: refusing to push.');
  console.error('');
  console.error('    HEAD package.json has "inkbridge": "' + dep + '"');
  console.error('    That path only exists on the machine that ran inkbridge:plugin:use-local.');
  console.error('    Pushing this would break clones, CI, and deploys.');
  console.error('');
  console.error('  Fix:');
  console.error('    pnpm inkbridge:plugin:use-beta   # swap back to the npm beta tag');
  console.error('    git add package.json pnpm-lock.yaml');
  console.error('    git commit --amend --no-edit    # or a new commit, whichever fits');
  console.error('    git push                         # try again');
  console.error('');
  process.exit(1);
}

// Silent on success — nothing to say when the dep is fine.
