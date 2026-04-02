import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-px font-medium uppercase tracking-[0.22em] text-[var(--color-fd-foreground)]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px' }}>
          LITE
          <span className="mx-[0.12em] text-[var(--color-green)]" style={{ fontSize: '0.55em', lineHeight: 1 }}>
            ●
          </span>
          OPS
          <span className="ml-2 font-mono text-[10px] tracking-[0.15em] text-[var(--color-fd-muted-foreground)] uppercase">
            DOCS
          </span>
        </span>
      ),
    },
  };
}
