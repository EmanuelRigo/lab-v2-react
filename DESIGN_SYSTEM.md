# Design System

> Fuente de verdad visual: http://localhost:3000/
>
> Esta documentación se basa únicamente en la implementación real usada por la vista raíz del dashboard en [src/app/page.tsx](src/app/page.tsx) y en los componentes que forman parte de su árbol de renderizado. No se incorporan estilos de otras rutas ni patrones legacy.

## 1. Overview

La vista raíz de `/` es un dashboard administrativo de laboratorio con una estética de producto SaaS de baja elevación, orientada a densidad informativa y claridad operativa.

Características dominantes:

- fondo claro y neutro
- superficies blancas o muy claras separadas por bordes suaves
- paleta primaria azul con acentos de estado
- tipografía sobria y legible
- layout basado en grilla 5-columnas en desktop
- cards compactas con bordes y padding mínimo
- ausencia de sombras decorativas en la mayoría de componentes
- jerarquía visual clara para métricas, gráficos, citas y acciones rápidas

## 2. Scope

Se considera parte del design system de `/` únicamente lo que pertenece al árbol de renderizado de la vista raíz:

- [src/app/page.tsx](src/app/page.tsx)
- [src/components/dashboard/StatsCards/StatsCards.tsx](src/components/dashboard/StatsCards/StatsCards.tsx)
- [src/components/dashboard/StatsCards/StatCard.tsx](src/components/dashboard/StatsCards/StatCard.tsx)
- [src/components/dashboard/StudiesChartCard.tsx](src/components/dashboard/StudiesChartCard.tsx)
- [src/components/homepage/DaylyAppointments.tsx](src/components/homepage/DaylyAppointments.tsx)
- [src/components/dashboard/QuickActions.tsx](src/components/dashboard/QuickActions.tsx)
- [src/components/dashboard/QuickActionButton.tsx](src/components/dashboard/QuickActionButton.tsx)
- [src/components/ResultsStatusCard/RecentResultsCard.tsx](src/components/ResultsStatusCard/RecentResultsCard.tsx)
- [src/components/ResultsStatusCard/ResultRow.tsx](src/components/ResultsStatusCard/ResultRow.tsx)
- [src/components/ui/button.tsx](src/components/ui/button.tsx)
- [src/components/ui/card.tsx](src/components/ui/card.tsx)
- [src/app/globals.css](src/app/globals.css)

No se toma como referencia ninguna ruta alternativa ni ningún estilo declarado fuera del árbol de renderizado de `/`.

## 3. Design Principles

- Bajo contraste visual, pero con fuerte legibilidad.
- Separación por borde y superficie más que por sombra.
- Layout de administración con densidad de información.
- Paleta basada en neutrales + azul primario + estados semánticos.
- Componentes compactos, horizontales y funcionales.
- Visual minimalista y de producto, no editorial ni marketing.
- Consideración clara del espacio y la jerarquía.
- Componentes con estado visual de hover y focus, pero sin exceso de animación.

## 4. Colors

### Tokens encontrados

Los valores más relevantes observados en el diseño de `/` son:

- Background: `#f6f6f6`
  - CSS variable: `--background`
  - Uso: fondo general de la aplicación
- Surface: `#ffffff`
  - CSS variable: `--surface`
  - Uso: cards, paneles y bloques de contenido
- Surface muted: `#f1f5f9`
  - CSS variable: `--surface-muted`
  - Uso: fondos secundarios, hover, chart area, barras
- Text primary: `#222222`
  - CSS variable: `--text-primary`
  - Uso: títulos y valores principales
- Text secondary: `#475569`
  - CSS variable: `--text-secondary`
  - Uso: labels y textos alternativos
- Text muted: `#64748b`
  - CSS variable: `--text-muted`
  - Uso: meta, fechas, microtextos
- Border default: `#e2e8f0`
  - CSS variable: `--border`, `--border-default`
  - Uso: líneas divisorias y contornos
- Border strong: `#cbd5e1`
  - CSS variable: `--border-strong`
  - Uso: hover state y separación más visible
- Primary base: `#0056e0`
  - CSS variable: `--primary`, `--primary-500`
  - Uso: acción principal, CTA, gráficos, acentos de marca
- Primary soft: `#eef4ff`
  - CSS variable: `--primary-50`
  - Uso: fondos suaves de acento, estados hover, contenedores de icono
