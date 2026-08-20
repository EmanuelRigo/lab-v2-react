# Cursor — Rules

Esta carpeta contiene **reglas** que Cursor aplica automáticamente al contexto de trabajo.

## Formatos soportados

Cursor acepta reglas en dos formatos:

### 1. Archivos `.mdc` (recomendado, con frontmatter)

```markdown
---
description: Descripción de cuándo aplica esta regla
globs: "**/*.tsx"  # Opcional: a qué archivos aplica
alwaysApply: false  # true para que se aplique siempre
---

# Contenido de la regla

Convención o instrucción específica.
```

### 2. Archivos `.md` (simples)

```markdown
# Regla simple

Sin frontmatter, se aplica según el contexto.
```

## Tipos de reglas

- **`alwaysApply: true`** → Siempre se incluye en el contexto
- **`alwaysApply: false` + globs** → Solo se aplica a archivos que matchean los globs
- **`alwaysApply: false` sin globs** → Cursor decide cuándo usarla según la descripción

## Ejemplo

`.cursor/rules/react-components.mdc`:

```markdown
---
description: Convenciones para componentes React en este proyecto
globs: "**/*.{jsx,tsx}"
alwaysApply: true
---

- Usar functional components con hooks
- Nombrar archivos en PascalCase
- Exportar un componente por archivo
- Preferir TypeScript sobre PropTypes
```

## Ubicaciones

- **Por proyecto**: `.cursor/rules/` (esta carpeta)
- **Globales**: `~/.cursor/rules/`
