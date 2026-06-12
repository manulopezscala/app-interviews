import { SectionTitle } from "./SectionTitle";

function Btn({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = false,
}: {
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 font-medium transition-all cursor-pointer select-none";
  const sizes = { sm: "px-3 py-1 text-xs", md: "px-4 py-2 text-sm", lg: "px-6 py-3 text-base" };
  const variants = {
    primary: disabled
      ? "bg-[#d4b3ff] text-white cursor-not-allowed"
      : "bg-[#a100ff] text-white hover:bg-[#7400cc]",
    secondary: disabled
      ? "border border-[#d4b3ff] text-[#d4b3ff] cursor-not-allowed"
      : "border border-[#a100ff] text-[#a100ff] hover:bg-[#f5eeff]",
    ghost: disabled
      ? "text-[#d4b3ff] cursor-not-allowed"
      : "text-[#a100ff] hover:bg-[#f5eeff]",
    danger: disabled
      ? "bg-red-200 text-white cursor-not-allowed"
      : "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]}`}
      disabled={disabled}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {icon && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </svg>
      )}
      {label}
    </button>
  );
}

export function ButtonsSection() {
  return (
    <div className="flex flex-col gap-5">
      <SectionTitle title="Buttons" />

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Primary
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Btn label="Large" size="lg" />
            <Btn label="Medium" size="md" />
            <Btn label="Small" size="sm" />
            <Btn label="Disabled" disabled />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Secondary
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Btn label="Large" size="lg" variant="secondary" />
            <Btn label="Medium" size="md" variant="secondary" />
            <Btn label="Small" size="sm" variant="secondary" />
            <Btn label="Disabled" variant="secondary" disabled />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ghost
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Btn label="Default" variant="ghost" />
            <Btn label="With Icon" variant="ghost" icon />
            <Btn label="Disabled" variant="ghost" disabled />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Danger
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Btn label="Delete" variant="danger" />
            <Btn label="Remove" variant="danger" icon />
            <Btn label="Disabled" variant="danger" disabled />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Icon buttons
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            {[
              { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z", label: "Add" },
              { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z", label: "Delete" },
              { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z", label: "Edit" },
            ].map((btn) => (
              <button
                key={btn.label}
                title={btn.label}
                className="w-9 h-9 flex items-center justify-center border border-[#a100ff] text-[#a100ff] hover:bg-[#f5eeff] transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={btn.d} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
