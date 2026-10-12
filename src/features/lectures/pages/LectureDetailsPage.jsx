import { ArrowLeft, ExternalLink, PlayCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { lectures } from '../../../data/lectures';
import { getYouTubeEmbedUrl } from '../../../utils/youtube';
export function LectureDetailsPage() {
  const { slug } = useParams(); const lecture = lectures.find((item) => item.slug === slug);
  if (!lecture) return <div className="container page-container"><h1>Lecture not found</h1><Link to="/lectures">Back to lectures</Link></div>;
  const embedUrl = getYouTubeEmbedUrl(lecture.videoId);
  return <div className="container page-container"><Link className="back-link" to="/lectures"><ArrowLeft size={15}/> All lectures</Link><div className="page-hero lecture-detail-hero"><div className="eyebrow"><PlayCircle size={14}/> {lecture.category}</div><h1>{lecture.title}</h1><p>{lecture.description}</p></div><div className="video-frame video-frame-large">{embedUrl ? <iframe src={embedUrl} title={lecture.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/> : <div className="video-placeholder">YouTube video will appear here.</div>}</div><div className="lecture-below"><div><div className="eyebrow">Lesson notes</div><h2>Learn by doing</h2><p>Pause the video as you work, recreate the circuit, and test the code step by step. Add your own notes and circuit diagrams to this lesson when the content management system is connected.</p></div><a className="button button-secondary" href={`https://www.youtube.com/watch?v=${lecture.videoId}`} target="_blank" rel="noreferrer">Open on YouTube <ExternalLink size={15}/></a></div></div>;
}