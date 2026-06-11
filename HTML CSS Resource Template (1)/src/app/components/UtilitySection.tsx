import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

function Tooltip({ label, tip }: { label: string; tip: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-flex">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="px-3 py-1.5 text-xs border border-[#a100ff] text-[#a100ff] hover:bg-[#f5eeff] transition-all"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </button>
      {show && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white whitespace-nowrap z-10 shadow-lg"
          style={{ background: "#420073", fontFamily: "'Inter', sans-serif" }}
        >
          {tip}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
            style={{ borderTopColor: "#420073" }}
          />
        </div>
      )}
    </div>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove?: () => void }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
      style={{ background: "#f0e8ff", color: "#a100ff", fontFamily: "'Inter', sans-serif" }}
    >
      {label}
      {onRemove && (
        <button onClick={onRemove} className="hover:text-[#7400cc] ml-0.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
    </span>
  );
}

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select option");
  const options = ["Option A", "Option B", "Option C", "Option D"];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 px-3 py-2 text-xs border border-gray-200 w-40 bg-white hover:border-[#a100ff] transition-all"
        style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}
      >
        <span>{selected}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#666" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 shadow-lg z-10">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { setSelected(opt); setOpen(false); }}
              className="w-full text-left px-3 py-2 text-xs hover:bg-[#f5eeff] hover:text-[#a100ff] transition-all"
              style={{ fontFamily: "'Inter', sans-serif", color: selected === opt ? "#a100ff" : "#333", fontWeight: selected === opt ? 600 : 400 }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Slider({ defaultValue = 60 }: { defaultValue?: number }) {
  const [val, setVal] = useState(defaultValue);
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min={0}
        max={100}
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="flex-1 accent-[#a100ff]"
        style={{ height: 4 }}
      />
      <span className="text-xs font-mono text-[#a100ff] w-8 text-right" style={{ fontFamily: "'Roboto Mono', monospace" }}>{val}</span>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre
      className="bg-[#1e0040] text-[#c2a3ff] p-3 text-xs overflow-auto"
      style={{ fontFamily: "'Roboto Mono', monospace" }}
    >
      <code>{code}</code>
    </pre>
  );
}

export function UtilitySection() {
  const [chips, setChips] = useState(["React", "Tailwind", "TypeScript", "Figma"]);
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle title="Utility" />

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Tooltips
        </p>
        <div className="flex gap-3 flex-wrap pb-6">
          <Tooltip label="Hover me" tip="This is a tooltip!" />
          <Tooltip label="Info" tip="Helpful information here." />
          <Tooltip label="Action" tip="Click to perform action" />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Chips / Tags
        </p>
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <Chip key={chip} label={chip} onRemove={() => setChips(chips.filter((c) => c !== chip))} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Dropdown
        </p>
        <Dropdown />
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Slider
        </p>
        <Slider />
        <Slider defaultValue={30} />
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Code snippet
        </p>
        <CodeBlock code={`import { Button } from "@ds/components";\n\n<Button\n  variant="primary"\n  size="md"\n>\n  Click me\n</Button>`} />
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Dividers
        </p>
        <div className="flex flex-col gap-2">
          <div className="w-full h-px bg-gray-200" />
          <div className="w-full h-px bg-[#a100ff]" />
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Icons (Lucide)
        </p>
        <div className="grid grid-cols-5 gap-3">
          {[
            "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6",
            "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
            "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
            "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
          ].map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1 p-2 border border-gray-100 hover:border-[#a100ff] hover:bg-[#f5eeff] transition-all cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a100ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={d} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
