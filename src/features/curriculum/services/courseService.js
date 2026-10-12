import { courses } from '../../../data/courses';
// UI-first repository: replace this module with Firebase/API calls later.
export const courseService = {
  async getAll() { return courses; },
  async getBySlug(slug) { return courses.find((item) => item.slug === slug) || null; },
};