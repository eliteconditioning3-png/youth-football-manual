import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LoadResult {
  weeklyVolume: string;
  intensity: string;
  frequency: string;
  restDays: string;
  notes: string[];
}

export function LoadCalculator() {
  const [ageGroup, setAgeGroup] = useState("");
  const [phase, setPhase] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [result, setResult] = useState<LoadResult | null>(null);

  const calculateLoad = () => {
    if (!ageGroup || !phase || !trainingType) return;

    let weeklyVolume = "";
    let intensity = "";
    let frequency = "";
    let restDays = "";
    let notes: string[] = [];

    // Base recommendations by age group
    if (ageGroup === "u9-u12") {
      frequency = "1-2x tjedno";
      intensity = "Lagano (vlastita težina)";
      weeklyVolume = "15-20 min po sesiji";
      restDays = "Min. 48h između S&C treninga";
      notes = [
        "Fokus na zabavu i igru",
        "Koordinacijske vježbe dominiraju",
        "Bez vanjskih opterećenja"
      ];
    } else if (ageGroup === "u13-u15") {
      if (phase === "phv") {
        frequency = "1-2x tjedno";
        intensity = "Lagano do umjereno";
        weeklyVolume = "20-25 min po sesiji";
        restDays = "Min. 72h između S&C";
        notes = [
          "Smanjen volumen zbog faze rasta",
          "Posebna pažnja na fleksibilnost",
          "Izbjegavajte maksimalne napore"
        ];
      } else {
        frequency = "2x tjedno";
        intensity = "Umjereno";
        weeklyVolume = "25-35 min po sesiji";
        restDays = "Min. 48h između S&C";
        notes = [
          "Tehnika ima prioritet",
          "Lagani vanjski otpori dozvoljeni",
          "Pratite znakove umora"
        ];
      }
    } else if (ageGroup === "u16-u19") {
      frequency = "2-3x tjedno";
      intensity = "Umjereno do visoko";
      weeklyVolume = "45-60 min po sesiji";
      restDays = "Min. 48h, 72h za zahtjevne sesije";
      notes = [
        "Strukturirani programi snage",
        "Periodizacija prema sezoni",
        "Individualizacija prema potrebama"
      ];
    }

    // Adjust based on training type
    if (trainingType === "strength") {
      notes.push("Fokus na temeljne obrasce pokreta");
      if (ageGroup === "u16-u19") {
        intensity = "75-85% 1RM";
      }
    } else if (trainingType === "speed") {
      notes.push("Puna oporavljenost prije brzinskog rada");
      notes.push("Kratki intervali, duži odmori");
    } else if (trainingType === "endurance") {
      notes.push("SSG preferiran za mlađe");
      if (ageGroup === "u16-u19") {
        notes.push("Intervalni trening kao dodatak");
      }
    } else if (trainingType === "prevention") {
      notes.push("Provoditi na početku svakog treninga");
      notes.push("FIFA 11+ kao temelj");
    }

    setResult({ weeklyVolume, intensity, frequency, restDays, notes });
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-card">
      <h3 className="text-xl font-display mb-6">Kalkulator Opterećenja</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Preporučeni volumen, intenzitet i frekvencija treninga prema uzrastu i fazi razvoja.
      </p>

      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium mb-2 block">Dobna skupina</Label>
          <Select value={ageGroup} onValueChange={setAgeGroup}>
            <SelectTrigger>
              <SelectValue placeholder="Odaberi uzrast" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="u9-u12">U9-U12 (9-12 godina)</SelectItem>
              <SelectItem value="u13-u15">U13-U15 (13-15 godina)</SelectItem>
              <SelectItem value="u16-u19">U16-U19 (16-19 godina)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium mb-2 block">Faza razvoja</Label>
          <Select value={phase} onValueChange={setPhase}>
            <SelectTrigger>
              <SelectValue placeholder="Odaberi fazu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pre-phv">Pre-PHV (Prije vrhunca rasta)</SelectItem>
              <SelectItem value="phv">PHV (Tijekom vrhunca rasta)</SelectItem>
              <SelectItem value="post-phv">Post-PHV (Nakon vrhunca rasta)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium mb-2 block">Vrsta treninga</Label>
          <Select value={trainingType} onValueChange={setTrainingType}>
            <SelectTrigger>
              <SelectValue placeholder="Odaberi vrstu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strength">Snaga</SelectItem>
              <SelectItem value="speed">Brzina i agilnost</SelectItem>
              <SelectItem value="endurance">Izdržljivost</SelectItem>
              <SelectItem value="prevention">Prevencija ozljeda</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={calculateLoad} className="w-full bg-gradient-accent hover:opacity-90">
          Prikaži preporuke
        </Button>

        {result && (
          <div className="mt-6 space-y-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Frekvencija</div>
                <div className="font-semibold">{result.frequency}</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Intenzitet</div>
                <div className="font-semibold">{result.intensity}</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Volumen</div>
                <div className="font-semibold">{result.weeklyVolume}</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Odmor</div>
                <div className="font-semibold">{result.restDays}</div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
              <h4 className="font-semibold text-accent mb-3">Napomene:</h4>
              <ul className="space-y-2">
                {result.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-accent">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
