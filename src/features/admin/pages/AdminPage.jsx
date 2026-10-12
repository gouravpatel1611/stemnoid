
import { useState } from 'react';

import {
  Activity,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  Code2,
  FilePlus2,
  LayoutDashboard,
  LogIn,
  LogOut,
  Plus,
  Settings2,
  ShieldAlert,
  Video,
  Youtube,
  Download,
  Users,
} from 'lucide-react';

import {
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import { projects } from '../../../data/projects';
import { lectures } from '../../../data/lectures';
import { courses } from '../../../data/courses';
import { slugify } from '../../../utils/slugify';

const YOUTUBE_URL = 'https://www.youtube.com/@stemnoid';

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-side-label">WORKSPACE</div>

      <NavLink to="/admin" end>
        <LayoutDashboard size={16} />
        Overview
      </NavLink>

      <NavLink to="/admin/projects">
        <Code2 size={16} />
        Projects & Code
      </NavLink>

      <NavLink to="/admin/lectures">
        <Video size={16} />
        Video Lectures
      </NavLink>

      <NavLink to="/admin/courses">
        <BookOpen size={16} />
        Learning Paths
      </NavLink>

      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noreferrer"
      >
        <Youtube size={16} />
        YouTube Channel
        <ArrowUpRight size={13} />
      </a>

      <div className="admin-side-label side-label-lower">
        FUTURE FEATURES
      </div>

      <div className="admin-side-note">
        <Users size={17} />

        <span>
          <b>Multiple Admins</b>
          <small>
            Admin accounts and permissions require a secure backend.
          </small>
        </span>
      </div>

      <div className="admin-side-note">
        <Download size={17} />

        <span>
          <b>Notes & Resources</b>
          <small>
            File uploads and downloads will be connected later.
          </small>
        </span>
      </div>

      <Link to="/">
        <LogOut size={16} />
        Back to website
      </Link>
    </aside>
  );
}

function AdminOverview() {
  return (
    <>
      <div className="admin-page-title">
        <div>
          <div className="eyebrow">STEMNOID CREATOR STUDIO</div>

          <h1>Build. Publish. Inspire.</h1>

          <p>
            Manage STEM learning content, Arduino projects,
            video lectures, and learning paths.
          </p>
        </div>

        <span className="prototype-pill">
          <span />
          Prototype mode
        </span>
      </div>

      <div className="admin-stat-grid">
        <div className="admin-stat">
          <span className="admin-stat-icon blue">
            <Code2 size={18} />
          </span>

          <small>Projects</small>
          <strong>{projects.length}</strong>
          <span>Local demo entries</span>
        </div>

        <div className="admin-stat">
          <span className="admin-stat-icon purple">
            <Video size={18} />
          </span>

          <small>Video lectures</small>
          <strong>{lectures.length}</strong>
          <span>Local demo entries</span>
        </div>

        <div className="admin-stat">
          <span className="admin-stat-icon green">
            <BookOpen size={18} />
          </span>

          <small>Learning paths</small>
          <strong>{courses.length}</strong>
          <span>Local demo entries</span>
        </div>

        <div className="admin-stat">
          <span className="admin-stat-icon orange">
            <Activity size={18} />
          </span>

          <small>Backend</small>
          <strong>Off</strong>
          <span>Not connected</span>
        </div>
      </div>

      <div className="admin-content-grid">
        <section className="admin-panel">
          <div className="admin-panel-head">
            <div>
              <h2>Quick actions</h2>
              <p>Open a content management section.</p>
            </div>

            <Settings2 size={18} />
          </div>

          <div className="admin-action-list">
            <Link to="/admin/projects">
              <span className="admin-action-icon">
                <Code2 size={18} />
              </span>

              <span>
                <b>Manage projects</b>
                <small>
                  Add Arduino code, components, and circuit details.
                </small>
              </span>

              <ArrowUpRight size={16} />
            </Link>

            <Link to="/admin/lectures">
              <span className="admin-action-icon">
                <Youtube size={18} />
              </span>

              <span>
                <b>Manage video lectures</b>
                <small>
                  Prepare YouTube lessons and learning descriptions.
                </small>
              </span>

              <ArrowUpRight size={16} />
            </Link>

            <Link to="/admin/courses">
              <span className="admin-action-icon">
                <BookOpen size={18} />
              </span>

              <span>
                <b>Manage learning paths</b>
                <small>
                  Organise topics and course modules.
                </small>
              </span>

              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section className="admin-panel">
          <div className="admin-panel-head">
            <div>
              <h2>Publishing checklist</h2>
              <p>Current development status.</p>
            </div>

            <CircleHelp size={18} />
          </div>

          <ul className="admin-checklist">
            <li>
              <CheckCircle2 size={16} />
              Responsive website
              <span>Done</span>
            </li>

            <li>
              <CheckCircle2 size={16} />
              Dark and white themes
              <span>Done</span>
            </li>

            <li>
              <Activity size={16} />
              Real content saving
              <span>Pending</span>
            </li>

            <li>
              <Activity size={16} />
              Admin authentication
              <span>Pending</span>
            </li>

            <li>
              <Activity size={16} />
              Multiple admin permissions
              <span>Pending</span>
            </li>

            <li>
              <Activity size={16} />
              PDF and image uploads
              <span>Pending</span>
            </li>
          </ul>
        </section>
      </div>

      <section className="admin-panel">
        <div className="admin-panel-head">
          <div>
            <h2>STEMNOID YouTube</h2>

            <p>
              Open your channel to review or share published lessons.
            </p>
          </div>

          <Youtube size={20} />
        </div>

        <a
          className="button button-primary"
          href={YOUTUBE_URL}
          target="_blank"
          rel="noreferrer"
        >
          Visit YouTube channel
          <ArrowUpRight size={16} />
        </a>
      </section>
    </>
  );
}

