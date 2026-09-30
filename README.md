# Sitio web de Psic. Fernanda Hernández

Sitio multipágina estático de psicoterapia **exclusivamente en línea**, construido con Astro, TypeScript y Tailwind CSS. Las ilustraciones y elementos de marca originales están en `public/assets/`.

## Desarrollo

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Desplegar en Cloudflare Workers

El sitio es estático y `wrangler.jsonc` ya apunta a `dist/`. No requiere adaptador de servidor ni un repositorio Git. Desde PowerShell, en la carpeta del proyecto:

```powershell
npm install
npx wrangler login
```

Define el nombre del proyecto en `wrangler.jsonc` si quieres cambiar `fernanda-hernandez`. Configura `PUBLIC_SITE_URL` en un archivo `.env` con la URL pública completa que usarás (`https://...workers.dev` o tu dominio propio). Después publica:

```powershell
npm run check
npm run deploy
```

Wrangler mostrará la URL al terminar. Si todavía no conocías la URL al hacer el primer despliegue, escríbela en `PUBLIC_SITE_URL` y ejecuta `npm run deploy` otra vez para actualizar los enlaces canónicos, Open Graph, sitemap y `robots.txt`. Para un dominio propio, cambia `PUBLIC_SITE_URL` al dominio definitivo y vuelve a desplegar. El 404 está configurado en `wrangler.jsonc`.

## Configuración antes de publicar

1. Copia `.env.example` a `.env`.
2. Define `PUBLIC_SITE_URL` con el dominio canónico real, incluido `https://`. Astro lo usa para los canonical y el sitemap. El valor predeterminado `https://example.com` es solo de desarrollo.
3. Define `PUBLIC_WHATSAPP_NUMBER` con el número internacional completo. Mientras esté vacío, el botón usa el enlace genérico de WhatsApp y muestra una selección de contactos; **no abre un chat con Fernanda**.
4. Añade `PUBLIC_INSTAGRAM_URL` y `PUBLIC_FACEBOOK_URL` cuando existan. Mientras estén vacíos, los iconos llevan a las páginas generales de las plataformas y se identifican como enlaces de muestra.
5. `robots.txt` se genera automáticamente con el mismo dominio canónico.
6. Revisa `src/data/site.ts` para añadir credenciales solamente cuando estén confirmadas. La biografía está en `src/pages/sobre-mi.astro` y su resumen en `src/pages/index.astro`.
7. Sustituye el contenido base de `src/pages/aviso-de-privacidad.astro` por el aviso legal definitivo antes de empezar a recibir consultas.

El sitio no incluye teléfono real, perfiles sociales propios, cédula, tarifas ni horarios porque esos datos no se proporcionaron. No se ofrece atención presencial ni se muestra una ubicación.

## Contenido y diseño

- Los motivos de consulta y sus descripciones están en `src/data/accompaniment.ts`.
- La navegación está en `src/data/navigation.ts`.
- Cada artículo es un Markdown en `src/content/blog/` con `title`, `description`, `publishDate`, `author`, `draft` y `tags`. `updatedDate` e `image` son opcionales. El nombre de archivo determina el slug. Usa `image` para la portada del listado y del artículo.
- Para sustituir una ilustración, conserva dimensiones adecuadas y actualiza su ruta y `width`/`height` en la página que la utiliza. Los SVG decorativos y los WebP están en `public/assets/`.
- Los tokens de color y la tipografía están en `src/styles/global.css`; los estilos de la portada están en `src/styles/home.css`.

## Analítica y verificación desde el navegador

### Cloudflare Web Analytics

Cloudflare ofrece un tablero de visitas y rendimiento. Para activarlo en este Worker:

1. En el panel de Cloudflare, abre **Web Analytics** y elige **Add a site**.
2. Agrega el hostname actual: `fernanda-hernandez.mayiitoo-alberto.workers.dev`.
3. En **Manage site**, copia el token del snippet.
4. Guárdalo en `.env` como `PUBLIC_CF_WEB_ANALYTICS_TOKEN=tu_token` y ejecuta `npm run deploy`.
5. Después abre Web Analytics en Cloudflare. El panel muestra visitas, páginas, referentes, navegador/dispositivo y Core Web Vitals.

El snippet solo se incorpora a builds de producción cuando hay token; no mide las visitas de `localhost`. Cloudflare Web Analytics no incluye seguimiento de eventos personalizados, así que no cuenta por sí solo los clics de WhatsApp. La documentación de Cloudflare indica que el beacon no usa cookies ni almacenamiento local para estas métricas: <https://developers.cloudflare.com/web-analytics/about/>.

### Google Search Console

Search Console permite revisar consultas, impresiones, clics e indexación en Google. Con el hostname `workers.dev`, crea en Search Console una propiedad de prefijo de URL con la dirección completa del sitio y elige la verificación por etiqueta HTML. Copia el valor de `content` a `.env` como `PUBLIC_GOOGLE_SITE_VERIFICATION=tu_codigo`, ejecuta `npm run deploy` y luego pulsa **Verificar** en Search Console. Envía también `https://fernanda-hernandez.mayiitoo-alberto.workers.dev/sitemap-index.xml`.

La etiqueta solo se agrega a producción si ese valor existe. Una propiedad de dominio requiere acceso a DNS; cuando tengas un dominio propio, podrás verificar el dominio completo desde Cloudflare DNS.

Las dos variables ya están listadas sin valores en `.env.example`. No compartas contraseñas ni tokens de acceso a Cloudflare; el token del beacon y la etiqueta de verificación son los valores que se insertan en el HTML público.
