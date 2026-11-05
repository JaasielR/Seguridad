import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// El proyecto es "type": "module", por lo que la config de PostCSS debe
// exportarse como ESM. Pasamos la ruta del config de Tailwind de forma
// explícita para garantizar que Vite/PostCSS carguen la paleta personalizada
// (escala navy/gold/ivory) y no corran Tailwind con la config por defecto.
export default {
  plugins: [
    tailwindcss({ config: './tailwind.config.js' }),
    autoprefixer(),
  ],
}
