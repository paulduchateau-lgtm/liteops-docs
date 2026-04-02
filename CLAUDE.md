@../CLAUDE.md

# docs — CLAUDE.md
**REF-DS/CLAUDE/DOCS v1.0**

## Identité

- **Tier design :** T3 — Docs
- **Stack :** Next.js + Fumadocs
- **Périmètre :** Documentation publique + documentation technique LiteOps

## Stack technique

| Couche | Tech |
|--------|------|
| Framework | Next.js |
| Doc engine | Fumadocs |
| Contenu | MDX |
| Styling | Fumadocs UI + tokens @liteops/ds |
| Deploy | Vercel |

## Structure des contenus

```
docs/content/
├── public/               ← Documentation publique (accessible sans auth)
│   ├── presentations/
│   ├── partner-program/
│   └── services/
└── technical/            ← Documentation technique
    ├── api/
    ├── sdk/
    ├── operators/        ← OP-001 à OP-011
    └── agents/           ← AG001, AG002, AG003
```

## Styling T3

- Background blanc `#FFFFFF` avec dot-grid overlay
- Zéro border-radius sur tous les éléments
- JetBrains Mono dominant pour les refs, codes, labels
- Tables : en-têtes sur fond `--color-green-tint`
- Pattern dot-grid : `radial-gradient(circle, #D5D1CB 0.5px, transparent 0.5px)` en 16x16

## Format des pages de spec (operators/agents)

Chaque page OP-XXX suit ce template :
```
Header : Logo | NOM (JetBrains Mono 20px/500) | REF-SPEC/OP-XXX vN.M | date
---
1. Rôle            (texte descriptif)
2. Pipeline        (diagramme ASCII dans code block dark)
3. Table étapes    (Étape | Action | Output)
4. Quality Flags   (PASS / WARNING / LOW)
5. API             (endpoints si applicable)
---
Footer : "Lite Ops — Intelligent Systems & Operations" | Page X / Y
```

## Composants spéciaux T3

- `<SpecSheet>` — layout spec sheet Teenage Engineering
- `<PipelineDiagram>` — diagramme ASCII/SVG du pipeline opérateur
- `<QualityFlag flag="PASS|WARNING|LOW" score={85} />` — badge quality
- `<OperatorIndex>` — liste tabulaire de tous les opérateurs
