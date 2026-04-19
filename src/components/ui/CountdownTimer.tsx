import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetIso: string;
  size?: 'sm' | 'md';
  hideSeconds?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function computeTimeLeft(target: number): TimeLeft {
  const distance = Math.max(0, target - Date.now());
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export function CountdownTimer({ targetIso, size = 'md', hideSeconds = false }: CountdownTimerProps) {
  const target = new Date(targetIso).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    computeTimeLeft(target),
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLeft(computeTimeLeft(target));
    }, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const allSegments: Array<{ label: string; value: string }> = [
    { label: 'DAYS', value: timeLeft.days.toString().padStart(2, '0') },
    { label: 'HOURS', value: timeLeft.hours.toString().padStart(2, '0') },
    { label: 'MINUTES', value: timeLeft.minutes.toString().padStart(2, '0') },
    { label: 'SECONDS', value: timeLeft.seconds.toString().padStart(2, '0') },
  ];
  const segments = hideSeconds ? allSegments.slice(0, 3) : allSegments;

  const isSmall = size === 'sm';

  return (
    <div className={`flex font-mono ${isSmall ? 'gap-4 md:gap-8' : 'gap-6 md:gap-12 mb-12'}`}>
      {segments.map((segment) => (
        <div key={segment.label} className="flex flex-col items-center">
          <span className={`font-light text-white tabular-nums ${isSmall ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'}`}>
            {segment.value}
          </span>
          <span className={`tracking-[0.2em] text-turquoise ${isSmall ? 'text-xs mt-2' : 'text-[10px] mt-2'}`}>
            {segment.label}
          </span>
        </div>
      ))}
    </div>
  );
}
