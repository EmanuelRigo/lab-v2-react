# Roo Code — Agentes / Modos personalizados

Roo Code organiza sus "agentes" como **modos**. Esta carpeta contiene definiciones de modos personalizados.

## ⚠️ Configuración real

Roo Code en realidad define los modos en `.roo/config.json` o via la UI. Esta carpeta es una **convención de portabilidad**.

## Formato conceptual de un modo

```
.roo/agents/
└── mi-modo/
    └── AGENT.md
```

```markdown
---
name: code-reviewer
description: Modo especializado en revisión de código
roleDefinition: >
  Sos un revisor de código experimentado con foco en
  arquitectura, performance y mantenibilidad.
whenToUse: >
  Invocar este modo cuando el usuario pida revisar código
  o después de cambios significativos.
tools:
  - Read
  - Grep
  - Glob
  - Bash
---

# Instrucciones adicionales

Comportamiento específico del modo:
- No proponer cambios, solo reportar
- Categorizar hallazgos por severidad
- Sugerir alternativas cuando sea posible
```

## Modos built-in de Roo

Roo Code incluye modos predefinidos:
- **Code** — edición de código general
- **Architect** — diseño y planificación
- **Ask** — preguntas y exploración
- **Debug** — debugging
- **Custom** — modo personalizable

## Referencias

- [Roo Code Docs](https://docs.roocode.com)
