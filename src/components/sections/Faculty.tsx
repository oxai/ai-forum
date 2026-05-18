import { Fragment, useEffect, useRef, useState, type SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { FadeIn } from '@/components/ui/FadeIn';
import { FACULTY } from '@/content';
import type { FacultyMember } from '@/types';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function renderBio(bio: FacultyMember['bio']) {
  return bio.map((fragment, index) => {
    if (typeof fragment === 'string') {
      return <Fragment key={index}>{fragment}</Fragment>;
    }
    return (
      <span key={index} className="text-white font-normal">
        {fragment.highlight}
      </span>
    );
  });
}

function renderRole(role: string) {
  return role.split('; ').map((line) => <div key={line}>{line}</div>);
}

/**
 * Replace a broken image with a neutral "Image Pending" placeholder instead
 * of showing the default broken-image icon.
 */
function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  const parent = img.parentElement;
  if (!parent) return;
  img.style.display = 'none';
  parent.dataset.placeholder = 'true';
  const span = document.createElement('span');
  span.className = 'flex h-full items-center justify-center font-mono text-xs tracking-widest uppercase text-white/50';
  span.textContent = 'Image Pending';
  parent.appendChild(span);
}

function FacultyModal({ member, onClose }: { member: FacultyMember; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="faculty-modal-name"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="relative flex h-[640px] max-h-[85vh] w-full max-w-4xl flex-col rounded-sm border border-white/10 bg-rich-black outline-none"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
      >
        <div className="flex items-start gap-6 p-6 sm:gap-8 sm:p-10 sm:pb-6">
          <div className="h-32 w-32 shrink-0 overflow-hidden rounded-sm bg-white/5 sm:h-44 sm:w-44">
            <motion.img
              src={member.image}
              alt={member.name}
              onError={handleImageError}
              className="h-full w-full object-cover"
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 id="faculty-modal-name" className="font-sans text-2xl font-normal mb-2 sm:text-3xl">
              {member.name}
            </h3>
            <div className="font-mono text-xs tracking-widest text-turquoise uppercase">
              {renderRole(member.role)}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="group/close shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors duration-200 hover:border-turquoise hover:text-turquoise focus-visible:border-turquoise focus-visible:text-turquoise focus-visible:outline-none"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-200 group-hover/close:rotate-90"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <motion.div
          className="scrollbar-turquoise flex-1 overflow-y-auto border-t border-white/10 px-6 py-6 sm:px-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12, ease: EASE_OUT }}
        >
          <p className="text-white/70 font-light leading-relaxed whitespace-pre-line">
            {renderBio(member.bio)}
          </p>
        </motion.div>
      </motion.div>
    </div>,
    document.body,
  );
}

function FacultyCard({ member, onOpen }: { member: FacultyMember; onOpen: () => void }) {
  return (
    <div className="group flex flex-col gap-6">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${member.name}'s profile`}
        className="block w-full aspect-square overflow-hidden rounded-sm bg-white/5 cursor-pointer"
      >
        <img
          src={member.image}
          alt={member.name}
          onError={handleImageError}
          className="w-full h-full object-cover grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
        />
      </button>
      <div>
        <h3 className="font-sans text-2xl font-normal mb-1">
          {member.name}
        </h3>
        <div className="font-mono text-xs tracking-widest text-turquoise uppercase">
          {renderRole(member.role)}
        </div>
      </div>
    </div>
  );
}

export function Faculty() {
  const [activeMember, setActiveMember] = useState<FacultyMember | null>(null);

  return (
    <section id="faculty" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="font-sans text-4xl md:text-6xl font-normal tracking-tighter mb-16 text-center text-turquoise">
          Featured Senior Participants
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {FACULTY.map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.1}>
            <FacultyCard member={member} onOpen={() => setActiveMember(member)} />
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {activeMember && (
          <FacultyModal member={activeMember} onClose={() => setActiveMember(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
