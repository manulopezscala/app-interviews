export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 pb-4 border-b-2 border-[#a100ff] mb-6">
        <h2 className="text-2xl font-semibold text-black tracking-tight">{title}</h2>
      </div>
    </div>
  );
}
