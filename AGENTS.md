# AGENTS.md

## 1. Contexto del proyecto
- **Proyecto:** Sitio web corporativo e interactivo de ingeniería y arquitectura de software enfocada en 2027 (`index.html`, `styles.css`, `app.js`).
- **Propósito:** Presentar la visión de desarrollo en 2027 con un simulador de orquestación multi-agente, un radar tecnológico filtrable con `View Transitions API`, un simulador de evolución del rol de ingeniería (2023–2027) y un visor de patrones de código.
- **Estructura de archivos:**
  - `index.html`: Estructura semántica HTML5, configuración de Tailwind CSS y carga de Lucide Icons.
  - `styles.css`: Reglas base, componentes visuales con `@layer`, `container-type`, variables CSS y transiciones.
  - `app.js`: Lógica modular encapsulada (`AetherApp`) para simuladores, filtros, pestañas de código y eventos del DOM.

## 2. Stack y convenciones de código
- **HTML (`index.html`):** Mantén etiquetas semánticas (`header`, `main`/`section`, `footer`), atributos de accesibilidad (`aria-label`, `role`) y diseño responsive mobile-first.
- **CSS (`styles.css`):** Respeta el orden de cascada `@layer base` y `@layer components`. Evita estilos globales agresivos o selectores `!important` salvo necesidad crítica documentada.
- **JavaScript (`app.js`):** Escribe JavaScript moderno ES6+, modular y encapsulado. Evita contaminar el ámbito global (`window`) con variables sueltas.
- **Idioma y estilo:** Mantén los textos visibles de la interfaz, comentarios técnicos y mensajes de retroalimentación en español claro y directo; usa nombres descriptivos para variables, funciones y clases.
- **Dependencias:** No añadas librerías o CDNs nuevos sin explicar antes el motivo y el impacto en rendimiento o peso.

## 3. Flujo de trabajo y verificación
- **Antes de editar:** Lee los archivos afectados y comprende cómo interactúan HTML, CSS y JS antes de proponer o aplicar cambios.
- **Cambios acotados:** Limita las modificaciones a los archivos necesarios para la tarea solicitada; no reformatees bloques de código que no forman parte del cambio.
- **Comprobación local:** Sirve el proyecto en un servidor local (por ejemplo, `npx serve .` o Live Server) y revisa que no existan errores en la consola del navegador ni regresiones en:
  - Simulador de terminal multi-agente y cambio de escenarios.
  - Filtros del radar tecnológico y renderizado de iconos.
  - Control deslizante de evolución (2023–2027).
  - Pestañas del laboratorio de código, copiado al portapapeles y formulario.
- **Al finalizar:** Resume qué archivos modificaste, qué comportamiento cambió y qué comprobaciones ejecutaste o quedaron pendientes.

## 4. Límites y reglas estrictas (`Do / Don't`)
- **No hacer sin confirmación:**
  - Reemplazar toda la arquitectura o reescribir el proyecto desde cero cuando solo se pida una mejora o ajuste puntual.
  - Agregar dependencias pesadas o servicios externos no solicitados.
  - Tocar archivos de configuración de despliegue, credenciales o secretos si se incorporan al repositorio más adelante.
- **Manejo de ambigüedad:** Si una petición admite dos interpretaciones relevantes (por ejemplo, cambiar diseño vs. lógica funcional o añadir backend), haz una pregunta breve antes de implementar o indica claramente la suposición adoptada.