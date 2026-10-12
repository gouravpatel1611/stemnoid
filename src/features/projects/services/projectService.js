import { projects } from '../../../data/projects';
// UI-first repository: replace this module with Firebase/API calls later.
export const projectService = {
  async getAll() { return projects; },
  async getBySlug(slug) { return projects.find((item) => item.slug === slug) || null; },
};