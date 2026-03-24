import { formatPrice } from "@/utils/formatPrice";

interface PriceTagProps {
  price: number;
  available: boolean;
}

/**
 * Precio formateado en COP — texto neutro, semibold, sin color vivo.
 */
export function PriceTag({ price, available }: PriceTagProps) {
  const formatted = formatPrice(price);
  return (
    <span
      className={`whitespace-nowrap text-sm font-semibold ${
        available ? "text-brand-text" : "text-brand-light"
      }`}
      aria-label={`Precio: ${formatted}`}
    >
      {formatted}
    </span>
  );
}
