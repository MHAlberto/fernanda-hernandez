export const siteConfig = {
  name: 'Psic. Fernanda Hernández',
  shortName: 'Fernanda Hernández',
  description: 'Psicoterapia clínica en línea con enfoque integrativo y psicodinámico. Un espacio de escucha y acompañamiento a tu propio ritmo.',
  whatsapp: {
    number: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '',
    message: 'Hola, Fernanda. Vi tu página y me gustaría solicitar información para agendar una sesión.',
  },
  social: {
    instagram: import.meta.env.PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/',
    facebook: import.meta.env.PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/',
  },
  credentials: { university: '', license: '', postgraduate: '' },
} as const;
