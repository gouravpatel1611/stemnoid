
import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Clipboard,
  Clock3,
  Code2,
  Download,
  ExternalLink,
  Lightbulb,
  ListChecks,
  PlayCircle,
  Wrench,
  CircuitBoard,
  AlertTriangle,
  Image as ImageIcon,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getYouTubeEmbedUrl } from '../../../utils/youtube';
import { projects } from '../../../data/projects';

function SectionTitle({ icon: Icon, title, description }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
        <Icon size={19} />
      </div>

      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1120] text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <Code2 size={16} />
          sketch.ino
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800"
        >
          {copied ? <Check size={14} /> : <Clipboard size={14} />}
          {copied ? 'Copied' : 'Copy code'}
        </button>
      </div>

      <pre className="max-h-[560px] overflow-auto p-4 text-[13px] leading-6 sm:p-5 sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function WiringDiagram({ project }) {
  const wires = project.wiringTable || [];

  const wireColors = [
    'bg-red-400',
    'bg-amber-400',
    'bg-emerald-400',
    'bg-sky-400',
    'bg-violet-400',
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white">
          <CircuitBoard size={17} className="text-indigo-500" />
          Circuit connection overview
        </div>

        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800 dark:bg-amber-400/10 dark:text-amber-300">
          Demo diagram
        </span>
      </div>

      <div className="overflow-x-auto p-4 sm:p-6">
        <div className="mx-auto grid min-w-[300px] max-w-2xl grid-cols-[1fr_44px_1fr] items-stretch gap-2 sm:gap-4">
          <div className="flex min-h-28 flex-col justify-center rounded-xl border-2 border-indigo-300 bg-indigo-50 p-3 dark:border-indigo-500/40 dark:bg-indigo-500/10 sm:p-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
              Controller
            </span>

            <strong className="mt-2 text-sm text-slate-900 dark:text-white">
              Arduino Uno
            </strong>

            <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Digital / analog pins
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            {wires.slice(0, 5).map((wire, index) => (
              <div
                key={`${wire.arduinoPin}-${index}`}
                className={`h-1 w-full rounded-full ${wireColors[index]}`}
              />
            ))}
          </div>

          <div className="flex min-h-28 flex-col justify-center rounded-xl border-2 border-emerald-300 bg-emerald-50 p-3 dark:border-emerald-500/40 dark:bg-emerald-500/10 sm:p-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
              Circuit
            </span>

            <strong className="mt-2 text-sm text-slate-900 dark:text-white">
              {project.title}
            </strong>

            <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Connected components
            </span>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-slate-50 p-3 dark:bg-slate-900">
          <p className="mb-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            Connections preview
          </p>

          <div className="space-y-2">
            {wires.map((wire, index) => (
              <div
                key={`${wire.arduinoPin}-${wire.componentPin}-${index}`}
                className="grid grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] items-center gap-2 text-xs"
              >
                <span className="rounded-lg bg-white px-2 py-2 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {wire.arduinoPin}
                </span>

                <ArrowRight size={15} className="mx-auto text-slate-400" />

                <span className="rounded-lg bg-white px-2 py-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {wire.componentPin}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 text-xs leading-5 text-amber-700 dark:text-amber-300">
          UI preview only. Verify pin assignments, power requirements and
          component polarity before building the real circuit.
        </p>
      </div>
    </div>
  );
}

function ProjectTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table className="w-full min-w-[500px] border-collapse text-left text-sm">
        <thead className="bg-slate-100 dark:bg-slate-800/80">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-t border-slate-200 dark:border-slate-800"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 align-top leading-6 text-slate-600 dark:text-slate-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionCard({ children, id }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-7"
    >
      {children}
    </section>
  );
}

