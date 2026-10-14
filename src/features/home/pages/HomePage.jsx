
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  PlayCircle,
  Sparkles,
  Terminal,
  Wrench,
  GraduationCap,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import { SectionHeading } from '../../../components/SectionHeading';
import { ProjectCard } from '../../projects/components/ProjectCard';
import { LectureCard } from '../../lectures/components/LectureCard';
import { CourseCard } from '../../curriculum/components/CourseCard';

import { projects } from '../../../data/projects';
import { lectures } from '../../../data/lectures';
import { courses } from '../../../data/courses';

const quickLinks = [
  {
    icon: Code2,
    title: 'Arduino Projects',
    text: 'Projects with code and circuit explanations.',
    to: '/projects',
    tone: 'blue',
  },
  {
    icon: PlayCircle,
    title: 'Video Lectures',
    text: 'Learn step by step with practical videos.',
    to: '/lectures',
    tone: 'purple',
  },
  {
    icon: CircuitBoard,
    title: 'Learn STEM',
    text: 'Explore guided lessons and technology topics.',
    to: '/learn',
    tone: 'green',
  },
];

const learningAreas = [
  {
    icon: CircuitBoard,
    title: 'Arduino & Electronics',
    description:
      'Understand circuits, components, sensors, and Arduino programming through hands-on projects.',
    tone: 'blue',
    to: '/projects',
  },
  {
    icon: Bot,
    title: 'Robotics & Automation',
    description:
      'Explore motors, movement, sensors, and the building blocks of intelligent machines.',
    tone: 'purple',
    to: '/learn',
  },
  {
    icon: Cpu,
    title: 'AI & IoT',
    description:
      'Discover connected devices, smart systems, and the technologies shaping our future.',
    tone: 'green',
    to: '/learn',
  },
  {
    icon: Download,
    title: 'Notes & Resources',
    description:
      'Keep useful learning materials, code references, and project resources together.',
    tone: 'orange',
    to: '/lectures',
  },
];

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={14} />
            Welcome to STEMNOID
          </div>

          <h1>
            Imagine it.
            <br />
            <span>Build it with STEM.</span>
          </h1>

          <p className="hero-description">
            Your hands-on learning space for Arduino, electronics,
            robotics, AI, and IoT. Explore practical projects, understand
            the code, and turn your ideas into real-world creations.
          </p>

          <div className="hero-actions">
            <Link
              className="button button-primary button-large"
              to="/projects"
            >
              Explore projects
              <ArrowUpRight size={17} />
            </Link>

            <Link
              className="button button-ghost button-large"
              to="/learn"
            >
              <GraduationCap size={18} />
              Explore STEM
            </Link>
          </div>

          <div className="hero-note">
            <span className="online-dot" />
            Learn by building
            <span className="note-divider" />
            Create. Experiment. Innovate.
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-glow" />

          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1100&q=90"
              alt="Electronics prototyping and STEM project workspace"
            />

            <div className="hero-image-shade" />

            <div className="floating-code">
              <div className="code-window-top">
                <span />
                <span />
                <span />
                <small>blink.ino</small>
              </div>

              <pre>
                <span className="code-purple">void</span>{' '}
                <span className="code-blue">setup</span>() {'{'}
                {'\n'}
                {'  '}pinMode(LED_BUILTIN, OUTPUT);
                {'\n'}
                {'}'}
                {'\n\n'}
                <span className="code-purple">void</span>{' '}
                <span className="code-blue">loop</span>() {'{'}
                {'\n'}
                {'  '}digitalWrite(LED_BUILTIN, HIGH);
                {'\n'}
                {'  '}delay(1000);
                {'\n'}
                {'}'}
              </pre>
            </div>

            <div className="hero-chip">
              <span className="chip-icon">
                <Terminal size={16} />
              </span>

              <span>
                <b>Code. Build. Repeat.</b>
                <small>Powered by curiosity</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links container">
        {quickLinks.map(({ icon: Icon, ...item }) => (
          <Link
            className="quick-link"
            key={item.title}
            to={item.to}
          >
            <span className={`quick-icon tone-${item.tone}`}>
              <Icon size={20} />
            </span>

            <span className="quick-copy">
              <b>{item.title}</b>
              <small>{item.text}</small>
            </span>

            <ArrowUpRight className="quick-arrow" size={17} />
          </Link>
        ))}
      </section>

      {/* Projects */}
      <section className="section container">
        <SectionHeading
          eyebrow="Learn by doing"
          title="Explore Arduino projects"
          description="Start with simple circuits and gradually build your skills with practical electronics projects and code."
          action={
            <Link className="text-link" to="/projects">
              All projects <ArrowRight size={15} />
            </Link>
          }
        />

        {projects.length > 0 ? (
          <div className="card-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p>No projects are available yet. Check back soon!</p>
        )}
      </section>

      {/* Learning Areas */}
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Discover technology"
            title="Explore your STEM interests"
            description="Choose an area, explore its fundamentals, and develop your skills through experimentation."
          />

          <div className="card-grid">
            {learningAreas.map(({ icon: Icon, ...area }) => (
              <Link
                className="quick-link"
                key={area.title}
                to={area.to}
              >
                <span className={`quick-icon tone-${area.tone}`}>
                  <Icon size={21} />
                </span>

                <span className="quick-copy">
                  <b>{area.title}</b>
                  <small>{area.description}</small>
                </span>

                <ArrowUpRight
                  className="quick-arrow"
                  size={17}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section container">
        <SectionHeading
          eyebrow="Build your foundation"
          title="Follow a learning path"
          description="Develop your understanding step by step, from the basics to more advanced concepts."
          action={
            <Link className="text-link" to="/courses">
              All courses <ArrowRight size={15} />
            </Link>
          }
        />

        {courses.length > 0 ? (
          <div className="card-grid">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p>Learning paths will be added soon.</p>
        )}
      </section>

      {/* YouTube Lectures */}
      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Watch. Understand. Create."
            title="Learn with video lectures"
            description="Follow practical explanations and demonstrations to understand how projects work."
            action={
              <Link className="text-link" to="/lectures">
                All lectures <ArrowRight size={15} />
              </Link>
            }
          />

          {lectures.length > 0 ? (
            <div className="card-grid">
              {lectures.slice(0, 3).map((lecture) => (
                <LectureCard key={lecture.id} lecture={lecture} />
              ))}
            </div>
          ) : (
            <p>New video lessons will be added soon.</p>
          )}

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://www.youtube.com/@stemnoid"
              target="_blank"
              rel="noreferrer"
            >
              <PlayCircle size={17} />
              Visit STEMNOID on YouTube
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section container">
        <div className="cta-panel">
          <div className="cta-orbit orbit-one" />
          <div className="cta-orbit orbit-two" />

          <div className="cta-content">
            <div className="eyebrow">
              <Wrench size={14} />
              Your next idea starts here
            </div>

            <h2>
              Don't just learn technology.
              <br />
              <span>Build something with it.</span>
            </h2>

            <p>
              Choose a project, study the code, follow the lesson,
              and bring your own ideas to life with STEMNOID.
            </p>

            <div className="hero-actions">
              <Link
                className="button button-primary"
                to="/projects"
              >
                Start building
                <ArrowUpRight size={16} />
              </Link>

              <Link
                className="button button-ghost"
                to="/learn"
              >
                Explore learning paths
                <ArrowDownRight size={16} />
              </Link>
            </div>
          </div>

          <CircuitBoard
            className="cta-art"
            size={160}
            strokeWidth={0.7}
          />
        </div>
      </section>
    </>
  );
}
