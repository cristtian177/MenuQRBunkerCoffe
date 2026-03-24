import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuPage } from "@/components/menu/MenuPage";
import { menu } from "@/data/menu";

/**
 * Componente raíz de la aplicación.
 * Compone Header + MenuPage + Footer pasando los datos del menú.
 */
function App() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Header cafeInfo={menu.cafeInfo} />
      <div className="flex-1">
        <MenuPage menu={menu} />
      </div>
      <Footer cafeInfo={menu.cafeInfo} lastUpdated={menu.lastUpdated} />
    </div>
  );
}

export default App;
