import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import {
  Handshake,
  Cpu,
  Bot,
  Network,
  BookOpen,
} from 'lucide-react';

/**
 * Icon mapping for sidebar meta.json "icon" field.
 * Add entries here when new sections use icons.
 */
const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Handshake,
  Cpu,
  Bot,
  Network,
  BookOpen,
};

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon || !(icon in icons)) return undefined;
    const Icon = icons[icon];
    return createElement(Icon, { className: 'size-4' });
  },
});
