# @batpb/genart - Algorithmic Generative Art Library

**Always reference these instructions first** and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This is a TypeScript-compatible library for creating algorithmic generative art with p5.js, distributed as an npm package. The project is currently in alpha development with TypeScript build tooling, documentation generation, and linting infrastructure.

## Working Effectively

### Initial Setup and Dependencies
1. **CRITICAL**: Use Node.js v22.19.0 (check `.node-version` file for exact version)
   - Install via nvm: `nvm install 22.19.0 && nvm use 22.19.0`
   - Verify: `node --version` should show `v22.19.0`

2. **Install dependencies**: `npm install`
   - The project has TypeScript, build, documentation, and linting dependencies
   - Main branch contains the full development structure and build tooling

### Development Status
**IMPORTANT**: This project is in alpha development.

3. **Build & Test**: Multiple scripts available
   - `npm run build` - Compiles TypeScript to multiple formats using tsup
   - `npm run docs` - Generates documentation using typedoc  
   - `npm run lint:js` - Lints JavaScript configuration files with ESLint
   - `npm run lint:ts` - Lints TypeScript source files with ESLint (includes tsup.config.ts and vitest.config.ts)
   - `npm test` - Runs vitest unit tests
   - `npm run test:watch` - Runs vitest in watch mode
   - `npm run test:ui` - Runs vitest with UI interface
   - `npm run test:coverage` - Runs vitest with coverage reporting

## Project Structure

### Key Directories and Files
```
/
├── .github/                       # GitHub configuration
│   ├── CODEOWNERS                # Code ownership rules
│   ├── dependabot.yml            # Dependency updates config
│   ├── copilot-instructions.md   # This file
│   └── workflows/                # GitHub Actions workflows
│       ├── codeql.yml            # CodeQL security scanning
│       ├── npm-build-test.yml    # CI/CD build and test verification
│       └── npm-publish.yml       # NPM package publishing
├── docs/                         # Jekyll documentation site
│   ├── Gemfile                   # Ruby dependencies for Jekyll
│   ├── _config.yml               # Jekyll site configuration
│   ├── _includes/                # Jekyll include files
│   ├── doc/                      # TypeDoc generated documentation
│   ├── releases/                 # Release documentation structure
│   │   └── v2.x/                 # v2.0.0 release documentation
│   ├── index.md                  # Main documentation page
│   ├── releases.md               # Release documentation index
│   └── resources.md              # Development tools and resources
├── src/                          # TypeScript source code
│   ├── string/                   # String utility module
│   │   ├── index.ts              # Module exports
│   │   └── string-validator.ts   # StringValidator class
│   └── index.ts                  # Main library exports
├── tests/                        # Vitest unit tests
│   └── string/                   # String module tests
│       └── string-validator.test.ts # StringValidator unit tests
├── style/                        # Styling files
│   └── typedoc.css               # Custom TypeDoc styling
├── .gitignore                    # Git ignore rules (includes build outputs and coverage)
├── .node-version                 # Node.js version specification (v22.19.0)
├── eslint.config.js.mjs          # ESLint configuration for JavaScript files
├── eslint.config.ts.mjs          # ESLint configuration for TypeScript files
├── LICENSE                       # MIT License
├── README.md                     # Project overview
├── package.json                  # NPM package configuration with build scripts
├── package-lock.json             # NPM dependency lock file
├── tsconfig.json                 # TypeScript compiler configuration
├── tsup.config.ts                # Build tool configuration
├── typedoc.json                  # Documentation generator configuration
├── velocity-copyright-template.txt  # Copyright template
└── vitest.config.ts              # Vitest testing configuration
```

### Documentation Site
The project includes a Jekyll-based documentation site in the `docs/` directory:
- Hosted at: https://brittni-and-the-polar-bear.github.io/genart/
- Uses Jekyll with custom configuration
- Main content in `index.md` with links to generated docs and releases
- `doc/` contains TypeDoc-generated API documentation
- `releases/` contains organized release documentation
- `releases.md` provides release documentation index
- `resources.md` lists development tools and dependencies

## Package Information
- **Name**: @batpb/genart
- **Current Version**: 2.0.0-rc.3-alpha.0
- **Description**: A TypeScript compatible library built with p5.js for creating responsive, generative, algorithmic art projects
- **License**: MIT
- **Homepage**: https://brittni-and-the-polar-bear.github.io/genart/
- **Repository**: https://github.com/brittni-and-the-polar-bear/genart
- **Keywords**: algorithmic art, code art, genart, generative art, p5, p5.js, p5-js, p5.js library, typescript

