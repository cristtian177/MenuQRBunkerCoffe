import type { Menu } from "@/types/menu";
import { SectionNav } from "./SectionNav";
import { CategorySection } from "./CategorySection";

interface MenuPageProps {
  menu: Menu;
}

/**
 * Página principal del menú.
 * Renderiza la barra de navegación de secciones y luego cada sección con sus productos.
 */
export function MenuPage({ menu }: MenuPageProps) {
  return (
    <main>
      <SectionNav sections={menu.sections} />

      <div className="px-5 py-8 space-y-10 max-w-2xl mx-auto">
        {menu.sections.map((section) => (
          <CategorySection key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
