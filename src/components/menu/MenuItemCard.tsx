import type { MenuItem } from "@/types/menu";
import { Badge } from "@/components/ui/Badge";
import { PriceTag } from "@/components/ui/PriceTag";

interface MenuItemCardProps {
  item: MenuItem;
}

/**
 * Tarjeta minimalista de un producto.
 * Izquierda: nombre + descripción + badges. Derecha: precio.
 * Sin imágenes.
 */
export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article
      className={`flex items-start justify-between gap-4 py-4 ${
        !item.available ? "opacity-40" : ""
      }`}
      aria-label={item.name}
    >
      {/* Columna izquierda */}
      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-[0.9375rem] font-medium text-brand-text leading-snug">
            {item.name}
          </h3>
          {!item.available && (
            <span className="text-xs text-brand-light">Agotado</span>
          )}
        </div>

        {item.description && (
          <p className="text-[0.8125rem] text-brand-muted leading-relaxed mt-0.5">
            {item.description}
          </p>
        )}

        {item.badges && item.badges.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {item.badges.map((badge) => (
              <Badge key={badge} label={badge} />
            ))}
          </div>
        )}
      </div>

      {/* Precio */}
      <div className="flex-shrink-0 pt-0.5">
        <PriceTag price={item.price} available={item.available} />
      </div>
    </article>
  );
}
