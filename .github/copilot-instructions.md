# @batpb/genart - Algorithmic Generative Art Library

**Always reference these instructions first** and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This is a TypeScript-compatible library for creating algorithmic generative art with p5.js, distributed as an npm package. The project is currently in alpha development with TypeScript build tooling, documentation generation, and linting infrastructure.

## Working Effectively

### Initial Setup and Dependencies
1. Use Node.js v24.11.1 (check `.node-version` file for exact version)
   - Install via nvm: `nvm install 24.11.1 && nvm use 24.11.1`
   - Verify: `node --version` should show `v24.11.1`

2. **Install dependencies**: `npm install`
   - The project has TypeScript, build, documentation, and linting dependencies
   - Main branch contains the full development structure and build tooling

### Development Status
**IMPORTANT**: This project is in alpha development.

3. **Build & Test**: Multiple scripts available
   - `npm run build` - Compiles TypeScript to multiple formats using tsdown
   - `npm run docs` - Generates documentation using typedoc  
   - `npm run lint:js` - Lints JavaScript configuration files with ESLint
   - `npm run lint:ts` - Lints TypeScript source files with ESLint (includes tsdown.config.ts, vitest.config.ts, and tests directory)
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
│       ├── npm-deprecate.yml     # NPM package deprecation workflow
│       └── npm-publish.yml       # NPM package publishing
├── docs/                         # Jekyll documentation site
│   ├── Gemfile                   # Ruby dependencies for Jekyll
│   ├── _config.yml               # Jekyll site configuration (includes collections)
│   ├── _includes/                # Jekyll include files
│   ├── _layouts/                 # Jekyll layout files
│   │   ├── colors_by_luminance.html  # Layout for color category pages
│   │   ├── palette_color.html    # Layout for individual palette color pages
│   │   ├── palettes_by_name.html # Layout for palette category pages
│   │   └── palette.html          # Layout for individual palette pages
│   ├── _collections/             # Jekyll collections
│   │   ├── _palette_colors/      # Palette color collection files
│   │   │   ├── pc-000000.md      # PC_000000 color page
│   │   │   ├── pc-a3a3a3.md      # PC_A3A3A3 color page
│   │   │   ├── pc-ffffff.md      # PC_FFFFFF color page
│   │   │   ├── pc_80007f.md      # PC_80007F color page
│   │   │   ├── blue/             # Blue color collection files
│   │   │   │   └── pc-1e1a75.md  # PC_1E1A75 color page
│   │   │   ├── orange/           # Orange color collection files
│   │   │   │   ├── pc-ff704d.md  # PC_FF704D color page
│   │   │   │   └── pc-ffa852.md  # PC_FFA852 color page
│   │   │   └── pink/             # Pink color collection files
│   │   │       ├── pc-9f1475.md  # PC_9F1475 color page
│   │   │       └── pc-e13762.md  # PC_E13762 color page
│   │   └── _palettes/            # Palette collection files
│   │       ├── nature/           # Nature palette collection files
│   │       │   └── california-wine-sunset-palette.md # CALIFORNIA_WINE_SUNSET_PALETTE page
│   │       └── pride/            # Pride palette collection files
│   │           └── asexual-pride-palette.md # ASEXUAL_PRIDE_PALETTE page
│   ├── colors/                   # Color documentation pages
│   │   ├── colors.md             # Main colors page
│   │   ├── black/                # Black color category
│   │   │   └── black-colors.md   # Black colors display page
│   │   ├── blue/                 # Blue color category
│   │   │   └── blue-colors.md    # Blue colors display page
│   │   ├── gray/                 # Gray color category
│   │   │   └── gray-colors.md    # Gray colors display page
│   │   ├── orange/               # Orange color category
│   │   │   └── orange-colors.md  # Orange colors display page
│   │   ├── pink/                 # Pink color category
│   │   │   └── pink-colors.md    # Pink colors display page
│   │   ├── purple/               # Purple color category
│   │   │   └── purple-colors.md  # Purple colors display page
│   │   └── white/                # White color category
│   │       └── white-colors.md   # White colors display page
│   ├── palettes/                 # Palette documentation pages
│   │   ├── palettes.md           # Main palettes page
│   │   ├── all-palettes.md       # All palettes display page
│   │   ├── gradient-palettes.md   # Gradient palettes display page
│   │   ├── nature/               # Nature palette category
│   │   │   └── nature-palettes.md # Nature palettes display page
│   │   └── pride/                # Pride palette category
│   │       └── pride-palettes.md # Pride palettes display page
│   ├── doc/                      # TypeDoc generated documentation
│   ├── releases/                 # Release documentation structure
│   │   └── v2.x/                 # v2.0.0 release documentation
│   │       └── v2.0.x/           # v2.0.x release documentation
│   │           └── v2.0.0-rc.x/  # v2.0.0-rc.x release documentation
│   │               └── v2.0.0-rc.3-alpha.x/ # v2.0.0-rc.3-alpha.x documentation
│   │                   ├── v2.0.0-rc.3-alpha.0/ # v2.0.0-rc.3-alpha.0 docs
│   │                   ├── v2.0.0-rc.3-alpha.1/ # v2.0.0-rc.3-alpha.1 docs
│   │                   └── v2.0.0-rc.3-alpha.2/ # v2.0.0-rc.3-alpha.2 docs
│   ├── index.md                  # Main documentation page
│   ├── releases.md               # Release documentation index
│   └── resources.md              # Development tools and resources
├── src/                          # TypeScript source code
│   ├── color/                    # Color utilities module
│   │   └── color_name/           # Color name functionality
│   │       ├── color-names.ts    # ColorNames class
│   │       └── index.ts          # Color name module exports
│   ├── discriminator/            # Type discrimination utilities
│   │   ├── discriminable.ts      # Discriminable interface
│   │   ├── discriminator.ts      # Discriminator class
│   │   ├── discriminators.ts     # Discriminators enum
│   │   └── index.ts              # Discriminator module exports
│   ├── map/                      # Map data structures
│   │   ├── index.ts              # Map module exports
│   │   └── string-map.ts         # StringMap class
│   ├── palette/                  # Color palette definitions
│   │   ├── palette.ts            # Palette interface
│   │   ├── all-palettes.ts       # ALL_PALETTES map
│   │   ├── index.ts              # Palette module exports
│   │   ├── nature/               # Nature palette collections
│   │   │   ├── index.ts          # Nature module exports
│   │   │   ├── nature-palettes.ts # NATURE_PALETTES map
│   │   │   └── california-wine-sunset-palette.ts # CALIFORNIA_WINE_SUNSET_PALETTE
│   │   └── pride/                # Pride palette collections
│   │       ├── index.ts          # Pride module exports
│   │       ├── pride-palettes.ts # PRIDE_PALETTES map
│   │       └── asexual-pride-palette.ts # ASEXUAL_PRIDE_PALETTE
│   ├── sketch/                   # Sketch and p5.js utilities
│   │   ├── index.ts              # Sketch module exports
│   │   ├── aspect_ratio/         # Aspect ratio functionality
│   │   │   ├── aspect-ratio-config.ts # AspectRatioConfig interface
│   │   │   ├── aspect-ratio.ts   # AspectRatio class
│   │   │   ├── aspect-ratios.ts  # ASPECT_RATIOS constant
│   │   │   └── index.ts          # Aspect ratio module exports
│   │   ├── context/              # Context management
│   │   │   ├── context-config-builder.ts # ContextConfigBuilder class
│   │   │   ├── context-config.ts # ContextConfig interface
│   │   │   ├── context.ts        # Context abstract class
│   │   │   ├── render-type.ts    # RenderType enum
│   │   │   └── index.ts          # Context module exports
│   │   ├── coordinate/           # Coordinate mapping utilities
│   │   │   ├── coordinate-ratio-mapper.ts # CoordinateRatioMapper class
│   │   │   └── index.ts          # Coordinate module exports
│   │   ├── graphics/             # Graphics context functionality
│   │   │   ├── graphics-context-handler.ts # GraphicsContextHandler class
│   │   │   ├── graphics-context.ts # GraphicsContext class
│   │   │   └── index.ts          # Graphics module exports
│   │   └── p5_context/           # P5.js context management
│   │       ├── index.ts          # P5Context module exports
│   │       └── p5-context.ts     # P5Context class
│   ├── palette_color/            # Palette color definitions
│   │   ├── palette-color.ts      # PaletteColor interface
│   │   ├── all-colors.ts         # ALL_PALETTE_COLORS map
│   │   ├── index.ts              # Palette color module exports
│   │   ├── black/                # Black color collection
│   │   │   ├── black-colors.ts   # BLACK_PALETTE_COLORS map
│   │   │   ├── index.ts          # Black colors module exports
│   │   │   └── pc-000000.ts      # PC_000000 color
│   │   ├── blue/                 # Blue color collection
│   │   │   ├── blue-colors.ts    # BLUE_PALETTE_COLORS map
│   │   │   ├── index.ts          # Blue colors module exports
│   │   │   └── pc-1e1a75.ts      # PC_1E1A75 color
│   │   ├── gray/                 # Gray color collection
│   │   │   ├── gray-colors.ts    # GRAY_PALETTE_COLORS map
│   │   │   ├── index.ts          # Gray colors module exports
│   │   │   └── pc-a3a3a3.ts      # PC_A3A3A3 color
│   │   ├── orange/               # Orange color collection
│   │   │   ├── index.ts          # Orange colors module exports
│   │   │   ├── orange-colors.ts  # ORANGE_PALETTE_COLORS map
│   │   │   ├── pc-ff704d.ts      # PC_FF704D color
│   │   │   └── pc_ffa852.ts      # PC_FFA852 color
│   │   ├── pink/                 # Pink color collection
│   │   │   ├── index.ts          # Pink colors module exports
│   │   │   ├── pc-9f1475.ts      # PC_9F1475 color
│   │   │   ├── pc-e13762.ts      # PC_E13762 color
│   │   │   └── pink-colors.ts    # PINK_PALETTE_COLORS map
│   │   ├── purple/               # Purple color collection
│   │   │   ├── index.ts          # Purple colors module exports
│   │   │   ├── pc-80007f.ts      # PC_80007F color
│   │   │   └── purple-colors.ts  # PURPLE_PALETTE_COLORS map
│   │   └── white/                # White color collection
│   │       ├── index.ts          # White colors module exports
│   │       ├── pc-ffffff.ts      # PC_FFFFFF color
│   │       └── white-colors.ts   # WHITE_PALETTE_COLORS map
│   ├── string/                   # String utility module
│   │   ├── index.ts              # Module exports
│   │   └── string-validator.ts   # StringValidator class
│   └── index.ts                  # Main library exports
├── tests/                        # Vitest unit tests
│   ├── color/                    # Color module tests
│   │   └── color_name/           # Color name tests
│   │       └── color-names.test.ts # ColorNames unit tests
│   ├── discriminator/            # Discriminator module tests
│   │   └── discriminators.test.ts # Discriminators enum tests
│   ├── palette_color/            # Palette color module tests
│   │   ├── all-colors.test.ts    # ALL_PALETTE_COLORS map tests
│   │   ├── black/                # Black colors tests
│   │   │   └── black-colors.test.ts # Black colors unit tests
│   │   ├── blue/                 # Blue colors tests
│   │   │   └── blue-colors.test.ts # Blue colors unit tests
│   │   ├── gray/                 # Gray colors tests
│   │   │   └── gray-colors.test.ts # Gray colors unit tests
│   │   ├── orange/               # Orange colors tests
│   │   │   └── orange-colors.test.ts # Orange colors unit tests
│   │   ├── pink/                 # Pink colors tests
│   │   │   └── pink-colors.test.ts # Pink colors unit tests
│   │   ├── purple/               # Purple colors tests
│   │   │   └── purple-colors.test.ts # Purple colors unit tests
│   │   └── white/                # White colors tests
│   │       └── white-colors.test.ts # White colors unit tests
│   ├── sketch/                   # Sketch module tests
│   │   ├── aspect_ratio/         # Aspect ratio tests
│   │   │   ├── aspect-ratio.test.ts # AspectRatio unit tests
│   │   │   └── aspect-ratios.test.ts # ASPECT_RATIOS constant tests
│   │   ├── context/              # Context tests
│   │   │   ├── context-config-builder.test.ts # ContextConfigBuilder tests
│   │   │   └── context.test.ts   # Context tests
│   │   ├── graphics/             # Graphics tests
│   │   │   ├── graphics-context-handler.test.ts # GraphicsContextHandler tests
│   │   │   └── graphics-context.test.ts # GraphicsContext tests
│   │   └── p5_context/           # P5Context tests
│   │       └── p5-context.test.ts # P5Context unit tests
│   ├── string/                   # String module tests
│   │   └── string-validator.test.ts # StringValidator unit tests
│   └── test_utils/               # Testing utilities
│       ├── index.ts              # Test utilities module exports
│       ├── map.ts                # StringMap testing utilities
│       ├── palette-color.ts      # PaletteColor testing utilities
│       └── palette-colors.ts     # Palette color collection utilities
├── typedoc/                      # TypeDoc styling files
│   └── style.css                 # Custom TypeDoc styling
├── .gitignore                    # Git ignore rules (includes build outputs, coverage, and Jekyll files)
├── .node-version                 # Node.js version specification (v24.11.1)
├── eslint.config.js.mjs          # ESLint configuration for JavaScript files
├── eslint.config.ts.mjs          # ESLint configuration for TypeScript files
├── LICENSE                       # MIT License
├── README.md                     # Project overview
├── package.json                  # NPM package configuration with build scripts
├── package-lock.json             # NPM dependency lock file
├── tsconfig.json                 # TypeScript compiler configuration
├── tsdown.config.ts              # Build tool configuration
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
- **Jekyll Collections**: Configured with palette colors and palettes collections
- **Color Pages**: Organized color documentation with luminance-based layouts
- **Palette Pages**: Organized palette documentation with name-based layouts
- **Custom Layouts**: Specialized layouts for displaying color and palette collections

