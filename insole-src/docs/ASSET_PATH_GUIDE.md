# Asset Path Guide for Next.js with basePath

## Problem
When deploying a Next.js app with a `basePath` configuration (e.g., `/ashisuku-navi`), static assets need to be referenced correctly to work both in development and production.

## Solution

### 1. For Images and Static Assets

Use the `APP_CONFIG.getAssetPath()` helper function:

```tsx
import { APP_CONFIG } from '@/config/constants';
import Image from 'next/image';

// For Next.js Image component
<Image 
  src={APP_CONFIG.getAssetPath("/images/hero-illustration.svg")}
  alt="Description"
  fill
/>

// For regular img tags (if needed)
<img 
  src={APP_CONFIG.getAssetPath("/images/logo.png")}
  alt="Logo"
/>
```

### 2. For Links

Next.js Link component automatically handles basePath:

```tsx
import Link from 'next/link';

// This works automatically with basePath
<Link href="/about">About</Link>
```

### 3. For External Scripts or Stylesheets

If you need to reference external assets in the HTML head:

```tsx
// In your component or layout
const assetPath = APP_CONFIG.getAssetPath("/styles/custom.css");
```

### 4. Configuration

The configuration is set in multiple places:

1. `next.config.ts` - Sets the actual basePath for Next.js
2. `src/config/constants.ts` - Provides the helper function
3. `.env` (optional) - Can override the default basePath

### Important Notes

- Always use absolute paths starting with `/` when calling `getAssetPath()`
- The favicon.ico in the app directory is automatically handled by Next.js
- For development, assets are served from the root `/`
- For production, assets are served from `/ashisuku-navi/`

### Testing

To test if images work correctly with basePath:

1. Build the project: `npm run build`
2. Serve the exported files with the basePath
3. Check that all images load correctly