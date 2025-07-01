# Image Optimization Guide

## Overview
This guide provides best practices for optimizing images on the Ronshoal website to improve page loading speed and user experience.

## Current Image Analysis
Based on the analysis of `/images` directory:
- Largest images: 
  - workplace-office.jpg (413KB)
  - ai-circuit.jpg (296KB)
  - hero-medical.jpg (254KB)
- Most images are between 59KB - 217KB
- Total image weight: ~2.2MB

## Recommended Image Sizes

### Hero/Banner Images
- **Dimensions**: 1920x1080px (desktop), 1200x800px (mobile)
- **File size**: < 200KB
- **Format**: JPEG (quality 80-85%) or WebP

### Content Images
- **Dimensions**: 800x600px (max)
- **File size**: < 100KB
- **Format**: JPEG (quality 75-80%) or WebP

### Thumbnail Images
- **Dimensions**: 400x300px
- **File size**: < 50KB
- **Format**: JPEG (quality 70-75%) or WebP

### Icons/Logos
- **Dimensions**: As needed, but provide 2x versions for retina
- **File size**: < 20KB
- **Format**: SVG (preferred) or PNG

## Image Compression Tools

### Online Tools (Free)
1. **TinyPNG** (https://tinypng.com/)
   - Excellent for PNG and JPEG compression
   - Maintains visual quality while reducing file size

2. **Squoosh** (https://squoosh.app/)
   - Google's image compression tool
   - Supports WebP conversion
   - Advanced options for quality control

3. **Compressor.io** (https://compressor.io/)
   - Simple drag-and-drop interface
   - Supports multiple formats

### Desktop Applications
1. **ImageOptim** (Mac)
   - Free, open-source
   - Batch processing capability

2. **FileOptimizer** (Windows)
   - Free, supports many formats
   - Batch processing

3. **Adobe Photoshop**
   - Export for Web feature
   - Fine control over quality settings

## Best Practices

### 1. Choose the Right Format
- **JPEG**: Best for photographs and images with many colors
- **PNG**: Best for images with transparency or few colors
- **WebP**: Modern format with better compression (30% smaller than JPEG)
- **SVG**: Best for logos, icons, and simple graphics

### 2. Responsive Images
Use different image sizes for different screen sizes:
```html
<picture>
  <source media="(max-width: 768px)" srcset="image-mobile.jpg">
  <source media="(max-width: 1200px)" srcset="image-tablet.jpg">
  <img src="image-desktop.jpg" alt="Description" loading="lazy">
</picture>
```

### 3. Lazy Loading
Already implemented on the site. Images below the fold use `loading="lazy"` attribute.

### 4. Image Dimensions
Always specify width and height to prevent layout shift:
```html
<img src="image.jpg" width="800" height="600" alt="Description" loading="lazy">
```

### 5. Alt Text
Always include descriptive alt text for accessibility and SEO.

## Optimization Workflow

1. **Before Upload**:
   - Resize image to maximum required dimensions
   - Compress using one of the tools above
   - Convert to WebP if possible

2. **Target File Sizes**:
   - Hero images: < 200KB
   - Content images: < 100KB
   - Thumbnails: < 50KB

3. **Quality Settings**:
   - JPEG: 75-85% quality
   - PNG: Use PNG-8 when possible
   - WebP: 75-85% quality

## Performance Impact

Optimizing images can:
- Reduce page load time by 50-70%
- Improve Core Web Vitals scores
- Reduce bandwidth costs
- Improve mobile user experience

## Implementation Checklist

- [ ] Compress all existing images over 200KB
- [ ] Convert large PNGs to JPEG/WebP where appropriate
- [ ] Implement responsive images for different screen sizes
- [ ] Add width/height attributes to prevent layout shift
- [ ] Use lazy loading for below-the-fold images
- [ ] Consider using a CDN for image delivery
- [ ] Regular audit of new images being added

## Monitoring

Regularly check image performance using:
- Google PageSpeed Insights
- Chrome DevTools Network tab
- WebPageTest.org

## Next Steps

1. **Immediate**: Compress the largest images (workplace-office.jpg, ai-circuit.jpg, hero-medical.jpg)
2. **Short-term**: Convert images to WebP format with JPEG fallback
3. **Long-term**: Implement a CDN and automated image optimization pipeline