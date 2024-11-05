import { type Metadata } from 'next';
import { Home } from './_container/Home';

export default Home;

// pages/page.js o /app/route/page.js
export const metadata: Metadata = {
  title: 'Tus Pagos ahora son seguros | Secure Payment KY',
  description: 'Manda dinero a cualquier parte del país de manera fácil y segura',
  icons: [{ rel: 'icon', url: '/favicon.png' }],
  // Agrega propiedades de Open Graph
  openGraph: {
    title: 'Tus Pagos ahora son seguros | Secure Payment KY', // Título que quieres se vea cuando se comparte
  description: 'Manda dinero a cualquier parte del país de manera fácil y segura',
    url: 'secure-payments-ky.vercel.app', // URL de la página compartida
    siteName: 'Secure Payment KY', // Nombre de tu sitio
    images: [
      {
        url: '/secure-payment.webp', // URL de la imagen
        width: 520, // Ancho de la imagen
        height: 280, // Altura de la imagen
        alt: 'Tus pagos ahora son seguros', // Texto alternativo
      },
    ],
    locale: 'es_ES', // Localización
    type: 'website', // Tipo de contenido
  },
};