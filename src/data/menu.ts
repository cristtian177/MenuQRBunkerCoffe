/**
 * ═══════════════════════════════════════════════════════════════════════
 *  MENÚ DE BUNKER COFFEE — Fuente única de verdad
 * ═══════════════════════════════════════════════════════════════════════
 *
 *  Cómo AGREGAR un producto:
 *    1. Encuentra la sección donde quieres agregarlo (array "sections").
 *    2. Añade un nuevo objeto al array "items" de esa sección:
 *       {
 *         id: "nombre-del-producto",   // kebab-case, sin espacios, único
 *         name: "Nombre del Producto",
 *         description: "Descripción breve.",
 *         price: 8000,                 // precio en pesos colombianos (entero)
 *         available: true,
 *       }
 *    3. Actualiza el campo `lastUpdated` al día de hoy.
 *
 *  Cómo AGREGAR una sección:
 *    1. Añade un nuevo objeto al array "sections":
 *       {
 *         id: "nombre-seccion",
 *         title: "Nombre Sección",
 *         emoji: "",
 *         items: [],
 *       }
 *    2. El orden en el array es el orden en que aparece en la página.
 *
 *  Cómo MARCAR un producto como no disponible:
 *    - Cambia `available: true` a `available: false`.
 *    - El producto seguirá visible pero aparecerá atenuado.
 *
 * ═══════════════════════════════════════════════════════════════════════
 */

import type { Menu } from "@/types/menu";

