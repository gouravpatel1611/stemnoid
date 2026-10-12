import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { SectionHeading } from '../../../components/SectionHeading';
import { EmptyState } from '../../../components/EmptyState';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../../../data/projects';
import { filterProjects } from '../utils/projectSearch';
const categories = ['All projects', ...new Set(projects.map((project) => project.category))];
export function ProjectsPage() {
  const [query, setQuery] = useState(''); const [category, setCategory] = useState('All projects');
  const filtered = useMemo(() => filterProjects(projects, query, category), [query, category]);
  return <div className="container page-container"><div className="page-hero"><div className="eyebrow">Project archive</div><h1>Ideas you can <span>build yourself</span></h1><p>Browse practical Arduino builds with parts lists, circuit references and source code.</p></div><SectionHeading eyebrow="The workbench" title="Find your next build" description={`${filtered.length} projects in this starter library.`}/><div className="project-toolbar"><label className="search-field"><Search size={17}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, sensors, LEDs..." aria-label="Search projects"/></label><label className="filter-field"><SlidersHorizontal size={16}/><select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">{categories.map((item) => <option key={item}>{item}</option>)}</select></label></div>{filtered.length ? <div className="card-grid">{filtered.map((project) => <ProjectCard key={project.id} project={project}/>)}</div> : <EmptyState title="No projects found" description="Try another keyword or choose a different category."/>}</div>;
}