export function ProjectDetailsPage() {
  const { slug } = useParams();

  /*
   * Keep Tailwind dark: classes synchronized with the existing
   * ThemeContext data-theme attribute. ThemeContext is unchanged.
   */
  useEffect(() => {
    const root = document.documentElement;

    const syncTheme = () => {
      const currentTheme = root.dataset.theme;

      root.classList.toggle('dark', currentTheme === 'dark');
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Project not found
          </h1>

          <Link
            to="/projects"
            className="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:underline dark:text-indigo-400"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const components = project.components || [];
  const sections = project.sections || [];
  const steps = project.steps || [];
  const wiringTable = project.wiringTable || [];
  const troubleshooting = project.troubleshooting || [];
  const faqs = project.faqs || [];
  const images = project.images || [];

  const videoUrl = project.videoId
    ? getYouTubeEmbedUrl(project.videoId)
    : null;

  const toc = [
    { id: 'overview', title: 'Overview' },
    ...(project.objectives?.length
      ? [{ id: 'learning', title: 'Learning objectives' }]
      : []),
    ...(components.length
      ? [{ id: 'components', title: 'Components' }]
      : []),
    ...(wiringTable.length
      ? [{ id: 'wiring', title: 'Wiring diagram' }]
      : []),
    ...sections.map((section, index) => ({
      id: `topic-${index}`,
      title: section.title,
    })),
    ...(project.code ? [{ id: 'code', title: 'Arduino code' }] : []),
    ...(steps.length ? [{ id: 'steps', title: 'Build guide' }] : []),
    ...(project.workingPrinciple
      ? [{ id: 'working', title: 'How it works' }]
      : []),
    ...(images.length ? [{ id: 'gallery', title: 'Gallery' }] : []),
    ...(troubleshooting.length
      ? [{ id: 'troubleshooting', title: 'Troubleshooting' }]
      : []),
    ...(faqs.length ? [{ id: 'faqs', title: 'FAQs' }] : []),
    ...(videoUrl ? [{ id: 'video', title: 'Video tutorial' }] : []),
  ];

  const previous = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const next =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 pb-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
        >
          <ArrowLeft size={16} />
          Project archive
        </Link>

        <header className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                  {project.category}
                </span>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  {project.level}
                </span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={16} className="text-indigo-500" />
                  {project.duration}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Wrench size={16} className="text-indigo-500" />
                  {components.length} components
                </span>

                <span className="inline-flex items-center gap-2">
                  <BookOpen size={16} className="text-indigo-500" />
                  Tutorial guide
                </span>
              </div>
            </div>

            {project.image && (
              <div className="min-h-64 bg-slate-200 dark:bg-slate-800 lg:min-h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full min-h-64 w-full object-cover lg:min-h-[360px]"
                />
              </div>
            )}
          </div>
        </header>

        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_290px]">
          <main className="min-w-0 space-y-6">
            <SectionCard id="overview">
              <SectionTitle
                icon={BookOpen}
                title="Project overview"
                description="Understand the project before you start building."
              />

              <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                <p>{project.introduction || project.summary}</p>
              </div>

              {project.objectives?.length > 0 && (
                <div id="learning" className="mt-6">
                  <h3 className="mb-3 font-bold text-slate-900 dark:text-white">
                    What you will learn
                  </h3>

                  <ul className="space-y-3">
                    {project.objectives.map((objective, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-emerald-500"
                        />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </SectionCard>

            {components.length > 0 && (
              <SectionCard id="components">
                <SectionTitle
                  icon={Wrench}
                  title="Components required"
                  description="Gather all the parts before starting the build."
                />

                <ProjectTable
                  headers={['Component', 'Quantity', 'Purpose']}
                  rows={components.map((component) => {
                    const item =
                      typeof component === 'string'
                        ? { name: component }
                        : component;

                    return [
                      item.name,
                      item.quantity ?? 1,
                      item.purpose || '—',
                    ];
                  })}
                />
              </SectionCard>
            )}

            {wiringTable.length > 0 && (
              <SectionCard id="wiring">
                <SectionTitle
                  icon={CircuitBoard}
                  title="Wiring diagram"
                  description="Review the connection overview and pin mapping."
                />

                <WiringDiagram project={project} />

                <h3 className="mb-3 mt-7 font-bold text-slate-900 dark:text-white">
                  Wiring connections table
                </h3>

                <ProjectTable
                  headers={['Arduino pin', 'Component pin', 'Details']}
                  rows={wiringTable.map((wire) => [
                    wire.arduinoPin,
                    wire.componentPin,
                    wire.description || '—',
                  ])}
                />
              </SectionCard>
            )}

            {sections.map((section, index) => (
              <SectionCard key={index} id={`topic-${index}`}>
                <SectionTitle icon={BookOpen} title={section.title} />

                <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                  {(section.paragraphs || []).map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets?.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.image && (
                  <figure className="mt-5">
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      loading="lazy"
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-800"
                    />

                    {section.caption && (
                      <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {section.note && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
                    <Lightbulb size={18} className="mt-1 shrink-0" />
                    <p>{section.note}</p>
                  </div>
                )}
              </SectionCard>
            ))}

            {project.code && (
              <SectionCard id="code">
                <SectionTitle
                  icon={Code2}
                  title="Arduino code"
                  description="Copy the sketch and open it in Arduino IDE."
                />

                {project.codeDescription && (
                  <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.codeDescription}
                  </p>
                )}

                <CodeBlock code={project.code} />

                {project.codeNotes?.length > 0 && (
                  <div className="mt-6">
                    <h3 className="mb-3 font-bold text-slate-900 dark:text-white">
                      Code explanation
                    </h3>

                    <ul className="space-y-3">
                      {project.codeNotes.map((note, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                            {index + 1}
                          </span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </SectionCard>
            )}

            {steps.length > 0 && (
              <SectionCard id="steps">
                <SectionTitle
                  icon={ListChecks}
                  title="Step-by-step build guide"
                  description="Follow these steps in order."
                />

                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <article key={index} className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {step.description}
                        </p>

                        {step.image && (
                          <img
                            src={step.image}
                            alt={step.imageAlt || step.title}
                            loading="lazy"
                            className="mt-4 w-full rounded-xl border border-slate-200 dark:border-slate-800"
                          />
                        )}

                        {step.tip && (
                          <p className="mt-3 rounded-lg bg-indigo-50 p-3 text-sm leading-6 text-indigo-800 dark:bg-indigo-500/10 dark:text-indigo-200">
                            Tip: {step.tip}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </SectionCard>
            )}

            {project.workingPrinciple && (
              <SectionCard id="working">
                <SectionTitle icon={Lightbulb} title="How it works" />

                <div className="whitespace-pre-line text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                  {project.workingPrinciple}
                </div>
              </SectionCard>
            )}

            {images.length > 0 && (
              <SectionCard id="gallery">
                <SectionTitle icon={ImageIcon} title="Project gallery" />

                <div className="grid gap-4 sm:grid-cols-2">
                  {images.map((image, index) => (
                    <figure key={index}>
                      <img
                        src={image.src}
                        alt={image.alt || project.title}
                        loading="lazy"
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-800"
                      />

                      {image.caption && (
                        <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </SectionCard>
            )}

            {troubleshooting.length > 0 && (
              <SectionCard id="troubleshooting">
                <SectionTitle
                  icon={AlertTriangle}
                  title="Troubleshooting"
                  description="Common issues and things to check."
                />

                <div className="space-y-4">
                  {troubleshooting.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
                    >
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {item.problem}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}

            {faqs.length > 0 && (
              <SectionCard id="faqs">
                <SectionTitle
                  icon={BookOpen}
                  title="Frequently asked questions"
                />

                <div className="divide-y divide-slate-200 dark:divide-slate-800">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group py-4">
                      <summary className="cursor-pointer list-none font-semibold text-slate-800 marker:hidden dark:text-slate-100">
                        <span className="flex items-center justify-between gap-4">
                          {faq.question}
                          <span className="text-xl text-indigo-500 transition group-open:rotate-45">
                            +
                          </span>
                        </span>
                      </summary>

                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </SectionCard>
            )}

            {videoUrl && (
              <SectionCard id="video">
                <SectionTitle
                  icon={PlayCircle}
                  title="Video tutorial"
                  description="Watch the practical demonstration."
                />

                <div className="aspect-video overflow-hidden rounded-2xl bg-slate-950">
                  <iframe
                    src={videoUrl}
                    title={`${project.title} video`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </SectionCard>
            )}

            <div className="flex items-stretch justify-between gap-3">
              {previous ? (
                <Link
                  to={`/projects/${previous.slug}`}
                  className="flex max-w-[49%] items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900"
                >
                  <ArrowLeft size={17} className="shrink-0 text-indigo-500" />

                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                      Previous project
                    </span>

                    <strong className="mt-1 block break-words text-sm text-slate-800 dark:text-white">
                      {previous.title}
                    </strong>
                  </span>
                </Link>
              ) : (
                <span />
              )}

              {next && (
                <Link
                  to={`/projects/${next.slug}`}
                  className="ml-auto flex max-w-[49%] items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-right transition hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                      Next project
                    </span>

                    <strong className="mt-1 block break-words text-sm text-slate-800 dark:text-white">
                      {next.title}
                    </strong>
                  </span>

                  <ArrowRight size={17} className="shrink-0 text-indigo-500" />
                </Link>
              )}
            </div>
          </main>

          <aside className="space-y-5 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <ListChecks size={18} className="text-indigo-500" />
                On this page
              </div>

              <nav className="mt-4 space-y-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <Wrench size={18} className="text-indigo-500" />
                Components checklist
              </div>

              <ul className="mt-4 space-y-3">
                {components.map((component, index) => {
                  const name =
                    typeof component === 'string'
                      ? component
                      : component.name;

                  return (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm leading-5 text-slate-600 dark:text-slate-300"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />
                      <span>{name}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="my-5 border-t border-slate-200 dark:border-slate-800" />

              <h3 className="font-bold text-slate-900 dark:text-white">
                Before uploading
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Verify the wiring, board selection and serial settings before
                running the sketch.
              </p>

              <button
                type="button"
                onClick={() => window.print()}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Download size={16} />
                Print project notes
              </button>

              <Link
                to="/projects"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                <ExternalLink size={16} />
                Browse all projects
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
