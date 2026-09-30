# PROMPT — Sitio web multipágina para Psic. Fernanda Hernández

## Dirección aprobada — actualización del 29 de septiembre de 2026

Estas correcciones prevalecen sobre cualquier parte anterior del brief que las contradiga:

- El fondo principal es crema **#F8F4EF**. Usa el verde de la paleta para secciones secundarias, navegación y acentos; conserva terracota, beige y rosa suave como acentos, no como fondos dominantes.
- La atención es exclusivamente en línea. No mostrar dirección, mapa, consultorio ni ubicación.
- Evitar cajitas, tarjetas, mosaicos, divisores y líneas horizontales. Favorecer composición editorial abierta, tipografía, ilustración recortada y formas orgánicas.
- Hero en dos columnas como las referencias 001–003: titular editorial y dos acciones a la izquierda; una sola ilustración protagonista y un mensaje orgánico integrado a la derecha. Mantener aire, no saturarlo de adornos.
- Cada tema, enlace o llamada a la acción debe llevar directamente a una explicación o a una acción útil.
- En inicio, explicar el proceso con estos pasos: 01 Escríbeme; 02 Cuéntame brevemente qué buscas; 03 Agendamos. Cada paso debe abrir su destino correspondiente.
- Hacer que Contacto muestre pronto un botón de WhatsApp y una vía clara para agendar. Si se usan datos de muestra, indicarlo.
- Acompañamiento debe enlazar cada motivo a una guía editorial con índice amplio, explicaciones claras y fuentes confiables en español e inglés. Justificar el texto del artículo.
- Sobre mí debe aportar contexto personal y de trabajo sin inventar credenciales ni repetir bloques de otras páginas. El tono será formal, cercano y cálido.
- No añadir adornos de plantas repetidos ni macetas fuera de contexto. En “Respirar con atención”, usar solo la ilustración existente de respiración.

## Correcciones vigentes de la cliente

Estas decisiones posteriores prevalecen sobre cualquier instrucción contradictoria del brief inicial:

- **Modalidad exclusivamente en línea.** No mostrar dirección, ubicación de consultorio, mapa ni atención presencial; tampoco crear una ruta de ubicación.
- **Dirección visual abierta.** Evitar tarjetas, cajitas, paneles, mosaicos y divisores horizontales en todo el sitio. Presentar el contenido con tipografía, espacio, ilustraciones recortadas y formas orgánicas asimétricas; las imágenes deben llevar el mensaje visual.
- **Imágenes generadas.** Crear arte nuevo cuando la cliente lo pida expresamente. Convertirlo a WebP optimizado con transparencia cuando corresponda y conservar solo esa versión en el proyecto; eliminar las copias PNG para mantenerlo ligero y conservar el estilo de las ilustraciones existentes.
- **Artículos de salud mental.** Investigar y enlazar fuentes confiables; explicar con tono cálido y profesional, distinguir evidencia de posibilidades prácticas y evitar resultados o testimonios inventados.

## Rol

Actúa como arquitecto frontend senior, diseñador UI/UX, especialista en Astro, accesibilidad, rendimiento, SEO técnico y despliegue en Cloudflare. Tu tarea es **construir el sitio completo**, no solo proponer una maqueta. Primero inspecciona el proyecto y los assets existentes; después implementa, prueba y deja una primera versión lista para desplegar.

## Objetivo

Construir un sitio web profesional, cálido, contemporáneo y ligero para **Psic. Fernanda Hernández**, psicóloga clínica / psicoterapeuta con enfoque **integrativo y psicodinámico**, con atención exclusivamente en línea.

El sitio debe servir para presentar a Fernanda, explicar su enfoque, mostrar de forma prudente qué tipo de acompañamiento ofrece, facilitar contacto por WhatsApp, Instagram y Facebook, permitir llegar a una página específica para agendar, publicar artículos y posicionarse correctamente en buscadores.

Debe ser un **sitio multipágina real**, no una SPA.

---

## 1. Stack y criterio técnico

Usa las versiones estables más recientes disponibles al momento de ejecutar el proyecto.

