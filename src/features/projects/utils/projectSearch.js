export function filterProjects(projects, query, category) {
  const normalized = query.trim().toLowerCase();
  return projects.filter((project) => {
    const matchesText = !normalized || `${project.title} ${project.summary} ${project.category}`.toLowerCase().includes(normalized);
    const matchesCategory = category === 'All projects' || project.category === category;
    return matchesText && matchesCategory;
  });
}