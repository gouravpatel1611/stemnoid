import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BookOpen,
  ChevronDown,
  Code2,
  Home,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Menu,
  Moon,
  Share2,
  Sun,
  X,
  Youtube,
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/stemnoid?xtok=YWhvbG5xbzNyeGlq',
    icon: Instagram,
    className: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/stemnoid',
    icon: Linkedin,
    className: 'linkedin',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@stemnoid',
    icon: Youtube,
    className: 'youtube',
  },
];

const NAVIGATION_LINKS = [
  {
    label: 'Home',
    to: '/',
    icon: Home,
    end: true,
  },
  {
    label: 'Learn',
    to: '/learn',
    icon: BookOpen,
  },
  {
    label: 'Projects',
    to: '/projects',
    icon: Code2,
  },
  {
    label: 'Lectures',
    to: '/lectures',
    icon: Youtube,
  },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink
          className="brand"
          to="/"
          aria-label="STEMNOID home"
          onClick={closeMobileMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            <Code2 size={18} />
          </span>
          <span>STEMNOID</span>
        </NavLink>

        <nav
          id="main-navigation"
          className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          {NAVIGATION_LINKS.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              onClick={closeMobileMenu}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}

          <NavLink
            className="nav-admin-mobile"
            to="/admin"
            onClick={closeMobileMenu}
          >
            <LayoutDashboard size={16} aria-hidden="true" />
            <span>Creator Studio</span>
          </NavLink>

          <details className="social-menu">
            <summary
              className="social-menu-trigger"
              aria-label="Open STEMNOID social media links"
            >
              <Share2 size={16} aria-hidden="true" />
              <span>Follow us</span>
              <ChevronDown
                className="social-menu-chevron"
                size={15}
                aria-hidden="true"
              />
            </summary>

            <div className="social-menu-panel">
              <span className="social-menu-label">CONNECT WITH STEMNOID</span>

              {SOCIAL_LINKS.map(
                ({ label, href, icon: Icon, className }) => (
                  <a
                    key={label}
                    className={`social-menu-link ${className}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    aria-label={`Visit STEMNOID on ${label} (opens in a new tab)`}
                  >
                    <Icon size={17} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                ),
              )}
            </div>
          </details>
        </nav>

        <div className="header-actions">
          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Switch to light theme'
                : 'Switch to dark theme'
            }
          >
            {theme === 'dark' ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <NavLink
            className="creator-button button button-primary"
            to="/admin"
          >
            <span>Creator Studio</span>
            <LayoutDashboard size={16} aria-hidden="true" />
          </NavLink>

          <button
            className="menu-button"
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            {isMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}