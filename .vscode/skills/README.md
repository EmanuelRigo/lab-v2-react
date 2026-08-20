# VS Code — Skills / Instructions

Esta carpeta contiene **instrucciones para asistentes AI** que funcionan con VS Code (GitHub Copilot, Continue, etc.).

## Formato

El formato varía según la extensión:

### GitHub Copilot

Usa archivos `.md` en `.github/copilot-instructions.md` (raíz) o un archivo por workspace. Esta carpeta es para instrucciones complementarias.

### Continue (.continue/)

Continue lee configuración desde `.continue/config.json` y `.continue/rules/`. Esta carpeta sirve como backup/compatibilidad.

### Cline / Roo Code

Estas extensiones buscan skills en sus propias carpetas (`.cline/skills/`, `.roo/skills/`). Esta carpeta `.vscode/skills/` es un alias común.

## Convención recomendada

Para máxima compatibilidad, usá archivos `.md` simples:

```markdown
# Skill: nombre

Descripción de la skill.

## Cuándo aplicar

- Trigger 1
- Trigger 2

## Comportamiento

Instrucciones detalladas.
```

## Recursos relacionados

- Prompts reutilizables: `.vscode/prompts/`
- Configuración de VS Code: `.vscode/settings.json`
