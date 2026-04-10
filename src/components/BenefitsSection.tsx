import AnimatedSection from "./AnimatedSection";
import { TrendingUp, Award, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Más reservas",
    description: "Tu web trabaja 24/7 captando clientes mientras tú te centras en cocinar.",
  },
  {
    icon: Award,
    title: "Imagen profesional",
    description: "Una web que está a la altura de tu cocina y genera la primera impresión que mereces.",
  },
  {
    icon: Shield,
    title: "Mayor confianza",
    description: "Los clientes confían más en restaurantes con presencia online profesional.",
  },
  {
    icon: Sparkles,
    title: "Diferenciación",
    description: "Destaca frente a tu competencia con una identidad digital única e irresistible.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">
            Lo que <span className="text-gradient-gold italic">conseguirás</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-xl mx-auto mb-16 font-body">
            Resultados reales para restaurantes reales.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-8 hover:border-gold/30 hover:shadow-gold transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