- Primary border: `#b3d1ff`
  - CSS variable: `--primary-200`
  - Uso: bordes sutiles sobre fondos primary-50
- Primary emphasis: `#0047b8`
  - CSS variable: `--primary-600`
  - Uso: texto e iconos sobre fondos claros, hover de CTA
- Primary foreground: `#ffffff`
  - CSS variable: `--primary-foreground`
  - Uso: texto sobre fondo primario

### Paleta semántica utilizada por `/`

Observada en `globals.css` y en los componentes del dashboard:

- Primary: `#0056e0` (base / `primary-500`) con escala suave `primary-50`, `primary-200`, `primary-600`
- Success: `#22c55e`
- Warning: `#f59e0b`
- Danger: `#ef4444`
- Info: `#3b82f6`
- Neutral: grises claros y oscuros del sistema Tailwind

### Estados utilizados en `/`

- Completed / success: verde claro + verde intenso
- Processing / active: azul primario
- Pending: amarillo ámbar
- Cancelled / danger: rojo

Se observan ejemplos concretos en:

- [src/components/ResultsStatusCard/ResultRow.tsx](src/components/ResultsStatusCard/ResultRow.tsx)
- [src/components/ResultsStatusCard/RecentResultsCard.tsx](src/components/ResultsStatusCard/RecentResultsCard.tsx)
- [src/components/dashboard/StudiesChartCard.tsx](src/components/dashboard/StudiesChartCard.tsx)

### Color usage map

- Menús y tarjetas: `bg-surface`, `bg-surface-muted`, `border-border`
- Títulos principales: `text-text-primary`
- Texto secundario: `text-text-secondary`
- Meta y fechas: `text-text-muted`
- Acciones principales: `bg-primary`, `text-primary-foreground`
- Estado de éxito: `bg-success/10`, `text-success`
- Estado alerta: `bg-warning/10`, `text-warning`
- Estado problema: `bg-danger/10`, `text-danger`

### Colores declarados pero no utilizados por `/`

Se detectan tokens del proyecto que no son parte del sistema visual real de `/` cuando se miran como conjunto de componentes raíz, por ejemplo:

- paletas complejas o variantes de marca no visibles en la vista actual
- fondos de login o legacy no usados por el dashboard raíz
- estilos de otras rutas no conectados con el render de `/`

Estos no forman parte del design system principal de `/`.

## 5. Typography

### Fuente

El sistema usa una sans moderna basada en Geist / `sans` del stack de Next/Tailwind, con default UI fallback.

Se observa en [src/app/globals.css](src/app/globals.css):

- `--font-sans: var(--font-geist-sans)`
- `--font-mono: var(--font-geist-mono)`

### Jerarquía visual observada

1. H3 / card title
   - `text-base font-semibold text-text-primary`
   - Ejemplo: `Estudios realizados`, `Citas de Hoy`

2. Big KPI numerics
   - `text-2xl font-semibold leading-none text-text-primary`
   - Ejemplo: total de estudios

3. Body / contenido base
   - `text-sm`, `text-xs`, `text-[10px]`
   - Uso: cards, rows, acciones, fechas

4. Labels y microcopy
   - `text-[11px]`, `text-[10px]`, `uppercase tracking-wider`
   - Uso: títulos de cards, secuencias, badges, metadata

5. Buttons
   - `text-xs font-medium` y `text-sm font-medium`
   - Uso: acciones pequeñas y de interfaz

6. Navigation / secondary text
   - `text-xs font-medium text-primary`
   - Uso: enlaces inline y navegación rápida

### Patron general

- títulos: semibold / medium
- valores: bold
- labels: medium
- metadatos: muted + small size
- no se observan estilos editoriales ni display-heavy

## 6. Spacing

El sistema de `/` usa una escala compacta y funcional:

- `gap-2`, `gap-0.5`, `gap-1.5`, `gap-2.5`, `gap-5`
- `p-3`, `px-3`, `py-1.5`, `p-4`, `px-4`, `py-4`
- `mt-2`, `mb-1`, `pb-2`, `pb-1`
- `h-6`, `h-7`, `h-8`, `h-9`, `h-10`

### Patrones frecuentes

- Cards con padding compacto: `p-3` / `px-3` / `py-1.5`
- separación interna entre bloques: `gap-2`, `gap-3`, `gap-4`
- filas de información: `gap-1.5`, `gap-2.5`
- contenedor principal: `max-w-[1560px] p-4`
- dashboard grid: `gap-2`