## Package Information
- **Name**: @batpb/genart
- **Current Version**: 2.0.0-rc.3-alpha.2
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
- **@types/p5** - TypeScript type definitions for p5.js
- **p5** - p5.js library for creative coding
- **typescript** - TypeScript compiler and language support
- **tsdown** - Build tool for TypeScript packages  
- **ts-node** - TypeScript execution environment
- **tslib** - TypeScript runtime library
- **@types/nearest-color** - TypeScript type definitions for nearest-color
- **nearest-color** - Find the nearest named color from a given hex color
- **color-name-list** - A list of color names and their hex values (peer dependency)

### Documentation
- **typedoc** - TypeScript documentation generator
- **typedoc-plugin-coverage** - Coverage reporting for documentation

### Testing Infrastructure
- **vitest**: Fast unit testing framework with coverage reporting, outputs to `_coverage/`
- **@vitest/coverage-v8**: Coverage reporting with v8 provider
- **@vitest/ui**: Web UI for vitest testing
- **canvas**: HTML5 Canvas API implementation for Node.js (required for p5.js testing)
- **jsdom**: JavaScript implementation of web standards for testing
- **test_utils module**: Comprehensive testing utilities
  - `index.ts`: Test utilities module exports
  - `map.ts`: Testing utilities for StringMap class
  - `palette-color.ts`: Testing utilities for PaletteColor objects and collections
  - `palette-colors.ts`: Collection utilities for palette color testing

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
- `tsdown.config.ts` - Build configuration for multiple output formats
- `typedoc.json` - Documentation generation settings with custom styling (includes all modules: color, discriminator, map, palette, palette_color, sketch, string)
- `eslint.config.js.mjs` - ESLint rules for JavaScript configuration files
- `eslint.config.ts.mjs` - ESLint rules for TypeScript source code (updated to support imports for typedoc documentation links)
- `vitest.config.ts` - Testing configuration with coverage settings

