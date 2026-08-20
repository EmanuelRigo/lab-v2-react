# Cursor — Skills

Esta carpeta contiene **skills personalizados** para Cursor IDE (formato reciente basado en Claude Code).

## Formato

Cada skill es una carpeta con un archivo `SKILL.md`:

```
.cursor/skills/
└── mi-skill/
    └── SKILL.md
```

### SKILL.md

```markdown
---
name: nombre-de-la-skill
description: Descripción breve para que Cursor sepa cuándo usar esta skill
---

# Contenido

Instrucciones detalladas, ejemplos y convenciones.
```

## Skills vs Rules

Cursor admite dos sistemas:

| Sistema | Carpeta | Cuándo se carga |
|---------|---------|-----------------|
| **Skills** | `.cursor/skills/` | A pedido (vía `/skill-name`) |
| **Rules** | `.cursor/rules/` | Siempre (con `@always` o según globs) |

Para reglas que se apliquen **automáticamente** a todo el código, usá `.cursor/rules/`.
Para instrucciones que el usuario invoca **explícitamente**, usá `.cursor/skills/`.

## Referencias

- [Cursor Docs — Skills](https://cursor.com/docs)
- [Cursor Docs — Rules](https://cursor.com/docs)
