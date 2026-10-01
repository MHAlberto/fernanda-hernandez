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

El Worker `fernanda-hernandez` está configurado para usar `nube-serena.com` como dominio personalizado. La zona DNS debe estar activa en la misma cuenta de Cloudflare que el Worker. Configura `PUBLIC_SITE_URL=https://nube-serena.com` en `.env` o en el entorno de compilación. Después publica:

```powershell
npm run check
npm run deploy
```

Wrangler mostrará la URL al terminar. Comprueba que `https://nube-serena.com/`, `https://nube-serena.com/google234a2aafb28843a5.html` y `https://nube-serena.com/sitemap-index.xml` respondan públicamente. El 404 está configurado en `wrangler.jsonc`.

## Configuración antes de publicar

1. Copia `.env.example` a `.env`.
2. Mantén `PUBLIC_SITE_URL=https://nube-serena.com`. Astro lo usa para los enlaces canónicos, Open Graph, el sitemap y `robots.txt`.
3. Confirma que el número de WhatsApp y el perfil de Instagram incluidos como valores predeterminados en `src/data/site.ts` pertenecen a Fernanda. Si cambian, define `PUBLIC_WHATSAPP_NUMBER` y `PUBLIC_INSTAGRAM_URL` con los valores correctos.
4. Añade `PUBLIC_FACEBOOK_URL` solo cuando haya un perfil confirmado. Mientras esté vacío, el enlace de Facebook no aparece.
5. `robots.txt` se genera automáticamente con el mismo dominio canónico.
6. Revisa `src/data/site.ts` para añadir credenciales solamente cuando estén confirmadas. La biografía está en `src/pages/sobre-mi.astro` y su resumen en `src/pages/index.astro`.
7. Confirma un correo y un domicilio para notificaciones de privacidad (`PUBLIC_PRIVACY_EMAIL` y `PUBLIC_PRIVACY_CONTACT_ADDRESS`) y revisa el aviso integral con Fernanda antes de tratar datos clínicos.

El sitio aún no publica cédula, formación verificable, tarifas ni horarios porque esos datos no se proporcionaron. No se ofrece atención presencial ni se muestra una ubicación.

## Contenido y diseño

- Los motivos de consulta y sus descripciones están en `src/data/accompaniment.ts`.
- La navegación está en `src/data/navigation.ts`.
- Cada artículo es un Markdown en `src/content/blog/` con `title`, `description`, `publishDate`, `author`, `draft` y `tags`. `updatedDate` e `image` son opcionales. El nombre de archivo determina el slug. Usa `image` para la portada del listado y del artículo.
- Para sustituir una ilustración, conserva dimensiones adecuadas y actualiza su ruta y `width`/`height` en la página que la utiliza. Los SVG decorativos y los WebP están en `public/assets/`.
- Los tokens de color y la tipografía están en `src/styles/global.css`; los estilos de la portada están en `src/styles/home.css`.

## Analítica y verificación desde el navegador

### Cloudflare Web Analytics

Cloudflare ofrece un tablero de visitas y rendimiento. En este Worker:

1. Abre **Web Analytics** en el panel de Cloudflare.
2. El hostname `nube-serena.com` ya está vinculado al Worker y el HTML público muestra el beacon inyectado automáticamente por Cloudflare.
3. Consulta Web Analytics en Cloudflare. El panel muestra visitas, páginas, referentes, navegador/dispositivo y Core Web Vitals. No configures `PUBLIC_CF_WEB_ANALYTICS_TOKEN` mientras la inyección automática siga activa para evitar dos beacons.

El snippet manual solo se incorpora a builds de producción cuando hay token; la inyección automática del dominio funciona por separado y no mide las visitas de `localhost`. Cloudflare Web Analytics no incluye seguimiento de eventos personalizados, así que no cuenta por sí solo los clics de WhatsApp. La documentación de Cloudflare indica que el beacon no usa cookies ni almacenamiento local para estas métricas: <https://developers.cloudflare.com/web-analytics/about/>.

### Google Search Console

Search Console permite revisar consultas, impresiones, clics e indexación en Google. Para la propiedad de prefijo `https://nube-serena.com/`, el archivo entregado por Fernanda está en `public/google234a2aafb28843a5.html`. Después de desplegar, comprueba que la URL del archivo responda exactamente y pulsa **Verificar** en Search Console con la cuenta que descargó el archivo. Conserva el archivo publicado. Envía también `https://nube-serena.com/sitemap-index.xml`. Para una propiedad de dominio completa, Google exige verificación DNS.

La etiqueta HTML opcional solo se agrega a producción si `PUBLIC_GOOGLE_SITE_VERIFICATION` tiene un valor. Una propiedad de dominio completa requiere verificación DNS en la zona de Cloudflare.

Google Analytics 4 es distinto de Search Console. El flujo web entregado para `https://nube-serena.com/` tiene el ID `G-7EKF16D1R7`; `gtag.js` se incorpora al inicio del `<head>` de todas las páginas de producción. El archivo de Search Console no incluye este ID. Si cambia la propiedad, actualiza `PUBLIC_GA_MEASUREMENT_ID`.

No compartas contraseñas ni tokens de acceso a Cloudflare. El token del beacon y el ID de GA4 son identificadores públicos que aparecen en el HTML del sitio.