- Astro + TypeScript estricto.
- Tailwind CSS moderno mediante `tailwindcss` + `@tailwindcss/vite`.
- Cloudflare Workers como destino preferido de despliegue.
- `@astrojs/sitemap`.
- `@lucide/astro` para iconos generales de interfaz.
- `simple-icons` solo para marcas: Instagram, Facebook y WhatsApp.
- JavaScript nativo para pequeñas interacciones.
- No añadir React salvo necesidad real.
- No añadir GSAP inicialmente.
- Mantener el JavaScript enviado al navegador al mínimo posible.

Referencia actual de este proyecto: Astro está en la rama 7.x y Tailwind en la rama 4.x. Instala con `@latest` y comprueba la documentación de la versión instalada antes de usar APIs concretas.

Si el proyecto ya existe, no lo recrees ni borres archivos. Adapta lo existente.

---

## 2. Inspección obligatoria antes de programar

Antes de crear componentes:

1. Inspecciona recursivamente `./assets`, `./src`, `./public`, `package.json`, `astro.config.*` y `wrangler.*`.
2. Haz un inventario real de los assets.
3. No inventes nombres de archivos que no existan.
4. Genera imágenes por IA solo cuando la cliente lo solicite expresamente; en ese caso usa image_gen y conserva en el proyecto únicamente la versión WebP optimizada.
5. No sustituyas assets por emojis.
6. Usa SVG para elementos vectoriales/decorativos y WebP para ilustraciones complejas.
7. No borres ni renombres assets sin necesidad.
8. Si `./assets` está fuera de `src`, reorganízalo de forma segura y actualiza todas las referencias.

Los assets siguen aproximadamente estas familias:

- logos;
- ilustraciones principales;
- elementos decorativos orgánicos;
- elementos botánicos;
- formas de fondo;
- patrones/texturas;
- ilustraciones pequeñas.

La carpeta `07-iconos-ui` puede no existir. No es un problema: usa iconos como componentes SVG.

---

## 3. Lenguaje visual

Mantén el diseño aprobado: **Corporate Memphis refinado + editorial + bienestar premium**.

Debe sentirse humano, sereno, elegante, contemporáneo, profesional y cercano; nunca infantil ni clínico frío.

### Paleta base

```css
--cream: #F8F4EF;
--sage: #A8B7A3;
--sage-dark: #698F84;
--forest: #29433F;
--terracotta: #D8A18B;
--beige: #EADCCF;
--rose-soft: #F2E9E4;
--text: #334744;
--muted: #667370;
```

Ajusta ligeramente si los assets existentes lo requieren.

### Tipografía

- títulos: serif editorial, por ejemplo Cormorant Garamond o equivalente;
- texto: sans legible, por ejemplo Manrope o Inter.

Preferir fuentes autohospedadas o el mecanismo moderno de fuentes de Astro. No cargar pesos innecesarios.

### Evitar

- dashboards;
- tarjetas repetitivas;
- cajas con bordes por todas partes;
- sombras fuertes;
- glassmorphism;
- carruseles;
- botones gigantes;
- pills excesivas;
- iconos genéricos de cerebro;
- testimonios inventados.

### Usar

- composición editorial abierta;
- mucho espacio en blanco;
- blobs suaves;
- ramas;
- espirales;
- corazones lineales;
- líneas continuas;
- asimetría controlada;
- tipografía grande;
- palabras en itálica para énfasis.

---

## 4. CTAs

No usar grandes cajas para los CTA. Mantener el estilo ya aprobado:

```text
Agendar sesión ♡
Conocer mi enfoque ♡
Escribirme por WhatsApp ♡
```

El corazón final debe ser SVG, no emoji. Crear un componente editorial reutilizable con hover mínimo, cambio de color sutil y foco accesible.

---

## 5. Logo

Usa los assets existentes. Crear:

```text
src/components/brand/Logo.astro
```

con variantes:

```ts
variant: "full" | "mark"
```

- `full`: símbolo + “Fernanda Hernández” + “PSICOTERAPEUTA”.
- `mark`: símbolo/monograma para espacios pequeños.

No rasterizar un logo si ya existe SVG.

---

## 6. Rutas

Crear como mínimo:

