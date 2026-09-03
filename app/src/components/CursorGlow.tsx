import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const glow = glowRef.current;
      if (!glow) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // Smooth lerp for fluid motion
      currentRef.current.x += (posRef.current.x - currentRef.current.x) * 0.15;
      currentRef.current.y += (posRef.current.y - currentRef.current.y) * 0.15;

      glow.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
      style={{
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(212, 255, 0, 0.12) 0%, rgba(212, 255, 0, 0.05) 30%, rgba(212, 255, 0, 0.015) 55%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