## Current Limitations

### Alpha Development Status
- Project is in early alpha stage
- TypeScript compilation, build tools, and linting are set up and functional
- Documentation generation is configured with typedoc
- Vitest testing framework is configured and functional with comprehensive test coverage
- GitHub Actions workflows for CI/CD are implemented (codeql.yml, npm-build-test.yml, npm-deprecate.yml, npm-publish.yml)
- Build outputs (`_compiled/`, `_doc/`, `_dist/`) and test coverage (`_coverage/`) are ignored by `.gitignore`
- Jekyll build artifacts (`.jekyll-cache/`, `.sass-cache/`, `_site/`) are ignored by `.gitignore`
- May have breaking changes in future releases

### Library Content
- **`string` module**: StringValidator class for hex color validation
  - Supports `#RRGGBB`, `#RRGGBBAA`, `#rrggbb`, and `#rrggbbaa` hex color patterns
  - StringValidator class only accepts hex codes where all letters are in the same case (by design for consistency)
- **`color` module**: Color utility functionality
  - ColorNames class for color name operations
- **`discriminator` module**: Type discrimination utilities
  - Discriminators enum with PaletteColor and Palette discriminator values
  - Discriminable interface for objects that can be categorized by discriminator values
  - Discriminator class (static) for checking Discriminable objects to verify interface types
