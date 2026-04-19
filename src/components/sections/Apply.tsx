import { Button } from '@/components/ui/Button';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { FadeIn } from '@/components/ui/FadeIn';
import { EVENT } from '@/content';

export function Apply() {
  return (
    <section id="apply" className="py-16 md:py-24 px-6 max-w-3xl mx-auto">
      <FadeIn>
        <div className="mb-24 text-center">
          <h2 className="font-sans text-5xl md:text-7xl font-normal tracking-tighter mb-8 text-turquoise">
            Get Your Ticket
          </h2>
          <p className="text-white/70 text-xl font-light">
            Limited to {EVENT.maxAttendees} attendees. Secure your place among researchers, builders, and institutional leaders shaping the future of AI.
          </p>
          <div className="mt-8 border border-turquoise/30 px-8 py-6 flex flex-col items-center gap-4 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rich-black px-4 font-mono text-xs tracking-widest text-turquoise whitespace-nowrap">
              EARLY BIRD — DISCOUNTED PRICE — ENDS 24 APRIL
            </span>
            <CountdownTimer targetIso={EVENT.earlyBirdDeadlineIso} size="sm" hideSeconds />
          </div>
        </div>

        <div className="relative flex justify-center">
          <Button
            href={EVENT.applyFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
            variant="primary"
          >
            {EVENT.applyCtaText}
          </Button>
        </div>

        <div className="mt-32 pt-16 border-t border-white/10 text-center">
          <h3 className="font-sans text-4xl font-normal tracking-tighter mb-6">
            We Hope to See You There!
          </h3>
          <p className="font-mono text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Europe&rsquo;s next technological chapter will not be written by
            isolated actors. We invite you to help shape it with us.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
