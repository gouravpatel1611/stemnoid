import { ArrowUpRight, Play, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
export function LectureCard({ lecture }) {
  return <article className="content-card lecture-card"><Link className="card-image-link" to={`/lectures/${lecture.slug}`}><img className="card-image" src={lecture.image} alt="" loading="lazy"/><span className="play-float"><Play size={18} fill="currentColor"/></span><span className="duration-badge">{lecture.duration}</span></Link><div className="card-body"><div className="eyebrow">{lecture.category}</div><h3><Link to={`/lectures/${lecture.slug}`}>{lecture.title}</Link></h3><p>{lecture.description}</p><Link className="text-link" to={`/lectures/${lecture.slug}`}>Watch lesson <ArrowUpRight size={14}/></Link></div></article>;
}