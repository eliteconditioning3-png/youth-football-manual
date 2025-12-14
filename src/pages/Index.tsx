import { Layout } from "@/components/layout/Layout";
import { chapters } from "@/data/chapters";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, CheckSquare, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Mesh Background */}
      <div className="fixed inset-0 bg-mesh pointer-events-none -z-10" />
      
      {/* Hero Section */}
      <div className="relative -mx-4 -mt-6 sm:-mx-6 sm:-mt-8 lg:-mx-8 lg:-mt-12 px-4 sm:px-6 py-14 sm:py-20 lg:px-8 lg:py-28 ...">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
        
        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-subtle rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Priručnik za trenere</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl ...">
           STRENGTH & CONDITIONING
           <br />
           <span className="text-primary">ZA MLADE NOGOMETAŠE</span>
          </h1>
          
          <p className="text-base sm:text-lg ...">
            Znanstveno utemeljene smjernice za razvoj mladih sportaša. 
            15 poglavlja, interaktivni kalkulatori i praktične checkliste.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow glow-primary text-primary-foreground px-8">
              <Link to="/poglavlje/uvod">
                Počni čitati
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="glass-button text-foreground">
              <Link to="/kalkulatori">
                <Calculator className="mr-2 h-5 w-5 text-primary" />
                Kalkulatori
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Link 
          to="/kalkulatori" 
          className="group glass-card p-4 sm:p-6 rounded-2xl"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow/50 group-hover:scale-110 transition-transform">
            <Calculator className="h-7 w-7 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl mb-2 text-foreground">Kalkulatori</h3>
          <p className="text-muted-foreground">
            PHV, opterećenje i BMI kalkulatori za procjenu i planiranje.
          </p>
        </Link>

        <Link 
          to="/checkliste" 
          className="group glass-card p-6 rounded-2xl"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 shadow-accent-glow/50 group-hover:scale-110 transition-transform">
            <CheckSquare className="h-7 w-7 text-accent-foreground" />
          </div>
          <h3 className="font-display text-2xl mb-2 text-foreground">Checkliste</h3>
          <p className="text-muted-foreground">
            Interaktivne liste za sigurnost, evaluaciju i planiranje.
          </p>
        </Link>

        <Link 
          to="/poglavlje/primjeri-planova" 
          className="group glass-card p-6 rounded-2xl"
        >
          <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-border">
            <BookOpen className="h-7 w-7 text-foreground" />
          </div>
          <h3 className="font-display text-2xl mb-2 text-foreground">Primjeri planova</h3>
          <p className="text-muted-foreground">
            Konkretni S&C planovi za U9-U12, U13-U15 i U16-U19.
          </p>
        </Link>
      </div>

      {/* Chapters Grid */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          <h2 className="font-display text-3xl text-foreground">Sva poglavlja</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, index) => {
            return (
              <Link
                key={chapter.id}
                to={`/poglavlje/${chapter.slug}`}
                className="group glass-card flex items-start gap-4 p-5 rounded-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-glow/30">
                  <span className="font-display text-xl text-primary-foreground">{chapter.id}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {chapter.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {chapter.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
