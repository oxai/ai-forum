import { Fragment, type SyntheticEvent } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { FACULTY } from '@/content';
import type { FacultyMember } from '@/types';

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

export function Faculty() {
  return (
    <section id="faculty" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="font-sans text-4xl md:text-6xl font-normal tracking-tighter mb-16 text-center text-turquoise">
          Featured Senior Participants
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {FACULTY.map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.1}>
            <div className="group flex flex-col gap-6">
              <div className="w-full aspect-square overflow-hidden rounded-sm bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-sans text-2xl font-normal mb-1">
                  {member.name}
                </h3>
                <div className="font-mono text-xs tracking-widest text-turquoise mb-4 uppercase">
                  {member.role}
                </div>
                <p className="text-white/70 font-light leading-relaxed">
                  {renderBio(member.bio)}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
