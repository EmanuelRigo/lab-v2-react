# Claude Code — Slash Commands

Esta carpeta contiene **slash commands personalizados** para Claude Code.

## Formato

Cada comando es un archivo `.md` con frontmatter YAML:

```markdown
---
description: Descripción del comando (aparece en el autocompletado)
---

# Contenido del comando

Este es el prompt que se enviará a Claude cuando el usuario escriba `/nombre-del-archivo`.

Podés usar `$ARGUMENTS` para capturar argumentos posicionales del usuario.
```

## Ejemplo

Archivo `review.md`:

```markdown
---
description: Revisa el código modificado en busca de problemas
---

Revisá los archivos modificados en el último commit. Buscá:
- Bugs
- Problemas de estilo
- Tests faltantes

$ARGUMENTS
```

El usuario lo invoca con: `/review` o `/review enfocando en performance`

## Ubicaciones

- **Global**: `~/.claude/commands/`
- **Por proyecto**: `.claude/commands/` (esta carpeta)
