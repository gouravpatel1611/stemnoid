import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { projects as sourceProjects } from '../../../data/projects';
import { lectures as sourceLectures } from '../../../data/lectures';
import { courses as sourceCourses } from '../../../data/courses';
import { readAdminState, resetAdminState, writeAdminState } from '../services/adminStorage';

const AdminDataContext = createContext(null);
const clone = (value) => JSON.parse(JSON.stringify(value));
const initialCategories = [...new Set(sourceProjects.map((item) => item.category).filter(Boolean))].sort();
const initialMedia = sourceProjects.filter((item) => item.image).map((item, index) => ({
  id: `media-${index + 1}`, name: `${item.slug || 'project'}-cover`, url: item.image, type: 'image', usedBy: item.title,
}));
const defaults = {
  projects: clone(sourceProjects),
  categories: initialCategories.map((name, index) => ({ id: `cat-${index + 1}`, name, description: 'Arduino learning projects' })),
  media: initialMedia,
  settings: { siteName: 'STEMNOID', tagline: 'Build. Learn. Innovate.', homepageTitle: 'Explore STEM through projects', primaryColor: '#3b82f6', youtubeUrl: 'https://www.youtube.com/@stemnoid' },
  profile: { name: 'STEMNOID Admin', email: 'admin@stemnoid.local', role: 'Administrator', bio: 'Manage STEM learning content and Arduino projects.' },
  activity: [],
};

function createId(prefix = 'item') {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function AdminDataProvider({ children }) {
  const [state, setState] = useState(() => readAdminState(defaults));
  const [storageWarning, setStorageWarning] = useState(false);

  useEffect(() => {
    setStorageWarning(!writeAdminState(state));
  }, [state]);

  const recordActivity = useCallback((label) => {
    setState((current) => ({
      ...current,
      activity: [{ id: createId('activity'), label, at: new Date().toISOString() }, ...(current.activity || [])].slice(0, 8),
    }));
  }, []);

  const saveProject = useCallback((project) => {
    setState((current) => {
      const exists = current.projects.some((item) => item.id === project.id);
      const next = exists
        ? current.projects.map((item) => item.id === project.id ? { ...item, ...project } : item)
        : [{ ...project, id: project.id || createId('project') }, ...current.projects];
      return { ...current, projects: next, activity: [{ id: createId('activity'), label: `${exists ? 'Updated' : 'Added'} project: ${project.title}`, at: new Date().toISOString() }, ...(current.activity || [])].slice(0, 8) };
    });
  }, []);

  const deleteProject = useCallback((id) => {
    setState((current) => {
      const project = current.projects.find((item) => item.id === id);
      return { ...current, projects: current.projects.filter((item) => item.id !== id), activity: [{ id: createId('activity'), label: `Deleted project: ${project?.title || id}`, at: new Date().toISOString() }, ...(current.activity || [])].slice(0, 8) };
    });
  }, []);

  const saveCategory = useCallback((category) => {
    setState((current) => {
      const exists = current.categories.some((item) => item.id === category.id);
      return { ...current, categories: exists ? current.categories.map((item) => item.id === category.id ? category : item) : [...current.categories, { ...category, id: category.id || createId('cat') }] };
    });
  }, []);

  const deleteCategory = useCallback((id) => setState((current) => ({ ...current, categories: current.categories.filter((item) => item.id !== id) })), []);
  const addMedia = useCallback((item) => setState((current) => ({ ...current, media: [{ ...item, id: createId('media') }, ...current.media] })), []);
  const deleteMedia = useCallback((id) => setState((current) => ({ ...current, media: current.media.filter((item) => item.id !== id) })), []);
  const updateSettings = useCallback((settings) => setState((current) => ({ ...current, settings: { ...current.settings, ...settings } })), []);
  const updateProfile = useCallback((profile) => setState((current) => ({ ...current, profile: { ...current.profile, ...profile } })), []);

  const resetDemo = useCallback(() => {
    resetAdminState();
    setState(clone(defaults));
  }, []);

  const value = useMemo(() => ({
    ...state,
    lectures: sourceLectures,
    courses: sourceCourses,
    storageWarning,
    saveProject,
    deleteProject,
    saveCategory,
    deleteCategory,
    addMedia,
    deleteMedia,
    updateSettings,
    updateProfile,
    resetDemo,
    recordActivity,
  }), [state, storageWarning, saveProject, deleteProject, saveCategory, deleteCategory, addMedia, deleteMedia, updateSettings, updateProfile, resetDemo, recordActivity]);

  return <AdminDataContext.Provider value={value}>{children}</AdminDataContext.Provider>;
}

export function useAdminData() {
  const context = useContext(AdminDataContext);
  if (!context) throw new Error('useAdminData must be used inside AdminDataProvider');
  return context;
}
