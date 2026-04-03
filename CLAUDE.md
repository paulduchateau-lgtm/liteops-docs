@../CLAUDE.md

# docs — CLAUDE.md
**REF-DS/CLAUDE/DOCS v1.1 — 2026-04-03**

## Identite

- **Tier design :** T3 — Docs
- **Stack :** Next.js 16 + Fumadocs + Tailwind CSS 4
- **Perimetre :** Documentation publique + documentation technique LiteOps
- **Repo :** `paulduchateau-lgtm/liteops-docs`
- **Deploy :** Vercel

## Stack technique

| Couche | Tech |
|--------|------|
| Framework | Next.js 16 |
| Doc engine | Fumadocs (core 16.7.9 + UI 16.7.9 + MDX 14.2.11) |
| Contenu | MDX (`content/docs/`) |
| Styling | Fumadocs UI + Tailwind CSS 4 + tokens inlines dans `globals.css` |
| Theme | Light / Dark via `next-themes` (class strategy) |
| Icons sidebar | Lucide React (mapping dans `src/lib/source.ts`) |

> **Note :** `@liteops/ds` n'est **pas** une dependance de ce projet.
> Tous les tokens design sont definis directement dans `globals.css` via `@theme inline`.
> Cela permet un build standalone sans le monorepo.

## Structure des contenus

```
docs/content/docs/
├── index.mdx                          ← Home "Documentation LiteOps"
├── meta.json                          ← Ordre sidebar racine
├── documentation-technique/
│   ├── meta.json                      ← icon: "Cpu", pages: [index, operators, agents]
│   ├── index.mdx                      ← Index section technique
│   ├── operators/
│   │   └── ...                        ← OP-001 a OP-011
│   └── agents/
│       └── ...                        ← AG001, AG002, AG003
├── documentation-produit/
│   ├── meta.json                      ← icon: "BookOpen"
│   └── index.mdx                      ← Index section produit (a remplir)
└── programme-partenaires/
    ├── meta.json                      ← icon: "Handshake"
    ├── index.mdx                      ← Vue d'ensemble programme
    ├── principe.mdx
    ├── creation-de-valeur.mdx
    ├── droits-commerciaux.mdx
    ├── partner-tiers.mdx
    ├── regles-contractuelles.mdx
    ├── exemple.mdx
    └── synthese.mdx
```

### Ajouter du contenu

1. Creer un fichier `.mdx` dans le bon dossier
2. Ajouter le frontmatter `title` et `description`
3. Mettre a jour le `meta.json` du dossier parent (tableau `pages`)
4. Les liens internes utilisent le format `/docs/chemin/vers/page`

### Sidebar (meta.json)

Chaque dossier contient un `meta.json` qui controle :
- `title` — nom affiche dans la sidebar
- `icon` — nom Lucide React (doit etre declare dans `src/lib/source.ts`)
- `pages` — ordre des pages (noms de fichiers sans extension)
- `defaultOpen` — si le dossier est ouvert par defaut
- `---Label---` — separateur avec titre dans la sidebar racine

Icons disponibles : `Cpu`, `Bot`, `Network`, `BookOpen`, `Handshake`
Pour en ajouter : editer le dictionnaire `icons` dans `src/lib/source.ts`.

## Architecture CSS (Tailwind v4)

L'architecture CSS est specifique a Tailwind CSS v4 et Fumadocs :

```
globals.css
├── @import 'tailwindcss'
├── @import 'fumadocs-ui/css/neutral.css'
├── @import 'fumadocs-ui/css/preset.css'
├── @theme inline { ... }          ← Tokens compile-time (fonts, radii, couleurs DS)
├── :root { ... }                  ← Variables Fumadocs light mode (--color-fd-*)
├── .dark { ... }                  ← Variables Fumadocs dark mode (--color-fd-*)
└── Overrides                      ← Tables, code blocks, links, headings
```

**Point critique :** Les variables `--color-fd-*` doivent etre dans `:root` / `.dark`,
PAS dans `@theme inline`. `@theme inline` est resolu au compile-time par Tailwind
et ne supporte pas les overrides dynamiques `.dark`.

### Fonts

Chargees via `<link>` dans `layout.tsx` `<head>` (pas via CSS `@import`).
DM Sans (300, 400, 500) + JetBrains Mono (400, 500).

### Dark mode

- Active via `next-themes` avec `attribute: 'class'`
- Le theme par defaut est `system`
- Toggle integre par Fumadocs UI dans le header
- Code blocks : toujours fond `#141413` avec texte `#F0EEEB` (les deux modes)
- Dot-grid : adapte light (`#D5D1CB`) / dark (`rgba(240,238,235,0.06)`)

## Styling T3

- Background blanc `#FFFFFF` avec dot-grid overlay
- Zero border-radius sur tous les elements (`border-radius: 0 !important` global)
- JetBrains Mono pour les refs, codes, labels
- Tables : en-tetes sur fond `--color-fd-muted`, mono uppercase
- Pattern dot-grid : `radial-gradient(circle, #D5D1CB 0.5px, transparent 0.5px)` en 16x16

## Composants speciaux T3 (a creer)

- `<SpecSheet>` — layout spec sheet Teenage Engineering
- `<PipelineDiagram>` — diagramme ASCII/SVG du pipeline operateur
- `<QualityFlag flag="PASS|WARNING|LOW" score={85} />` — badge quality
- `<OperatorIndex>` — liste tabulaire de tous les operateurs

## Fichiers cles

| Fichier | Role |
|---------|------|
| `src/app/globals.css` | Tokens + theme light/dark + overrides Fumadocs |
| `src/app/layout.tsx` | Root layout, fonts Google, RootProvider theme |
| `src/lib/source.ts` | Loader Fumadocs + mapping icons Lucide |
| `src/lib/layout.shared.tsx` | Logo LITE●OPS + config nav partagee |
| `source.config.ts` | Config Fumadocs MDX |
| `content/docs/meta.json` | Structure sidebar racine |
