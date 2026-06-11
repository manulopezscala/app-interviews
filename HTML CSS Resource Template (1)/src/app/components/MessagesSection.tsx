import { SectionTitle } from "./SectionTitle";

type AlertType = "info" | "success" | "warning" | "error";

const alertConfig: Record<AlertType, { bg: string; border: string; icon: string; iconColor: string; iconPath: string }> = {
  info: {
    bg: "#f0e8ff",
    border: "#c2a3ff",
    icon: "#a100ff",
    iconColor: "#a100ff",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
  },
  success: {
    bg: "#e5faf1",
    border: "#00c8a0",
    icon: "#00a87a",
    iconColor: "#00a87a",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  warning: {
    bg: "#fff8e6",
    border: "#ffbe00",
    icon: "#cc9a00",
    iconColor: "#cc9a00",
    iconPath: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
  },
  error: {
    bg: "#fff0f0",
    border: "#ff4444",
    icon: "#cc0000",
    iconColor: "#cc0000",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
  },
};

function Alert({ type, title, message }: { type: AlertType; title: string; message: string }) {
  const cfg = alertConfig[type];
  return (
    <div
      className="flex gap-3 p-3 border"
      style={{ background: cfg.bg, borderColor: cfg.border }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill={cfg.iconColor} className="shrink-0 mt-0.5">
        <path d={cfg.iconPath} />
      </svg>
      <div>
        <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>{title}</p>
        <p className="text-xs text-gray-600 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{message}</p>
      </div>
    </div>
  );
}

function Toast({ type, message }: { type: AlertType; message: string }) {
  const cfg = alertConfig[type];
  return (
    <div
      className="flex items-center gap-2 px-4 py-3 shadow-lg border w-full"
      style={{ background: "white", borderLeft: `4px solid ${cfg.border}` }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill={cfg.iconColor} className="shrink-0">
        <path d={cfg.iconPath} />
      </svg>
      <span className="text-sm flex-1" style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}>{message}</span>
      <button className="text-gray-400 hover:text-gray-600 ml-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  );
}

function ChatBubble({ message, from, time }: { message: string; from: "user" | "other"; time: string }) {
  return (
    <div className={`flex gap-2 ${from === "user" ? "flex-row-reverse" : ""}`}>
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
        style={{
          background: from === "user" ? "#a100ff" : "#e6dcff",
          color: from === "user" ? "white" : "#a100ff",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {from === "user" ? "U" : "A"}
      </div>
      <div className={`max-w-[75%] ${from === "user" ? "items-end" : "items-start"} flex flex-col gap-0.5`}>
        <div
          className="px-3 py-2 text-xs"
          style={{
            background: from === "user" ? "#a100ff" : "#f1f1ef",
            color: from === "user" ? "white" : "#333",
            fontFamily: "'Inter', sans-serif",
            borderRadius: 0,
          }}
        >
          {message}
        </div>
        <span className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>{time}</span>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="border border-gray-200 shadow-xl overflow-hidden bg-white w-full max-w-xs">
      <div className="bg-[#a100ff] px-4 py-3 flex items-center justify-between">
        <span className="text-white text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Confirm action</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
        <div className="flex gap-2 justify-end">
          <button className="px-3 py-1.5 text-xs border border-gray-200 text-gray-600 hover:bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>
            Cancel
          </button>
          <button className="px-3 py-1.5 text-xs bg-red-500 text-white hover:bg-red-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export function MessagesSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle title="Messages" />

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Alerts
        </p>
        <div className="flex flex-col gap-2">
          <Alert type="info" title="Information" message="Your request has been received." />
          <Alert type="success" title="Success!" message="The operation completed successfully." />
          <Alert type="warning" title="Warning" message="Please review your settings before continuing." />
          <Alert type="error" title="Error" message="Something went wrong. Please try again." />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Toasts
        </p>
        <div className="flex flex-col gap-2">
          <Toast type="success" message="Changes saved successfully!" />
          <Toast type="error" message="Failed to save. Try again." />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Chat
        </p>
        <div className="flex flex-col gap-3 bg-gray-50 p-3 border border-gray-200">
          <ChatBubble message="Hello! How can I help you today?" from="other" time="10:30 AM" />
          <ChatBubble message="I have a question about my account." from="user" time="10:31 AM" />
          <ChatBubble message="Of course! Please go ahead." from="other" time="10:31 AM" />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          Modal
        </p>
        <Modal />
      </div>
    </div>
  );
}
