
import { Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link
      className="brand"
      to="/"
      aria-label="STEMNOID home"
    >
      <span className="brand-mark">
        <Cpu size={19} />
      </span>

      <span className="brand-name">
        STEM<span className="brand-accent">NOID</span>
      </span>
    </Link>
  );
}
