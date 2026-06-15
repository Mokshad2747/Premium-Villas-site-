/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
          "surface-container-lowest": "#ffffff",
          "surface-container-high": "#ebe8e4",
          "error-container": "#ffdad6",
          "secondary-fixed-dim": "#3adccc",
          "surface-container-low": "#f6f3ef",
          "on-secondary": "#ffffff",
          "primary-fixed": "#c8ead9",
          "on-secondary-container": "#006f66",
          "surface-dim": "#dcdad6",
          "primary-fixed-dim": "#accebe",
          "inverse-on-surface": "#f3f0ec",
          "tertiary-fixed": "#ffe088",
          "on-error-container": "#93000a",
          "tertiary-fixed-dim": "#e9c349",
          "on-tertiary-fixed-variant": "#574500",
          "surface-container": "#f0ede9",
          "on-primary-fixed-variant": "#2e4d40",
          "on-primary": "#ffffff",
          "surface-container-highest": "#e5e2de",
          "on-background": "#1c1c1a",
          "error": "#ba1a1a",
          "on-primary-container": "#779788",
          "on-tertiary-fixed": "#241a00",
          "outline": "#727974",
          "background": "#fcf9f5",
          "on-error": "#ffffff",
          "surface-tint": "#466557",
          "secondary": "#006a62",
          "secondary-container": "#5ef6e6",
          "inverse-primary": "#accebe",
          "surface-bright": "#fcf9f5",
          "surface": "#fcf9f5",
          "tertiary": "#735c00",
          "surface-variant": "#e5e2de",
          "on-tertiary-container": "#4f3e00",
          "on-secondary-fixed": "#00201d",
          "on-secondary-fixed-variant": "#005049",
          "primary-container": "#0f2e23",
          "outline-variant": "#c1c8c3",
          "inverse-surface": "#31302e",
          "secondary-fixed": "#61f9e9",
          "on-surface-variant": "#414844",
          "on-surface": "#1c1c1a",
          "on-tertiary": "#ffffff",
          "on-primary-fixed": "#012016",
          "primary": "#001810",
          "tertiary-container": "#cca830"
      },
      "borderRadius": {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
      },
      "spacing": {
          "container-max": "1440px",
          "margin-mobile": "20px",
          "margin-desktop": "64px",
          "gutter": "24px",
          "unit": "8px"
      },
      "fontFamily": {
          "headline-md": ["Playfair Display", "serif"],
          "display-lg-mobile": ["Playfair Display", "serif"],
          "label-sm": ["Inter", "sans-serif"],
          "headline-lg": ["Playfair Display", "serif"],
          "body-lg": ["Inter", "sans-serif"],
          "display-lg": ["Playfair Display", "serif"],
          "body-md": ["Inter", "sans-serif"]
      },
      "fontSize": {
          "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
          "display-lg-mobile": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
          "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600" }],
          "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
          "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
          "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
          "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }]
      }
    }
  },
  plugins: [],
}
