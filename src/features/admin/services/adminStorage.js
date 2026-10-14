const STORAGE_KEY = 'stemnoid-admin-demo-v1';

export function readAdminState(fallback) {
  if (typeof window === 'undefined') return fallback;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return fallback;
    const parsed = JSON.parse(saved);
    return parsed && typeof parsed === 'object' ? { ...fallback, ...parsed } : fallback;
  } catch (error) {
    console.warn('STEMNOID admin demo storage could not be read.', error);
    return fallback;
  }
}

export function writeAdminState(state) {
  if (typeof window === 'undefined') return false;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.warn('STEMNOID admin demo storage could not be written.', error);
    return false;
  }
}

export function resetAdminState() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.warn('STEMNOID admin demo storage could not be reset.', error);
    return false;
  }
}

export const ADMIN_STORAGE_KEY = STORAGE_KEY;
