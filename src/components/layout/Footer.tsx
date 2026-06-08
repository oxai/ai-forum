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

        <div className="flex flex-col gap-2">
          <span className="font-mono text-white/30 text-xs tracking-widest mb-1">ENQUIRIES</span>
          <a
            href={`mailto:${CREDITS.contactEmail}`}
            className="font-mono text-sm tracking-widest text-white/70 hover:text-turquoise transition-colors"
          >
            {CREDITS.contactEmail}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
        <div className="md:flex-1 text-center md:text-left">
          <span className="block font-mono text-white/30 text-[0.65rem] tracking-widest mb-1">{CREDITS.website.initialDesign.role}</span>
          {CREDITS.website.initialDesign.url ? (
            <a
              href={CREDITS.website.initialDesign.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-white/50 hover:text-turquoise transition-colors"
            >
              {CREDITS.website.initialDesign.name}
            </a>
          ) : (
            <span className="font-mono text-xs tracking-widest text-white/50">{CREDITS.website.initialDesign.name}</span>
          )}
        </div>

        <p className="md:flex-[2] font-mono text-xs tracking-widest text-white/30 max-w-2xl mx-auto leading-relaxed text-center">
          {CREDITS.acknowledgement.message}
        </p>

        <div className="md:flex-1 text-center md:text-right">
          <span className="block font-mono text-white/30 text-[0.65rem] tracking-widest mb-1">{CREDITS.website.development.role}</span>
          {CREDITS.website.development.url ? (
            <a
              href={CREDITS.website.development.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-white/50 hover:text-turquoise transition-colors"
            >
              {CREDITS.website.development.name}
            </a>
          ) : (
            <span className="font-mono text-xs tracking-widest text-white/50">{CREDITS.website.development.name}</span>
          )}
        </div>
      </div>

      {CREDITS.contributors.length > 0 && (
        <div className="max-w-7xl mx-auto pb-8 flex flex-wrap justify-center gap-4">
          {CREDITS.contributors.map((c) => (
            <span key={c.name} className="font-mono text-xs text-white/20 tracking-widest">
              {c.name}{c.role ? ` — ${c.role}` : ''}
            </span>
          ))}
        </div>
      )}

    </footer>
  );
}
