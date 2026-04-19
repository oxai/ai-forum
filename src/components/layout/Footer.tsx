import { CREDITS, EVENT } from '@/content';

export function Footer() {
  return (
    <footer className="px-6 border-t border-white/10">

      <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="flex flex-col gap-4">
          <img
            src="/branding/oxai-full-logo.png"
            alt="OXAI Logo"
            className="h-16 md:h-20 w-auto object-contain mix-blend-screen opacity-70 self-start"
          />
          <h2 className="font-sans text-xl md:text-2xl font-normal tracking-tight text-white/80">
            {EVENT.name}
          </h2>
          <p className="font-mono text-xs tracking-widest text-white/30 max-w-xs leading-relaxed">
            {EVENT.tagline}
          </p>
          <a
            href={EVENT.venueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest text-turquoise/60 hover:text-turquoise transition-colors"
          >
            {EVENT.dateLabel}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 md:gap-20">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-white/30 text-xs tracking-widest mb-1">ENQUIRIES</span>
            <a
              href={`mailto:${CREDITS.contactEmail}`}
              className="font-mono text-sm tracking-widest text-white/70 hover:text-turquoise transition-colors"
            >
              {CREDITS.contactEmail}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-white/30 text-xs tracking-widest mb-1">WEBSITE DEVELOPED AND MAINTAINED BY</span>
            {CREDITS.websiteDevelopers.map((dev) =>
              dev.url ? (
                <a
                  key={dev.name}
                  href={dev.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm tracking-widest text-white/70 hover:text-turquoise transition-colors"
                >
                  {dev.name}
                </a>
              ) : (
                <span key={dev.name} className="font-mono text-sm tracking-widest text-white/70">{dev.name}</span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 py-8 flex flex-col items-center gap-3 text-center">
        <p className="font-mono text-xs tracking-widest text-white/30 max-w-2xl leading-relaxed">
          {CREDITS.acknowledgement.message}
        </p>
        {CREDITS.contributors.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {CREDITS.contributors.map((c) => (
              <span key={c.name} className="font-mono text-xs text-white/20 tracking-widest">
                {c.name}{c.role ? ` — ${c.role}` : ''}
              </span>
            ))}
          </div>
        )}
      </div>

    </footer>
  );
}
