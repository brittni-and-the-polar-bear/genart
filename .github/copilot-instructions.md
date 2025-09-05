# @batpb/genart - Algorithmic Generative Art Library

**Always reference these instructions first** and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This is a TypeScript-compatible library for creating algorithmic generative art with p5.js, distributed as an npm package. The project is currently in alpha development with minimal package structure.

## Working Effectively

### Initial Setup and Dependencies
1. **CRITICAL**: Use Node.js v22.19.0 (check `.node-version` file for exact version)
   - Install via nvm: `nvm install 22.19.0 && nvm use 22.19.0`
   - Verify: `node --version` should show `v22.19.0`

2. **Install dependencies**: `npm install`
   - The project currently has minimal dependencies
   - Main branch contains only package structure for distribution

### Development Status
**IMPORTANT**: This project is in alpha development. Work is done on the main branch which contains the minimal package structure for releases.

3. **Testing**: `npm test`
   - Currently returns "Error: no test specified" and exits with code 1
   - No test framework is set up yet in the main branch

## Project Structure

### Repository Structure
- `main` - **Primary branch** with minimal package structure for releases
- All development branches have been removed; work directly on main

### Key Directories and Files
```
/
├── .github/                     # GitHub configuration
│   ├── CODEOWNERS              # Code ownership rules
│   ├── dependabot.yml          # Dependency updates config
│   └── copilot-instructions.md # This file
├── docs/                       # Jekyll documentation site
│   ├── Gemfile                 # Ruby dependencies for Jekyll
│   ├── _config.yml             # Jekyll site configuration
│   ├── _includes/              # Jekyll include files
│   └── index.md                # Main documentation page
├── .gitignore                  # Git ignore rules
├── .node-version               # Node.js version specification (v22.19.0)
├── LICENSE                     # MIT License
├── README.md                   # Project overview
├── package.json                # NPM package configuration
├── package-lock.json           # NPM dependency lock file
└── velocity-copyright-template.txt  # Copyright template
```

### Documentation Site
The project includes a Jekyll-based documentation site in the `docs/` directory:
- Hosted at: https://brittni-and-the-polar-bear.github.io/genart/
- Uses Jekyll with custom configuration
- Main content in `index.md`

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

## Current Limitations

### Alpha Development Status
- Project is in early alpha stage
- No build tools or TypeScript compilation set up yet
- No testing framework configured
- Documentation is still being written
- May have breaking changes in future releases

### Available Scripts
Currently only one npm script is available:
- `npm test` - Shows "Error: no test specified" (no tests implemented yet)

## Development Guidelines

### Node.js Version
- **CRITICAL**: Always use Node.js v22.19.0 as specified in `.node-version`
- Check version before working: `node --version`

### Working with the Project
Since this is an alpha project with minimal structure:
- Main development happens on the main branch
- No build process exists yet
- No linting or testing tools configured
- Focus is on package distribution structure

### Documentation Updates
- Jekyll site documentation in `docs/` directory
- Update `docs/index.md` for main documentation changes
- Jekyll configuration in `docs/_config.yml`

## Quick Reference Commands

**Setup new environment:**
```bash
nvm use 22.19.0  # Use correct Node.js version
npm install      # Install minimal dependencies
```

**Basic validation:**
```bash
node --version   # Verify Node.js version (should be v22.19.0)
npm test         # Will show "no test specified" error (expected)
```

**Work with documentation:**
```bash
cd docs/         # Navigate to Jekyll site
# Jekyll commands would go here if Jekyll is set up locally
```

This project is in early development stages. Most typical development tooling (build, test, lint) is not yet configured.