import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    restaurant: "Restaurante El Olivo",
    text: "Pasamos de no tener web a duplicar reservas en dos meses. Gastro Digital entendió nuestra esencia desde el primer día.",
    stars: 5,
  },
  {
    name: "María Fernández",
    restaurant: "Taberna La Esquina",
    text: "Ahora nuestra imagen online refleja lo que realmente somos. Los clientes nos dicen que la web les convenció para venir.",
    stars: 5,
  },
  {
    name: "Javier Ruiz",
    restaurant: "Bistró Azul",
    text: "Inversión que se pagó sola el primer mes. Profesionalidad absoluta y un diseño que enamora a nuestros clientes.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-gradient-gold italic">clientes</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-xl mx-auto mb-16 font-body">
            Restaurantes que ya confían en Gastro Digital.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-8 hover:border-gold/30 transition-colors duration-300 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground font-body text-sm leading-relaxed mb-6 flex-1 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs font-body">{t.restaurant}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
