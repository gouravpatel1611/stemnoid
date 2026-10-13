
import { Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link
      className="brand"
      to="/"
      aria-label="STEMNOID home"
    >
       <span >
        <img
          src="/logo-icon.png"
          alt=""
          className="h-10 w-full object-contain"
        />
      </span>

      <span className="brand-name -ml-[115px]">
        STEM<span className="brand-accent">NOID</span>
      </span>
    </Link>
  );
}
