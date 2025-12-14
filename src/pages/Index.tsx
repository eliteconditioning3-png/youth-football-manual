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
      <div className="relative -mx-4 -mt-6 sm:-mx-6 sm:-mt-8 lg:-mx-8 lg:-mt-12 px-4 sm:px-6 py-12 sm:py-16 lg:px-8 lg:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-accent/10 rounded-full blur-[70px] translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 glass-subtle rounded-full mb-5 sm:mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              Priručnik za trenere
            </span>
          </div>

          <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 sm:mb-6">
            STRENGTH & CONDITIONING
            <br />
            <span className="text-white">ZA MLADE NOGOMETAŠE</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mb-6 sm:mb-8">
            Znanstveno utemeljene smjernice za razvoj mladih sportaša. 15 poglavlja,
            interaktivni kalkulatori i praktične checkliste.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow glow-primary text-primary-foreground px-6 sm:px-8 w-full sm:w-auto"
            >
              <Link to="/poglavlje/uvod">
                Počni čitati
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild size="lg" className="glass-button text-foreground w-full sm:w-auto">
              <Link to="/kalkulatori">
                <Calculator className="mr-2 h-5 w-5 text-primary" />
                Kalkulatori
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
        <Link to="/kalkulatori" className="group glass-card p-4 sm:p-6 rounded-2xl">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 sm:mb-5 shadow-glow/50 group-hover:scale-110 transition-transform">
            <Calculator className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
          </div>
          <h3 className="font-display text-xl sm:text-2xl mb-2 text-foreground">
            Kalkulatori
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            PHV, opterećenje i BMI kalkulatori za procjenu i planiranje.
          </p>
        </Link>

        <Link to="/checkliste" className="group glass-card p-4 sm:p-6 rounded-2xl">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 sm:mb-5 shadow-accent-glow/50 group-hover:scale-110 transition-transform">
            <CheckSquare className="h-6 w-6 sm:h-7 sm:w-7 text-accent-foreground" />
          </div>
          <h3 className="font-display text-xl sm:text-2xl mb-2 text-foreground">
            Checkliste
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Interaktivne liste za sigurnost, evaluaciju i planiranje.
          </p>
        </Link>

        <Link
          to="/poglavlje/primjeri-planova"
          className="group glass-card p-4 sm:p-6 rounded-2xl"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform border border-border">
            <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-foreground" />
          </div>
          <h3 className="font-display text-xl sm:text-2xl mb-2 text-foreground">
            Primjeri planova
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Konkretni S&C planovi za U9-U12, U13-U15 i U16-U19.
          </p>
        </Link>
      </div>

      {/* Chapters Grid */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          <h2 className="font-display text-2xl sm:text-3xl text-foreground">Sva poglavlja</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, index) => {
            return (
              <Link
                key={chapter.id}
                to={`/poglavlje/${chapter.slug}`}
                className="group glass-card flex items-start gap-4 p-4 sm:p-5 rounded-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-glow/30">
                  <span className="font-display text-lg sm:text-xl text-primary-foreground">
                    {chapter.id}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {chapter.shortTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mt-1">
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