## 7. Layout

El root dashboard usa una grilla robusta:

- `mx-auto w-full max-w-[1560px] p-4`
- `grid h-full grid-cols-5`
- `grid-rows-[3rem_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_8.5rem_2.5rem]`

### Distribución del dashboard

- Primera fila: métricas principales (`StatsCards`)
- Columna izquierda grande (4/5): gráfico de estudios
- Columna derecha (1/5): citas del día
- Fila final: estado de resultados y top studies + resultados recientes
- Última fila: acciones rápidas

### Patrones repetidos

- contenedores con ancho completo y altura definida
- `min-h-0` para controlar overflow interno
- `flex` + `gap` para agrupación horizontal/vertical
- cards con altura completa y adaptación del contenido
- filas compactas con separación mínima

## 8. Border Radius

Los radios más frecuentes observados en `/`:

- `rounded-md` / `rounded-lg`: componentes pequeños, badges, items de lista
- `rounded-xl`: cards, tab buttons, chart controls
- `rounded-2xl`: contenedores principales de dashboard y tarjetas grandes

### Predominantes

- `rounded-xl` para bloques de contenido
- `rounded-2xl` para paneles principales
- `rounded-lg` para compacto / rows / badges

## 9. Borders

- Grosor principal: `border` 1px
- Estilo: sólido
- Color: `border-border` / `border-border-strong`
- Usados en: cards, chart container, rows, tab list, panels
- No se observan bordes dobles ni contornos complejos

### Patrón principal

- tile/card border + background surface
- no border heavy ni de alto contraste

## 10. Shadows & Effects

En `/` hay una tendencia explícita a evitar sombras decorativas.

Se observan patrones como:

- `shadow-none` en casi todos los cards principales
- `shadow-xs` solo en una variante de botón de tabs
- hover con cambio de fondo o borde, pero sin elevación visual

No hay glassmorphism, blur fuerte, overlays ni efectos avanzados asociados a la capa visual principal.

## 11. Buttons

### Variantes observadas

1. Primary
   - Base observada: `bg-primary-500 text-primary-foreground hover:bg-primary-500/80`
   - Radius: `rounded-md` / `rounded-xl` según uso
   - Padding: `px-4` / `px-3`
   - Font: `text-sm font-medium` o `text-xs`
   - Focus: `focus-visible:ring-ring/50 focus-visible:ring-[3px]`
   - Disabled: `disabled:opacity-50`

2. Outline
   - Base observada: `border bg-background shadow-xs hover:bg-accent`
   - Uso: `Ver reporte` en gráfico

3. Ghost
   - Base observada: `hover:bg-accent hover:text-accent-foreground`
   - Uso: botones “Ver todos” en resultados recientes

4. Inline action button
   - En `QuickActionButton`, una variante específica:
   - `bg-transparent`, `border-none`, `rounded-lg`, `text-text-primary`
   - `hover:bg-primary-500/20`, `hover:border-primary`
   - `transition-colors`

### Estado general

- hover basado en cambio de color más que elevación
- active con fondo más oscuro o más saturado
- focus visible con ring en azul
- no shadows relevantes en botones principales

## 12. Forms

No hay formularios funcionales dentro del render real de `/`.

La raíz del dashboard se centra en analytics y acciones rápidas, no en formularios de entrada.

Si se diseñan formularios para páginas nuevas, la regla visual recomendada es mantener:

- fondo `surface`
- borde `border`
- radio `rounded-xl`
- label y input claros
- focus visible en primary

## 13. Cards

### Patrón general

- `bg-surface`
- `border border-border`
- `rounded-xl` o `rounded-2xl`
- `shadow-none`
- `padding compacto`

### Card examples in `/`

- `StudiesChartCard`: panel grande con título, KPI y chart
- `DaylyAppointments`: panel de citas del día
- `RecentResultsCard`: compact card con lista
- `StatsCards`: conjunto de cards métricas pequeñas
- `QuickActions`: action strip con card contenedor

### Propiedades repetidas

- border 1px
- fondo blanco
- subdivisions via borders and spacing
- sin sombra decorativa
- hover: background slightly tinted or border stronger

## 14. Navigation

En la vista raíz analizada, el patrón de navegación principal es de dashboard operativo más que de landing page.