- **`map` module**: Data structure utilities
  - StringMap class for string-keyed maps
- **`sketch` module**: Sketch and p5.js utilities
  - **`aspect_ratio` submodule**: Aspect ratio configuration and management
    - AspectRatio class - Defines width-to-height ratio of canvas or graphics
    - AspectRatioConfig interface - Configuration for aspect ratios
    - ASPECT_RATIOS constant - Collection of predefined aspect ratios
  - **`context` submodule**: Rendering context management
    - Context abstract class - Base class for managing rendering contexts
    - ContextConfig interface - Configuration for rendering contexts
    - ContextConfigBuilder class - Builder pattern for creating context configurations
    - RenderType enum - Defines rendering modes (2D, WebGL)
  - **`coordinate` submodule**: Coordinate mapping utilities
    - CoordinateRatioMapper class - Maps coordinates between ratio and coordinate systems
  - **`graphics` submodule**: Graphics context functionality
    - GraphicsContext class - Manages p5.Graphics instances
    - GraphicsContextHandler class - Handles graphics context operations
  - **`p5_context` submodule**: P5.js context management
    - P5Context class - Manages p5.js context and canvas
    - Provides static access to p5.js instance
    - Methods for initializing, resetting, and checking p5.js context
- **`palette` module**: Color palette definitions and collections
  - Palette interface for color palette objects
  - ASEXUAL_PRIDE_PALETTE - Asexual pride flag color palette
  - CALIFORNIA_WINE_SUNSET_PALETTE - California wine sunset color palette
  - PRIDE_PALETTES map - Collection of pride flag palettes
  - NATURE_PALETTES map - Collection of nature palettes
  - GRADIENT_PALETTES map - Collection of gradient palettes
  - ALL_PALETTES map - Collection of all available palettes
