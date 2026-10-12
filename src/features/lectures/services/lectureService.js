import { lectures } from '../../../data/lectures';
// UI-first repository: replace this module with Firebase/API calls later.
export const lectureService = {
  async getAll() { return lectures; },
  async getBySlug(slug) { return lectures.find((item) => item.slug === slug) || null; },
};