### Header / nav pattern observed

- no topbar visible en la implementación de `/`
- el diseño usa paneles y cards distribuidos por grilla
- acciones rápidas y bloque de métricas como navegación funcional

### Enlaces y botones de navegación

- enlaces pequeños en texto azul `text-primary`
- interfaz con texto compacto y acciones directas
- hover basado en cambio de color y cursor pointer

## 15. Icons

La librería utilizada es Lucide React.

### Observado

- `Calendar`, `ClipboardCheck`, `FlaskConical`, `AlertTriangle`, `AlertOctagon`, `FileCheck`, `Clock`, `CheckCircle2`, `ArrowUpRight`, `ArrowDownRight`, `BarChart3`, `TriangleAlert`, `UserPlus`, `FilePlus`, `ClipboardPlus`, `ChevronRight`

### Pattern

- tamaño pequeño: 3.5px a 13px según contexto
- stroke width 2
- color por semántica: primary / success / warning / danger / info
- no iconografía de marca compleja ni estilo de línea gruesa

## 16. Images

La vista raíz analizada no usa imágenes de alta carga ni hero visual.

Se observan elementos visuales de tipo UI, no fotografía ni ilustración.

### Características detectadas

- no hero image
- no thumbnails de producto
- no photography blocks
- el sistema se apoya en gráficos, iconos y métricas

## 17. Responsive Design

La UI raíz de `/` está construida para desktop-first.

### Breakpoints observados en el código

- `sm` para 2 columnas en `StatsCards`
- `lg` para 4 columnas en `StatsCards`
- `2xl` para una row sizing específica en el grid raíz

### Comportamiento

- layout base: desktop con 5 columnas densas
- en resoluciones menores, las métricas se reducen a 2 columnas o 1 columna
- cards en bloque compacto y adaptables a altura
- no hay un “mobile-first” de marketing ni un hero multi-column split

## 18. Animations

Las animaciones observadas son sutiles y funcionales.

Patrones:

- `transition-colors` en botones y links
- `transition duration-150 ease-out` en cards
- `transition-transform duration-150 group-hover:scale-105` en iconos de estadística
- `hover:bg-*` y `hover:border-*` para feedback visual
- `focus-visible:ring` para accesibilidad

No hay kinetic-heavy effects ni animaciones de entrada largas.

## 19. Components Used by /

### 1. `DashboardButtons`

- Archivo: [src/app/page.tsx](src/app/page.tsx)
- Propósito: contenedor principal del dashboard
- Estilo: max-width, grilla 5-columnas, gap 2

### 2. `StatsCards`

- Archivo: [src/components/dashboard/StatsCards/StatsCards.tsx](src/components/dashboard/StatsCards/StatsCards.tsx)
- Propósito: fila de métricas principales
- Estilo: grid responsive, cards pequeñas compactas

### 3. `StatCard`

- Archivo: [src/components/dashboard/StatsCards/StatCard.tsx](src/components/dashboard/StatsCards/StatCard.tsx)
- Propósito: metric tile
- Estilo: rounded-lg, border, background surface, icon badge semántico

### 4. `StudiesChartCard`

- Archivo: [src/components/dashboard/StudiesChartCard.tsx](src/components/dashboard/StudiesChartCard.tsx)
- Propósito: visualización de estudios realizados
- Estilo: card principal, area chart, soft fill gradient, tab buttons, compact KPI

### 5. `DaylyAppointments`

- Archivo: [src/components/homepage/DaylyAppointments.tsx](src/components/homepage/DaylyAppointments.tsx)
- Propósito: citas del día
- Estilo: panel vertical compacto con lista, status badges y links de acción

### 6. `QuickActions`

- Archivo: [src/components/dashboard/QuickActions.tsx](src/components/dashboard/QuickActions.tsx)
- Propósito: acciones rápidas por rol
- Estilo: fila de botones con icono y texto

### 7. `QuickActionButton`

- Archivo: [src/components/dashboard/QuickActionButton.tsx](src/components/dashboard/QuickActionButton.tsx)
- Propósito: acción compacta
- Estilo: transparente, redondeada, hover con azules suaves

### 8. `ResultsStatusCard`

- Archivo: [src/components/ResultsStatusCard/RecentResultsCard.tsx](src/components/ResultsStatusCard/RecentResultsCard.tsx)
- Propósito: resultados recientes y estado global
- Estilo: list card, compact row system

