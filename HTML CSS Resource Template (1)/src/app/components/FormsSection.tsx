import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

export function FormsSection() {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState("option1");
  const [toggle, setToggle] = useState(true);
  const [date, setDate] = useState("");

  const inputBase = "w-full border px-3 py-2 text-sm outline-none transition-all";
  const inputStyle = { fontFamily: "'Inter', sans-serif", borderColor: "#e0e0e0" };
  const focusClass = "focus:border-[#a100ff] focus:ring-1 focus:ring-[#a100ff]";

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle title="Forms" />

      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        {/* Text input */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Text input
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className={`${inputBase} ${focusClass}`}
            style={inputStyle}
          />
        </div>

        {/* Text input with error */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Error state
          </label>
          <input
            type="text"
            defaultValue="Invalid value"
            className={`${inputBase} border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          <span className="text-xs text-red-500" style={{ fontFamily: "'Inter', sans-serif" }}>This field is required.</span>
        </div>

        {/* Textarea */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Textarea
          </label>
          <textarea
            placeholder="Enter description..."
            rows={3}
            className={`${inputBase} ${focusClass} resize-none`}
            style={inputStyle}
          />
        </div>

        {/* Select */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Select
          </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className={`${inputBase} ${focusClass} cursor-pointer`}
            style={inputStyle}
          >
            <option value="">Choose an option...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`${inputBase} ${focusClass}`}
            style={inputStyle}
          />
        </div>

        {/* Checkbox */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Checkbox
          </label>
          <label className="flex items-center gap-2 cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="accent-[#a100ff] w-4 h-4"
            />
            <span className="text-sm text-gray-700">Accept terms and conditions</span>
          </label>
        </div>

        {/* Radio */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Radio buttons
          </label>
          {[
            { value: "option1", label: "Option A" },
            { value: "option2", label: "Option B" },
            { value: "option3", label: "Option C" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
              <input
                type="radio"
                value={opt.value}
                checked={radio === opt.value}
                onChange={() => setRadio(opt.value)}
                className="accent-[#a100ff] w-4 h-4"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Toggle
          </label>
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="relative w-11 h-6 rounded-full transition-all"
            style={{ background: toggle ? "#a100ff" : "#d1d5db" }}
          >
            <span
              className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"
              style={{ transform: toggle ? "translateX(20px)" : "translateX(0)" }}
            />
          </button>
        </div>

        <button
          type="submit"
          className="mt-2 px-6 py-2.5 bg-[#a100ff] text-white text-sm font-semibold hover:bg-[#7400cc] transition-all"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
