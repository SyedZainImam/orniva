export const metadata = {
  title: "Orniva Admin Studio",
  description: "Content management for Orniva",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[999]" style={{ margin: 0, padding: 0 }}>
      {children}
    </div>
  );
}