### 9. `ResultRow`

- Archivo: [src/components/ResultsStatusCard/ResultRow.tsx](src/components/ResultsStatusCard/ResultRow.tsx)
- Propósito: fila de entidad con paciente, estudio y estado
- Estilo: hover gris muy suave, badge semántico

### 10. `Button`

- Archivo: [src/components/ui/button.tsx](src/components/ui/button.tsx)
- Propósito: base de acciones interactiva
- Estilo: rounded-md, primary/outline/ghost

### 11. `Card`

- Archivo: [src/components/ui/card.tsx](src/components/ui/card.tsx)
- Propósito: contenedor estructural base
- Estilo: `bg-card`, border, `shadow-sm` by default but often overridden to `shadow-none` in usage

## 20. Visual Patterns

### Patrones recurrentes

- `border border-border bg-surface`
- `rounded-xl` y `rounded-2xl`
- `text-text-primary`, `text-text-secondary`, `text-text-muted`
- `gap-2` como espaciado estandar para tiles y layout
- `hover:bg-surface-muted` / `hover:border-border-strong`
- `transition-colors` / `transition duration-150 ease-out`
- badge states with soft background + border
- compact, information-dense dashboard layout

## 21. Inconsistencies

### Patrón principal

La vista de `/` es consistente en su lenguaje visual general.

### Variantes intencionales

- `rounded-xl` vs `rounded-2xl` según tamaño del panel
- `text-base`, `text-sm`, `text-xs`, `text-[10px]` según nivel de importancia
- `bg-primary-500` vs `bg-primary/10` según contexto

### Posibles inconsistencias aisladas

- algunos componentes usan `shadow-xs` aunque la mayoría evita sombras
- hay cierto mix de `rounded-lg` y `rounded-xl` en piezas pequeñas
- algunos elementos fijan tamaño con `h-*` mientras otros usan `flex` variable

Estas no rompen la identidad general del sistema; son pequeñas variaciones de contexto y no contradicen la regla principal de baja elevación.

## 22. Design Tokens

### Tokens encontrados

#### Colors

- background: `#f6f6f6`
- surface: `#ffffff`
- surface-muted: `#f1f5f9`
- text-primary: `#222222`
- text-secondary: `#475569`
- text-muted: `#64748b`
- border: `#e2e8f0`
- border-strong: `#cbd5e1`
- primary: `#0056e0`
- primary-50: `#eef4ff`
- primary-200: `#b3d1ff`
- primary-600: `#0047b8`
- success: `#22c55e`
- warning: `#f59e0b`
- danger: `#ef4444`
- info: `#3b82f6`

#### Typography

- font-family: Geist / sans system stack
- h3: `text-base font-semibold`
- numbers: `text-2xl font-semibold`
- body: `text-sm`
- micro: `text-[10px]`
- label: `text-[11px] font-medium`

#### Spacing

- gap: `2`, `1.5`, `2.5`, `5`
- padding: `p-3`, `px-3`, `py-1.5`, `p-4`, `px-4`, `py-4`

#### Radius

- `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`

#### Shadows

- mostly `shadow-none`
- occasional `shadow-xs` in control tabs

#### Breakpoints

- `sm`, `lg`, `2xl`

#### Transitions

- `transition-colors`, `transition duration-150 ease-out`, `transition-transform`

### Tokens inferidos

Se infieren como tokens de diseño reutilizables por repetición visual:

- `surface` as base card background
- `surface-muted` as secondary neutral background
- `border-default` as separator rule
- `primary` as main CTA and data emphasis
- `success`, `warning`, `danger`, `info` as semantic state colors
- `rounded-xl` as default card radius
- `rounded-lg` as compact control radius
- `gap-2` as standard card separation
- `text-xs` as standard secondary UI size

> Importante: los valores inferidos deben tomarse como sugerencias de sistema, no como reemplazo de los valores observados directamente en `/`.

## 23. Rules for New Pages

Las nuevas páginas que quieran integrarse a la misma identidad visual deben respetar estas reglas:

- trabajar sobre fondos `background` o `surface`, nunca con colores saturados ajenos al sistema
- usar `border` y `surface-muted` para crear separación visual
- priorizar `rounded-xl` y `rounded-2xl` en cards y panels
- mantener texto principal en `text-text-primary` y secundario en `text-text-secondary`
- usar `primary` para acciones clave y estados de proceso
- no crear efectos de elevación pesados con sombras
- mantener layout compacto y densamente informativo
- usar hover sutil basado en cambio de fondo o borde
- mantener tipografía clara y sin exageraciones decorativas
- usar spacing compacto e intencional

