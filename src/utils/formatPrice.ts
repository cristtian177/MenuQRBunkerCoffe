/**
 * Formatea un precio entero en pesos colombianos.
 * Usa Intl.NumberFormat para formato local correcto.
 *
 * @example
 * formatPrice(8000) // "$ 8.000"
 * formatPrice(10500) // "$ 10.500"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}