```text
/
/enfoque/
/acompanamiento/
/sobre-mi/
/agendar/
/contacto/
/preguntas-frecuentes/
/blog/
/blog/[slug]/
/aviso-de-privacidad/
/404
```

No crear páginas duplicadas solo para insertar palabras clave.

---

## 7. Navegación

Desktop:

- logo;
- Enfoque;
- Acompañamiento;
- Sobre mí;
- Blog;
- Contacto;
- CTA discreto Agendar sesión.

Móvil:

- logo compacto;
- botón de menú accesible;
- cerrar con Escape;
- `aria-expanded`;
- `aria-controls`;
- `aria-current="page"`;
- foco visible.

No usar un framework JS para el menú.

---

# 8. Home

## Hero

Mantener el concepto visual aprobado.

Título:

```text
Un espacio
seguro para ti
```

`para ti` puede ir en itálica y verde salvia.

Texto:

```text
Psicoterapia clínica con enfoque integrativo y psicodinámico,
atención exclusivamente en línea.
```

CTA:

```text
Agendar sesión ♡
Conocer mi enfoque ♡
```

A la derecha, ilustración de Fernanda y un globo construido con HTML/CSS:

```text
Hola, soy la Psic. Fernanda Hernández
y estoy aquí para ayudarte.
```

No incrustar texto dentro de una imagen.

Los blobs simples deben resolverse con CSS o SVG.

## Transición

Título:

```text
Un espacio para escucharte
```

Texto:

```text
No siempre necesitamos tener todas las respuestas.
A veces basta con encontrar un espacio seguro para comenzar
a mirar hacia dentro con más calma y claridad.
```

Usar ilustración ligera, línea orgánica, pequeño corazón y vegetación. Sin cards.

## Enfoque terapéutico

Título:

```text
Enfoque terapéutico
```

Dos columnas abiertas.

### Enfoque integrativo

```text
Permite adaptar distintas herramientas terapéuticas a las
necesidades y circunstancias particulares de cada persona.
```

### Enfoque psicodinámico

```text
Busca comprender cómo experiencias, vínculos y patrones
emocionales influyen en la manera en que pensamos, sentimos
y nos relacionamos actualmente.
```

Entre ambas columnas: espiral, línea orgánica, hojas o formas del lenguaje del logo.

CTA a `/enfoque/`:

```text
Conocer mi enfoque ♡
```

## Acompañamiento

Título sugerido:

```text
Tal vez llegaste aquí porque
algo necesita ser escuchado
```

Mostrar como contenido editable y no como diagnósticos:

- ansiedad y estrés;
- autoestima y autoconocimiento;
- relaciones y vínculos;
- duelos;
- cambios importantes;
- manejo emocional;
- conflictos personales.

Centraliza este listado en un archivo de datos. No prometas curas ni resultados. No atribuyas especializaciones no verificadas.

## Sobre Fernanda

Título:

```text
Hola, soy Fernanda
```

Copy provisional:

```text
Concibo la psicoterapia como un espacio de escucha, reflexión
y acompañamiento en el que cada proceso puede construirse a
su propio ritmo.

Mi trabajo parte de una mirada integrativa y psicodinámica,
buscando comprender tanto lo que ocurre hoy como las historias,
vínculos y experiencias que han dado forma a nuestra manera de
sentir y relacionarnos.
```

Mostrar únicamente datos confirmados:

```text
Psicóloga clínica
Psicoterapia integrativa y psicodinámica
Atención exclusivamente en línea
```

No inventar universidad, cédula, posgrados, asociaciones, certificaciones ni años de experiencia. Deja campos en configuración para añadirlos después.

## Cómo iniciar

Título:

```text
Cómo empezar, a tu ritmo
```

Secuencia sin tarjetas:

```text
01 — Escríbeme
02 — Cuéntame brevemente qué estás buscando
03 — Agendamos nuestra primera sesión
```

Acompañar cada paso con las ilustraciones WebP existentes, sin líneas divisorias.

## Modalidades

```text
Exclusivamente en línea
Sesiones en línea por videollamada desde un espacio privado.

En línea
Sesiones por videollamada desde un espacio privado.
```

CTA: `Conocer sesiones en línea ♡` y `Agendar sesión ♡`.

## Artículo destacado