export const menu: Menu = {
  cafeInfo: {
    name: "Coffee Bunker",
    tagline: "Desayunos & Café",
    instagram: "bunkercoffee",
    whatsapp: "+573001234567",
  },
  currency: "COP",
  currencySymbol: "$",
  lastUpdated: "2026-03-24",

  sections: [
    // ──────────────────────────────────────────────
    //  DESAYUNOS
    //  Todos incluyen bebida caliente a elección (café o aromática).
    //  La porción de huevo adicional tiene un costo de $1.000 c/u.
    //  Huevos al gusto: revueltos, pericos o fritos.
    // ──────────────────────────────────────────────
    {
      id: "desayunos",
      title: "Desayunos",
      emoji: "",
      description:
        "Todos incluyen bebida caliente a elección (café o aromática). Huevos al gusto: revueltos, pericos o fritos.",
      items: [
        {
          id: "cacerola-xpres",
          name: "Cacerola Xpres",
          description: "Huevos en cacerola, pan o tostadas.",
          price: 8000,
          available: true,
        },
        {
          id: "relax",
          name: "Relax",
          description: "Huevos al gusto, papas criollas, arroz parbolizado.",
          price: 10000,
          available: true,
        },
        {
          id: "vida-fit",
          name: "Vida Fit",
          description: "Huevos rancheros, tostadas o arepa, aguacate.",
          price: 10000,
          badges: ["Popular"],
          available: true,
        },
        {
          id: "buen-dia",
          name: "Buen Día",
          description: "Huevos, wafles y tocineta.",
          price: 11000,
          available: true,
        },
        {
          id: "calentao-bunker",
          name: "Calentao Bunker",
          description:
            "Arroz con frijoles, huevo frito, arepa o tajadas de maduro.",
          price: 13000,
          badges: ["Recomendado"],
          available: true,
        },
        {
          id: "omelette-saludable",
          name: "Omelette Saludable",
          description: "Espinaca, tomate y cebolla, queso rallado.",
          price: 13000,
          available: true,
        },
        {
          id: "full-wrap",
          name: "Full Wrap",
          description:
            "Pollo o res desmechado, champiñones salteados, gratinado con queso parmesano.",
          price: 15000,
          badges: ["Popular"],
          available: true,
        },
        {
          id: "yogurt-griego",
          name: "Yogurt Griego",
          description: "100gr de yogurt, 100 gr con granola y miel.",
          price: 8000,
          available: true,
        },
        {
          id: "porcion-papaya",
          name: "Porción de Papaya",
          description: "250 gr de papaya con queso doble crema rallado.",
          price: 7000,
          available: true,
        },
        {
          id: "mix-frutas-bunker",
          name: "Mix de Frutas Bunker",
          description: "Banano, fresa, mango — 3 frutas de temporada.",
          price: 7000,
          available: true,
        },
        {
          id: "sandwich-bunker",
          name: "Sándwich Bunker",
          description: "Jamón y queso + bebida.",
          price: 6000,
          available: true,
        },
      ],
    },

     // ──────────────────────────────────────────────
    //  CARNES
    // ──────────────────────────────────────────────
    {
      id: "carnes",
      title: "CARNES",
      emoji: "",
      description: "",
      items: [
        {
          id: "filete-plancha",
          name: "Filete a la Plancha",
          description: "Pollo, res o cerdo (120 gr) + papa criolla + ensalada.",
          price: 13000,
          available: true,
        },
        {
          id: "panceta-bunker",
          name: "Panceta Bunker",
          description: "150 gr de panceta + papa criolla + ensalada.",
          price: 18000,
          badges: ["Recomendado"],
          available: true,
        },
        {
          id: "costillas",
          name: "Costillas de Cerdo",
          description: "Al limon o BBQ.",
          price: 18000,
          badges: ["Recomendado"],
          available: true,
        },
      ],
    },

     // ──────────────────────────────────────────────
    //  Dias DE TRAMPA
    // ──────────────────────────────────────────────
    {
      id: "viernes-trampa",
      title: "Dias de Trampa",
      emoji: "",
      description: "",
      items: [
        {
          id: "hamburguesa-sencilla",
          name: "Hamburguesa Bunker Sencilla",
          description: "Carne de 120 gr, papas.",
          price: 13000,
          available: true,
        },
        {
          id: "hamburguesa-doble",
          name: "Hamburguesa Bunker Doble",
          description: "Doble carne 240 gr, papas.",
          price: 18000,
          badges: ["Popular"],
          available: true,
        },

        {
          id: "chorizo-santarosano",
          name: "Chorizo Santarosano",
          description: "Chorizo santarosano con papa criolla.",
          price: 9000,
          available: true,
        },
        {
          id: "chorizo-santarosanox2",
          name: "Chorizo Santarosano X2",
          description: "Dos chorizos santarosanos con papa criolla.",
          price: 15000,
          available: true,
        },
      ],
    },

    // ──────────────────────────────────────────────
    //  BEBIDAS
    // ──────────────────────────────────────────────
    {
      id: "adicionales",
      title: "BEBIDAS",
      emoji: "",
      items: [
        {
          id: "cafe",
          name: "Café",
          description: "",
          price: 2500,
          available: true,
        },
        {
          id: "cafe_leche",
          name: "Café con Leche",
          description: "",
          price: 3000,
          available: true,
        },
        {
          id: "chocolate",
          name: "Chocolate",
          description: "",
          price: 4000,
          available: true,
        },
        {
          id: "aromatica",
          name: "Aromática Sencilla",
          description: "",
          price: 2000,
          available: true,
        },
        {
          id: "aromatica",
          name: "Aromática de Frutos",
          description: "",
          price: 6000,
          available: true,
        },
        {
          id: "soda",
          name: "Soda Italiana",
          description: "",
          price: 10000,
          available: true,
        },
        {
          id: "cerveza",
          name: "Cerveza",
          description: "",
          price: 5000,
          available: true,
        },
        {
          id: "michelada",
          name: "Michelada",
          description: "",
          price: 8000,
          available: true,
        },
        {
          id: "pony",
          name: "Pony",
          description: "",
          price: 3000,
          available: true,
        },
        {
          id: "bretaña",
          name: "Bretaña",
          description: "",
          price: 4000,
          available: true,
        },
        {
          id: "amper",
          name: "Amper",
          description: "",
          price: 4000,
          available: true,
        },
        {
          id: "smirnoff",
          name: "Smirnoff",
          description: "",
          price: 5000,
          available: true,
        },
      ],
    },

    // ──────────────────────────────────────────────
    //  JUGOS — 400 ml / $8.000
    // ──────────────────────────────────────────────
    {
      id: "jugos",
      title: "Jugos",
      emoji: "",
      description: "400 ml.",
      items: [
        {
          id: "jugo-temporada",
          name: "Frutas de Temporada",
          description: "Con leche.",
          price: 9500,
          badges: [],
          available: true,
        },
        {
          id: "jugo-temporada",
          name: "Frutas de Temporada",
          description: "En agua.",
          price: 8000,
          badges: [],
          available: true,
        },
        {
          id: "jugo-naranja",
          name: "Naranja",
          description: "",
          price: 8000,
          badges: ["Popular"],
          available: true,
        },
        {
          id: "jugo-zanahoria",
          name: "Zanahoria",
          description: "",
          price: 8000,
          available: true,
        },
        {
          id: "jugo-verde",
          name: "Verde",
          description: "Fréjoa, espinaca, manzana, limón y pepino.",
          price: 8000,
          available: true,
        },
        {
          id: "jugo-energetico",
          name: "Energético",
          description: "Zanahoria, manzana, naranja, apio.",
          price: 8000,
          available: true,
        },
        {
          id: "control-bunker",
          name: "Control Bunker",
          description: "Piña, apio, pepino, perejil, naranja.",
          price: 8000,
          badges: ["Recomendado"],
          available: true,
        },
        {
          id: "antigripal",
          name: "Antigripal",
          description: "Jengibre, limón, miel, naranja.",
          price: 8000,
          available: true,
        },
        {
          id: "papaya-linaza",
          name: "Estar Bien",
          description: "Papaya con Linaza",
          price: 8000,
          available: true,
        },
      ],
    },

    // ──────────────────────────────────────────────
    //  BATIDOS — 400 ml
    // ──────────────────────────────────────────────
    {
      id: "batidos",
      title: "Batidos",
      emoji: "",
      description: "400 ml. Preparados al momento.",
      items: [
        {
          id: "batido-proteina-deslactosada",
          name: "Proteína Classic",
          description: "Leche deslactosada + shot de proteína + banano.",
          price: 6500,
          available: true,
        },
        {
          id: "batido-proteina-almendras",
          name: "Proteína Almendras",
          description: "Leche de almendras + shot de proteína + banano.",
          price: 7500,
          available: true,
        },
        {
          id: "batido-fresa-papaya",
          name: "Fresa & Papaya",
          description:
            "Fresa, papaya, yogurt griego, proteína, chía, leche deslactosa.",
          price: 12000,
          badges: ["Popular"],
          available: true,
        },
        {
          id: "batido-banano-avena",
          name: "Banano & Avena",
          description:
            "Banano, avena en hojuela, leche de almendras, proteína, chía.",
          price: 12000,
          available: true,
        },
        {
          id: "batido-arandanos",
          name: "Arándanos",
          description:
            "Arándanos, banano, avena en hojuela, leche de almendras.",
          price: 12000,
          available: true,
        },
        {
          id: "batido-tropical",
          name: "Tropical",
          description: "Piña, mango, fréjoa, yogurt griego.",
          price: 12000,
          available: true,
        },
        {
          id: "batido-mantequilla-mani",
          name: "Mantequilla de Maní",
          description:
            "Leche de almendras, yogurt griego, mantequilla de maní, avena y banano.",
          price: 12000,
          badges: ["Recomendado"],
          available: true,
        },
      ],
    },


    // ──────────────────────────────────────────────
    //  ADICIONALES
    // ──────────────────────────────────────────────
    {
      id: "adicionales",
      title: "Adicionales",
      emoji: "",
      items: [
        {
          id: "arroz-parborizado",
          name: "Arroz Parborizado",
          description: "160 gr.",
          price: 4000,
          available: true,
        },
        {
          id: "arepa-queso-crema",
          name: "Arepa con Queso Crema",
          description: "Arepa mediana.",
          price: 2000,
          available: true,
        },
        {
          id: "papa-criolla",
          name: "Papa Criolla",
          description: "Porción de 200 gr.",
          price: 6000,
          available: true,
        },
      ],
    },
  ],
};
