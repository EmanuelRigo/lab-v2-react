# Continue.dev — Skills

Esta carpeta contiene **skills personalizados** para Continue.dev (extensión AI open source).

## ⚠️ Formato real

Continue.dev **NO usa "skills"** como concepto nativo. Su configuración principal es:

### `.continue/config.json` (raíz)

Configuración de modelos, providers, slash commands, etc.

### `.continue/prompts/`

Prompts reutilizables (`.prompt` files).

### `.continue/rules/`

Reglas que se aplican automáticamente.

## Esta carpeta

`.continue/skills/` se mantiene como **convención común** para portabilidad. Si usás Continue, considerá mover el contenido a `.continue/rules/` o `.continue/prompts/`.

## Formato de prompts en Continue

```
my-prompt.prompt
---
name: My prompt
description: What it does
---

Contenido del prompt con variables como {{input}}.
```

## Recursos

- [Continue Docs](https://docs.continue.dev)
