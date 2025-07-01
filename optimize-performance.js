/**
 * Website Performance Optimization Script
 * This script adds performance optimizations to HTML pages
 */

// Function to add lazy loading to images
function addLazyLoading(html) {
    // Skip images that are hero/above-the-fold (first image in hero section)
    const heroImagePattern = /<section[^>]*class="hero"[^>]*>[\s\S]*?<img([^>]*)>/;
    
    // Add loading="lazy" to all other images that don't already have it
    html = html.replace(/<img\s+([^>]*?)(?!loading=)([^>]*?)>/g, (match, attrs1, attrs2) => {
        // Check if this is a hero image
        if (heroImagePattern.test(html) && html.indexOf(match) < html.search(heroImagePattern) + 1000) {
            return match; // Skip hero images
        }
        
        // Check if image already has loading attribute
        if (match.includes('loading=')) {
            return match;
        }
        
        // Add lazy loading
        return `<img ${attrs1}${attrs2} loading="lazy">`;
    });
    
    return html;
}

// Function to add preload tags for critical resources
function addPreloadTags(html) {
    const preloadTags = `
    <!-- Preload critical resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Montserrat:wght@700;900&family=Inter:wght@300;400;600;700&display=swap" as="style">
    <link rel="preload" href="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=2000&q=80" as="image" type="image/jpeg">
    `;
    
    // Add preload tags after charset declaration
    html = html.replace(/(<meta charset="UTF-8">)/, `$1${preloadTags}`);
    
    return html;
}

// Function to optimize external scripts
function optimizeScripts(html) {
    // Add defer to non-critical scripts
    html = html.replace(/<script\s+([^>]*?)src="([^"]*)"([^>]*?)(?!defer|async)([^>]*?)>/g, (match, attrs1, src, attrs2, attrs3) => {
        // Skip inline scripts and JSON-LD
        if (match.includes('application/ld+json')) {
            return match;
        }
        
        // Add defer to external scripts
        return `<script ${attrs1}src="${src}"${attrs2}${attrs3} defer>`;
    });
    
    return html;
}

// Function to add cache control meta tags
function addCacheHeaders(html) {
    const cacheHeaders = `
    <!-- Cache control -->
    <meta http-equiv="Cache-Control" content="public, max-age=31536000">
    <meta http-equiv="Pragma" content="cache">
    `;
    
    // Add after viewport meta tag
    html = html.replace(/(<meta name="viewport"[^>]*>)/, `$1${cacheHeaders}`);
    
    return html;
}

// Function to optimize CSS loading
function optimizeCSSLoading(html) {
    // Find Google Fonts link and optimize it
    html = html.replace(
        /<link\s+href="(https:\/\/fonts\.googleapis\.com[^"]*)"[^>]*>/,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">\n    <noscript><link rel="stylesheet" href="$1"></noscript>'
    );
    
    return html;
}

// Main function to apply all optimizations
function optimizeHTML(html) {
    html = addPreloadTags(html);
    html = addLazyLoading(html);
    html = optimizeScripts(html);
    html = addCacheHeaders(html);
    html = optimizeCSSLoading(html);
    
    return html;
}

// Export for use in Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        optimizeHTML,
        addLazyLoading,
        addPreloadTags,
        optimizeScripts,
        addCacheHeaders,
        optimizeCSSLoading
    };
}

// Usage example:
// const fs = require('fs');
// const { optimizeHTML } = require('./optimize-performance.js');
// 
// const html = fs.readFileSync('index.html', 'utf8');
// const optimizedHTML = optimizeHTML(html);
// fs.writeFileSync('index-optimized.html', optimizedHTML);