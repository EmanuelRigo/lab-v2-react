# Cursor — Comandos personalizados

Esta carpeta contiene **comandos slash personalizados** para Cursor.

## Formato

Cada comando es un archivo `.md`:

```markdown
# /nombre-del-comando

Descripción de lo que hace el comando.

## Pasos

1. Hacer X
2. Hacer Y
3. Hacer Z
```

## Ejemplo

`generate-tests.md`:

```markdown
# /generate-tests

Genera tests unitarios para el archivo seleccionado.

## Pasos

1. Leer el archivo actual
2. Identificar funciones y exports
3. Generar tests con Jest/Vitest
4. Cubrir happy path y casos edge
```

## Uso

El usuario invoca el comando con `/nombre-archivo` (sin extensión) desde el chat de Cursor.

## Nota

En versiones recientes de Cursor, los **skills** (en `.cursor/skills/`) reemplazaron parcialmente a los comandos personalizados. Para nuevo contenido, priorizá skills.
