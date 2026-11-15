import {
  capabilities,
  command,
  hero,
  nav,
  reasons,
  site,
  system,
} from "@/site";

// Photos are pre-generated as WebP at two widths (see public/images),
// because a static export has no image optimisation server.
function Photo({
  name,
  alt,
  sizes,
  className,
  eager = false,
}: {
  name: string;
  alt: string;
  sizes: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${name}-1672.webp`}
      srcSet={`/images/${name}-960.webp 960w, /images/${name}-1672.webp 1672w`}
      sizes={sizes}
      alt={alt}
      width={1672}
      height={941}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
      {children}
    </p>
  );
}

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const mailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  "Briefing request",
)}`;

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur">
        <div className={`${container} flex h-16 items-center justify-between`}>
          <a href="#top" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mark-white.png"
              alt=""
              width={388}
              height={298}
              className="h-9 w-auto"
            />
            <span className="text-lg font-medium tracking-tight text-white">
              {site.name}
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-mist transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-sm bg-signal px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-strong"
          >
            Request a briefing
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
          <Photo
            name="hero-engagement"
            alt="Laser beam director engaging a small drone at dusk"
            sizes="100vw"
            eager
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/75 to-ink-950/10" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink-950 to-transparent" />

          <div className={`${container} pb-16 pt-32 sm:pb-24`}>
            <div className="max-w-2xl">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                {hero.body}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-sm bg-signal px-6 py-3 font-semibold text-ink-950 transition-colors hover:bg-signal-strong"
                >
                  Request a briefing
                </a>
                <a
                  href="#system"
                  className="rounded-sm border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  See the system
                </a>
              </div>
            </div>
            <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-300">
              {hero.keywords.map((word) => (
                <li key={word} className="flex items-center gap-3">
                  <span aria-hidden className="h-1.5 w-1.5 bg-signal" />
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="py-20 sm:py-28">
          <div className={container}>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From first detection to defeat, on one platform
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-sm border border-line bg-ink-900"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <Photo
                      name={item.image}
                      alt={item.alt}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-xs tracking-[0.2em] text-signal">
                      {item.step}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-mist">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* System */}
        <section
          id="system"
          className="border-y border-line bg-ink-900 py-20 sm:py-28"
        >
          <div
            className={`${container} grid items-center gap-12 lg:grid-cols-2`}
          >
            <div className="overflow-hidden rounded-sm border border-line">
              <Photo
                name={system.image}
                alt={system.alt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <Eyebrow>The system</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {system.title}
              </h2>
              <p className="mt-5 leading-7 text-mist">{system.body}</p>
              <ol className="mt-8 divide-y divide-line border-y border-line">
                {system.parts.map((part, index) => (
                  <li key={part.name} className="flex gap-5 py-4">
                    <span className="font-mono text-xs leading-7 text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{part.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-mist">
                        {part.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Command and control */}
        <section id="command" className="py-20 sm:py-28">
          <div
            className={`${container} grid items-center gap-12 lg:grid-cols-2`}
          >
            <div className="lg:order-2">
              <div className="overflow-hidden rounded-sm border border-line">
                <Photo
                  name={command.image}
                  alt={command.alt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <Eyebrow>Command &amp; control</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {command.title}
              </h2>
              <p className="mt-5 leading-7 text-mist">{command.body}</p>
              <ul className="mt-8 space-y-4">
                {command.points.map((point) => (
                  <li key={point} className="flex gap-4 text-slate-200">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-signal"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why */}
        <section
          id="why"
          className="border-y border-line bg-ink-900 py-20 sm:py-28"
        >
          <div className={container}>
            <Eyebrow>Why {site.name}</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for the economics of the drone threat
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="bg-ink-900 p-7">
                  <h3 className="text-lg font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-mist">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative isolate overflow-hidden">
          <Photo
            name="system-dusk"
            alt=""
            sizes="100vw"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-ink-950/80" />
          <div className={`${container} py-24 text-center sm:py-32`}>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Talk to us about protecting your site
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-200">
              We brief government, defence and critical infrastructure teams on
              the system and how it fits their air defence.
            </p>
            <a
              href={mailto}
              className="mt-9 inline-block rounded-sm bg-signal px-7 py-3.5 font-semibold text-ink-950 transition-colors hover:bg-signal-strong"
            >
              Request a briefing
            </a>
            <p className="mt-4 text-sm text-slate-300">
              or email{" "}
              <a href={mailto} className="underline underline-offset-4">
                {site.contactEmail}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-12">
        <div
          className={`${container} flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt={site.name}
            width={563}
            height={399}
            loading="lazy"
            className="h-24 w-auto"
          />
          <div className="text-sm text-mist sm:text-right">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="mt-1">
              Images are concept renderings and do not show fielded hardware.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