- **`palette_color` module**: Individual color definitions and collections
  - PaletteColor interface for individual color objects
  - Individual colors: PC_000000, PC_A3A3A3, PC_FFFFFF, PC_80007F, PC_FFA852, PC_FF704D, PC_E13762, PC_9F1475, PC_1E1A75
  - ALL_PALETTE_COLORS map - Collection of all palette colors
  - BLACK_PALETTE_COLORS map - Collection of black palette colors
  - BLUE_PALETTE_COLORS map - Collection of blue palette colors
  - GRAY_PALETTE_COLORS map - Collection of gray palette colors
  - ORANGE_PALETTE_COLORS map - Collection of orange palette colors
  - PINK_PALETTE_COLORS map - Collection of pink palette colors
  - PURPLE_PALETTE_COLORS map - Collection of purple palette colors
  - WHITE_PALETTE_COLORS map - Collection of white palette colors

### Available Scripts
The following npm scripts are available:
- `npm run build` - Compiles TypeScript using tsdown (outputs to `_dist/`)
- `npm run docs` - Generates API documentation using typedoc (outputs to `_doc/`)
- `npm run lint:js` - Lints JavaScript configuration files with ESLint
- `npm run lint:ts` - Lints TypeScript source files with ESLint (includes tsdown.config.ts, vitest.config.ts, and tests directory)
- `npm run prepack` - Runs build automatically before packaging
- `npm test` - Runs vitest unit tests
- `npm run test:watch` - Runs vitest in watch mode for development
- `npm run test:ui` - Runs vitest with web UI interface
- `npm run test:coverage` - Runs vitest with coverage reporting (outputs to `_coverage/`)

