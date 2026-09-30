# Analítica del sitio

## Métricas de visitas

La integración de Cloudflare Web Analytics ya está preparada en `BaseLayout.astro`. Para activarla:

1. En Cloudflare, abre **Web Analytics**, agrega el sitio y copia el token público del beacon.
2. Define `PUBLIC_CF_WEB_ANALYTICS_TOKEN` en el `.env` usado para compilar el sitio. Si la compilación ocurre en CI, configura la misma variable en el entorno de build.
3. Vuelve a compilar y desplegar. El script solo se incluye en producción cuando existe el token.
4. Consulta páginas, visitas, fuentes de referencia, país agregado, navegador y Core Web Vitals desde el panel de Web Analytics de Cloudflare.

El beacon es público por diseño; no es una credencial secreta. No lo guardes como contraseña, pero tampoco subas el `.env` al repositorio.

Cloudflare Web Analytics mide navegación y rendimiento con datos agregados. No ofrece eventos personalizados, por lo que esta integración no cuenta clics en WhatsApp, clics de “agendar” ni citas confirmadas. Las visitas al sitio sirven para identificar qué artículos atraen atención; no equivalen a conversiones ni a pacientes.

## Consultas de Google

Google Search Console permite revisar consultas que mostraron el sitio, impresiones, clics y páginas indexadas. Verifica la propiedad del sitio, añade el valor de verificación en `PUBLIC_GOOGLE_SITE_VERIFICATION` y envía el índice del sitemap publicado. Esta integración añade la etiqueta de verificación; no necesita código de seguimiento adicional.

La inclusión y posición en Google o sus experiencias de IA no se pueden garantizar. La prioridad es mantener contenido propio, útil, bien atribuido y técnicamente accesible; el nuevo artículo responde preguntas reales sobre psicoterapia por videollamada sin crear páginas de palabras clave repetidas.

## Alcance de la oferta

La atención que presenta el sitio está dirigida actualmente a personas ubicadas en México. El contenido puede ser útil para lectores de español en otros lugares, pero no debe prometer que Fernanda ofrece sesiones fuera de México.