### Contributors
- **brittni and the polar bear** (primary author)
- brittni watkins (https://blwatkins.github.io/)
- azurepolarbear (https://azurepolarbear.github.io/)

## Dependencies and Development Tools

### Core Dependencies
- **typescript** - TypeScript compiler and language support
- **tsup** - Build tool for TypeScript packages  
- **ts-node** - TypeScript execution environment
- **tslib** - TypeScript runtime library

### Documentation
- **typedoc** - TypeScript documentation generator
- **typedoc-plugin-coverage** - Coverage reporting for documentation

### Testing
- **vitest** - Fast unit testing framework
- **@vitest/coverage-v8** - Coverage reporting with v8 provider
- **@vitest/ui** - Web UI for vitest testing

### Linting and Code Quality  
- **@eslint/js** - ESLint JavaScript configurations
- **eslint** - Core ESLint linting engine
- **@stylistic/eslint-plugin** - Code style rules
- **eslint-plugin-es-x** - ECMAScript version restrictions
- **eslint-plugin-n** - Node.js specific rules  
- **eslint-plugin-security** - Security-focused linting rules
- **typescript-eslint** - TypeScript-specific ESLint rules

### Configuration Files
- `tsconfig.json` - TypeScript compiler configuration with strict settings
- `tsup.config.ts` - Build configuration for multiple output formats
- `typedoc.json` - Documentation generation settings with custom styling
- `eslint.config.js.mjs` - ESLint rules for JavaScript configuration files
- `eslint.config.ts.mjs` - ESLint rules for TypeScript source code
- `vitest.config.ts` - Testing configuration with coverage settings

## Current Limitations

### Alpha Development Status
- Project is in early alpha stage
- TypeScript compilation, build tools, and linting are set up and functional
- Documentation generation is configured with typedoc
- Vitest testing framework is configured and functional with comprehensive test coverage
- GitHub Actions workflows for CI/CD are implemented (codeql.yml, npm-build-test.yml, npm-publish.yml)
- Build outputs (`_compiled/`, `_doc/`, `_dist/`) and test coverage (`_coverage/`) are ignored by `.gitignore`
- May have breaking changes in future releases

### Library Content
- Currently includes `string` module with `StringValidator` class for hex color validation
- Supports `#RRGGBB`, `#RRGGBBAA`, `#rrggbb`, and `#rrggbbaa` hex color patterns
- StringValidator class only accepts hex codes where all letters are in the same case (by design for consistency)
- More modules and utilities will be added in future releases

### Available Scripts
The following npm scripts are available:
- `npm run build` - Compiles TypeScript using tsup (outputs to `_dist/`)
- `npm run docs` - Generates API documentation using typedoc (outputs to `_doc/`)
- `npm run lint:js` - Lints JavaScript configuration files with ESLint
- `npm run lint:ts` - Lints TypeScript source files with ESLint (includes tsup.config.ts and vitest.config.ts)
- `npm run prepack` - Runs build automatically before packaging
- `npm test` - Runs vitest unit tests
- `npm run test:watch` - Runs vitest in watch mode for development
- `npm run test:ui` - Runs vitest with web UI interface
- `npm run test:coverage` - Runs vitest with coverage reporting (outputs to `_coverage/`)

## Development Guidelines

### Node.js Version
- **CRITICAL**: Always use Node.js v22.19.0 as specified in `.node-version`
- Check version before working: `node --version`

### Working with the Project
This project now has full TypeScript development infrastructure:
- Main development happens on the main branch
- TypeScript compilation configured with strict settings
- ESLint setup for both JavaScript config files and TypeScript source
- Build process generates multiple formats (ESM, CJS, IIFE) with type definitions
- Documentation generation creates comprehensive API docs
- Vitest testing framework with comprehensive coverage and multiple test modes
- GitHub Actions workflows for CI/CD, security scanning, and publishing
- Code is organized in modules (currently `string` module with more to come)

### Documentation Updates
- Jekyll site documentation in `docs/` directory  
- Update `docs/index.md` for main documentation changes
- Jekyll configuration in `docs/_config.yml`
- Release documentation organized in `docs/releases/`

### Build and Development Tools
- **TypeScript**: Configured with strict settings, outputs to `_compiled/`
- **tsup**: Build tool that creates multiple output formats in `_dist/`
- **typedoc**: Documentation generator with coverage plugin, outputs to `_doc/`
- **ESLint**: Separate configurations for JS and TS files with comprehensive rules
- **vitest**: Fast unit testing framework with coverage reporting, outputs to `_coverage/`
- **GitHub Actions**: Automated CI/CD workflows for testing, security scanning, and publishing
- **Package exports**: Configured for proper module resolution in different environments

## Quick Reference Commands

**Setup new environment:**
```bash
nvm use 22.19.0        # Use correct Node.js version
npm install            # Install all development dependencies
```

**Development workflow:**
```bash
npm run build          # Build the library
npm run docs           # Generate documentation
npm run lint:js        # Lint JavaScript configuration files  
npm run lint:ts        # Lint TypeScript source files
npm test               # Run unit tests
npm run test:coverage  # Run tests with coverage reporting
```

**Basic validation:**
```bash
node --version         # Verify Node.js version (should be v22.19.0)
npm run build          # Should build successfully
npm run docs           # Should generate docs
npm test               # Should run vitest tests and pass
```

**Work with documentation:**
```bash
cd docs/               # Navigate to Jekyll site
# Jekyll commands would go here if Jekyll is set up locally
```

This project now has comprehensive TypeScript development tooling including compilation, documentation generation, linting, and unit testing with vitest. GitHub Actions workflows provide automated CI/CD, security scanning, and npm publishing. The build outputs are ignored by git but the development infrastructure is fully functional.
