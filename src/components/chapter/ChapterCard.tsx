import { useState } from "react";
import { ChapterSection } from "@/data/chapters";
import { cn } from "@/lib/utils";
import { ChevronDown, Lightbulb } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface ChapterCardProps {
  section: ChapterSection;
  defaultOpen?: boolean;
}

export function ChapterCard({ section, defaultOpen = false }: ChapterCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="glass-card rounded-2xl overflow-hidden">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between p-6 cursor-pointer hover:bg-primary/5 transition-colors">
            <h3 className="font-semibold text-lg text-foreground text-left">
              {section.title}
            </h3>
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-all",
              isOpen ? "bg-primary/20" : "bg-muted"
            )}>
              <ChevronDown 
                className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                )} 
              />
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-6 pb-6 space-y-5 animate-fade-in">
            {/* Main content */}
            <p className="text-muted-foreground leading-relaxed">
              {section.content}
            </p>

            {/* Bullets */}
            {section.bullets && (
              <ul className="space-y-3">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground">
                    <span className="h-2 w-2 rounded-full bg-gradient-primary mt-2 shrink-0 shadow-glow/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Table */}
            {section.table && (
              <div className="overflow-x-auto rounded-xl border border-border/50">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      {section.table.headers.map((header, idx) => (
                        <th 
                          key={idx} 
                          className="text-left py-4 px-5 font-semibold text-foreground bg-primary/5 first:rounded-tl-xl last:rounded-tr-xl"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rowIdx) => (
                      <tr 
                        key={rowIdx} 
                        className="border-b border-border/30 last:border-0 hover:bg-primary/5 transition-colors"
                      >
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="py-4 px-5 text-muted-foreground">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Tips */}
            {section.tips && (
              <div className="glass-subtle rounded-xl p-5 border-l-4 border-primary">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-semibold text-primary">Pro Tips</span>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground">
                      <span className="text-accent font-bold">→</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
