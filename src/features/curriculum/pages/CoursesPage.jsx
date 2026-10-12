import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SectionHeading } from '../../../components/SectionHeading';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../../../data/courses';
export function CoursesPage() {
  return <div className="container page-container"><Link className="back-link" to="/learn"><ArrowLeft size={15}/> Back to curriculum</Link><div className="page-hero"><div className="eyebrow">Structured learning</div><h1>Courses built for <span>curious makers</span></h1><p>Follow modules in order, practice each skill, and turn small wins into bigger builds.</p></div><SectionHeading eyebrow="Learning paths" title="Choose your next course" description="Course content is demo data for now and can be connected to a database later."/><div className="card-grid">{courses.map((course) => <CourseCard key={course.id} course={course}/>)}</div></div>;
}