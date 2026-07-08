// ============================================================
// Authentication Utilities
// WARNING: Demo authentication only. Replace with Supabase
// or proper auth in production.
// ============================================================

import { AdminUser } from '@/lib/types';

/** Demo credentials - NOT for production use */
export const DEMO_CREDENTIALS = {
  email: 'admin@whiteniledev.org',
  password: 'demo12345',
} as const;

/** The demo admin user returned on successful login */
const DEMO_USER: AdminUser = {
  id: 'demo-admin-001',
  email: DEMO_CREDENTIALS.email,
  name: 'Admin User',
  role: 'admin',
};

const AUTH_STORAGE_KEY = 'wnd_auth_user';

/**
 * Attempt to log in with email and password.
 * Returns the user object on success, null on failure.
 */
export function login(email: string, password: string): AdminUser | null {
  if (
    email === DEMO_CREDENTIALS.email &&
    password === DEMO_CREDENTIALS.password
  ) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(DEMO_USER));
    }
    return DEMO_USER;
  }
  return null;
}

/**
 * Log out the current user by clearing stored auth data.
 */
export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

/**
 * Check if a user is currently authenticated.
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AUTH_STORAGE_KEY) !== null;
}

/**
 * Get the currently authenticated user, or null if not logged in.
 */
export function getUser(): AdminUser | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as AdminUser;
  } catch {
    return null;
  }
}
