// API Configuration
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Backend API URL
export const API_BASE_URL = isDevelopment
  ? '/api' // Use proxy in development (vite.config.ts)
  : 'https://w-b-1-93g9.onrender.com/api'; // Production backend URL

// Full API URL helper
export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};

// Export for use in components
export default {
  API_BASE_URL,
  getApiUrl,
};

