import { SectionTitle } from "./SectionTitle";

function Card({ title, body, tag, img }: { title: string; body: string; tag?: string; img?: string }) {
  return (
    <div className="border border-gray-200 overflow-hidden bg-white shadow-sm">
      {img && (
        <div className="h-28 bg-gradient-to-br from-[#e6dcff] to-[#c2a3ff] flex items-center justify-center" style={{ borderRadius: 0 }}>
          <span className="text-4xl">{img}</span>
        </div>
      )}
      <div className="p-4">
        {tag && (
          <span
            className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-2"
            style={{ background: "#f0e8ff", color: "#a100ff", fontFamily: "'Inter', sans-serif" }}
          >
            {tag}
          </span>
        )}
        <h3 className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{body}</p>
        <button className="mt-3 text-xs font-semibold text-[#a100ff] hover:underline flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          Read more
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{ background: `${color}20`, color, fontFamily: "'Inter', sans-serif" }}
    >
      {label}
    </span>
  );
}

function Avatar({ name, size = 36 }: { name: string; size?: number }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const colors = ["#a100ff", "#7400cc", "#00c8ff", "#ff00c8", "#420073"];
  const bg = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-semibold shrink-0"
      style={{ width: size, height: size, background: bg, fontSize: size * 0.35, fontFamily: "'Inter', sans-serif" }}
    >
      {initials}
    </div>
  );
}

function AvatarGroup({ names }: { names: string[] }) {
  return (
    <div className="flex">
      {names.map((name, i) => (
        <div key={name} style={{ marginLeft: i > 0 ? -10 : 0, zIndex: names.length - i }}>
          <Avatar name={name} size={32} />
        </div>
      ))}
      {names.length > 3 && (
        <div
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600"
          style={{ marginLeft: -10, fontFamily: "'Inter', sans-serif" }}
        >
          +{names.length - 3}
        </div>
      )}
    </div>
  );
}

export function ContentSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle title="Content" />

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Cards
        </p>
        <div className="flex flex-col gap-3">
          <Card
            title="Getting started guide"
            body="Learn how to set up your account and start using our platform in minutes."
            tag="Documentation"
            img="📖"
          />
          <Card
            title="Latest updates"
            body="Check out what's new in the latest release of our product suite."
            tag="News"
          />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Badges
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge label="Active" color="#00a87a" />
          <Badge label="Pending" color="#cc9a00" />
          <Badge label="Inactive" color="#999" />
          <Badge label="Error" color="#cc0000" />
          <Badge label="New" color="#a100ff" />
          <Badge label="Beta" color="#00c8ff" />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Avatars
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            {["Alice Smith", "Bob Chen", "Carol Day"].map((n) => (
              <div key={n} className="flex flex-col items-center gap-1">
                <Avatar name={n} size={40} />
                <span className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{n.split(" ")[0]}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Avatar group</p>
            <AvatarGroup names={["Alice Smith", "Bob Chen", "Carol Day", "Dave Lee", "Eve Torres"]} />
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Typography
        </p>
        <div className="flex flex-col gap-2">
          {[
            { label: "Display", size: "text-2xl", weight: "font-bold", text: "The quick brown fox" },
            { label: "Heading", size: "text-lg", weight: "font-semibold", text: "Section heading" },
            { label: "Body", size: "text-sm", weight: "font-normal", text: "Regular body text for reading." },
            { label: "Caption", size: "text-xs", weight: "font-normal", text: "Small caption text", color: "text-gray-500" },
          ].map((t) => (
            <div key={t.label} className="flex items-baseline gap-3">
              <span className="text-xs text-gray-400 w-14 shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>{t.label}</span>
              <span className={`${t.size} ${t.weight} ${t.color || "text-gray-900"}`} style={{ fontFamily: "'Inter', sans-serif" }}>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