```text
Empezar terapia sin tener todas las respuestas
```

Extracto:

```text
No necesitas llegar a terapia con una explicación perfecta
de lo que ocurre. A veces el primer paso consiste simplemente
en reconocer que hay algo que quieres comprender de otra manera.
```

## CTA final

```text
Puedes empezar sin saber
exactamente qué decir.
```

Subtexto:

```text
Ese también puede ser un buen punto de partida.
```

CTA: `Agendar sesión ♡`.

---

# 9. Página /enfoque/

Explicar:

1. introducción;
2. enfoque integrativo;
3. enfoque psicodinámico;
4. cómo pueden complementarse;
5. cada proceso es distinto;
6. CTA a agendar.

Tono claro y divulgativo. No afirmar que una corriente es superior a otra.

---

# 10. Página /acompanamiento/

Título:

```text
Un espacio para trabajar aquello
que hoy necesita atención
```

Mostrar los motivos generales de consulta desde datos centralizados.

Aclaración visible:

```text
Cada proceso es particular. Estos ejemplos no pretenden
sustituir una valoración profesional ni describir todas las
razones por las que una persona puede iniciar psicoterapia.
```

---

# 11. Página /sobre-mi/

Incluir:

- presentación;
- filosofía de trabajo;
- enfoque;
- modalidad;
- área preparada para formación y cédula cuando haya datos reales;
- CTA.

Si falta un dato, omitirlo visualmente. No mostrar “pendiente”.

---

# 12. Página /agendar/

Título:

```text
Agendemos un espacio para ti
```

Explicar el flujo:

1. contactar;
2. resolver dudas iniciales;
3. acordar modalidad;
4. confirmar fecha y horario.

CTA principal:

```text
Escribirme por WhatsApp ♡
```

Mensaje precargado:

```text
Hola, Fernanda. Vi tu página y me gustaría solicitar información para agendar una sesión.
```

Mostrar únicamente sesiones en línea por videollamada.

No implementar pagos ni calendario externo hasta contar con un servicio real.

---

# 13. Página /contacto/

Incluir:

- WhatsApp;
- Instagram;
- Facebook;

- modalidad online;
- CTA para agendar.

Todos los datos vienen de configuración central. Si falta una URL, no mostrar el enlace y nunca usar `href="#"`.

---

# 15. Preguntas frecuentes

Crear `/preguntas-frecuentes/` con:

- ¿Necesito saber exactamente qué quiero trabajar antes de empezar?
- ¿Cómo es una primera sesión?
- ¿Las sesiones pueden ser en línea?
- ¿Cómo puedo solicitar una cita?

No inventar duración, tarifas, horarios, disponibilidad ni políticas de cancelación.

---

# 16. Blog

Usar Content Collections de Astro según la API de la versión instalada.

Cada entrada debe tener:

```ts
title
description
publishDate
updatedDate?
author
image?
draft
tags
```

Crear `/blog/` y `/blog/[slug]/` con:

- metadata propia;
- breadcrumb;
- JSON-LD Article/BlogPosting;
- enlaces internos;
- tipografía cómoda para lectura.

## Primer artículo

Crear un artículo original de aproximadamente 1000–1500 palabras:

# Empezar terapia sin tener todas las respuestas

Estructura:

1. No necesitas llegar con un discurso preparado.
2. Qué puede ocurrir durante una primera sesión.
3. La importancia del vínculo terapéutico.
4. Hablar también puede ser explorar.
5. Cada proceso tiene su propio ritmo.
6. Cuándo puede ser útil pedir acompañamiento.
7. Cierre suave con CTA.

Tono humano, claro y profesional. No diagnosticar ni prometer resultados.

Cierre:

```text
Si estás pensando en iniciar un proceso terapéutico,
puedes escribirme para conocer la modalidad de trabajo
y resolver tus dudas antes de agendar.
```

---

# 17. Configuración central del sitio

Crear `src/data/site.ts` o equivalente:

```ts
export const siteConfig = {
  name: "Psic. Fernanda Hernández",
  shortName: "Fernanda Hernández",
  description:
    "Psicoterapia clínica en línea con enfoque integrativo y psicodinámico.",
  whatsapp: {
    number: "",
    message:
      "Hola, Fernanda. Vi tu página y me gustaría solicitar información para agendar una sesión.",
  },
  social: {
    instagram: "",
    facebook: "",
  },
};
```

