import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutDashboard } from "lucide-react";

import { Button } from "./components/ui/button";
import { screens } from "./mockupScreens";

export default function App() {
  const [currentId, setCurrentId] = useState(screens[0].id);
  const currentIndex = screens.findIndex((screen) => screen.id === currentId);
  const CurrentScreen = screens[currentIndex]?.component ?? screens[0].component;

  const groupedScreens = useMemo(
    () => ({
      Candidato: screens.filter((screen) => screen.flow === "Candidato"),
      Administrador: screens.filter((screen) => screen.flow === "Administrador"),
    }),
    [],
  );

  const goTo = (offset: number) => {
    const nextIndex = Math.min(Math.max(currentIndex + offset, 0), screens.length - 1);
    setCurrentId(screens[nextIndex].id);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#202020]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="sticky top-0 z-20 border-b border-[#E0E0E0] bg-white/95 backdrop-blur">
        <div className="flex flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-[#A100FF] text-white">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#A100FF]">High fidelity mockups</p>
              <h1 className="text-xl font-semibold tracking-[-0.48px] text-black">InterviewOS</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-none border border-[#A100FF] bg-transparent text-[#A100FF] hover:bg-[#F5EEFF]" onClick={() => goTo(-1)} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4" /> Anterior
            </Button>
            <Button className="rounded-none border border-[#A100FF] bg-[#A100FF] text-white hover:bg-[#7400CC]" onClick={() => goTo(1)} disabled={currentIndex === screens.length - 1}>
              Siguiente <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <nav className="flex gap-8 overflow-x-auto px-4 lg:px-8" aria-label="Navegación de pantallas">
          {Object.entries(groupedScreens).map(([flow, flowScreens]) => (
            <div className="flex items-center gap-1" key={flow}>
              <span className="mr-2 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-[#999]">{flow}</span>
              {flowScreens.map((screen) => (
                <button
                  className={`whitespace-nowrap border-b-2 px-3 py-3 text-sm transition-colors ${
                    currentId === screen.id
                      ? "border-[#A100FF] font-semibold text-[#A100FF]"
                      : "border-transparent text-[#666] hover:text-[#A100FF]"
                  }`}
                  key={screen.id}
                  onClick={() => setCurrentId(screen.id)}
                  type="button"
                >
                  {screen.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </header>
      <CurrentScreen />
    </div>
  );
}
