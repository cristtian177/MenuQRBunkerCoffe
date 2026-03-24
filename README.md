# Bunker Coffee — Menú QR Digital

Menú digital para escanear con QR. Los clientes escanean el código y ven el menú en su celular, sin descargar nada.

## Correr en local

```bash
npm install
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

## Editar el menú

Todo el contenido del menú está en **`src/data/menu.ts`**. Ese es el único archivo que hay que tocar.

### Agregar un producto

Dentro del array `items` de la sección correspondiente:

```typescript
{
  id: "nombre-del-producto",   // kebab-case, sin espacios, único
  name: "Nombre del Producto",
  description: "Descripción breve del producto.",
  price: 8000,                 // precio en pesos colombianos (entero)
  badges: ["Popular"],         // opcional: "Nuevo" | "Popular" | "Vegano" | "Sin Gluten" | "Recomendado"
  available: true,             // false → aparece atenuado con "No disponible"
}
```

### Agregar una sección

En el array `sections`:

```typescript
{
  id: "mi-seccion",
  title: "Mi Sección",
  emoji: "🍵",
  description: "Subtítulo opcional.",
  items: [],
}
```

El orden en el array es el orden de la página.

### Marcar un producto como no disponible

Cambiar `available: true` → `available: false`. El producto sigue visible pero atenuado.

### Actualizar la fecha del menú

Al hacer cualquier cambio, actualizar el campo `lastUpdated` en `src/data/menu.ts`:

```typescript
lastUpdated: "2026-03-24",  // formato YYYY-MM-DD
```

## Agregar el logo

Colocar el archivo del logo en `public/logo.png`. Se mostrará automáticamente en el header.

## Desplegar en Netlify

### Opción A — Automático con GitHub (recomendado)

1. Subir el proyecto a un repositorio en GitHub
2. Entrar a [netlify.com](https://netlify.com) y crear cuenta gratuita
3. Clic en "Add new site" → "Import an existing project"
4. Seleccionar el repositorio de GitHub
5. Netlify detecta la configuración de `netlify.toml` automáticamente
6. Clic en "Deploy site"

Cada `git push` a la rama `main` dispara un redeploy automático.

### Opción B — Manual

```bash
npm run build
```

Arrastrar la carpeta `dist/` a [netlify.com/drop](https://netlify.com/drop).

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/       → Header, Footer
│   ├── menu/         → Página del menú, secciones, tarjetas
│   └── ui/           → Badge, PriceTag
├── data/
│   └── menu.ts       ← EDITAR AQUÍ para cambiar el menú
├── hooks/
│   └── useActiveSection.ts
├── types/
│   └── menu.ts       → Interfaces TypeScript
└── utils/
    └── formatPrice.ts
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (genera `dist/`) |
| `npm run preview` | Preview del build en local |

## Stack tecnológico

- **React 18** + **TypeScript** — UI y tipos
- **Vite** — Build tool
- **Tailwind CSS** — Estilos
- **Netlify** — Hosting gratuito
