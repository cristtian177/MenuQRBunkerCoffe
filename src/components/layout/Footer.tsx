import type { CafeInfo } from "@/types/menu";
import { Instagram } from "lucide-react";

interface FooterProps {
  cafeInfo: CafeInfo;
  lastUpdated: string;
}

/**
 * Footer minimalista — fondo espresso, links sociales, fecha de actualización.
 */
export function Footer({ cafeInfo, lastUpdated }: FooterProps) {
  return (
    <footer className="bg-brand-espresso px-6 py-10 mt-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
          {cafeInfo.name}
        </p>

        <div className="flex items-center gap-6">
          {cafeInfo.instagram && (
            <a
              href={`https://instagram.com/${cafeInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${cafeInfo.name}`}
              className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
            >
              <Instagram size={14} aria-hidden="true" />
              <span>@{cafeInfo.instagram}</span>
            </a>
          )}
          {cafeInfo.whatsapp && (
            <a
              href={`https://wa.me/${cafeInfo.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          )}
        </div>

        {cafeInfo.address && (
          <p className="text-white/30 text-xs">{cafeInfo.address}</p>
        )}

        <p className="text-white/25 text-xs">
          Actualizado{" "}
          {new Date(lastUpdated + "T00:00:00").toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </footer>
  );
}
