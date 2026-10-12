import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tag } from '../../../components/Tag';
export function ProjectCard({ project }) {
  return <article className="content-card project-card"><Link className="card-image-link" to={`/projects/${project.slug}`}><img className="card-image" src={project.image} alt="" loading="lazy"/><span className="image-badge">{project.category}</span><span className="image-arrow"><ArrowUpRight size={17}/></span></Link><div className="card-body"><div className="card-meta"><Tag>{project.level}</Tag><span><Clock3 size={13}/>{project.duration}</span></div><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><Link className="text-link" to={`/projects/${project.slug}`}>View project <ArrowUpRight size={14}/></Link></div></article>;
}