# Design System — Resource Sheet v3

## Índice

1. [Identidad de marca](#1-identidad-de-marca)
2. [Paleta de color](#2-paleta-de-color)
3. [Tipografía](#3-tipografía)
4. [Espaciado](#4-espaciado)
5. [Border radius](#5-border-radius)
6. [Sombras](#6-sombras)
7. [Componentes](#7-componentes)
   - [Buttons](#71-buttons)
   - [Navigation](#72-navigation)
   - [Forms](#73-forms)
   - [Progress](#74-progress)
   - [Messages](#75-messages)
   - [Content](#76-content)
   - [Tabular](#77-tabular)
   - [Utility](#78-utility)
8. [Accesibilidad](#8-accesibilidad)
9. [Motion & Transitions](#9-motion--transitions)

---

## 1. Identidad de marca

El sistema de diseño está construido sobre una identidad **purple-first**: el púrpura es el hilo conductor de todos los productos, redes y servicios. El color core `#A100FF` (Brand/Core/300) es el punto de partida por defecto para la mayoría de las interacciones.

**Principios:**
- Consistencia cromática: uno de los tres púrpuras core debe aparecer en cada layout.
- Geometría sharp: border-radius 0 en cards y botones. La forma habla de precisión, no de suavidad.
- Jerarquía tipográfica clara: Inter para UI, Roboto Mono para valores técnicos y código.

---

## 2. Paleta de color

### 2.1 Core — Púrpuras

| Token            | Hex       | RGB           | LAB         | Uso                                  |
|------------------|-----------|---------------|-------------|--------------------------------------|
| Brand/Core/100   | `#E6DCFF` | 230, 220, 255 | 89, 8, −16  | Fondos suaves, hover states          |
| Brand/Core/200   | `#C2A3FF` | 194, 163, 255 | 72, 17, −30 | Elementos secundarios, bordes suaves |
| Brand/Core/300   | `#A100FF` | 161, 0, 255   | 42, 75, −80 | **Color principal de marca**         |
| Brand/Core/400   | `#7400CC` | 116, 0, 204   | 30, 62, −65 | Hover sobre botón primario           |
| Brand/Core/500   | `#420073` | 66, 0, 115    | 15, 46, −47 | Fondos oscuros, sidebar, tooltips    |

### 2.2 Secondary — Cian

| Token            | Hex       | RGB          | Uso                            |
|------------------|-----------|--------------|--------------------------------|
| Brand/Cyan/300   | `#00C8FF` | 0, 200, 255  | Acento digital, estados info   |
| Brand/Cyan/400   | `#0088CC` | 0, 136, 204  | Variante oscura de Cian        |

### 2.3 Secondary — Pink

| Token            | Hex       | RGB          | Uso                            |
|------------------|-----------|--------------|--------------------------------|
| Brand/Pink/300   | `#FF00C8` | 255, 0, 200  | Acento vibrante, highlights    |
| Brand/Pink/400   | `#CC0099` | 204, 0, 153  | Variante oscura de Pink        |

### 2.4 Neutrales

| Nombre       | Valor       | Uso                                        |
|--------------|-------------|--------------------------------------------|
| Background   | `#FAFAFA`   | Fondo general de la aplicación             |
| Surface      | `#FFFFFF`   | Cards, paneles, inputs                     |
| Surface Alt  | `#F1F1EF`   | Section titles, tokens, fondos alternativos|
| Border       | `#E0E0E0`   | Bordes de cards e inputs                   |
| Border Soft  | `#CFCFCF`   | Separadores internos de swatches           |
| Text Primary | `#000000`   | Títulos y etiquetas principales            |
| Text Body    | `#202020`   | Cuerpo de texto                            |
| Text Muted   | `#666666`   | Labels secundarios                         |
| Text Subtle  | `#999999`   | Placeholders, texto deshabilitado          |

### 2.5 Semánticos

| Estado   | Color     | Uso                          |
|----------|-----------|------------------------------|
| Success  | `#00A87A` | Confirmaciones, Pass badges  |
| Warning  | `#CC9A00` | Alertas moderadas            |
| Error    | `#CC0000` | Errores, Fail badges, danger |
| Info     | `#A100FF` | Información (mismo que core) |

### 2.6 Contraste (WCAG)

Los swatches documentan el cumplimiento AA/AAA con badges **Pass** / **Fail** para:
- Texto pequeño (18px, normal)
- Texto grande (32px+)
- Elementos gráficos (iconos)

Colores que superan el ratio 4.5:1 sobre blanco: Core/400, Core/500, Cyan/400, Pink/400.  
Colores que superan el ratio 3:1 sobre blanco (solo gráficos): Core/300.

---

## 3. Tipografía

### 3.1 Familias

| Familia          | Uso                                               |
|------------------|---------------------------------------------------|
| `Inter`          | Toda la UI: labels, body, botones, navegación     |
| `Roboto Mono`    | Valores técnicos (hex, RGB, LAB), código, paginación |

### 3.2 Escala

| Nombre   | Tamaño  | Peso    | Tracking       | Ejemplo de uso               |
|----------|---------|---------|----------------|------------------------------|
| Display  | 48–64px | 600     | −1.92px        | Títulos de sección (resource sheet) |
| Heading  | 24–32px | 600     | −0.48px        | Sub-secciones, card titles   |
| Body L   | 20px    | 400     | 0              | Descripciones largas         |
| Body     | 16–18px | 400     | −0.18px        | Texto general, labels        |
| Small    | 14px    | 400/600 | 0              | Contenido secundario         |
| Caption  | 12px    | 400     | 0              | Metadata, fechas, subtítulos |
| Mono     | 16px    | 500     | −0.32px        | Valores de color (hex/rgb)   |

### 3.3 Line-height

| Contexto     | Valor |
|--------------|-------|
| Display      | 1.2   |
| Body largo   | 1.7   |
| Body normal  | 1.6   |
| Heading      | 1.4   |
| UI compacto  | 1.0   |

---

## 4. Espaciado

El sistema usa una escala de 4px base con saltos 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64.

| Token  | px  | Uso típico                         |
|--------|-----|------------------------------------|
| xs     | 4   | Padding interno de badges          |
| sm     | 8   | Gap entre elementos de formulario  |
| md     | 12  | Gap entre ítems de lista           |
| lg     | 16  | Padding de cards compactas         |
| xl     | 24  | Padding de secciones internas      |
| 2xl    | 32  | Gap entre grupos de componentes    |
| 3xl    | 40  | Padding de secciones principales   |
| 4xl    | 48  | Gap entre swatches de color        |
| 5xl    | 64  | Título principal del resource sheet|

---

## 5. Border radius

| Contexto                         | Valor         |
|----------------------------------|---------------|
| Botones (todos los tamaños)      | `0`           |
| Cards, paneles, modales          | `0`           |
| Inputs, textareas, selects       | `0`           |
| Dropdowns, popovers              | `0`           |
| Tablas y sus contenedores        | `0`           |
| Toasts, alerts                   | `0`           |
| Code blocks                      | `0`           |
| Badges de estado/contraste       | `9999px` (pill) |
| Chips / tags                     | `9999px` (pill) |
| Avatares                         | `9999px` (círculo) |
| Toggle switches                  | `9999px` (cápsula) |
| Spinners de carga                | `9999px` (círculo) |
| Barras de progreso (track)       | `9999px`      |

> **Regla:** border-radius 0 en todo elemento rectangular de UI. Solo los elementos intrínsecamente circulares (avatares, toggles, pills) conservan `border-radius: 9999px`.

---

## 6. Sombras

| Nivel   | Valor CSS                        | Uso                           |
|---------|----------------------------------|-------------------------------|
| xs      | `0 1px 3px rgba(0,0,0,0.08)`    | Cards en reposo               |
| md      | `0 4px 12px rgba(0,0,0,0.10)`   | Dropdowns, tooltips           |
| lg      | `0 8px 24px rgba(0,0,0,0.12)`   | Modales, toasts               |

---

## 7. Componentes

### 7.1 Buttons

#### Variantes

| Variante    | Background   | Text      | Border              | Hover background |
|-------------|--------------|-----------|---------------------|------------------|
| Primary     | `#A100FF`    | `#FFFFFF` | —                   | `#7400CC`        |
| Secondary   | Transparente | `#A100FF` | `1px solid #A100FF` | `#F5EEFF`        |
| Ghost       | Transparente | `#A100FF` | —                   | `#F5EEFF`        |
| Danger      | `#DC2626`    | `#FFFFFF` | —                   | `#B91C1C`        |
| Icon button | Transparente | `#A100FF` | `1px solid #A100FF` | `#F5EEFF`        |

#### Tamaños

| Size | Padding      | Font size |
|------|--------------|-----------|
| sm   | 12px / 4px   | 12px      |
| md   | 16px / 8px   | 14px      |
| lg   | 24px / 12px  | 16px      |

#### Estado deshabilitado

| Variante  | Background   | Text      | Border              |
|-----------|--------------|-----------|---------------------|
| Primary   | `#D4B3FF`    | `#FFFFFF` | —                   |
| Secondary | Transparente | `#D4B3FF` | `1px solid #D4B3FF` |
| Ghost     | Transparente | `#D4B3FF` | —                   |

---

### 7.2 Navigation

#### Navbar
- Ítems de texto sin fondo en reposo, color `#666`.
- Ítem activo: color `#A100FF`, `font-weight: 600`, `border-bottom: 2px solid #A100FF`.
- Sin border-radius en ningún estado.

#### Tabs (pill group)
- Contenedor: `background: #F3F4F6`, padding 4px.
- Tab activo: `background: white`, `color: #A100FF`, `font-weight: 600`.
- Tab inactivo: transparente, `color: #666`.

#### Breadcrumb
- Separador `/` en gris `#999`.
- Ítem actual: `color: #A100FF`, `font-weight: 600`.
- Ítems anteriores: `color: #666`, hover `#A100FF`.

#### Sidebar
- Fondo: `#420073` (Brand/Core/500).
- Texto e iconos: `white`.
- Hover: `rgba(255,255,255,0.1)`.
- Ancho expandido: 130px. Contraído: 44px.

#### Paginación
- Botones 32×32px, borde `#E0E0E0`.
- Página activa: `background: #A100FF`, `color: white`, `border-color: #A100FF`.
- Font: Roboto Mono.

---

### 7.3 Forms

#### Inputs

| Estado    | Border           | Ring / Focus          |
|-----------|------------------|-----------------------|
| Default   | `#E0E0E0`        | —                     |
| Focus     | `#A100FF`        | `1px ring #A100FF`    |
| Error     | `#EF4444`        | `1px ring #EF4444`    |
| Disabled  | `#E0E0E0`        | cursor: not-allowed   |

- Padding: 12px / 8px.
- Font size: 14px.
- Mensaje de error: 12px, `color: #EF4444`.

#### Checkbox & Radio
- `accent-color: #A100FF`.
- Tamaño: 16×16px.

#### Toggle
- Track activo: `#A100FF`. Track inactivo: `#D1D5DB`.
- Thumb: `white`, sombra suave.
- Ancho: 44px, alto: 24px.

#### Select
- Misma apariencia que input text.
- Cursor `pointer`.

---

### 7.4 Progress

#### Circular
- Track: `#F1F1EF`.
- Fill: `#A100FF`.
- Stroke-linecap: `round`.
- Label central: `color: #A100FF`, Roboto Mono.

#### Barras lineales

| Variante       | Color       |
|----------------|-------------|
| Default        | `#A100FF`   |
| Variante 2     | `#7400CC`   |
| Variante 3     | `#C2A3FF`   |
| Complete/Alt   | `#00C8FF`   |

- Track: `#F3F4F6`.
- Altura: 8px. Track y fill con `border-radius: 9999px`.

#### Steps
- Paso completado: fondo `#A100FF`, check blanco.
- Paso activo: borde `#A100FF`, texto `#A100FF`.
- Paso pendiente: borde `#E0E0E0`, texto `#999`.
- Conector completado: `#A100FF`. Pendiente: `#E0E0E0`.

#### Spinner
- Borde parcial: `border-top-color: #A100FF`, resto `#E6DCFF`.
- Animación: `spin` continuo.

---

### 7.5 Messages

#### Alerts

| Tipo    | Background | Border left   | Icono       |
|---------|------------|---------------|-------------|
| Info    | `#F0E8FF`  | `#C2A3FF`     | `#A100FF`   |
| Success | `#E5FAF1`  | `#00C8A0`     | `#00A87A`   |
| Warning | `#FFF8E6`  | `#FFBE00`     | `#CC9A00`   |
| Error   | `#FFF0F0`  | `#FF4444`     | `#CC0000`   |

#### Toasts
- Fondo: `white`.
- `border-left: 4px solid <color semántico>`.
- Botón de cierre con icono × en gris.

#### Chat bubbles
- Mensaje propio: fondo `#A100FF`, texto blanco, alineado a la derecha.
- Mensaje recibido: fondo `#F1F1EF`, texto `#333`, alineado a la izquierda.
- `border-radius: 0` (regla general).

#### Modal
- Header: fondo `#A100FF`, texto blanco.
- Body: padding 16px, texto 14px.
- Acciones: botón cancelar con borde gris, botón destructivo en rojo.

---

### 7.6 Content

#### Cards
- Borde: `1px solid #E0E0E0`.
- `border-radius: 0`.
- Sombra: `xs`.
- Imagen/header: gradiente `#E6DCFF → #C2A3FF`.
- Tag badge: fondo `#F0E8FF`, texto `#A100FF`.
- CTA inline: `color: #A100FF`, icono chevron.

#### Badges de estado

| Estado   | Background          | Text       |
|----------|---------------------|------------|
| Active   | `#00A87A` + 12% op | `#00A87A`  |
| Pending  | `#CC9A00` + 12% op | `#CC9A00`  |
| Inactive | `#999` + 12% op    | `#999`     |
| Error    | `#CC0000` + 12% op | `#CC0000`  |
| New      | `#A100FF` + 12% op | `#A100FF`  |
| Beta     | `#00C8FF` + 12% op | `#00C8FF`  |

#### Avatares
- `border-radius: 9999px`.
- Colores por inicial: rotan entre `#A100FF`, `#7400CC`, `#00C8FF`, `#FF00C8`, `#420073`.
- Avatar group: overlap de −10px con índice z decreciente.

#### Escala tipográfica expuesta
- Display: 24px bold.
- Heading: 18px semibold.
- Body: 14px regular.
- Caption: 12px regular, `color: #6B7280`.

---

### 7.7 Tabular

#### Tabla

| Zona    | Background         |
|---------|--------------------|
| Header  | `#F9FAFB`          |
| Row par | `white`            |
| Row impar | `#FAFAFA`        |
| Row selected | `#F5EEFF`    |
| Row hover | `#F9F6FF`        |
| Footer  | `#F9FAFB`          |

- Header text: 12px, uppercase, tracking-wide, `color: #6B7280`.
- Sort activo: `color: #A100FF`.
- Checkbox con `accent-color: #A100FF`.
- Actions: iconos 13px en gris, hover `#A100FF`.
- Borde separador: `1px solid #F3F4F6`.

#### Status en tabla

| Estado   | Dot + texto        |
|----------|--------------------|
| Active   | `#00A87A`          |
| Pending  | `#CC9A00`          |
| Inactive | `#999`             |

#### Summary cards
- Grid 3 columnas.
- Borde: `1px solid #E0E0E0`. `border-radius: 0`.
- Valor: 18px bold, `color: #A100FF`.
- Label: 12px, `color: #6B7280`.

---

### 7.8 Utility

#### Tooltips
- Fondo: `#420073` (Brand/Core/500).
- Texto: white, 12px.
- Flecha triangular hacia abajo en el mismo color.
- Aparece en hover, posición `bottom-full`.

#### Chips / Tags
- Fondo: `#F0E8FF`. Texto: `#A100FF`. `border-radius: 9999px`.
- Botón de remove: × inline, hover `#7400CC`.

#### Dropdown
- Trigger: borde `#E0E0E0`, hover borde `#A100FF`.
- Panel: `background: white`, borde `#E0E0E0`, sombra `md`.
- Opción activa: `color: #A100FF`, `font-weight: 600`.
- Opción hover: `background: #F5EEFF`, `color: #A100FF`.
- Ícono chevron rota 180° cuando abierto.

#### Slider
- `accent-color: #A100FF`.
- Valor numérico: Roboto Mono, `color: #A100FF`.

#### Code block
- Fondo: `#1E0040` (púrpura muy oscuro).
- Texto: `#C2A3FF` (Brand/Core/200).
- Font: Roboto Mono, 12px.

#### Divisores
- Línea simple: `1px solid #E0E0E0`.
- Línea de marca: `1px solid #A100FF`.
- Divisor con texto: líneas grises con label centrado.

---

## 8. Accesibilidad

- **Contraste**: todos los colores documentados con ratio WCAG AA/AAA en la paleta.
- **Focus visible**: inputs muestran `ring` de 1px en `#A100FF` al recibir foco de teclado.
- **Estados disabled**: opacidad reducida + `cursor: not-allowed`. Nunca se elimina el componente del DOM.
- **Aria**: atributos `aria-hidden` en elementos decorativos de los swatches.
- **Semántica HTML**: `<button>`, `<nav>`, `<table>`, `<form>`, `<label>` correctamente asociados.
- **Alt text**: imágenes y avatares siempre con texto alternativo o `aria-label`.

---

## 9. Motion & Transitions

| Propiedad              | Duración  | Easing         | Uso                            |
|------------------------|-----------|----------------|--------------------------------|
| Color / background     | 150ms     | ease-in-out    | Hover en botones, links        |
| Border color           | 150ms     | ease-in-out    | Focus en inputs                |
| Width (sidebar)        | 200ms     | ease           | Colapsar/expandir sidebar      |
| Transform (toggle)     | 150ms     | ease           | Thumb del toggle               |
| Transform (chevron)    | 200ms     | ease           | Ícono del dropdown             |
| Spin (spinner)         | continuo  | linear         | Indicador de carga             |

**Principio general:** las transiciones deben ser funcionales, no decorativas. Duración máxima 200ms para interacciones de UI directas.
