import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8">
      <div className="max-w-lg text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-px">
          <span
            className="font-medium uppercase tracking-[0.22em] text-[var(--color-ink)]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '28px' }}
          >
            LITE
          </span>
          <span
            className="mx-[0.15em] text-[var(--color-green)]"
            style={{ fontSize: '14px', lineHeight: 1 }}
            aria-hidden="true"
          >
            ●
          </span>
          <span
            className="font-medium uppercase tracking-[0.22em] text-[var(--color-ink)]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '28px' }}
          >
            OPS
          </span>
        </div>

        {/* Ref label */}
        <p
          className="mb-6 font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-steel)]"
        >
          REF-DOCS/INDEX v1.0 — 2026-04-02
        </p>

        {/* Tagline */}
        <p className="mb-12 text-sm leading-relaxed text-[var(--color-moss)]">
          Documentation technique des opérateurs, agents et systèmes LiteOps.
          Spécifications, API, guides d&apos;intégration.
        </p>

        {/* CTA */}
        <Link
          href="/docs"
          className="inline-block border border-[var(--color-ink)] px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
        >
          Entrer dans la documentation
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center">
        <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[var(--color-chrome)]">
          Lite Ops — Intelligent Systems &amp; Operations
        </p>
      </footer>
    </main>
  );
}