No hardcodear teléfono, redes ni dirección en varios componentes.

---

# 18. Iconos

UI general: `@lucide/astro`.

Marcas: `simple-icons`.

Importar solo Instagram, Facebook y WhatsApp. Renderizar como SVG inline/componentes en build-time. No usar icon fonts ni cargar toda la librería por CDN.

---

# 19. WhatsApp

Crear `src/utils/whatsapp.ts`.

Debe:

1. recibir número;
2. recibir mensaje;
3. limpiar el número;
4. aplicar `encodeURIComponent`;
5. devolver URL `wa.me`.

No renderizar CTA si falta el número.

---

# 20. SEO técnico

Crear `src/components/seo/SEO.astro` con props:

```ts
title
description
canonical?
image?
type?
noindex?
publishedTime?
modifiedTime?
```

Debe generar:

- `<title>`;
- meta description;
- canonical;
- `og:title`;
- `og:description`;
- `og:url`;
- `og:image` si existe;
- `og:type`;
- `og:locale="es_MX"`;
- `twitter:card="summary_large_image"`;
- Twitter title/description/image.

Configurar `site` en `astro.config`.

Instalar/configurar `@astrojs/sitemap`.

Crear `public/robots.txt` y permitir rastreo de páginas públicas.

No bloquear assets importantes.

---

# 21. Datos estructurados

Usar JSON-LD verdadero y coherente con contenido visible.

Home:

- `Person`;
- `ProfessionalService` o subtipo válido apropiado y verificado;
- No incluir dirección física ni coordenadas; describir el servicio como exclusivamente en línea.

Blog:

- `BlogPosting` o `Article`.

Internas:

- `BreadcrumbList` cuando sea útil.

Nunca inventar reseñas, estrellas, `aggregateRating`, horarios, teléfono, dirección, credenciales o títulos.

---

# 22. SEO de contenido

Cada página:

- un solo H1;
- title único;
- description única;
- H2/H3 coherentes;
- canonical;
- enlaces internos útiles;
- alt text;
- URLs limpias.

Usar naturalmente conceptos como:

- psicóloga clínica;
- psicoterapia;
- psicoterapia en línea;
- enfoque integrativo;
- enfoque psicodinámico.

No hacer keyword stuffing.

---

# 23. Open Graph

Si ya existe un asset adecuado, preparar una imagen social 1200×630 y guardarla como `public/social/og-default.webp`.

No generar una nueva imagen por IA sin petición expresa de la cliente. Si no hay un asset apropiado, deja el sistema preparado y no insertes una ruta rota.

---

# 24. Accesibilidad

Objetivo mínimo WCAG AA.

Implementar:

- skip link;
- landmarks semánticos;
- navegación por teclado;
- foco visible;
- labels;
- alt text;
- `aria-current`;
- menú móvil accesible;
- jerarquía correcta de headings;
- contraste suficiente;
- no depender solo del color;
- `prefers-reduced-motion`.

Los SVG decorativos deben usar `aria-hidden="true"`.

---

# 25. Animaciones

Crear un sistema pequeño con `data-reveal` e IntersectionObserver:

```html
data-reveal="fade-up"
data-reveal="fade"
data-reveal="slide-left"
data-reveal="slide-right"
```

Comportamiento:

- opacity 0 → 1;
- translate 16–24px → 0;
- duración 500–750ms;
- easing suave;
- pequeño stagger;
- ejecutar una sola vez.

Decoraciones pueden flotar 4–8px en ciclos de 8–14s.

Desactivar animación no esencial con `prefers-reduced-motion: reduce`.

No usar GSAP inicialmente.

---

# 26. Rendimiento

Objetivos orientativos:

- Lighthouse Performance 95+;
- Accessibility 95+;
- Best Practices 95+;
- SEO 95+;
- CLS < 0.1;
- LCP < 2.5s en condiciones razonables.

Hero:

- `loading="eager"`;
- `fetchpriority="high"`;
- width/height explícitos.

Resto:

- `loading="lazy"`.

