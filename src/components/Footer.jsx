
import { ArrowUpRight, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Logo />
          <p>Explore technology. Build with curiosity.</p>
          <a
            className="footer-youtube"
            href="https://www.youtube.com/@stemnoid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={15} />
            Subscribe on YouTube
          </a>
        </div>

        <div className="footer-links">
          <Link to="/learn">Learning Paths</Link>
          <Link to="/projects">Arduino Projects</Link>
          <Link to="/lectures">Video Lectures</Link>
          <Link to="/admin">
            Creator Studio <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} STEMNOID</span>
        <span>Learn · Build · Innovate</span>
      </div>
    </footer>
  );
}
