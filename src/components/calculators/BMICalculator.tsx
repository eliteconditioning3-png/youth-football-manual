import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface BMIResult {
  bmi: number;
  category: string;
  interpretation: string;
  recommendations: string[];
  percentileNote: string;
}

export function BMICalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!ageNum || !heightNum || !weightNum) return;

    const heightM = heightNum / 100;
    const bmi = weightNum / (heightM * heightM);
    const bmiRounded = Math.round(bmi * 10) / 10;

    let category: string;
    let interpretation: string;
    let recommendations: string[];
    let percentileNote: string;

    // Youth BMI interpretation (simplified - in reality would use percentile charts)
    // These are approximate values for youth athletes
    if (ageNum < 15) {
      if (bmi < 15) {
        category = "Ispod prosjeka";
        interpretation = "BMI je ispod prosječnih vrijednosti za dob. Kod sportaša, ovo zahtijeva pažljivu evaluaciju.";
        recommendations = [
          "Konzultirajte nutricionistu ili pedijatra",
          "Osigurajte adekvatni kalorijski unos",
          "Fokus na kvalitetnu, uravnoteženu prehranu",
          "Pratite rast i razvoj redovito"
        ];
        percentileNote = "Ispod 5. percentila za dob";
      } else if (bmi >= 15 && bmi < 19) {
        category = "Normalan za mlade sportaše";
        interpretation = "BMI je unutar normalnih vrijednosti za mlade sportaše ove dobi.";
        recommendations = [
          "Nastavite s uravnoteženom prehranom",
          "Osigurajte dovoljno proteina za rast",
          "Hidratacija je ključna",
          "Redoviti obroci i užine"
        ];
        percentileNote = "5. - 85. percentil";
      } else if (bmi >= 19 && bmi < 24) {
        category = "Viši prosjek";
        interpretation = "BMI je u višem normalnom rasponu. Kod sportaša, ovo može ukazivati na višu mišićnu masu.";
        recommendations = [
          "Pratite tjelesnu kompoziciju, ne samo težinu",
          "Mišićna masa doprinosi višem BMI-u",
          "Održavajte aktivnu razinu tjelesne aktivnosti",
          "Fokus na kvalitetu prehrane"
        ];
        percentileNote = "85. - 95. percentil";
      } else {
        category = "Iznad prosjeka";
        interpretation = "BMI je iznad uobičajenih vrijednosti. Potrebna je detaljnija evaluacija tjelesne kompozicije.";
        recommendations = [
          "Evaluirajte odnos mišićne i masne mase",
          "Konzultirajte stručnjaka za prehranu",
          "Fokus na zdravu prehranu, ne na dijete",
          "Poticajte raznolike tjelesne aktivnosti"
        ];
        percentileNote = "Iznad 95. percentila";
      }
    } else {
      // Older adolescents (15+), closer to adult values
      if (bmi < 18.5) {
        category = "Pothranjenost";
        interpretation = "BMI ukazuje na potencijalnu pothranjenost. Kod aktivnih sportaša potrebna je detaljna analiza.";
        recommendations = [
          "Povećajte kalorijski unos",
          "Konzultirajte nutricionistu",
          "Pazite na znakove relativne energetske deficijencije (RED-S)",
          "Osigurajte dovoljno makro i mikronutrijenata"
        ];
        percentileNote = "Ispod 18.5 (pothranjenost)";
      } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normalan";
        interpretation = "BMI je u normalnom rasponu. Za sportaše, ovo je općenito zdrav pokazatelj.";
        recommendations = [
          "Održavajte uravnoteženu prehranu",
          "Prilagodite unos prema trenažnim zahtjevima",
          "Fokus na oporavak i regeneraciju",
          "Pratite performanse, ne težinu"
        ];
        percentileNote = "18.5 - 25 (normalno)";
      } else if (bmi >= 25 && bmi < 30) {
        category = "Povećan";
        interpretation = "BMI je u povišenom rasponu. Kod sportaša, ovo često odražava veću mišićnu masu.";
        recommendations = [
          "Analizirajte tjelesnu kompoziciju detaljnije",
          "Mišićna masa povećava BMI",
          "Fokus na zdravlje i performanse",
          "Izbjegavajte restriktivne dijete"
        ];
        percentileNote = "25 - 30 (prekomjerna težina)";
      } else {
        category = "Visok";
        interpretation = "BMI je u visokom rasponu. Potrebna je detaljna evaluacija tjelesne kompozicije.";
        recommendations = [
          "Konzultirajte liječnika i nutricionistu",
          "Analiza postotka tjelesne masti",
          "Fokus na zdravlje, ne na brze dijete",
          "Individualizirani pristup"
        ];
        percentileNote = "Iznad 30 (pretilost)";
      }
    }

    setResult({
      bmi: bmiRounded,
      category,
      interpretation,
      recommendations,
      percentileNote
    });
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-card">
      <h3 className="text-xl font-display mb-6">BMI Kalkulator za Mlade Sportaše</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Izračun i interpretacija BMI-a prilagođena mladim nogometašima. Napomena: BMI nije idealan pokazatelj za sportaše.
      </p>

      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium mb-3 block">Spol</Label>
          <RadioGroup value={gender} onValueChange={(v) => setGender(v as "male" | "female")} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="bmi-male" />
              <Label htmlFor="bmi-male" className="cursor-pointer">Muški</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="bmi-female" />
              <Label htmlFor="bmi-female" className="cursor-pointer">Ženski</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="bmi-age" className="text-sm font-medium mb-2 block">Dob (godine)</Label>
            <Input
              id="bmi-age"
              type="number"
              step="0.1"
              placeholder="14"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="bmi-height" className="text-sm font-medium mb-2 block">Visina (cm)</Label>
            <Input
              id="bmi-height"
              type="number"
              step="0.1"
              placeholder="170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="bmi-weight" className="text-sm font-medium mb-2 block">Težina (kg)</Label>
            <Input
              id="bmi-weight"
              type="number"
              step="0.1"
              placeholder="60"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={calculateBMI} className="w-full bg-gradient-primary hover:opacity-90">
          Izračunaj BMI
        </Button>

        {result && (
          <div className="mt-6 space-y-4 animate-fade-in">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-5xl font-display text-primary mb-2">{result.bmi}</div>
              <div className="text-lg font-semibold">{result.category}</div>
              <div className="text-sm text-muted-foreground">{result.percentileNote}</div>
            </div>

            <div className="bg-secondary/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Interpretacija:</h4>
              <p className="text-muted-foreground text-sm">{result.interpretation}</p>
            </div>

            <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Preporuke:</h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              ⚠️ BMI ne razlikuje mišićnu od masne mase. Za preciznu procjenu tjelesne kompozicije 
              mladih sportaša preporučuju se druge metode (kožni nabori, BIA).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