Usar `<Image />` de Astro cuando aporte optimización real.

No reconvertir SVG innecesariamente. No mostrar imágenes mucho mayores que su tamaño renderizado.

El mapa debe ser lazy.

No cargar scripts de Instagram/Facebook ni feeds sociales.

---

# 27. Tailwind y CSS

Usar Tailwind moderno mediante Vite.

Crear `src/styles/global.css` con:

- import de Tailwind;
- variables de diseño;
- body;
- tipografía;
- focus;
- selection;
- helpers de animación.

Usar CSS scoped en componentes cuando una composición específica sea más clara que una lista enorme de utilities.

---

# 28. Estructura sugerida

Adapta a lo existente:

```text
src/
├── assets/
├── components/
│   ├── brand/Logo.astro
│   ├── layout/Header.astro
│   ├── layout/MobileNav.astro
│   ├── layout/Footer.astro
│   ├── seo/SEO.astro
│   ├── home/Hero.astro
│   ├── home/TransitionSection.astro
│   ├── home/TherapyApproach.astro
│   ├── home/Accompaniment.astro
│   ├── home/AboutPreview.astro
│   ├── home/Process.astro
│   ├── home/Modalities.astro
│   ├── home/LocationPreview.astro
│   ├── home/FeaturedArticle.astro
│   ├── home/FinalCTA.astro
│   └── shared/
│       ├── EditorialLink.astro
│       ├── SocialLinks.astro
│       ├── MapEmbed.astro
│       └── Breadcrumbs.astro
├── data/site.ts
├── data/navigation.ts
├── data/accompaniment.ts
├── layouts/BaseLayout.astro
├── layouts/ArticleLayout.astro
├── pages/
│   ├── index.astro
│   ├── enfoque.astro
│   ├── acompanamiento.astro
│   ├── sobre-mi.astro
│   ├── agendar.astro
│   ├── contacto.astro
│   ├── ubicacion.astro
│   ├── preguntas-frecuentes.astro
│   ├── aviso-de-privacidad.astro
│   ├── 404.astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
└── styles/global.css

public/
├── favicon.svg
├── robots.txt
└── social/
```

Usa la estructura recomendada por la versión actual de Astro si su API de contenido cambió.

---

# 29. BaseLayout

Crear `BaseLayout.astro` con:

- `<html lang="es-MX">`;
- SEO;
- viewport;
- favicon;
- theme-color;
- Header;
- `<main>`;
- Footer;
- JSON-LD;
- script mínimo de reveals.

---

# 30. Footer

Footer ligero con:

- logo;
- Psic. Fernanda Hernández;
- “Psicoterapia clínica · enfoque integrativo y psicodinámico”;
- Instagram;
- Facebook;
- WhatsApp;
- Contacto;
- Ubicación;
- Blog;
- Aviso de privacidad;
- copyright dinámico.

No hacer mega-footer.

---

# 31. `.env.example`

Crear:

```env
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_WHATSAPP_NUMBER=
PUBLIC_INSTAGRAM_URL=
PUBLIC_FACEBOOK_URL=
```

No incluir secretos reales.

---

# 32. Aviso de privacidad

Crear una página base coherente con el diseño, pero no inventar razón social, domicilio ni afirmaciones legales específicas. Dejarla preparada para reemplazar su contenido por el texto legal definitivo.

---

# 33. Formularios

En esta primera versión no es obligatorio implementar formulario.

Priorizar WhatsApp, Instagram y Facebook. Esto reduce backend y evita almacenar información sensible.

Si más adelante se añade un formulario, usar Cloudflare Worker, validación server-side y Turnstile; pedir solo datos mínimos.

---

# 34. Cloudflare

Destino preferido: **Cloudflare Workers**.

El proyecto debe poder ejecutar:

```bash
npm run dev
npm run build
npm run preview
npm run deploy
```

No activar SSR solo “por si acaso”. Mantener generación estática si las funcionalidades actuales no requieren servidor.

Preparar Wrangler y documentar cómo conectar un dominio posteriormente.

---

# 35. Google Search

Dejar el sitio preparado para Search Console:

1. desplegar;
2. conectar dominio canónico;
3. verificar propiedad;
4. enviar el sitemap generado;
5. solicitar indexación inicial de las páginas principales.

