import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ChapterCard } from "@/components/chapter/ChapterCard";
import { getChapterBySlug, chapters } from "@/data/chapters";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YPDDiagrams } from "@/components/diagrams/YPDDiagrams";

const Chapter = () => {
  const { slug } = useParams<{ slug: string }>();
  const chapter = slug ? getChapterBySlug(slug) : undefined;

  if (!chapter) {
    return <Navigate to="/" replace />;
  }

  const Icon = chapter.icon;
  const prevChapter = chapters.find(c => c.id === chapter.id - 1);
  const nextChapter = chapters.find(c => c.id === chapter.id + 1);

  // Show YPD diagrams only for the intro chapter
  const showYPDDiagrams = chapter.slug === "uvod";

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Naslovnica</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{chapter.shortTitle}</span>
      </div>

      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Poglavlje {chapter.id}</span>
            <h1 className="font-display text-2xl md:text-3xl tracking-tight">{chapter.title}</h1>
          </div>
        </div>
        <p className="text-muted-foreground">{chapter.description}</p>
      </div>

      {/* YPD Diagrams - Only show in intro chapter */}
      {showYPDDiagrams && (
        <div className="mb-10">
          <h2 className="font-display text-xl mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-primary rounded-full" />
            YPD Model - Vizualni prikaz
          </h2>
          <YPDDiagrams />
        </div>
      )}

      {/* Sections */}
      <div className="space-y-4 mb-12">
        {chapter.sections.map((section, idx) => (
          <ChapterCard key={section.id} section={section} defaultOpen={idx === 0} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-border">
        {prevChapter ? (
          <Button asChild variant="ghost" className="gap-2">
            <Link to={`/poglavlje/${prevChapter.slug}`}>
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prevChapter.shortTitle}</span>
              <span className="sm:hidden">Prethodno</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Button asChild variant="default" className="gap-2 bg-gradient-primary hover:opacity-90">
            <Link to={`/poglavlje/${nextChapter.slug}`}>
              <span className="hidden sm:inline">{nextChapter.shortTitle}</span>
              <span className="sm:hidden">Sljedeće</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="default" className="gap-2 bg-gradient-primary hover:opacity-90">
            <Link to="/kalkulatori">
              Kalkulatori
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default Chapter;
