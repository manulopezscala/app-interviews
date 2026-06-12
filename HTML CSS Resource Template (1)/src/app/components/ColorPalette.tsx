type SwatchProps = {
  color: string;
  name: string;
  hex: string;
  rgb: string;
  lab: string;
  textColor?: "black" | "white";
  passSmall?: boolean;
  passLarge?: boolean;
  passIcon?: boolean;
};

function ContrastBadge({ pass }: { pass: boolean }) {
  return (
    <span
      className="px-2 py-0.5 rounded-full text-xs font-medium"
      style={{
        fontFamily: "'Roboto Mono', monospace",
        background: pass ? "#e5faf1" : "white",
        color: pass ? "black" : "#d60d0d",
        border: pass ? "none" : "1px solid #d60d0d",
      }}
    >
      {pass ? "Pass" : "Fail"}
    </span>
  );
}

function HeartIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
    </svg>
  );
}

function Swatch({ color, name, hex, rgb, lab, textColor = "black", passSmall, passLarge, passIcon }: SwatchProps) {
  const tc = textColor === "white" ? "white" : "black";
  return (
    <div className="flex flex-col overflow-hidden shadow-sm" style={{ width: 200 }}>
      {/* Color block */}
      <div
        className="flex flex-col items-center justify-between py-4 px-3 gap-8"
        style={{ background: color, height: 200 }}
      >
        {/* Large A contrast area */}
        <div className="flex gap-4 items-end">
          <div className="flex flex-col items-center gap-2">
            <span style={{ color: tc, fontSize: 18, fontFamily: "'Inter', sans-serif" }}>A</span>
            <ContrastBadge pass={!!passSmall} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span style={{ color: tc, fontSize: 32, fontFamily: "'Inter', sans-serif" }}>A</span>
            <ContrastBadge pass={!!passLarge} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <HeartIcon color={tc} />
            <ContrastBadge pass={!!passIcon} />
          </div>
        </div>
        {/* Small text area (light background version) */}
        <div className="flex gap-4 items-end">
          <div className="flex flex-col items-center gap-2">
            <span style={{ color: textColor === "white" ? "black" : "white", fontSize: 18, fontFamily: "'Inter', sans-serif" }}>A</span>
            <ContrastBadge pass={!passSmall} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span style={{ color: textColor === "white" ? "black" : "white", fontSize: 32, fontFamily: "'Inter', sans-serif" }}>A</span>
            <ContrastBadge pass={!passLarge} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <HeartIcon color={textColor === "white" ? "black" : "white"} />
            <ContrastBadge pass={!passIcon} />
          </div>
        </div>
      </div>
      {/* Info block */}
      <div className="bg-white px-4 py-3 border border-[#e0e0e0]">
        <div className="border-b border-[#cfcfcf] pb-3 mb-3">
          <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>Name:</p>
          <span
            className="inline-block bg-[#f1f1ef] border border-[#cfcfcf] px-2 py-0.5 text-xs font-semibold capitalize"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {name}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { label: "Hex", value: hex },
            { label: "RGB", value: rgb },
            { label: "LAB", value: lab },
          ].map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="text-xs text-[#202020]" style={{ fontFamily: "'Inter', sans-serif" }}>{item.label}</span>
              <span className="text-xs font-semibold text-black" style={{ fontFamily: "'Inter', sans-serif" }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const coreColors: SwatchProps[] = [
  { color: "#e6dcff", name: "brand/Core/100", hex: "#E6DCFF", rgb: "230,220,255", lab: "89,8,-16", textColor: "black", passSmall: true, passLarge: true, passIcon: true },
  { color: "#c2a3ff", name: "brand/Core/200", hex: "#C2A3FF", rgb: "194,163,255", lab: "72,17,-30", textColor: "black", passSmall: false, passLarge: false, passIcon: false },
  { color: "#a100ff", name: "brand/Core/300", hex: "#A100FF", rgb: "161,0,255", lab: "42,75,-80", textColor: "white", passSmall: false, passLarge: true, passIcon: true },
  { color: "#7400cc", name: "brand/Core/400", hex: "#7400CC", rgb: "116,0,204", lab: "30,62,-65", textColor: "white", passSmall: true, passLarge: true, passIcon: true },
  { color: "#420073", name: "brand/Core/500", hex: "#420073", rgb: "66,0,115", lab: "15,46,-47", textColor: "white", passSmall: true, passLarge: true, passIcon: true },
];

const secondaryColors: SwatchProps[] = [
  { color: "#00c8ff", name: "brand/Cyan/300", hex: "#00C8FF", rgb: "0,200,255", lab: "77,-18,-34", textColor: "black", passSmall: true, passLarge: true, passIcon: true },
  { color: "#0088cc", name: "brand/Cyan/400", hex: "#0088CC", rgb: "0,136,204", lab: "54,-15,-38", textColor: "white", passSmall: true, passLarge: true, passIcon: true },
  { color: "#ff00c8", name: "brand/Pink/300", hex: "#FF00C8", rgb: "255,0,200", lab: "52,84,-17", textColor: "black", passSmall: false, passLarge: true, passIcon: true },
  { color: "#cc0099", name: "brand/Pink/400", hex: "#CC0099", rgb: "204,0,153", lab: "40,70,-14", textColor: "white", passSmall: true, passLarge: true, passIcon: true },
];

function SwatchGroup({ title, description, colors }: { title: string; description: string; colors: SwatchProps[] }) {
  return (
    <div>
      <div className="flex items-center bg-[#f1f1ef] px-6 py-1 mb-4">
        <span className="text-lg font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{title}</span>
      </div>
      {description && (
        <p className="text-base text-black px-8 mb-6" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
          {description}
        </p>
      )}
      <div className="flex flex-wrap gap-5 px-8">
        {colors.map((c) => (
          <Swatch key={c.name} {...c} />
        ))}
      </div>
    </div>
  );
}

const coreDesc =
  'Our standard brand colors. The three core purples are used across all our services, networks and offers. They appear in backgrounds, text, the logo, and the Greater Than symbol. One of the core purples should appear in layouts, either in a leading or supporting role. Look for opportunities to prevent “purple fatigue” and reference the neutral palette when necessary.\n\nOur core color is purple #A100FF, listed as Brand/Core/300. This should be the default color of choice for most interactions.';

const secondaryDesc =
  'Secondary accent colors to be used sparingly for emphasis and differentiation across digital products.';

export function ColorPalette() {
  return (
    <section className="w-full bg-white">
      <div className="px-8 pt-8 pb-4">
        <h1 className="text-5xl font-semibold text-black tracking-tight mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
          Brand color palette
        </h1>
        <p className="text-lg text-black max-w-4xl mb-2" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
          Our color palette remains rooted in our core purples. Additional colors have been added to expand our visual toolbox and reflect our continuous evolution as a company. Color is a key thread of continuity throughout our visual system and across our business, networks, and offers.
        </p>
      </div>

      <div className="flex flex-col gap-10 pb-10">
        <SwatchGroup title="Core" description={coreDesc} colors={coreColors} />
        <SwatchGroup title="Secondary" description={secondaryDesc} colors={secondaryColors} />
      </div>
    </section>
  );
}
