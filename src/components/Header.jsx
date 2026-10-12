
import {
  Menu,
  X,
  Search,
  Youtube,
  BookOpen,
  Code2,
  LayoutDashboard,
  Home,
} from 'lucide-react';

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/learn', label: 'Learn', icon: BookOpen },
  { to: '/projects', label: 'Projects', icon: Code2 },
  { to: '/lectures', label: 'Lectures', icon: Youtube },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo: Logo component already contains its own Link */}
        <div className="header-brand" onClick={closeMenu}>
          <Logo />
        </div>

        <nav
          id="main-navigation"
          className={`main-nav ${open ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}

          <Link
            className="nav-admin-mobile"
            to="/admin"
            onClick={closeMenu}
          >
            <LayoutDashboard size={16} />
            <span>Creator Studio</span>
          </Link>

          <a
            className="nav-youtube-mobile"
            href="https://www.youtube.com/@stemnoid"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <Youtube size={16} />
            <span>YouTube Channel</span>
          </a>
        </nav>

        <div className="header-actions">
          <Link
            className="icon-button search-shortcut"
            to="/projects"
            aria-label="Browse projects"
            title="Browse projects"
            onClick={closeMenu}
          >
            <Search size={17} />
          </Link>

          <ThemeToggle />

          <Link
            className="button button-primary creator-button"
            to="/admin"
            onClick={closeMenu}
          >
            <span>Creator Studio</span>
            <LayoutDashboard size={16} />
          </Link>

          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
