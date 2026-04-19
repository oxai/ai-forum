/**
 * Decorative fixed-position SVG background: a sparse constellation of
 * connected dots with a soft turquoise glow on two of the nodes.
 */
export function NetworkBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none opacity-20"
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#32FFB6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#32FFB6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
          <line x1="10%" y1="20%" x2="30%" y2="40%" />
          <line x1="30%" y1="40%" x2="60%" y2="15%" />
          <line x1="60%" y1="15%" x2="85%" y2="35%" />
          <line x1="85%" y1="35%" x2="70%" y2="70%" />
          <line x1="70%" y1="70%" x2="40%" y2="85%" />
          <line x1="40%" y1="85%" x2="15%" y2="60%" />
          <line x1="15%" y1="60%" x2="30%" y2="40%" />
          <line x1="30%" y1="40%" x2="70%" y2="70%" />
          <line x1="15%" y1="60%" x2="10%" y2="20%" />
          <line x1="85%" y1="35%" x2="95%" y2="10%" />
          <line x1="40%" y1="85%" x2="50%" y2="100%" />
        </g>
        <g fill="#fff">
          <circle cx="10%" cy="20%" r="3" />
          <circle cx="30%" cy="40%" r="4" />
          <circle cx="60%" cy="15%" r="5" fill="url(#glow)" />
          <circle cx="60%" cy="15%" r="2" />
          <circle cx="85%" cy="35%" r="3" />
          <circle cx="70%" cy="70%" r="4" />
          <circle cx="40%" cy="85%" r="5" fill="url(#glow)" />
          <circle cx="40%" cy="85%" r="2" />
          <circle cx="15%" cy="60%" r="3" />
          <circle cx="95%" cy="10%" r="2" />
          <circle cx="50%" cy="100%" r="3" />
        </g>
      </svg>
    </div>
  );
}
