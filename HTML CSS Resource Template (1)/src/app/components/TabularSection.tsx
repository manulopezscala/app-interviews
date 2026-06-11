import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

type Row = { id: number; name: string; status: string; role: string; date: string; value: number };

const data: Row[] = [
  { id: 1, name: "Alice Smith", status: "Active", role: "Admin", date: "2026-01-10", value: 4500 },
  { id: 2, name: "Bob Chen", status: "Pending", role: "Editor", date: "2026-02-14", value: 2300 },
  { id: 3, name: "Carol Day", status: "Inactive", role: "Viewer", date: "2026-03-01", value: 1800 },
  { id: 4, name: "Dave Lee", status: "Active", role: "Editor", date: "2026-04-22", value: 3700 },
  { id: 5, name: "Eve Torres", status: "Active", role: "Admin", date: "2026-05-05", value: 5100 },
];

const statusColors: Record<string, string> = {
  Active: "#00a87a",
  Pending: "#cc9a00",
  Inactive: "#999",
};

export function TabularSection() {
  const [sortCol, setSortCol] = useState<keyof Row>("id");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const sorted = [...data].sort((a, b) => {
    const av = a[sortCol];
    const bv = b[sortCol];
    const cmp = av < bv ? -1 : av > bv ? 1 : 0;
    return sortDir === "asc" ? cmp : -cmp;
  });

  function toggleSort(col: keyof Row) {
    if (sortCol === col) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortCol(col); setSortDir("asc"); }
  }

  function toggleSelect(id: number) {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  }

  function toggleAll() {
    if (selected.size === data.length) setSelected(new Set());
    else setSelected(new Set(data.map((r) => r.id)));
  }

  const cols: { key: keyof Row; label: string }[] = [
    { key: "name", label: "Name" },
    { key: "status", label: "Status" },
    { key: "role", label: "Role" },
    { key: "date", label: "Date" },
    { key: "value", label: "Value" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle title="Tabular" />

      <div className="overflow-x-auto border border-gray-200 shadow-sm">
        <table className="w-full text-sm border-collapse" style={{ fontFamily: "'Inter', sans-serif" }}>
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-3 py-3 text-left w-10">
                <input
                  type="checkbox"
                  checked={selected.size === data.length}
                  onChange={toggleAll}
                  className="accent-[#a100ff] w-3.5 h-3.5"
                />
              </th>
              {cols.map((col) => (
                <th
                  key={col.key}
                  className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-[#a100ff] select-none transition-colors"
                  onClick={() => toggleSort(col.key)}
                >
                  <span className="flex items-center gap-1">
                    {col.label}
                    <span className="text-gray-300">
                      {sortCol === col.key ? (sortDir === "asc" ? "↑" : "↓") : "↕"}
                    </span>
                  </span>
                </th>
              ))}
              <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 hover:bg-[#f9f6ff] transition-colors"
                style={{ background: selected.has(row.id) ? "#f5eeff" : i % 2 === 0 ? "white" : "#fafafa" }}
              >
                <td className="px-3 py-2.5">
                  <input
                    type="checkbox"
                    checked={selected.has(row.id)}
                    onChange={() => toggleSelect(row.id)}
                    className="accent-[#a100ff] w-3.5 h-3.5"
                  />
                </td>
                <td className="px-3 py-2.5 font-medium text-gray-900 text-xs">{row.name}</td>
                <td className="px-3 py-2.5">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: `${statusColors[row.status]}20`, color: statusColors[row.status] }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: statusColors[row.status] }}
                    />
                    {row.status}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-gray-600 text-xs">{row.role}</td>
                <td className="px-3 py-2.5 text-gray-600 text-xs">{row.date}</td>
                <td className="px-3 py-2.5 text-gray-900 text-xs font-medium">${row.value.toLocaleString()}</td>
                <td className="px-3 py-2.5">
                  <div className="flex gap-1">
                    {[
                      { title: "Edit", d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" },
                      { title: "Delete", d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" },
                    ].map((btn) => (
                      <button
                        key={btn.title}
                        title={btn.title}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-[#a100ff] transition-colors"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d={btn.d} />
                        </svg>
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 border-t border-gray-200">
              <td colSpan={6} className="px-3 py-2 text-xs text-gray-500">
                {selected.size > 0 ? `${selected.size} of ${data.length} selected` : `${data.length} records`}
              </td>
              <td className="px-3 py-2 text-right">
                <div className="flex justify-end gap-1">
                  {["‹", "1", "2", "›"].map((p, i) => (
                    <button
                      key={i}
                      className="w-6 h-6 text-xs flex items-center justify-center border transition-all"
                      style={{
                        background: p === "1" ? "#a100ff" : "white",
                        color: p === "1" ? "white" : "#666",
                        borderColor: p === "1" ? "#a100ff" : "#e0e0e0",
                        fontFamily: "'Roboto Mono', monospace",
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Records", value: data.length, icon: "📋" },
          { label: "Active", value: data.filter((r) => r.status === "Active").length, icon: "✅" },
          { label: "Total Value", value: `$${data.reduce((s, r) => s + r.value, 0).toLocaleString()}`, icon: "💰" },
        ].map((stat) => (
          <div key={stat.label} className="border border-gray-200 p-3 bg-white text-center">
            <div className="text-xl mb-1">{stat.icon}</div>
            <div className="text-lg font-bold text-[#a100ff]" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.value}</div>
            <div className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