## 24. Landing Page Guidelines

### Navbar

- fondo neutro o `surface` / `primary-50` muy suave
- borde inferior suave (`border-border`)
- chips de ubicación con patrón tipo card: `rounded-lg border border-border bg-surface`
- iconos en contenedor `rounded-md border border-primary-200/50 bg-primary-50 text-primary-600`
- hover con `hover:border-border-strong` y transición `duration-150`
- acciones de CTA compactas en `bg-primary-500` con hover `bg-primary-600`
- no hero nav heavy ni de marketing brillante

### Hero

- composición limpia y utilitaria
- título principal con alta legibilidad
- una sola línea de mensaje y una CTA clara
- dejar mucho espacio para estructura y claridad
- mantener visual con fondo claro y señales primarias de marca azul

### CTA

- usar variación primary para la acción más importante
- secondary outline para acciones complementarias
- radius y font size consistentes con dashboard
- mantener enfoque en clasificación y claridad de acción

### Sections

- cards con borde y un fondo neutro
- separación por padding y borde, no por sombra intensa
- contenido podría organizarse con grillas compactas y 2–4 columnas en desktop

### Feature sections

- iconos Lucide, micro-labels y textos con alto contraste
- cada feature en card o tile con borde simple
- no recargar con fotografías o ilustraciones excesivas

### Cards

- fondo `surface`
- borde `border`
- corner radius habitual `rounded-xl` / `rounded-2xl`
- hover mínimo: border / background

### Images

- si existen, deben ser funcionales y de alta claridad
- no deben competir con la interface
- mantener ratio controlado y bordes suaves

### Testimonials

- si se incorporan, usar cards pequeñas y serias, no “marketing exagerado”
- texto breve, autor con metadata clara

### Footer

- sección tranquila, compuesta por texto, links y marca
- no narrativa cinematográfica ni exceso de color

### Responsive

- desktop-first
- mantener cards compactas en tablet
- no convertir la página en un hero de mobile con demasiados elementos flotantes

### Spacing

- usar escala compacta: 2, 4, 6, 8, 12, 16, 24, 32
- evitar gap o padding “inflados” o decorativos

### Typography

- definir jerarquía clara: title, subtitle, body, microcopy
- no más de una o dos pesas tipográficas principales

### Colors

- base en `background`, `surface`, `surface-muted`, `text-primary`, `text-secondary`, `primary`
- usar estados solo si aportan claridad informativa

### Animations

- siempre sutiles, curtas y orientadas a feedback
- sin grandes desplazamientos, scale agresivos ni overlays pesados

## Conclusión

El design system de `/` es un dashboard de administración con una identidad visual de producto SaaS ligera, clara, compacta y funcional. Su fuerza está en los bordes, el espacio, la jerarquía tipográfica y el uso disciplinado de una paleta primaria azul + semántica de estado, sin depender de sombras ni efectos visuales decorativos.

## Archivos con estilo aprobado (no refactorizar)

- src/components/LandingPageComponents/Main.jsx
- src/components/LandingPageComponents/ServicesComponent.jsx
- src/components/LandingPageComponents/ContactDetails.jsx
- src/components/LandingPageComponents/Carousel.jsx
- src/components/LandingPageComponents/CarouselItem.jsx
- src/components/LandingPageComponents/SocialFooter.jsx
- src/components/LandingPageComponents/Footer.jsx
- src/app/(pages)/services/page.jsx
- src/components/LandingPageComponents/ServicesComponents/ServicesInfo.jsx
- src/components/LandingPageComponents/ServicesComponents/CardServices.jsx
- src/components/LandingPageComponents/Banner.jsx
- src/app/(pages)/coverage/page.jsx
- src/components/LandingPageComponents/CoverageComponents/MedicalCoverageList.jsx
- src/components/LandingPageComponents/CoverageComponents/MedicalCoverageItem.jsx
- src/app/(pages)/contact/page.jsx
- src/components/LandingPageComponents/ContactComponents/LaboratoryInfo.jsx
- src/components/LandingPageComponents/ContactComponents/ContactForm.jsx



