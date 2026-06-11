import { ColorPalette } from "./components/ColorPalette";
import { ButtonsSection } from "./components/ButtonsSection";
import { NavigationSection } from "./components/NavigationSection";
import { FormsSection } from "./components/FormsSection";
import { ProgressSection } from "./components/ProgressSection";
import { MessagesSection } from "./components/MessagesSection";
import { ContentSection } from "./components/ContentSection";
import { TabularSection } from "./components/TabularSection";
import { UtilitySection } from "./components/UtilitySection";

const sections = [
  { id: "buttons", label: "Buttons" },
  { id: "navigation", label: "Navigation" },
  { id: "forms", label: "Forms" },
  { id: "utility", label: "Utility" },
  { id: "progress", label: "Progress" },
  { id: "messages", label: "Messages" },
  { id: "content", label: "Content" },
  { id: "tabular", label: "Tabular" },
];

function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "#a100ff" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Design System — Resource Sheet
          </span>
        </div>
        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 text-xs text-gray-500 hover:text-[#a100ff] hover:bg-[#f5eeff] rounded transition-all"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span
            className="px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{ background: "#f0e8ff", color: "#a100ff", fontFamily: "'Inter', sans-serif" }}
          >
            v2.0
          </span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <TopBar />

      <main className="max-w-screen-2xl mx-auto">
        {/* Color Palette — full width */}
        <section id="palette" className="bg-white border-b border-gray-200">
          <ColorPalette />
        </section>

        {/* Component sections — 4-column grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <section id="buttons" className="bg-white border border-gray-200 p-6 shadow-sm">
              <ButtonsSection />
            </section>

            <section id="navigation" className="bg-white border border-gray-200 p-6 shadow-sm">
              <NavigationSection />
            </section>

            <section id="forms" className="bg-white border border-gray-200 p-6 shadow-sm">
              <FormsSection />
            </section>

            <section id="utility" className="bg-white border border-gray-200 p-6 shadow-sm">
              <UtilitySection />
            </section>

            <section id="progress" className="bg-white border border-gray-200 p-6 shadow-sm">
              <ProgressSection />
            </section>

            <section id="messages" className="bg-white border border-gray-200 p-6 shadow-sm">
              <MessagesSection />
            </section>

            <section id="content" className="bg-white border border-gray-200 p-6 shadow-sm">
              <ContentSection />
            </section>

            <section id="tabular" className="xl:col-span-1 bg-white border border-gray-200 p-6 shadow-sm">
              <TabularSection />
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 px-8 py-6 text-center">
          <p className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            Brand Design System · Resource Sheet · {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
}
