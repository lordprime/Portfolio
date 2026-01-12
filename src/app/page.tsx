import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-500/30 selection:text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </main>
  );
}
