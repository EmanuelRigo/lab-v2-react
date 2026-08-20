# Roo Code — Skills

Esta carpeta contiene **skills personalizados** para Roo Code (extensión de VS Code basada en Cline).

## Formato

Cada skill es una carpeta con `SKILL.md`:

```
.roo/skills/
└── mi-skill/
    └── SKILL.md
```

```markdown
---
name: nombre-de-la-skill
description: Cuándo Roo debe invocar esta skill
---

# Contenido

Instrucciones detalladas.
```

## Modos de Roo

Roo Code soporta distintos modos (Code, Architect, Ask, Debug, etc.). Las skills pueden estar asociadas a un modo específico mediante la metadata.

## Ejemplo

```markdown
---
name: refactor-component
description: Refactoriza un componente React extrayendo lógica reusable. Usar cuando el usuario pida refactorizar.
mode: code
---

# Refactor de componentes

Pasos:
1. Identificar lógica repetida
2. Extraer a custom hooks o componentes
3. Mantener la API pública
4. Actualizar tests
```

## Recursos relacionados

- Reglas globales: `.roo/rules/`
