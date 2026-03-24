import type { MenuSection } from "@/types/menu";
import { useActiveSection } from "@/hooks/useActiveSection";

interface SectionNavProps {
  sections: MenuSection[];
}

/**
 * Barra de navegación sticky con tabs horizontales minimalistas.
 * Sin emojis — texto en mayúsculas con tracking amplio.
 * Tab activo: fondo espresso oscuro con texto blanco.
 */
export function SectionNav({ sections }: SectionNavProps) {
  const sectionIds = sections.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Navegación del menú"
      className="sticky top-0 z-20 bg-white border-b border-brand-border"
    >
      <div className="flex overflow-x-auto scrollbar-hide px-4 gap-1 py-2">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              aria-current={isActive ? "true" : undefined}
              className={`
                flex-shrink-0 px-4 py-2.5 text-xs font-semibold tracking-widest uppercase
                rounded transition-all duration-200 min-h-[44px] whitespace-nowrap
                focus-visible:outline-2 focus-visible:outline-brand-espresso
                ${isActive
                  ? "bg-brand-espresso text-white"
                  : "text-brand-muted hover:text-brand-text hover:bg-gray-50"
                }
              `}
            >
              {section.title}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
