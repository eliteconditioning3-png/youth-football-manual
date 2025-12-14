import { Layout } from "@/components/layout/Layout";
import { PHVCalculator } from "@/components/calculators/PHVCalculator";
import { LoadCalculator } from "@/components/calculators/LoadCalculator";
import { BMICalculator } from "@/components/calculators/BMICalculator";
import { Link } from "react-router-dom";
import { ChevronRight, Calculator } from "lucide-react";

const Calculators = () => {
  return (
    <Layout>
      {/* Mesh Background */}
      <div className="fixed inset-0 bg-mesh pointer-events-none -z-10" />
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary transition-colors">Naslovnica</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Kalkulatori</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-subtle rounded-full mb-4">
          <Calculator className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Alati</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-3 text-foreground">
          INTERAKTIVNI <span className="text-gradient-primary">KALKULATORI</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Alati za procjenu razvojne faze, opterećenja i tjelesne kompozicije mladih sportaša.
        </p>
      </div>

      {/* Calculators */}
      <div className="space-y-8">
        <PHVCalculator />
        <LoadCalculator />
        <BMICalculator />
      </div>
    </Layout>
  );
};

export default Calculators;
