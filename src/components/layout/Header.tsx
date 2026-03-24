import type { CafeInfo } from "@/types/menu";

interface HeaderProps {
  cafeInfo: CafeInfo;
}

/**
 * Header minimalista — fondo espresso oscuro, nombre en uppercase tracking amplio.
 */
export function Header({ cafeInfo }: HeaderProps) {
  return (
    <header className="bg-brand-espresso px-6 py-8 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-3">
        <img
          src="/logo.png"
          alt={`Logo de ${cafeInfo.name}`}
          className="h-14 w-auto object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div>
          <h1 className="text-lg font-semibold tracking-[0.25em] uppercase text-white">
            {cafeInfo.name}
          </h1>
          {cafeInfo.tagline && (
            <p className="text-xs tracking-[0.15em] text-white/40 mt-1.5 uppercase">
              {cafeInfo.tagline}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
