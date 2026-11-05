/** @type {import('tailwindcss').Config} */

/*
 * Paleta derivada del material impreso de la marca
 * (src/assets/images): azul marino bruñido + oro metálico + marfil.
 *
 *  - navy : del azul royal de portada (#1b3a6b) al azul casi-negro
 *           de las páginas oscuras (#060f24). Fondo dominante y uniformes.
 *  - gold : oro bruñido de títulos, escudos, marcos y filetes,
 *           de reflejo claro (#f3e3b3) a sombra (#8a6a1f).
 *  - ivory: marfil/crema de los paneles de contenido claros
 *           (página de Video Vigilancia CCTV).
 */

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ===== Paleta "GYPSE" (referencia): verde + blanco, minimalista =====
        brand: {
          50: '#EDF6EE',   // fondo verde muy claro (color-5)
          100: '#D4F3D7',  // tinte verde claro (color-7)
          200: '#a7e3b8',
          300: '#6fcf97',
          400: '#1B9C85',  // acento principal teal-verde (color-0)
          500: '#178E79',  // teal más oscuro (color-1)
          600: '#009961',  // verde brillante hover
          700: '#195a42',  // verde profundo (enlaces)
          800: '#0f3a2b',
          900: '#06140C',  // verde casi negro (secciones oscuras, color-6)
        },
        ink: {
          900: '#0F172A',  // texto principal (color-2)
          700: '#21262e',
          500: '#454F5E',  // texto gris (color-3)
          300: '#9CA3AF',  // placeholder
        },
        navy: {
          50: '#e9eef7',
          100: '#c7d3e9',
          200: '#93a6c9',
          300: '#5e78a6',
          400: '#35527f',
          500: '#1b3a6b', // azul royal (portada)
          600: '#152a5c',
          700: '#0f2048', // azul marino base
          800: '#0a1733', // páginas oscuras
          900: '#060f24', // casi negro
          950: '#030814',
        },
        gold: {
          50: '#fbf6e7',
          100: '#f3e3b3', // reflejo
          200: '#e9cf8f',
          300: '#dcb867',
          400: '#cfa247', // oro medio
          500: '#c08f33',
          600: '#a9781f', // oro profundo
          700: '#8a6a1f',
          800: '#6d521a',
          900: '#4d3a12',
        },
        ivory: {
          50: '#fbfaf5',
          100: '#f4f1e8', // panel crema
          200: '#e9e3d2',
          300: '#d8cfb6',
          400: '#bfb392',
        },
        // Alias semánticos para texto / superficies frecuentes
        'surface-dark': '#0a1733',
        'surface-deep': '#060f24',
        'text-cream': '#f5efe0',
      },
      backgroundImage: {
        // Oro bruñido: reflejo -> medio -> sombra -> reflejo
        'gold-sheen':
          'linear-gradient(135deg, #f3e3b3 0%, #cfa247 38%, #a9781f 62%, #e9cf8f 100%)',
        'gold-bar':
          'linear-gradient(90deg, #a9781f 0%, #e9cf8f 50%, #a9781f 100%)',
        // Azul marino con viñeta sutil para fondos de sección
        'navy-vignette':
          'radial-gradient(120% 120% at 50% 0%, #152a5c 0%, #0a1733 55%, #060f24 100%)',
        'navy-panel':
          'linear-gradient(160deg, rgba(21,42,92,0.92) 0%, rgba(10,23,51,0.94) 100%)',
      },
      boxShadow: {
        gold: '0 4px 20px rgba(207, 162, 71, 0.25)',
        'gold-lg': '0 10px 35px rgba(207, 162, 71, 0.3)',
        plate: '0 8px 30px rgba(3, 8, 20, 0.55)',
      },
      fontFamily: {
        neuton: ['Neuton', 'serif'],
        // Tipografías de la referencia GYPSE
        heading: ['Montserrat', 'sans-serif'],
        display: ['Raleway', 'sans-serif'],
        body: ['"Source Sans Pro"', 'sans-serif'],
      },
      keyframes: {
        modalFadeIn: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        modalFadeIn: 'modalFadeIn 0.3s ease-out',
        fadeUp: 'fadeUp 0.7s ease-out',
      },
    },
  },
  plugins: [],
}
