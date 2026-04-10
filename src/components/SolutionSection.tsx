import AnimatedSection from "./AnimatedSection";
import { Zap, Palette, Smartphone, CalendarCheck } from "lucide-react";
import dishImage from "@/assets/restaurant-dish.jpg";

const features = [
  { icon: Zap, text: "Webs ultrarrápidas" },
  { icon: Palette, text: "Diseño elegante y premium" },
  { icon: Smartphone, text: "Adaptadas a móvil" },
  { icon: CalendarCheck, text: "Integración con reservas" },
];

const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              La <span className="text-gradient-gold italic">solución</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 font-body leading-relaxed">
              En Gastro Digital diseñamos webs premium exclusivamente para restaurantes. 
              No somos una agencia genérica: entendemos la gastronomía y sabemos cómo convertir 
              visitantes en comensales.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-gold">
                <img
                  src={dishImage}
                  alt="Plato gourmet de restaurante"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-gold/30 rounded-xl px-6 py-3 shadow-gold">
                <p className="text-primary font-heading text-2xl font-bold">+200%</p>
                <p className="text-muted-foreground text-xs font-body">más reservas online</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
