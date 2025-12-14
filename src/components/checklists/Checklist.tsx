import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { RotateCcw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
}

interface ChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
  colorClass?: string;
}

export function Checklist({ title, description, items, colorClass = "primary" }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checked);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setChecked(newChecked);
  };

  const resetAll = () => setChecked(new Set());

  const completedCount = checked.size;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-display text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={resetAll} title="Reset" className="hover:bg-primary/10">
          <RotateCcw className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Napredak</span>
          <span className="font-medium text-foreground">{completedCount}/{items.length}</span>
        </div>
        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item) => (
          <div 
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={cn(
              "flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200",
              checked.has(item.id) 
                ? "glass-subtle border-primary/40 shadow-glow/20" 
                : "bg-muted/20 border-border/50 hover:bg-muted/40 hover:border-border"
            )}
          >
            <Checkbox 
              checked={checked.has(item.id)} 
              onCheckedChange={() => toggleItem(item.id)}
              className="mt-0.5 border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <div className="flex-1">
              <div className={cn(
                "font-medium transition-all text-foreground",
                checked.has(item.id) && "line-through text-muted-foreground"
              )}>
                {item.label}
              </div>
              {item.description && (
                <div className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {completedCount === items.length && (
        <div className="mt-6 p-5 glass-subtle border border-primary/30 rounded-xl text-center animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto flex items-center justify-center shadow-glow mb-3">
            <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <p className="font-semibold text-foreground">Svi zadaci završeni!</p>
        </div>
      )}
    </div>
  );
}
