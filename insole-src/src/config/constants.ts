// Application constants
export const APP_CONFIG = {
  // Base path for the application (used in production)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/ashisuku-navi',
  
  // Helper to get the full public asset path
  getAssetPath: (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // In development, Next.js serves from root, in production from basePath
    return process.env.NODE_ENV === 'production' 
      ? `${APP_CONFIG.basePath}${cleanPath}` 
      : cleanPath;
  }
};