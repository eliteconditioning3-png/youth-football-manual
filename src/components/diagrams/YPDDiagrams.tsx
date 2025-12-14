import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Target, Layers, Activity } from "lucide-react";

// PHV Growth Curve Data
const growthCurveData = [
  { age: 8, velocity: 5.2, phase: "Pre-PHV" },
  { age: 9, velocity: 5.0, phase: "Pre-PHV" },
  { age: 10, velocity: 5.3, phase: "Pre-PHV" },
  { age: 11, velocity: 5.8, phase: "Pre-PHV" },
  { age: 12, velocity: 7.2, phase: "PHV" },
  { age: 13, velocity: 9.5, phase: "PHV" },
  { age: 14, velocity: 8.0, phase: "PHV" },
  { age: 15, velocity: 5.5, phase: "Post-PHV" },
  { age: 16, velocity: 3.2, phase: "Post-PHV" },
  { age: 17, velocity: 1.8, phase: "Post-PHV" },
  { age: 18, velocity: 0.5, phase: "Post-PHV" },
];

// Trainability Windows Data
const trainabilityData = [
  { quality: "FMS/Koordinacija", prePHV: 95, phv: 60, postPHV: 40, color: "#10b981" },
  { quality: "Agilnost", prePHV: 90, phv: 70, postPHV: 75, color: "#f59e0b" },
  { quality: "Brzina (neuralna)", prePHV: 85, phv: 50, postPHV: 60, color: "#3b82f6" },
  { quality: "Brzina (strukturalna)", prePHV: 30, phv: 50, postPHV: 90, color: "#6366f1" },
  { quality: "Aerobna izdrž.", prePHV: 60, phv: 65, postPHV: 85, color: "#ec4899" },
  { quality: "Snaga", prePHV: 50, phv: 55, postPHV: 95, color: "#ef4444" },
  { quality: "Eksplozivnost", prePHV: 40, phv: 45, postPHV: 90, color: "#8b5cf6" },
  { quality: "Fleksibilnost", prePHV: 80, phv: 95, postPHV: 70, color: "#14b8a6" },
];

// Phase Priorities Radar Data
const phasePrioritiesData = {
  prePHV: [
    { subject: "FMS", value: 95, fullMark: 100 },
    { subject: "Koordinacija", value: 90, fullMark: 100 },
    { subject: "Agilnost", value: 85, fullMark: 100 },
    { subject: "Ravnoteža", value: 90, fullMark: 100 },
    { subject: "Brzina", value: 70, fullMark: 100 },
    { subject: "Snaga", value: 40, fullMark: 100 },
    { subject: "Izdržljivost", value: 50, fullMark: 100 },
    { subject: "Fleksibilnost", value: 75, fullMark: 100 },
  ],
  phv: [
    { subject: "FMS", value: 60, fullMark: 100 },
    { subject: "Koordinacija", value: 65, fullMark: 100 },
    { subject: "Agilnost", value: 55, fullMark: 100 },
    { subject: "Ravnoteža", value: 70, fullMark: 100 },
    { subject: "Brzina", value: 45, fullMark: 100 },
    { subject: "Snaga", value: 40, fullMark: 100 },
    { subject: "Izdržljivost", value: 50, fullMark: 100 },
    { subject: "Fleksibilnost", value: 95, fullMark: 100 },
  ],
  postPHV: [
    { subject: "FMS", value: 50, fullMark: 100 },
    { subject: "Koordinacija", value: 55, fullMark: 100 },
    { subject: "Agilnost", value: 75, fullMark: 100 },
    { subject: "Ravnoteža", value: 65, fullMark: 100 },
    { subject: "Brzina", value: 85, fullMark: 100 },
    { subject: "Snaga", value: 95, fullMark: 100 },
    { subject: "Izdržljivost", value: 80, fullMark: 100 },
    { subject: "Fleksibilnost", value: 60, fullMark: 100 },
  ],
};

