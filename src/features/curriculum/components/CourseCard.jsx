import { ArrowUpRight, BookOpen, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tag } from '../../../components/Tag';
export function CourseCard({ course }) {
  return <article className="content-card course-card"><Link className="card-image-link" to={`/courses/${course.slug}`}><img className="card-image" src={course.image} alt="" loading="lazy"/><span className="image-badge">Learning path</span></Link><div className="card-body"><Tag>{course.level}</Tag><h3><Link to={`/courses/${course.slug}`}>{course.title}</Link></h3><p>{course.subtitle}</p><div className="course-stats"><span><Layers3 size={14}/>{course.modules.length} modules</span><span><BookOpen size={14}/>{course.lessons} lessons</span></div><Link className="text-link" to={`/courses/${course.slug}`}>Explore course <ArrowUpRight size={14}/></Link></div></article>;
}