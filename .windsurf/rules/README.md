# Windsurf — Rules

Esta carpeta contiene **reglas** para Windsurf IDE (Codeium).

## Formato

Windsurf usa archivos `.md` con frontmatter opcional:

```markdown
---
description: Cuándo aplica esta regla
globs: "**/*.py"
---

# Contenido

Convención o instrucción.
```

## Activación global vs específica

- **Global**: archivo `global_rules.md` en la raíz del workspace
- **Por carpeta**: reglas específicas en subcarpetas (Windsurf las carga según el contexto)

## Ejemplo

`.windsurf/rules/python-style.md`:

```markdown
---
description: Estilo de código Python
globs: "**/*.py"
---

- Usar type hints
- Docstrings en formato Google
- Black como formateador
```

## Skills

Windsurf también soporta **skills** (formato más nuevo) en `.windsurf/skills/`. Ver esa carpeta para más detalles.

## Referencias

- [Windsurf Docs](https://docs.codeium.com/windsurf)
