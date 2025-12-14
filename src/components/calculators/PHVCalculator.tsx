import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

interface PHVResult {
  phvAge: number;
  maturityOffset: number;
  phase: "pre-phv" | "phv" | "post-phv";
  phaseLabel: string;
  recommendations: string[];
}

export function PHVCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sittingHeight, setSittingHeight] = useState("");
  const [result, setResult] = useState<PHVResult | null>(null);

  const calculatePHV = () => {
    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const sittingHeightNum = parseFloat(sittingHeight);

    if (!ageNum || !heightNum || !weightNum || !sittingHeightNum) {
      return;
    }

    const legLength = heightNum - sittingHeightNum;
    const sittingHeightRatio = (sittingHeightNum / heightNum) * 100;

    let maturityOffset: number;

    if (gender === "male") {
      maturityOffset = -9.236 + (0.0002708 * (legLength * sittingHeightNum)) +
        (-0.001663 * (ageNum * legLength)) +
        (0.007216 * (ageNum * sittingHeightNum)) +
        (0.02292 * (weightNum / heightNum * 100));
    } else {
      maturityOffset = -9.376 + (0.0001882 * (legLength * sittingHeightNum)) +
        (0.0022 * (ageNum * legLength)) +
        (0.005841 * (ageNum * sittingHeightNum)) +
        (-0.002658 * (ageNum * weightNum)) +
        (0.07693 * (weightNum / heightNum * 100));
    }

    const phvAge = ageNum - maturityOffset;

    let phase: "pre-phv" | "phv" | "post-phv";
    let phaseLabel: string;
    let recommendations: string[];

    if (maturityOffset < -1) {
      phase = "pre-phv";
      phaseLabel = "Pre-PHV (Prije vrhunca rasta)";
      recommendations = [
        "Fokusirajte se na razvoj tehničkih vještina",
        "Naglasak na koordinaciju i agilnost",
        "Trening snage kroz tjelesnu težinu i igre",
        "Raznolike aktivnosti za svestrani motorički razvoj",
        "Održavajte visok volumen igre i zabave"
      ];
    } else if (maturityOffset >= -1 && maturityOffset <= 1) {
      phase = "phv";
      phaseLabel = "PHV (Vrhunac rasta)";
      recommendations = [
        "Smanjite ukupni trenažni volumen za 20-30%",
        "Posebna pažnja na fleksibilnost i mobilnost",
        "Izbjegavajte nagle promjene intenziteta",
        "Pratite znakove preopterećenja (Osgood-Schlatter)",
        "Održavajte tehniku, izbjegavajte maksimalne napore"
      ];
    } else {
      phase = "post-phv";
      phaseLabel = "Post-PHV (Nakon vrhunca rasta)";
      recommendations = [
        "Postupno povećavajte intenzitet treninga snage",
        "Uvodite strukturirani trening s utezima",
        "Fokus na hipertrofiju i snagu",
        "Razvijajte eksplozivnost i brzinu",
        "Individualizirajte program prema potrebama"
      ];
    }

    setResult({
      phvAge: Math.round(phvAge * 10) / 10,
      maturityOffset: Math.round(maturityOffset * 10) / 10,
      phase,
      phaseLabel,
      recommendations
    });
  };

  const resetCalculator = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setSittingHeight("");
    setResult(null);
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow/30">
          <Activity className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-display text-foreground">PHV Kalkulator</h3>
          <p className="text-muted-foreground text-sm">
            Procjena Peak Height Velocity korištenjem Mirwald jednadžbe
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Gender */}
        <div>
          <Label className="text-sm font-medium mb-3 block text-foreground">Spol</Label>
          <RadioGroup value={gender} onValueChange={(v) => setGender(v as "male" | "female")} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" className="border-primary text-primary" />
              <Label htmlFor="male" className="cursor-pointer text-foreground">Muški</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" className="border-primary text-primary" />
              <Label htmlFor="female" className="cursor-pointer text-foreground">Ženski</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="age" className="text-sm font-medium mb-2 block text-foreground">Dob (godine)</Label>
            <Input
              id="age"
              type="number"
              step="0.1"
              placeholder="13.5"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="glass-subtle border-border/50 focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="height" className="text-sm font-medium mb-2 block text-foreground">Visina (cm)</Label>
            <Input
              id="height"
              type="number"
              step="0.1"
              placeholder="165"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="glass-subtle border-border/50 focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="weight" className="text-sm font-medium mb-2 block text-foreground">Težina (kg)</Label>
            <Input
              id="weight"
              type="number"
              step="0.1"
              placeholder="55"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="glass-subtle border-border/50 focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="sittingHeight" className="text-sm font-medium mb-2 block text-foreground">Sjedeća visina (cm)</Label>
            <Input
              id="sittingHeight"
              type="number"
              step="0.1"
              placeholder="85"
              value={sittingHeight}
              onChange={(e) => setSittingHeight(e.target.value)}
              className="glass-subtle border-border/50 focus:border-primary"
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          * Sjedeća visina: mjerenje od podloge do vrha glave dok osoba sjedi uspravno
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button onClick={calculatePHV} className="flex-1 bg-gradient-primary hover:opacity-90 shadow-glow/50 text-primary-foreground">
            Izračunaj
          </Button>
          <Button variant="outline" onClick={resetCalculator} className="glass-button text-foreground">
            Reset
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-4 animate-fade-in">
            <div className={cn(
              "p-5 rounded-xl border backdrop-blur-sm",
              result.phase === "pre-phv" && "bg-primary/10 border-primary/30",
              result.phase === "phv" && "bg-amber-500/10 border-amber-500/30",
              result.phase === "post-phv" && "bg-accent/10 border-accent/30"
            )}>
              <div className="text-2xl font-display mb-3 text-foreground">{result.phaseLabel}</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="glass-subtle p-3 rounded-lg">
                  <span className="text-muted-foreground block text-xs mb-1">Procijenjena PHV dob</span>
                  <span className="font-semibold text-lg text-foreground">{result.phvAge} god.</span>
                </div>
                <div className="glass-subtle p-3 rounded-lg">
                  <span className="text-muted-foreground block text-xs mb-1">Maturity Offset</span>
                  <span className="font-semibold text-lg text-foreground">{result.maturityOffset > 0 ? "+" : ""}{result.maturityOffset} god.</span>
                </div>
              </div>
            </div>

            <div className="glass-subtle p-5 rounded-xl">
              <h4 className="font-semibold mb-4 text-foreground">Preporuke za trening:</h4>
              <ul className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-accent font-bold">→</span>
                    <span className="text-foreground">{rec}</span>
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
