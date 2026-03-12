const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 6 + (index % 4) * 3,
  left: `${(index * 7) % 100}%`,
  delay: `${index * 0.6}s`,
  duration: `${10 + (index % 5) * 4}s`,
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
