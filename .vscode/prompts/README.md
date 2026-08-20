# VS Code — Prompts reutilizables

Esta carpeta contiene **prompts reutilizables** para asistentes AI en VS Code (Copilot Chat, Continue, etc.).

## Formato

Cada prompt es un archivo `.md` o `.prompt.md`:

```markdown
---
description: Descripción del prompt
mode: code | chat | agent
---

# Título del prompt

Contenido del prompt que se enviará al modelo.

Variables disponibles (según extensión):
- `${selection}` — código seleccionado
- `${file}` — archivo actual
- `${workspaceFolder}` — carpeta del workspace
```

## Ejemplo

`explain-code.prompt.md`:

```markdown
---
description: Explica el código seleccionado en detalle
mode: chat
---

Explicá este código:

${selection}

Incluí:
- Propósito general
- Desglose línea por línea
- Posibles bugs o mejoras
```

## Extensiones compatibles

- **GitHub Copilot Chat**: lee prompts desde `.github/prompts/` y la raíz
- **Continue**: lee desde `.continue/prompts/`
- **Cline**: lee desde `.clinerules/` o similar

Para máxima portabilidad, mantené los prompts en esta carpeta y referencialos desde la config de cada extensión.
