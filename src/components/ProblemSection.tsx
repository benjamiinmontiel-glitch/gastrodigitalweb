import AnimatedSection from "./AnimatedSection";
import { Star, Globe, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-6">
            El <span className="text-gradient-gold italic">problema</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-16 font-body">
            Miles de restaurantes increíbles están perdiendo clientes cada día por una razón que no imaginan.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-gold/30 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Reseñas excelentes</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                4.5+ estrellas en Google, clientes encantados, comentarios increíbles. Tu restaurante brilla en las opiniones.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-gold/30 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Sin presencia web</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Sin página web, o peor aún, con una web desactualizada que no refleja la calidad real de tu negocio.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-gold/30 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <AlertTriangle className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Clientes perdidos</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                El 75% de los clientes juzgan un negocio por su web. Sin ella, estás dejando reservas sobre la mesa.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
