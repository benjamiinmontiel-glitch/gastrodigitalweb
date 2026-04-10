import AnimatedSection from "./AnimatedSection";

const DemoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">
            Transformamos restaurantes buenos en{" "}
            <span className="text-gradient-gold italic">marcas irresistibles</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-16 font-body">
            Mira la diferencia que una web profesional puede hacer en tu negocio.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Before */}
          <AnimatedSection delay={0.1}>
            <div className="relative rounded-xl overflow-hidden border border-border">
              <div className="bg-muted/50 p-8 min-h-[320px] flex flex-col">
                <div className="absolute top-4 left-4 bg-destructive/80 text-destructive-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  ANTES
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-4 opacity-60">
                  <div className="w-full h-4 bg-muted-foreground/20 rounded" />
                  <div className="w-3/4 h-4 bg-muted-foreground/20 rounded" />
                  <div className="w-32 h-32 bg-muted-foreground/10 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center mt-4">
                    <span className="text-muted-foreground/40 text-xs font-body">Sin imagen</span>
                  </div>
                  <div className="w-full h-3 bg-muted-foreground/15 rounded mt-4" />
                  <div className="w-2/3 h-3 bg-muted-foreground/15 rounded" />
                </div>
                <p className="text-muted-foreground text-sm text-center mt-6 font-body">
                  Web genérica, sin identidad, sin reservas online
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* After */}
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-xl overflow-hidden border border-gold/30 shadow-gold">
              <div className="bg-card p-8 min-h-[320px] flex flex-col">
                <div className="absolute top-4 left-4 bg-gradient-gold text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  DESPUÉS
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-3">
                  <div className="w-full h-28 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <span className="font-heading text-xl text-primary italic">Restaurante Alma</span>
                  </div>
                  <div className="w-full grid grid-cols-3 gap-2 mt-3">
                    <div className="h-16 bg-primary/10 rounded-lg" />
                    <div className="h-16 bg-accent/10 rounded-lg" />
                    <div className="h-16 bg-primary/10 rounded-lg" />
                  </div>
                  <div className="w-full flex justify-center mt-3">
                    <div className="bg-gradient-gold text-primary-foreground text-xs font-body font-semibold px-6 py-2 rounded-lg">
                      Reservar mesa
                    </div>
                  </div>
                </div>
                <p className="text-foreground text-sm text-center mt-6 font-body">
                  Web premium con reservas, carta y branding profesional
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
