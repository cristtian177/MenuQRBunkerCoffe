/**
 * Tipos de etiquetas que puede tener un ítem del menú.
 * Se usan como chips de color en la tarjeta del producto.
 */
export type BadgeLabel =
  | "Nuevo"
  | "Popular"
  | "Vegano"
  | "Sin Gluten"
  | "Recomendado";

/**
 * Representa un producto individual del menú.
 */
export interface MenuItem {
  /** Identificador único en formato kebab-case. Ej: "cold-brew" */
  id: string;
  /** Nombre para mostrar al cliente. Ej: "Cappuccino Grande" */
  name: string;
  /** Descripción breve (1-2 oraciones). Dejar "" si no aplica. */
  description: string;
  /** Precio en pesos colombianos (entero). Ej: 8000 */
  price: number;
  /** Etiquetas opcionales para destacar el producto. */
  badges?: BadgeLabel[];
  /**
   * Si es false, el ítem se muestra atenuado con "No disponible".
   * Nunca se oculta — siempre es visible para el cliente.
   */
  available: boolean;
}

/**
 * Agrupa ítems del menú bajo una categoría visible al cliente.
 */
export interface MenuSection {
  /** Identificador único en kebab-case. Ej: "bebidas-calientes" */
  id: string;
  /** Título visible. Ej: "Bebidas Calientes" */
  title: string;
  /** Emoji representativo que aparece junto al título. Ej: "☕" */
  emoji: string;
  /** Subtítulo opcional de la sección. */
  description?: string;
  /** Lista de productos de esta sección. */
  items: MenuItem[];
}

/**
 * Información general del café que aparece en header y footer.
 */
export interface CafeInfo {
  /** Nombre oficial. Ej: "Bunker Coffee" */
  name: string;
  /** Frase corta bajo el logo. */
  tagline: string;
  /** Handle de Instagram sin @. */
  instagram?: string;
  /** Número de WhatsApp con código de país. Ej: "+573001234567" */
  whatsapp?: string;
  /** Dirección física. */
  address?: string;
}

/**
 * Estructura raíz del menú. Todo el contenido parte desde aquí.
 *
 * ─── Cómo editar el menú ─────────────────────────────────────────────────
 * 1. Abrir src/data/menu.ts
 * 2. Para agregar un ítem: añadir un objeto MenuItem al array items de la sección.
 * 3. Para agregar una sección: añadir un objeto MenuSection al array sections.
 * 4. Actualizar el campo lastUpdated a la fecha de hoy (ISO: "YYYY-MM-DD").
 * ─────────────────────────────────────────────────────────────────────────
 */
export interface Menu {
  /** Información del café. */
  cafeInfo: CafeInfo;
  /** Lista de secciones con sus productos. El orden aquí es el orden de la página. */
  sections: MenuSection[];
  /** Código ISO de la moneda. */
  currency: "COP";
  /** Símbolo de la moneda para mostrar en pantalla. */
  currencySymbol: "$";
  /** Fecha de la última actualización del menú (ISO: "YYYY-MM-DD"). */
  lastUpdated: string;
}
