# @batpb/genart - TypeScript Generative Art Library

**Always reference these instructions first** and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This is a TypeScript library for creating generative art with p5.js, distributed as an npm package. The project is in active development and uses modern tooling including TypeScript, Jest, ESLint, and tsup for building.

## Working Effectively

### Initial Setup and Dependencies
1. **CRITICAL**: Use Node.js v22.12.0 (check `.node-version` file for exact version)
   - Install via nvm: `nvm install 22.12.0 && nvm use 22.12.0`
   - Verify: `node --version` should show `v22.12.0`

2. **Install dependencies**: `npm ci` (takes ~20 seconds, NEVER CANCEL)
   - Uses `npm ci` instead of `npm install` for consistent builds
   - May show deprecation warnings for `inflight` and `glob` - these are normal

### Development Workflow
The main development happens on the `development` branch, NOT `main`. Always work from `development` branch.

3. **Linting** (ALWAYS run both before commits):
   - `npm run lint:js` - JavaScript/config files (~1 second)
   - `npm run lint:ts` - TypeScript source files (~3 seconds)

4. **Build the library**: `npm run build` (~2 seconds, NEVER CANCEL)
   - Uses `tsup` to create CommonJS, ES modules, and TypeScript declarations
   - Output goes to `./out/dist/` directory
   - Creates: `batpb-genart.js`, `batpb-genart.mjs`, `batpb-genart.d.ts`, and source maps

5. **Run tests**: `npm test` (~4 seconds, NEVER CANCEL)
   - Uses Jest with ts-jest for TypeScript support
   - Currently has placeholder tests
   - Generates coverage report

6. **Generate documentation**: `npm run docs` (~2 seconds)
   - Uses TypeDoc to generate API documentation
   - Output goes to `./out/doc/` directory

### Validation Scenarios
**ALWAYS perform these validation steps after making changes**:
- Build succeeds: `npm run build` completes without errors
- Linting passes: Both `npm run lint:js` and `npm run lint:ts` pass
- Tests pass: `npm test` completes successfully
- Documentation builds: `npm run docs` generates without errors

## Project Structure

### Repository Branches
- `main` - Minimal package structure for releases
- `development` - **Active development branch with full source code**
- Other feature branches: `palettes`, `unit-tests`, `v2.0.0-rc.3`, etc.

### Key Directories and Files
```
/
├── src/                          # TypeScript source code
│   ├── main/batpb-genart.ts     # Main library entry point
│   └── test/batpb-genart.test.ts # Jest tests
├── out/                         # Build output (generated)
│   ├── dist/                    # Compiled library files
│   ├── doc/                     # TypeDoc generated docs
│   └── tests-coverage/          # Test coverage reports
├── docs/                        # Jekyll documentation site
├── OLD_BKUP/                    # Legacy code backup
├── .github/workflows/           # CI/CD pipelines
├── eslint.config.js.mjs         # ESLint config for JS files
├── eslint.config.ts.mjs         # ESLint config for TypeScript
├── jest.config.ts               # Jest test configuration
├── tsconfig.json                # TypeScript compiler config
├── tsup.config.ts               # Build tool configuration
└── typedoc.json                 # Documentation generator config
```

### Build Artifacts
After running `npm run build`:
- `out/dist/batpb-genart.js` - CommonJS build
- `out/dist/batpb-genart.mjs` - ES module build  
- `out/dist/batpb-genart.d.ts` - TypeScript declarations
- Source maps for debugging

## Common Issues and Workarounds

### Node.js Version
- **DO NOT** use Node.js versions other than specified in `.node-version`
- If build fails, first check: `node --version` matches `.node-version`

### Build Process
- Build may fail if `./out` directory has permission issues
- The build script runs `rm -r ./out` which may show "No such file or directory" on first run - this is normal

### Dependencies
- The project has security vulnerabilities in dev dependencies (6 vulnerabilities: 3 low, 3 moderate)
- These are in development tools, not the final package - DO NOT run `npm audit fix` unless specifically requested

### Documentation
- Jekyll documentation in `docs/` uses a different structure than main branch
- TypeDoc API docs are generated to `out/doc/` and require a successful build first

## CI/CD Pipeline

### GitHub Actions Workflow (.github/workflows/node-js.yml)
Runs on: push to main, PRs to main, manual trigger
- Matrix build: Node.js 18.x, 20.x, 22.x
- Steps: checkout → setup node → `npm ci` → lint JS → lint TS → build → test
- **Timeout expectations**: Each step takes <30 seconds in CI

### Before Committing
**MANDATORY checks** (CI will fail if these don't pass):
1. `npm run lint:js` - Must pass
2. `npm run lint:ts` - Must pass  
3. `npm run build` - Must complete successfully
4. `npm test` - All tests must pass

## Package Information
- **Name**: @batpb/genart
- **Current Version**: 2.0.0-rc.3 (alpha development)
- **Dependencies**: p5.js, nearest-color, cococh, @types/p5, @types/nearest-color
- **Peer Dependencies**: color-name-list@11.0.0
- **License**: AGPL-3.0 (development branch) / MIT (main branch)

## Quick Reference Commands

**Setup new environment:**
```bash
nvm use 22.12.0  # Use correct Node.js version
npm ci           # Install dependencies (20s)
```

**Development cycle:**
```bash
npm run lint:js && npm run lint:ts  # Lint code (4s total)
npm run build                       # Build library (2s)
npm test                           # Run tests (4s)
npm run docs                       # Generate docs (2s)
```

**Full validation (run before committing):**
```bash
npm run lint:js && npm run lint:ts && npm run build && npm test
```

All timing estimates include a safety buffer - actual times may be faster.