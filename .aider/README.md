# Aider — Configuración

Aider es una herramienta CLI de AI coding. **No usa "skills" como tal**, sino archivos de configuración y "conventions".

## Archivos principales

### `.aider.conf.yml` (raíz)

Configuración principal del proyecto:

```yaml
model: claude-sonnet-4-5-20251001
api_key: sk-...  # O leer de env
edit_format: diff
auto_commits: false
```

### `.aider.model.settings.yml`

Settings por modelo.

### `CONVENTIONS.md`

Convenciones del proyecto que Aider incluye automáticamente como contexto.

```markdown
# Convenciones

- Stack: Next.js + TypeScript
- Estilo: ESLint + Prettier
- Tests: Vitest
- No usar `any`
```

## Esta carpeta

Esta carpeta `.aider/` está reservada para assets específicos de Aider si los necesitás (scripts, templates, etc.). Para configuración, usá los archivos en la raíz del proyecto.

## Recursos

- [Aider Docs](https://aider.chat/docs/)
