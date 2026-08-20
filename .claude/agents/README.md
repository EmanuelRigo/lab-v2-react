# Claude Code — Agentes personalizados

Esta carpeta contiene **subagentes personalizados** para Claude Code.

## Formato

Cada agente es un archivo `.md` con frontmatter YAML:

```markdown
---
name: nombre-del-agente
description: Cuándo debe invocarse este agente (Claude lo usa para decidir)
tools: Read, Grep, Glob, Bash  # Opcional: limitar las tools disponibles
model: sonnet  # Opcional: modelo preferido
---

# Rol del agente

Descripción detallada del comportamiento, restricciones y objetivos del agente.
```

## Ejemplo

```markdown
---
name: code-reviewer
description: Revisa código en busca de bugs, problemas de estilo y oportunidades de simplificación. Usar después de escribir código nuevo.
tools: Read, Grep, Glob, Bash
---

Sos un revisor de código experimentado. Analizás los diffs buscando:
- Bugs lógicos
- Problemas de seguridad
- Code smells
- Oportunidades de simplificación
```

## Notas

- El campo `description` es clave: Claude lo lee para decidir automáticamente si invocar al agente.
- Si omitís `tools`, el agente tiene acceso a todas las herramientas.
- Ver [docs oficiales](https://docs.claude.com/en/docs/claude-code/sub-agents) para más detalles.
