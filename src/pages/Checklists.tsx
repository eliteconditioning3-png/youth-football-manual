import { Layout } from "@/components/layout/Layout";
import { Checklist } from "@/components/checklists/Checklist";
import { 
  safetyChecklist, 
  techniqueChecklist, 
  weeklyPlanningChecklist,
  matchDayChecklist,
  injuryPreventionChecklist 
} from "@/data/checklists";
import { Link } from "react-router-dom";
import { ChevronRight, CheckSquare } from "lucide-react";

const Checklists = () => {
  return (
    <Layout>
      {/* Mesh Background */}
      <div className="fixed inset-0 bg-mesh pointer-events-none -z-10" />
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary transition-colors">Naslovnica</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Checkliste</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-subtle rounded-full mb-4">
          <CheckSquare className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-accent">Alati</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-3 text-foreground">
          INTERAKTIVNE <span className="text-gradient-accent">CHECKLISTE</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Praktične liste za provjeru tijekom svakodnevnog rada s mladim sportašima.
        </p>
      </div>

      {/* Checklists */}
      <div className="space-y-8">
        <Checklist {...safetyChecklist} />
        <Checklist {...injuryPreventionChecklist} />
        <Checklist {...techniqueChecklist} />
        <Checklist {...weeklyPlanningChecklist} />
        <Checklist {...matchDayChecklist} />
      </div>
    </Layout>
  );
};

export default Checklists;
