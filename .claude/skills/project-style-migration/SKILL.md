---
name: project-style-migration
description: Traslada la identidad visual del proyecto fuente (DESIGN_SYSTEM.md, generado desde http://localhost:3000/) hacia el proyecto destino. Usar automáticamente cuando el usuario solicite rediseñar, modernizar, migrar UI, crear páginas/landing/cards/botones/layouts, mejorar estilos o responsive. La fuente de verdad visual es DESIGN_SYSTEM.md: no inventar colores, spacing, radius ni sombras.
---

# Project Style Migration

## Objetivo

Esta skill tiene como objetivo trasladar la identidad visual de un proyecto fuente hacia un proyecto destino.

La fuente oficial de estilos es:

`DESIGN_SYSTEM.md`

Este archivo fue generado analizando exclusivamente:

`http://localhost:3000/`

y representa la identidad visual oficial que debe respetarse.

---

## Regla principal

Antes de cualquier modificación visual:

1. Leer `DESIGN_SYSTEM.md`.
2. Identificar:

   * colores
   * tipografía
   * spacing
   * border radius
   * sombras
   * botones
   * cards
   * layouts
   * responsive
3. Analizar el componente actual.
4. Aplicar los patrones encontrados.
5. **Mostrar el resultado y preguntar al usuario si aprueba el estilo aplicado** (ver "Flujo de aprobación" abajo).
6. **Solo si el usuario aprueba**, marcar los archivos modificados con la marca de estilo aplicado (ver "Marca de estilo aplicado") para que no se vuelvan a refactorizar en futuras invocaciones de esta skill.

---

## Flujo de aprobación (OBLIGATORIO)

Después de aplicar los cambios de estilo, antes de marcar archivos:

1. Resumir brevemente qué cambios se hicieron y en qué archivos.
2. Preguntar al usuario con `AskUserQuestion` si aprueba el estilo aplicado.

   * Pregunta sugerida: *"¿Apruebas el estilo aplicado en estos archivos? Si apruebas, se marcarán para no volver a refactorizarse."*
   * Opciones:
     - Sí, aprobar y marcar
     - No, ajustar antes de marcar
     - Aprobar pero no marcar

3. **Si el usuario aprueba** (Sí, aprobar y marcar):
   - Añadir la marca de estilo aplicado a cada archivo modificado (componentes, pages, layouts, etc.).
4. **Si el usuario pide ajustes** (No, ajustar antes de marcar):
   - Iterar hasta que apruebe.
   - Solo entonces añadir la marca.
5. **Si el usuario aprueba pero no quiere marcar** (Aprobar pero no marcar):
   - No añadir la marca. El archivo podrá refactorizarse en el futuro.

Nunca marcar archivos sin aprobación explícita del usuario.

---

## Marca de estilo aplicado

Cuando el usuario apruebe el estilo, añadir el siguiente comentario al inicio del archivo modificado (componentes, pages, layouts, etc.):

**En archivos `.jsx`, `.tsx`, `.js`, `.ts`:**

```jsx
// @style-migration: approved — no refactorizar estilo (Design System aplicado el YYYY-MM-DD)
```

Colocar el bloque de imports / código debajo de este comentario. La fecha debe ser la fecha actual.

**En archivos `.css`, `.scss`, `.module.css`:**

```css
/* @style-migration: approved — no refactorizar estilo (Design System aplicado el YYYY-MM-DD) */
```

**En archivos `.md` que documenten estilos o componentes:**

```markdown
<!-- @style-migration: approved — no refactorizar estilo (Design System aplicado el YYYY-MM-DD) -->
```

**Importante:** al inicio de cada intervención de la skill, **revisar primero** si el archivo a modificar ya contiene esta marca. Si la contiene, **no refactorizarlo**: informar al usuario y pedirle que retire la marca manualmente si desea re-aplicar el estilo.

---

## Lista de archivos marcados

Mantener un registro agregado en `DESIGN_SYSTEM.md` (o en una sección dedicada) con la lista de archivos que ya tienen la marca, para consulta rápida entre sesiones. Formato sugerido:

```md
## Archivos con estilo aprobado (no refactorizar)

- src/app/layout.jsx
- src/app/page.jsx
- src/components/LandingPageComponents/Navbar.jsx
- ...
```

Si `DESIGN_SYSTEM.md` no tiene esta sección, añadirla al final del archivo la primera vez que se apruebe un cambio.

---

## Cuándo usar esta skill

Usar automáticamente cuando el usuario solicite:

* rediseñar componentes
* modernizar secciones
* crear páginas nuevas
* crear landing pages
* migrar UI
* adaptar componentes
* mejorar estilos
* crear cards
* crear botones
* crear layouts
* mejorar responsive

Antes de tocar un archivo, comprobar la marca `@style-migration: approved` y respetar lo establecido arriba.

---

## Regla de consistencia

El objetivo no es copiar código.

El objetivo es:

> Hacer que el proyecto destino parezca pertenecer al mismo ecosistema visual que el proyecto fuente.

---

## No hacer

No:

* inventar colores
* inventar spacing
* inventar radius
* inventar sombras
* crear estilos incompatibles
* refactorizar archivos que ya tengan la marca `@style-migration: approved` sin pedirle al usuario que retire la marca primero
* marcar archivos como aprobados sin la confirmación explícita del usuario

si `DESIGN_SYSTEM.md` ya define patrones equivalentes.

---

## Cuando falte información

Si un patrón no existe:

1. Buscar el más parecido en `DESIGN_SYSTEM.md`.
2. Reutilizarlo.
3. Crear un nuevo patrón solo si es necesario.

---

## Regla final

`DESIGN_SYSTEM.md` es la fuente de verdad visual.

Toda decisión estética debe basarse primero en este archivo.

La marca `@style-migration: approved` indica que el usuario ya revisó y aprobó el estilo de un archivo: respetarla y no volver a refactorizar.
