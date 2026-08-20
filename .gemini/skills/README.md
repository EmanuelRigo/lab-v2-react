# Gemini Code Assist — Skills

Esta carpeta contiene **skills personalizados** para Gemini Code Assist (Google Cloud).

## ⚠️ Estado experimental

Gemini Code Assist está en evolución. La estructura puede cambiar. Consultá la [documentación oficial](https://cloud.google.com/gemini/docs/codeassist) para confirmar la estructura actual.

## Formato esperado

Basado en convenciones recientes, cada skill debería ser una carpeta con `SKILL.md`:

```
.gemini/skills/
└── mi-skill/
    └── SKILL.md
```

```markdown
---
name: nombre-de-la-skill
description: Descripción corta
---

# Contenido

Instrucciones detalladas.
```

## Alternativa: GEMINI.md

Gemini también lee un archivo `GEMINI.md` en la raíz del proyecto (similar a `CLAUDE.md`) con contexto general:

```markdown
# Contexto del proyecto

- Stack: Next.js 14, React, TypeScript
- Convenciones de código
- Comandos útiles: `npm run dev`, `npm run build`
```

## Recursos relacionados

- Comandos slash: `.gemini/commands/`
