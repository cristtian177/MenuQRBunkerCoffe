import type { MenuSection } from "@/types/menu";
import { MenuItemCard } from "./MenuItemCard";

interface CategorySectionProps {
  section: MenuSection;
}

/**
 * Bloque de sección del menú — encabezado minimalista en uppercase con línea divisoria,
 * seguido de la lista de productos.
 */
export function CategorySection({ section }: CategorySectionProps) {
  return (
    <section id={section.id} className="scroll-mt-[56px]">
      {/* Encabezado de sección */}
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-muted whitespace-nowrap">
          {section.title}
        </h2>
        <div className="flex-1 h-px bg-brand-border" aria-hidden="true" />
      </div>

      {section.description && (
        <p className="text-sm text-brand-muted mb-4 -mt-2">{section.description}</p>
      )}

      {/* Lista de productos */}
      <div className="divide-y divide-brand-border">
        {section.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
