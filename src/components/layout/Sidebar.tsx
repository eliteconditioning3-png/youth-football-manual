import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { chapters } from "@/data/chapters";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight, Calculator, CheckSquare, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();
  const [expandedTools, setExpandedTools] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden glass-button"
        onClick={onToggle}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-72 z-40 transform transition-transform duration-300 ease-in-out",
          "flex flex-col",
          "glass border-r border-border/50",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-border/50">
          <NavLink to="/" className="block group">
            <h1 className="font-display text-3xl tracking-wide text-gradient-primary">
              S&C MANUAL
            </h1>
            <p className="text-sm text-muted-foreground mt-1 group-hover:text-primary transition-colors">
              Mladi Nogometaši
            </p>
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin">
          {/* Home */}
          <NavLink
            to="/"
            onClick={() => window.innerWidth < 1024 && onToggle()}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-6 py-3 text-sm transition-all mx-3 rounded-xl mb-1",
                "hover:bg-primary/10",
                isActive && location.pathname === "/" 
                  ? "bg-primary/15 text-primary border-l-2 border-primary" 
                  : "text-muted-foreground"
              )
            }
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10">
              <Home className="h-4 w-4 text-primary" />
            </div>
            Naslovnica
          </NavLink>

          {/* Tools Section */}
          <div className="mt-4">
            <button
              onClick={() => setExpandedTools(!expandedTools)}
              className="flex items-center justify-between w-full px-6 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Alati
              <ChevronRight className={cn("h-4 w-4 transition-transform", expandedTools && "rotate-90")} />
            </button>
            
            {expandedTools && (
              <div className="animate-fade-in space-y-1 mt-1">
                <NavLink
                  to="/kalkulatori"
                  onClick={() => window.innerWidth < 1024 && onToggle()}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-6 py-2.5 text-sm transition-all mx-3 rounded-xl",
                      "hover:bg-primary/10",
                      isActive 
                        ? "bg-primary/15 text-primary" 
                        : "text-muted-foreground"
                    )
                  }
                >
                  <Calculator className="h-4 w-4" />
                  Kalkulatori
                </NavLink>
                <NavLink
                  to="/checkliste"
                  onClick={() => window.innerWidth < 1024 && onToggle()}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-6 py-2.5 text-sm transition-all mx-3 rounded-xl",
                      "hover:bg-accent/10",
                      isActive 
                        ? "bg-accent/15 text-accent" 
                        : "text-muted-foreground"
                    )
                  }
                >
                  <CheckSquare className="h-4 w-4" />
                  Checkliste
                </NavLink>
              </div>
            )}
          </div>

          {/* Chapters */}
          <div className="mt-6">
            <div className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Poglavlja
            </div>
            <div className="space-y-1 mt-1">
              {chapters.map((chapter) => {
                return (
                  <NavLink
                    key={chapter.id}
                    to={`/poglavlje/${chapter.slug}`}
                    onClick={() => window.innerWidth < 1024 && onToggle()}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-6 py-2.5 text-sm transition-all mx-3 rounded-xl",
                        "hover:bg-primary/10",
                        isActive 
                          ? "bg-primary/15 text-primary border-l-2 border-primary" 
                          : "text-muted-foreground"
                      )
                    }
                  >
                    <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold shrink-0">
                      {chapter.id}
                    </span>
                    <span className="truncate">{chapter.shortTitle}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border/50 text-xs text-muted-foreground text-center">
          <span className="text-gradient-primary font-medium">© 2024</span> S&C Manual
        </div>
      </aside>
    </>
  );
}
