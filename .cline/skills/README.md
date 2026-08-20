# Cline — Skills / Rules

Esta carpeta contiene **instrucciones personalizadas** para Cline (extensión AI de VS Code).

## Formatos soportados

Cline lee reglas desde varias ubicaciones. Esta carpeta usa el formato de **skills** (carpeta por skill con `SKILL.md`).

## Formato

```
.cline/skills/
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

## Alternativa: .clinerules (archivo único)

Cline también soporta un único archivo `.clinerules` en la raíz del proyecto con todas las reglas:

```markdown
# Reglas del proyecto

- Siempre usar TypeScript
- Tests requeridos para código nuevo
- ...
```

## Recursos

- [Cline Docs](https://cline.bot/docs)
