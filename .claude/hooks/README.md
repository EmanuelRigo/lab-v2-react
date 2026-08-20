# Claude Code — Hooks

Esta carpeta está reservada para **hooks personalizados** de Claude Code.

## ⚠️ Importante

Los hooks NO van en archivos sueltos. Se configuran en `settings.json` o `settings.local.json` en esta misma carpeta `.claude/`.

## Formato de configuración

En `.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Bloqueado: comando no permitido'"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm run lint"
          }
        ]
      }
    ]
  }
}
```

## Eventos disponibles

- `PreToolUse` — antes de ejecutar una tool
- `PostToolUse` — después de ejecutar una tool
- `Stop` — cuando Claude termina de responder
- `SubagentStop` — cuando un subagente termina
- `Notification` — cuando llega una notificación
- `UserPromptSubmit` — cuando el usuario envía un prompt

## Ubicaciones

- **Proyecto**: `.claude/settings.json` (commitear al repo)
- **Local**: `.claude/settings.local.json` (no commitear, ya está en `.gitignore`)
