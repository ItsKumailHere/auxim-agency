import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      element.classList.add('in-view');
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (element.classList.contains('reveal')) {
      observer.observe(element);
    }

    const childReveals = element.querySelectorAll('.reveal');
    childReveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useReveal;
