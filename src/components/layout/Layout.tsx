import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <main 
        className={cn(
          "min-h-screen transition-all duration-300",
          "lg:ml-72"
        )}
      >
        <div className="max-w-4xl mx-auto px-6 py-8 lg:px-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
