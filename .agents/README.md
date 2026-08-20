# Agentes AI (convención multi-plataforma)

Esta carpeta es una **convención compartida** para almacenar definiciones de subagentes AI que pueden ser usados por múltiples herramientas.

## ¿Por qué una carpeta `.agents/` en la raíz?

Algunas herramientas y proyectos open-source (como [OpenAI's swarm](https://github.com/openai/swarm), [CrewAI](https://github.com/joaomdmoura/crewai), etc.) esperan encontrar definiciones de agentes en una carpeta `.agents/` en la raíz del proyecto.

## Formato estándar

Un agente se define como un archivo Markdown con frontmatter YAML:

```markdown
---
name: nombre-del-agente
description: Cuándo invocar este agente
tools: Read, Grep, Glob, Bash  # Opcional
model: sonnet  # Opcional
---

# Rol

Descripción del rol y responsabilidades del agente.

## Comportamiento

- Hacer X
- Evitar Y
- Seguir Z
```

## Compatibilidad

Esta carpeta es **opcional**. Las herramientas oficiales tienen sus propias ubicaciones:

| Herramienta | Ubicación nativa |
|-------------|------------------|
| Claude Code | `.claude/agents/` |
| Cursor | `.cursor/agents/` o reglas en `.cursor/rules/` |
| Roo Code | `.roo/agents/` o `.roo/skills/` |
| Continue | `.continue/agents/` (config-based) |

## Recomendación

Si querés mantener una **única fuente de verdad** para tus agentes, podés:

1. Definirlos acá en `.agents/`
2. Sincronizarlos a las carpetas específicas con un script

O simplemente usá las carpetas nativas de cada herramienta para evitar duplicación.
