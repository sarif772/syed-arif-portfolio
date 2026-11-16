/**
 * Centralized API Base URL Configuration
 *
 * In local development: defaults to 'http://localhost:5000'
 * When deployed as full-stack (Render/Railway): defaults to '' (relative path)
 * When deployed separately (Frontend on Vercel/Netlify, Backend on Render):
 *   set VITE_API_URL=https://your-backend.onrender.com in deployment settings
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_URL !== undefined && import.meta.env.VITE_API_URL !== ''
    ? import.meta.env.VITE_API_URL.replace(/\/$/, '')
    : import.meta.env.PROD
    ? ''
    : 'http://localhost:5000';