function ContentManager({ type }) {
  const isProject = type === 'project';
  const isLecture = type === 'lecture';

  const title = isProject
    ? 'Projects & Code'
    : isLecture
      ? 'Video Lectures'
      : 'Learning Paths';

  const rows = isProject
    ? projects.map((item) => ({
        title: item.title,
        subtitle: item.category,
        slug: item.slug,
      }))
    : isLecture
      ? lectures.map((item) => ({
          title: item.title,
          subtitle: item.category,
          slug: item.slug,
        }))
      : courses.map((item) => ({
          title: item.title,
          subtitle: `${item.modules.length} modules`,
          slug: item.slug,
        }));

  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    title: '',
    url: '',
    category: '',
  });

  function updateForm(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function submit(event) {
    event.preventDefault();

    // This is only a preview. Data is not persisted yet.
    setSaved(true);
    setShowForm(false);

    setForm({
      title: '',
      url: '',
      category: '',
    });
  }

  return (
    <>
      <div className="admin-page-title">
        <div>
          <div className="eyebrow">CONTENT LIBRARY</div>

          <h1>{title}</h1>

          <p>
            Review existing entries and preview the content workflow.
          </p>
        </div>

        <button
          type="button"
          className="button button-primary"
          onClick={() => {
            setShowForm((current) => !current);
            setSaved(false);
          }}
        >
          <Plus size={16} />

          {isProject
            ? 'Add project'
            : isLecture
              ? 'Add lecture'
              : 'Add learning path'}
        </button>
      </div>

      {saved && (
        <div className="form-notice">
          <CheckCircle2 size={16} />

          Preview submitted successfully. The entry was not saved
          because the backend is not connected.
        </div>
      )}

      {showForm && (
        <form
          className="admin-panel admin-form"
          onSubmit={submit}
        >
          <div className="admin-panel-head">
            <div>
              <h2>
                New{' '}
                {isProject
                  ? 'project'
                  : isLecture
                    ? 'lecture'
                    : 'learning path'}
              </h2>

              <p>
                Preview form only. Submitted data is not stored.
              </p>
            </div>

            <FilePlus2 size={18} />
          </div>

          <label>
            Title

            <input
              required
              value={form.title}
              onChange={(event) =>
                updateForm('title', event.target.value)
              }
              placeholder={
                isProject
                  ? 'e.g. Smart Dustbin'
                  : isLecture
                    ? 'e.g. Arduino Basics'
                    : 'e.g. Robotics Foundations'
              }
            />
          </label>

          <label>
            Category

            <input
              value={form.category}
              onChange={(event) =>
                updateForm('category', event.target.value)
              }
              placeholder="Basics, Sensors, Robotics..."
            />
          </label>

          {isLecture && (
            <label>
              YouTube URL or video ID

              <input
                required
                value={form.url}
                onChange={(event) =>
                  updateForm('url', event.target.value)
                }
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </label>
          )}

          {isProject && (
            <label>
              Project slug preview

              <input
                value={slugify(form.title)}
                readOnly
                placeholder="Generated from title"
              />
            </label>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>

            <button
              className="button button-primary"
              type="submit"
            >
              Preview submit
            </button>
          </div>
        </form>
      )}

      <section className="admin-panel admin-table-panel">
        <div className="admin-panel-head">
          <div>
            <h2>Current content</h2>

            <p>
              {rows.length} entries from local data files.
            </p>
          </div>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Slug</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.slug}>
                  <td>
                    <b>{row.title}</b>
                  </td>

                  <td>{row.subtitle}</td>

                  <td>
                    <code>{row.slug}</code>
                  </td>

                  <td>
                    <span className="status-draft">
                      Demo data
                    </span>
                  </td>
                </tr>
              ))}

              {rows.length === 0 && (
                <tr>
                  <td colSpan="4">
                    No entries available yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  return (
    <div className="admin-login-wrap">
      <form
        className="admin-login-card"
        onSubmit={(event) => {
          event.preventDefault();

          // Preview only. This does not authenticate the user.
          navigate('/admin');
        }}
      >
        <div className="admin-login-icon">
          <LogIn size={22} />
        </div>

        <div className="eyebrow">STEMNOID CREATOR STUDIO</div>

        <h1>Welcome back</h1>

        <p>
          This login is a UI preview. Real account verification
          has not been connected yet.
        </p>

        <label>
          Email

          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Password

          <input
            type="password"
            required
            minLength={4}
            placeholder="Enter 4 or more characters"
          />
        </label>

        <button
          className="button button-primary button-full"
          type="submit"
        >
          Preview dashboard
          <ArrowUpRight size={15} />
        </button>

        <div className="login-warning">
          <ShieldAlert size={15} />

          Do not use this preview as real account security.
        </div>
      </form>
    </div>
  );
}

export function AdminPage() {
  return (
    <div className="container admin-container">
      <div className="admin-topbar">
        <Link className="admin-breadcrumb" to="/admin">
          <span className="admin-brand-dot">
            <Code2 size={15} />
          </span>

          STEMNOID

          <span>/</span>

          <small>Creator Studio</small>
        </Link>

        <span className="prototype-pill">
          <span />
          Prototype
        </span>
      </div>

      <div className="admin-layout">
        <AdminSidebar />

        <div className="admin-main">
          <Routes>
            <Route index element={<AdminOverview />} />

            <Route path="login" element={<AdminLogin />} />

            <Route
              path="projects"
              element={<ContentManager type="project" />}
            />

            <Route
              path="lectures"
              element={<ContentManager type="lecture" />}
            />

            <Route
              path="courses"
              element={<ContentManager type="course" />}
            />

            <Route
              path="*"
              element={<AdminOverview />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
