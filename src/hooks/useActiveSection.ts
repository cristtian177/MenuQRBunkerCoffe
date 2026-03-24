import { useEffect, useState } from "react";

/**
 * Usa IntersectionObserver para detectar qué sección del menú
 * está actualmente visible en el viewport.
 *
 * @param sectionIds - Array de IDs de las secciones a observar.
 * @returns El ID de la sección actualmente activa.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        // Dispara cuando la sección entra al 20% superior del viewport
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
