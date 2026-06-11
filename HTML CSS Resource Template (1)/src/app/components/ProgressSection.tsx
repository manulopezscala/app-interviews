import { SectionTitle } from "./SectionTitle";

function CircularProgress({ value, size = 80, stroke = 8 }: { value: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f1f1ef" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#a100ff"
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span
        className="absolute text-sm font-semibold text-[#a100ff]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {value}%
      </span>
    </div>
  );
}

function LinearBar({ value, color = "#a100ff", label }: { value: number; color?: string; label?: string }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <div className="flex justify-between text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}

function StepProgress({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center gap-1">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: i < current ? "#a100ff" : i === current ? "white" : "white",
                borderColor: i <= current ? "#a100ff" : "#e0e0e0",
                color: i < current ? "white" : i === current ? "#a100ff" : "#999",
              }}
            >
              {i < current ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span className="text-xs text-center" style={{ fontFamily: "'Inter', sans-serif", color: i <= current ? "#a100ff" : "#999", maxWidth: 50 }}>
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className="flex-1 h-0.5 mx-1 mb-4"
              style={{ background: i < current ? "#a100ff" : "#e0e0e0" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function ProgressSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle title="Progress" />

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Circular
        </p>
        <div className="flex gap-6 flex-wrap">
          <CircularProgress value={25} />
          <CircularProgress value={60} />
          <CircularProgress value={85} />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Linear bars
        </p>
        <div className="flex flex-col gap-3">
          <LinearBar value={30} label="Loading..." color="#a100ff" />
          <LinearBar value={65} label="Processing" color="#7400cc" />
          <LinearBar value={90} label="Uploading" color="#c2a3ff" />
          <LinearBar value={100} label="Complete" color="#00c8ff" />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Steps
        </p>
        <StepProgress steps={["Setup", "Config", "Review", "Done"]} current={2} />
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Loading spinner
        </p>
        <div className="flex gap-4 items-center">
          {[20, 28, 36].map((size) => (
            <div
              key={size}
              className="rounded-full border-2 border-[#e6dcff] border-t-[#a100ff] animate-spin"
              style={{ width: size, height: size }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
