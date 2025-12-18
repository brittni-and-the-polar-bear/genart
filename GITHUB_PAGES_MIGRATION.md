# GitHub Pages Migration Guide

This document describes the migration from classic GitHub Pages deployment to the new GitHub Actions-based deployment workflow.

## What Changed

### Before (Classic Configuration)
- GitHub Pages was configured to deploy from a branch (typically `main` or `gh-pages`)
- The `docs/` folder was selected as the publishing source
- GitHub automatically built and deployed Jekyll sites on push

### After (GitHub Actions Workflow)
- GitHub Pages now uses a custom GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`)
- The workflow explicitly builds the npm package, generates TypeDoc documentation, builds the Jekyll site, and deploys to Pages
- This provides more control over the build process and allows for custom build steps

## The New Workflow

The workflow file `.github/workflows/jekyll-gh-pages.yml` performs the following steps:

### Build Job
1. **Checkout** - Checks out the repository code
2. **Setup Node.js** - Installs Node.js 24.x (matching project requirements)
3. **Install npm dependencies** - Runs `npm ci` to install packages
4. **Build TypeScript package** - Runs `npm run build` to compile TypeScript
5. **Generate TypeDoc documentation** - Runs `npm run docs` to generate API docs
6. **Copy TypeDoc output** - Copies `_doc/` to `docs/doc/` for Jekyll to include
7. **Setup Pages** - Configures GitHub Pages settings
8. **Build with Jekyll** - Builds the Jekyll site from `docs/` directory
9. **Upload artifact** - Uploads the built site as an artifact

### Deploy Job
1. **Deploy to GitHub Pages** - Deploys the artifact to GitHub Pages

## Required Repository Settings Change

**IMPORTANT**: After merging this PR, you must update the GitHub Pages configuration in the repository settings:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment** section:
   - Change **Source** from "Deploy from a branch" to **"GitHub Actions"**
4. Save the changes

Once this setting is changed, the workflow will automatically deploy to GitHub Pages on every push to the `main` branch, or it can be triggered manually from the Actions tab.

## Testing the Workflow

You can test the workflow in two ways:

1. **Automatic trigger**: Push changes to the `main` branch
2. **Manual trigger**: Go to Actions → "Deploy Jekyll site to Pages" → "Run workflow"

## Workflow Features

- **Automatic deployment**: Runs on every push to `main`
- **Manual deployment**: Can be triggered via workflow_dispatch
- **Concurrency control**: Only one deployment runs at a time
- **Proper permissions**: Configured with minimal required permissions
- **Node.js caching**: Uses npm cache for faster builds

## Benefits of This Approach

1. **Explicit build process**: All build steps are visible in the workflow
2. **Custom build steps**: Can add TypeDoc generation, linting, testing, etc.
3. **Better error visibility**: Build failures are shown in the Actions tab
4. **Version control**: Workflow changes are tracked in git
5. **Reproducible builds**: Same Node.js version and dependencies every time

## Troubleshooting

If the workflow fails:

1. Check the Actions tab for error messages
2. Verify that the repository has Pages enabled
3. Ensure the Pages source is set to "GitHub Actions"
4. Check that npm dependencies install correctly
5. Verify that `npm run build` and `npm run docs` work locally

## Related Files

- `.github/workflows/jekyll-gh-pages.yml` - The workflow file
- `docs/` - Jekyll site source
- `_doc/` - TypeDoc output (gitignored, generated during build)
- `docs/doc/` - Where TypeDoc output is copied for Jekyll (gitignored in production)
- `typedoc.json` - TypeDoc configuration
- `docs/_config.yml` - Jekyll configuration

## Migration Checklist

- [x] Create GitHub Actions workflow
- [x] Configure build steps for npm and TypeDoc
- [x] Configure Jekyll build step
- [x] Add deployment step
- [ ] Merge this PR to `main` branch
- [ ] Update repository settings: Settings → Pages → Source → "GitHub Actions"
- [ ] Verify first automatic deployment succeeds
- [ ] Test manual workflow dispatch (optional)