No implementar hacks SEO.

---

# 36. Contenido psicológico

Usar lenguaje responsable.

Evitar:

- “cura la ansiedad”;
- “resultados garantizados”;
- “elimina tus problemas”.

Preferir:

- acompañar;
- explorar;
- comprender;
- trabajar;
- construir herramientas;
- espacio terapéutico.

No hacer diagnósticos del visitante.

---

# 37. Responsive

Mobile-first.

Mobile:

- hero en columna;
- ilustración después del texto;
- `clamp()` para tipografía;
- decoraciones reducidas;
- sin overflow horizontal.

Desktop:

- ancho máximo aproximado 1200–1320px;
- mucho whitespace;
- hero en dos columnas;
- decoraciones parcialmente superpuestas de forma controlada.

No fijar alturas que recorten contenido.

---

# 38. Regla para assets

No convertir secciones completas en una imagen.

Ejemplo de Enfoque terapéutico:

- título = HTML;
- párrafos = HTML;
- blobs = CSS/SVG;
- espiral = SVG;
- hojas = SVG;
- ilustración compleja = WebP.

Reutiliza assets mediante rotación, reflejo, escala y opacidad antes de crear duplicados.

---

# 39. Calidad del código

- TypeScript estricto;
- sin `any` innecesario;
- componentes pequeños;
- datos centralizados;
- sin duplicar navegación;
- sin duplicar teléfono/redes/dirección;
- HTML semántico;
- comentarios solo cuando aporten contexto.

---

# 40. Verificación final

Antes de terminar:

1. ejecutar build;
2. corregir todos los errores;
3. comprobar todas las rutas;
4. comprobar enlaces internos y externos;
5. comprobar menú móvil;
6. comprobar metadata;
7. comprobar sitemap;
8. comprobar robots;
9. comprobar 404;
10. comprobar responsive;
11. comprobar reduced motion;
12. comprobar alt text;
13. comprobar que no existan `href="#"`;
14. comprobar que no falten imágenes;
15. comprobar que no haya layout shift notable;
16. revisar requests de terceros;
17. revisar peso de imágenes y fuentes.

---

# 41. README

Actualizar README con:

```text
npm install
npm run dev
npm run build
npm run preview
npm run deploy
```

Explicar dónde modificar:

- WhatsApp;
- Instagram;
- Facebook;
- metadata;
- biografía;
- credenciales;
- artículos.

Explicar también cómo añadir un artículo y cómo sustituir una ilustración.

---

# 42. Orden de implementación

Trabaja en este orden:

1. inspección del repositorio y assets;
2. dependencias y configuración Astro/Tailwind/Cloudflare;
3. design tokens + BaseLayout + SEO + Header + Footer;
4. home completa;
5. páginas internas;
6. blog + primer artículo;
7. WhatsApp + redes + Maps;
8. SEO técnico + JSON-LD + sitemap + robots;
9. animaciones + responsive;
10. auditoría de accesibilidad, rendimiento y build.

No empieces creando decenas de componentes vacíos.

---

# 43. Criterio final

La web debe verse como una extensión del diseño aprobado:

- crema;
- verde salvia;
- terracota suave;
- ilustración femenina cálida;
- serif editorial;
- sans limpia;
- corazones lineales;
- espirales;
- ramas;
- movimiento ligero;
- composición orgánica.

Debe sentirse como una marca contemporánea de psicoterapia cuidadosamente diseñada, no como una plantilla.

Cuando dudes entre más efectos y más claridad, elige claridad.
Cuando dudes entre más JavaScript y HTML/CSS, elige HTML/CSS.
Cuando dudes entre una nueva imagen y reutilizar SVG/CSS, reutiliza SVG/CSS.
Cuando dudes entre una tarjeta y una composición editorial abierta, elige composición editorial.

El recorrido ideal del usuario debe sentirse así:

```text
conocer
→ comprender el enfoque
→ generar confianza
→ contactar
→ agendar
```

Comienza inspeccionando el proyecto y `./assets`. No continúes con suposiciones sobre nombres de archivos: primero verifica qué existe y luego construye la primera versión funcional completa.
