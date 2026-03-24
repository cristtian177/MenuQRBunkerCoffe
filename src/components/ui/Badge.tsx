import type { BadgeLabel } from "@/types/menu";

interface BadgeProps {
  label: BadgeLabel;
}

const badgeStyles: Record<BadgeLabel, string> = {
  Popular: "bg-stone-100 text-stone-600",
  Nuevo: "bg-stone-100 text-stone-600",
  Vegano: "bg-stone-100 text-stone-600",
  "Sin Gluten": "bg-stone-100 text-stone-600",
  Recomendado: "bg-stone-100 text-stone-600",
};

/**
 * Badge minimalista en tono neutro — sin colores vivos.
 */
export function Badge({ label }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded px-1.5 py-0.5 text-[0.65rem] font-medium tracking-wide uppercase leading-none ${badgeStyles[label]}`}
    >
      {label}
    </span>
  );
}
