export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg)]">
      <div className="shadow-soft flex items-center gap-4 rounded-full border border-white/10 bg-[color:var(--glass)] px-6 py-4 backdrop-blur-[14px]">
        <span className="h-3 w-3 animate-ping rounded-full bg-[color:var(--accent)]" />
        <span className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
          Loading
        </span>
      </div>
    </div>
  );
}
