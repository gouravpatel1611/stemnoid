
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../features/home/pages/HomePage';

import { LearnPage } from '../features/curriculum/pages/LearnPage';
import { CoursesPage } from '../features/curriculum/pages/CoursesPage';
import { CourseDetailsPage } from '../features/curriculum/pages/CourseDetailsPage';

import { ProjectsPage } from '../features/projects/pages/ProjectsPage';
import { ProjectDetailsPage } from '../features/projects/pages/ProjectDetailsPage';

import { LecturesPage } from '../features/lectures/pages/LecturesPage';
import { LectureDetailsPage } from '../features/lectures/pages/LectureDetailsPage';

import { AdminPage } from '../features/admin/pages/AdminPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Learning */}
      <Route path="/learn" element={<LearnPage />} />

      {/* Courses */}
      <Route path="/courses" element={<CoursesPage />} />
      <Route
        path="/courses/:slug"
        element={<CourseDetailsPage />}
      />

      {/* Arduino Projects */}
      <Route path="/projects" element={<ProjectsPage />} />
      <Route
        path="/projects/:slug"
        element={<ProjectDetailsPage />}
      />

      {/* Video Lectures */}
      <Route path="/lectures" element={<LecturesPage />} />
      <Route
        path="/lectures/:slug"
        element={<LectureDetailsPage />}
      />

      {/* Creator Studio */}
      <Route path="/admin/*" element={<AdminPage />} />

      {/* Login redirect */}
      <Route
        path="/login"
        element={<Navigate to="/admin/login" replace />}
      />

      {/* Page not found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
