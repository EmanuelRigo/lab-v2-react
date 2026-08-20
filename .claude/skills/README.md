# Claude Code — Skills

Esta carpeta contiene **skills personalizados** para Claude Code (CLI).

## Formato

Cada skill es una carpeta que contiene un archivo `SKILL.md` con frontmatter YAML:

```
mi-skill/
└── SKILL.md
```

### SKILL.md

```markdown
---
name: nombre-de-la-skill
description: Descripción corta (una línea) que Claude usará para decidir cuándo invocarla
---

# Título de la skill

Contenido de la skill en Markdown. Podés incluir:
- Instrucciones paso a paso
- Ejemplos de código
- Convenciones del proyecto
- Referencias a archivos

Las skills pueden usar la tool `Skill` para invocarse entre sí.
```

## Ubicaciones alternativas

- **Global** (todas las máquinas): `~/.claude/skills/`
- **Por proyecto**: `.claude/skills/` (esta carpeta)

## Recursos relacionados

- Agentes personalizados: `.claude/agents/`
- Slash commands: `.claude/commands/`
- Hooks: `.claude/hooks/`
