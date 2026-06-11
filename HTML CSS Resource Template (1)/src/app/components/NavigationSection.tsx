import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const navItems = ["Home", "Products", "Solutions", "Resources", "About"];
const tabs = ["Overview", "Details", "Settings", "Analytics"];

export function NavigationSection() {
  const [activeNav, setActiveNav] = useState("Home");
  const [activeTab, setActiveTab] = useState("Overview");
  const [breadcrumb] = useState(["Home", "Products", "Category"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle title="Navigation" />

      {/* Top nav bar */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Navbar</p>
        <nav className="flex items-center gap-1 border-b border-gray-200 pb-0">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className="px-3 py-2 text-sm transition-all relative"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: activeNav === item ? "#a100ff" : "#666",
                fontWeight: activeNav === item ? 600 : 400,
                borderBottom: activeNav === item ? "2px solid #a100ff" : "2px solid transparent",
                marginBottom: -1,
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Tabs */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Tabs</p>
        <div className="flex gap-1 bg-gray-100 p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 px-3 py-1.5 text-xs transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: activeTab === tab ? "white" : "transparent",
                color: activeTab === tab ? "#a100ff" : "#666",
                fontWeight: activeTab === tab ? 600 : 400,
                boxShadow: "none",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Breadcrumb</p>
        <nav className="flex items-center gap-1 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          {breadcrumb.map((item, i) => (
            <span key={item} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-400">/</span>}
              <span style={{ color: i === breadcrumb.length - 1 ? "#a100ff" : "#666" }} className={i < breadcrumb.length - 1 ? "cursor-pointer hover:text-[#a100ff]" : "font-semibold"}>
                {item}
              </span>
            </span>
          ))}
        </nav>
      </div>

      {/* Sidebar mini */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Sidebar</p>
        <div className="border border-gray-200 overflow-hidden flex" style={{ height: 160 }}>
          <div className="bg-[#420073] text-white flex flex-col" style={{ width: sidebarOpen ? 130 : 44, transition: "width 0.2s" }}>
            {[
              { icon: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z", label: "Dashboard" },
              { icon: "M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.06 15.73 0 13 0c-1.5 0-2.83.68-3.75 1.73l-.75.84-.75-.85C6.83.68 5.5 0 4 0 1.27 0-.07 2.06 0 4.64.04 5.12.14 5.56.2 6H0v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-5-4c1.1 0 2 .9 2 2 0 .73-.45 1.35-1.14 1.71L14 7h-2.54l2.21-3.34C13.96 3.27 14.47 3 15 3 15 3 15 3 15 3zM4 3c.53 0 1.04.27 1.35.66L7.54 7H5l-1.86-1.29C2.45 5.35 2 4.73 2 4c0-1.1.9-2 2-2zM2 18V8h6.54l.67 1.03L8 10h2l1.21-1.85.43.66L13.54 11H22v7H2z", label: "Offers" },
              { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", label: "Network" },
            ].map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-2 px-3 py-3 text-xs hover:bg-white/10 transition-all text-left"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="shrink-0">
                  <path d={item.icon} />
                </svg>
                {sidebarOpen && <span className="truncate">{item.label}</span>}
              </button>
            ))}
          </div>
          <div className="flex-1 p-3 bg-gray-50">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-xs text-[#a100ff] hover:underline"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {sidebarOpen ? "← Collapse" : "→ Expand"}
            </button>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Pagination</p>
        <div className="flex items-center gap-1">
          {["‹", "1", "2", "3", "...", "10", "›"].map((p, i) => (
            <button
              key={i}
              className="w-8 h-8 flex items-center justify-center text-sm border transition-all"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                background: p === "2" ? "#a100ff" : "white",
                color: p === "2" ? "white" : "#333",
                borderColor: p === "2" ? "#a100ff" : "#e0e0e0",
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
