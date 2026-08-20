# Cursor — Agentes

Esta carpeta contiene **agentes personalizados** para Cursor IDE.

## ⚠️ Nota sobre compatibilidad

Cursor históricamente ha usado **rules** (en `.cursor/rules/`) más que "agentes" como concepto formal. En versiones recientes, el concepto de **skills** (en `.cursor/skills/`) reemplazó parcialmente a los agentes.

## Formato recomendado

```
.cursor/agents/
└── mi-agente/
    └── AGENT.md
```

```markdown
---
name: nombre-del-agente
description: Cuándo Cursor debe invocar este agente
---

# Rol del agente

Descripción del comportamiento y responsabilidades.

## Tools disponibles

- Read
- Grep
- Edit
- Bash

## Restricciones

- No ejecutar comandos destructivos
- Pedir confirmación antes de cambios importantes
```

## Alternativa: usar skills

Para la mayoría de casos, preferí `.cursor/skills/` que es el formato más moderno y soportado oficialmente.

## Referencias

- [Cursor Docs](https://cursor.com/docs)
