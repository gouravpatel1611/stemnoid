import { SectionHeading } from '../../../components/SectionHeading';
import { LectureCard } from '../components/LectureCard';
import { lectures } from '../../../data/lectures';
export function LecturesPage() {
  return <div className="container page-container"><div className="page-hero"><div className="eyebrow">Watch · Practice · Repeat</div><h1>Video lessons for <span>hands-on learning</span></h1><p>Learn at your own pace with practical demonstrations and clear explanations.</p></div><SectionHeading eyebrow="Lecture library" title="Latest lessons" description="Videos are embedded from YouTube. Your own links can be added when the admin backend is connected."/><div className="card-grid">{lectures.map((lecture) => <LectureCard key={lecture.id} lecture={lecture}/>)}</div></div>;
}