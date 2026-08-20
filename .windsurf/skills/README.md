# Windsurf — Skills

Skills personalizados para Windsurf IDE.

## Formato

Cada skill es una carpeta con `SKILL.md`:

```
.windsurf/skills/
└── mi-skill/
    └── SKILL.md
```

```markdown
---
name: nombre
description: Descripción
---

# Contenido
```

## Diferencia con rules

- **Rules** (`.windsurf/rules/`): se aplican automáticamente según contexto
- **Skills** (esta carpeta): se invocan explícitamente

## Referencias

- [Windsurf Docs](https://docs.codeium.com/windsurf)
