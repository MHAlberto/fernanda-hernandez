# Analítica del sitio

## Métricas de visitas

Cloudflare Web Analytics está activo mediante la inyección automática del beacon en el dominio. `BaseLayout.astro` conserva una opción manual para otros despliegues:

1. `nube-serena.com` ya está vinculado al Worker y Cloudflare inyecta automáticamente el beacon en el HTML público.
2. Consulta las visitas en **Web Analytics** dentro de Cloudflare. Los datos pueden tardar unos minutos en aparecer.
3. Mantén `PUBLIC_CF_WEB_ANALYTICS_TOKEN` vacío mientras la instalación automática esté activa para evitar dos beacons. Si se desactiva la instalación automática y se elige instalación manual, copia entonces el token público al entorno de compilación y vuelve a desplegar.
4. Consulta páginas, visitas, fuentes de referencia, país agregado, navegador y Core Web Vitals desde el panel de Web Analytics de Cloudflare.

El beacon es público por diseño; no es una credencial secreta. No lo guardes como contraseña, pero tampoco subas el `.env` al repositorio.

Cloudflare Web Analytics mide navegación y rendimiento con datos agregados. No ofrece eventos personalizados, por lo que esta integración no cuenta clics en WhatsApp, clics de “agendar” ni citas confirmadas. Las visitas al sitio sirven para identificar qué artículos atraen atención; no equivalen a conversiones ni a pacientes.

## Google Analytics 4

El flujo web proporcionado para `https://nube-serena.com/` usa el ID `G-7EKF16D1R7`. La plantilla incluye una sola etiqueta `gtag.js` al inicio del `<head>` de cada página de producción. El ID público está también en `.env.example`; `PUBLIC_GA_MEASUREMENT_ID` permite sustituirlo o desactivarlo con un valor vacío. Comprueba la etiqueta publicada con Tag Assistant y las visitas en Tiempo real de GA4. El archivo `google234a2aafb28843a5.html` corresponde a Search Console y no a GA4.

El aviso de privacidad describe el uso de GA4 y sus posibles cookies. Si el sitio atiende visitantes del Espacio Económico Europeo, revisa con Fernanda la configuración del modo de consentimiento antes de orientar la medición o publicidad a esas personas.

## Consultas de Google

Google Search Console permite revisar consultas que mostraron el sitio, impresiones, clics y páginas indexadas. Para la propiedad de prefijo `https://nube-serena.com/`, el archivo de verificación está en `public/google234a2aafb28843a5.html`. Tras desplegarlo, visita `https://nube-serena.com/google234a2aafb28843a5.html`, verifica la propiedad en Search Console y envía `https://nube-serena.com/sitemap-index.xml`. Conserva el archivo publicado. La verificación por GA4 es un método alternativo que exige la misma cuenta con permiso de edición y el fragmento de seguimiento en el `<head>`; no activa Analytics por sí misma.

La inclusión y posición en Google o sus experiencias de IA no se pueden garantizar. La prioridad es mantener contenido propio, útil, bien atribuido y técnicamente accesible; el nuevo artículo responde preguntas reales sobre psicoterapia por videollamada sin crear páginas de palabras clave repetidas.

## Alcance de la oferta

La atención que presenta el sitio está dirigida actualmente a personas ubicadas en México. El contenido puede ser útil para lectores de español en otros lugares, pero no debe prometer que Fernanda ofrece sesiones fuera de México.
