export const siteConfig = {
  name: 'Psic. Fernanda Hernández',
  shortName: 'Fernanda Hernández',
  description: 'Psicoterapia clínica en línea para personas en México, con enfoque integrativo y psicodinámico. Un espacio de escucha y acompañamiento a tu propio ritmo.',
  serviceArea: 'México',
  whatsapp: {
    number: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '5214423019902',
    message: 'Hola, Fernanda. Vi tu página y me gustaría solicitar información para agendar una sesión.',
  },
  social: {
    instagram: import.meta.env.PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/psic.fer.hernandez_/',
    facebook: import.meta.env.PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/',
  },
  credentials: { university: '', license: '', postgraduate: '' },
} as const;