## Development Guidelines

### Node.js Version
- Use Node.js v24.11.1 as specified in `.node-version`
- Check version before working: `node --version`

### Working with the Project
This project now has comprehensive TypeScript development infrastructure:
- Main development happens on the main branch
- TypeScript compilation configured with strict settings
- ESLint setup for both JavaScript config files and TypeScript source (supports imports for documentation links)
- Build process generates multiple formats (ESM, CJS, IIFE) with type definitions
- Documentation generation creates comprehensive API docs for all modules
- Vitest testing framework with comprehensive coverage and multiple test modes
- GitHub Actions workflows for CI/CD, security scanning, and publishing
- Code is organized in modules: `color`, `discriminator`, `map`, `palette`, `palette_color`, `sketch`, `string`
- The `sketch` module contains submodules: `aspect_ratio`, `context`, `coordinate`, `graphics`, `p5_context`
- Comprehensive color and palette system with discriminator-based type safety
- Jekyll-based documentation site with collections for colors and palettes
- Testing utilities in `test_utils` module for comprehensive unit testing

### Documentation Updates
- Jekyll site documentation in `docs/` directory  
- Update `docs/index.md` for main documentation changes
- Jekyll configuration in `docs/_config.yml`
- Release documentation organized in `docs/releases/`

### Build and Development Tools
- **TypeScript**: Configured with strict settings, outputs to `_compiled/`
- **tsdown**: Build tool that creates multiple output formats in `_dist/`
- **typedoc**: Documentation generator with coverage plugin, outputs to `_doc/`
- **ESLint**: Separate configurations for JS and TS files with comprehensive rules
- **vitest**: Fast unit testing framework with coverage reporting, outputs to `_coverage/`
- **GitHub Actions**: Automated CI/CD workflows for testing, security scanning, and publishing
- **Package exports**: Configured for proper module resolution in different environments

## Quick Reference Commands

**Setup new environment:**
```bash
nvm use 24.11.1        # Use correct Node.js version
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
node --version         # Verify Node.js version (should be v24.11.1)
npm run build          # Should build successfully
npm run docs           # Should generate docs
npm test               # Should run vitest tests and pass
```

**Work with documentation:**
```bash
cd docs/               # Navigate to Jekyll site
# Jekyll commands would go here if Jekyll is set up locally
```

This project now has comprehensive TypeScript development tooling including compilation, documentation generation, linting, and unit testing with vitest. GitHub Actions workflows provide automated CI/CD, security scanning, and npm publishing. The library includes a full color and palette system with type-safe discriminators, comprehensive testing utilities, and Jekyll-based documentation with color and palette collections. The build outputs are ignored by git but the development infrastructure is fully functional.
