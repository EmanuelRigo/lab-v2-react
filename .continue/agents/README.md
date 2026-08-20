# Continue.dev — Agentes

Esta carpeta está reservada para definiciones de **agentes personalizados** en Continue.

## ⚠️ Configuración real

Continue.dev **no usa archivos de agentes en una carpeta**. Define los agentes en `.continue/config.json` o via UI.

### Ejemplo en `.continue/config.json`:

```json
{
  "models": [...],
  "tabAutocompleteModel": {...},
  "experimental": {
    "modelRoles": {
      "chat": "claude-sonnet-4-5-20251001",
      "edit": "claude-sonnet-4-5-20251001"
    }
  }
}
```

Para prompts de sistema custom por modelo, se hace en config, no en archivos separados.

## Esta carpeta

`.continue/agents/` se mantiene como **convención** para portabilidad entre herramientas. Si vas a usar Continue en serio, mové las definiciones a `.continue/config.json`.

## Ver también

- `.continue/skills/` — carpeta de skills