// YPD Principles Visual
const principlesData = [
  { id: 1, name: "Sve kvalitete trenabilne", icon: "🎯", importance: 100 },
  { id: 2, name: "Individualizacija", icon: "👤", importance: 95 },
  { id: 3, name: "Tehnika prvo", icon: "✓", importance: 90 },
  { id: 4, name: "Progresivno opterećenje", icon: "📈", importance: 88 },
  { id: 5, name: "Raznolikost", icon: "🔄", importance: 85 },
  { id: 6, name: "Neuromuskularni razvoj", icon: "🧠", importance: 92 },
  { id: 7, name: "Sport integracija", icon: "⚽", importance: 87 },
  { id: 8, name: "Prevencija ozljeda", icon: "🛡️", importance: 94 },
  { id: 9, name: "Psihosocijalni razvoj", icon: "💚", importance: 86 },
  { id: 10, name: "Dugoročna vizija", icon: "🏆", importance: 98 },
];

const PhaseColors = {
  prePHV: "#10b981",
  phv: "#f59e0b",
  postPHV: "#3b82f6",
};

export function YPDDiagrams() {
  const [selectedPhase, setSelectedPhase] = useState<"prePHV" | "phv" | "postPHV">("prePHV");

  return (
    <div className="space-y-8">
      {/* Main Tabs */}
      <Tabs defaultValue="growth" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-card/50 border border-border/50">
          <TabsTrigger value="growth" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="hidden sm:inline">PHV Krivulja</span>
            <span className="sm:hidden">PHV</span>
          </TabsTrigger>
          <TabsTrigger value="trainability" className="flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Trenabilnost</span>
            <span className="sm:hidden">Tren.</span>
          </TabsTrigger>
          <TabsTrigger value="priorities" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            <span className="hidden sm:inline">Prioriteti</span>
            <span className="sm:hidden">Prior.</span>
          </TabsTrigger>
          <TabsTrigger value="principles" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span className="hidden sm:inline">Principi</span>
            <span className="sm:hidden">Princ.</span>
          </TabsTrigger>
        </TabsList>

        {/* PHV Growth Curve */}
        <TabsContent value="growth" className="mt-6">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Krivulja brzine rasta (PHV)
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Prosječna brzina rasta u visinu (cm/godišnje) kroz adolescenciju. PHV označava period najbržeg rasta.
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthCurveData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <defs>
                      <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis
                      dataKey="age"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      label={{ value: "Dob (godine)", position: "bottom", offset: 0, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      label={{ value: "cm/god", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))",
                      }}
                      formatter={(value: number) => [`${value} cm/god`, "Brzina rasta"]}
                      labelFormatter={(label) => `Dob: ${label} godina`}
                    />
                    <Area
                      type="monotone"
                      dataKey="velocity"
                      stroke="#10b981"
                      strokeWidth={3}
                      fill="url(#growthGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Phase Legend */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-emerald-400">Pre-PHV (8-11)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium text-amber-400">PHV (12-14)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-blue-400">Post-PHV (15+)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trainability Windows */}
        <TabsContent value="trainability" className="mt-6">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Prozori trenabilnosti
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Relativna učinkovitost treninga različitih fizičkih kvaliteta kroz faze razvoja (%).
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={trainabilityData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis
                      type="number"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      domain={[0, 100]}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <YAxis
                      type="category"
                      dataKey="quality"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={11}
                      width={95}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))",
                      }}
                      formatter={(value: number, name: string) => {
                        const labels: Record<string, string> = {
                          prePHV: "Pre-PHV",
                          phv: "PHV",
                          postPHV: "Post-PHV",
                        };
                        return [`${value}%`, labels[name] || name];
                      }}
                    />
                    <Legend
                      formatter={(value) => {
                        const labels: Record<string, string> = {
                          prePHV: "Pre-PHV",
                          phv: "PHV",
                          postPHV: "Post-PHV",
                        };
                        return labels[value] || value;
                      }}
                    />
                    <Bar dataKey="prePHV" fill={PhaseColors.prePHV} radius={[0, 4, 4, 0]} />
                    <Bar dataKey="phv" fill={PhaseColors.phv} radius={[0, 4, 4, 0]} />
                    <Bar dataKey="postPHV" fill={PhaseColors.postPHV} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Phase Priorities Radar */}
        <TabsContent value="priorities" className="mt-6">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Prioriteti po fazama razvoja
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Relativni prioritet treninga različitih kvaliteta u svakoj fazi. Veća površina = veći prioritet.
              </p>
            </CardHeader>
            <CardContent>
              {/* Phase Selector */}
              <div className="flex justify-center gap-2 mb-6">
                <button
                  onClick={() => setSelectedPhase("prePHV")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedPhase === "prePHV"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                      : "bg-card/50 text-muted-foreground border border-border/50 hover:border-border"
                  }`}
                >
                  Pre-PHV
                </button>
                <button
                  onClick={() => setSelectedPhase("phv")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedPhase === "phv"
                      ? "bg-amber-500/20 text-amber-400 border border-amber-500/50"
                      : "bg-card/50 text-muted-foreground border border-border/50 hover:border-border"
                  }`}
                >
                  PHV
                </button>
                <button
                  onClick={() => setSelectedPhase("postPHV")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedPhase === "postPHV"
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                      : "bg-card/50 text-muted-foreground border border-border/50 hover:border-border"
                  }`}
                >
                  Post-PHV
                </button>
              </div>

              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={phasePrioritiesData[selectedPhase]} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                    />
                    <Radar
                      name="Prioritet"
                      dataKey="value"
                      stroke={PhaseColors[selectedPhase]}
                      fill={PhaseColors[selectedPhase]}
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))",
                      }}
                      formatter={(value: number) => [`${value}%`, "Prioritet"]}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Phase Description */}
              <div className="mt-4 p-4 rounded-lg bg-muted/20 border border-border/30">
                {selectedPhase === "prePHV" && (
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-emerald-400">Pre-PHV faza:</strong> Naglasak na fundamentalnim motoričkim vještinama, 
                    koordinaciji i ravnoteži. Idealno vrijeme za razvoj širokog atletskog temelja kroz raznovrsne aktivnosti i igru.
                  </p>
                )}
                {selectedPhase === "phv" && (
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-amber-400">PHV faza:</strong> Period ubrzanog rasta zahtijeva fokus na fleksibilnost 
                    i održavanje. Smanjite volumen i intenzitet, izbjegavajte preopterećenje dok tijelo prolazi kroz strukturalne promjene.
                  </p>
                )}
                {selectedPhase === "postPHV" && (
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-blue-400">Post-PHV faza:</strong> Optimalno vrijeme za razvoj snage, brzine i eksplozivnosti. 
                    Tijelo je spremno za veća opterećenja, ali tehnika i postupnost ostaju prioriteti.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* YPD Principles Visual */}
        <TabsContent value="principles" className="mt-6">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                10 temeljnih principa YPD modela
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Vizualni prikaz ključnih principa koji vode fizički razvoj mladih sportaša.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {principlesData.map((principle) => (
                  <div
                    key={principle.id}
                    className="relative group p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
                  >
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {principle.id}
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">{principle.icon}</div>
                      <p className="text-xs font-medium text-foreground leading-tight">
                        {principle.name}
                      </p>
                    </div>
                    {/* Importance bar */}
                    <div className="mt-3 h-1 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${principle.importance}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Takeaway */}
              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
                <p className="text-sm text-center text-muted-foreground">
                  <strong className="text-primary">Ključna poruka:</strong> YPD model naglašava da je fizički razvoj 
                  <em> kontinuiran proces</em> koji zahtijeva <em>individualizirani pristup</em>, strpljenje i 
                  dugoročnu viziju umjesto kratkoročnih rezultata.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
