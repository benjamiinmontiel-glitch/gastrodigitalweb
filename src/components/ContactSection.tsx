import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", restaurante: "", telefono: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("¡Solicitud enviada! Te contactaremos pronto.");
      setForm({ nombre: "", restaurante: "", telefono: "" });
    }, 1200);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">
            Tu restaurante ya lo tiene todo.{" "}
            <span className="text-gradient-gold italic">Solo falta tu web.</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-xl mx-auto mb-12 font-body">
            Déjanos tus datos y te preparamos una propuesta personalizada sin compromiso.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-gold"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-body font-medium mb-2 text-foreground">
                  Tu nombre
                </label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Ej: Carlos Mendoza"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium mb-2 text-foreground">
                  Nombre del restaurante
                </label>
                <input
                  type="text"
                  required
                  value={form.restaurante}
                  onChange={(e) => setForm({ ...form, restaurante: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Ej: Restaurante El Olivo"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium mb-2 text-foreground">
                  Teléfono de contacto
                </label>
                <input
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Ej: +34 600 123 456"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full mt-8 bg-gradient-gold text-primary-foreground font-body font-semibold text-lg px-8 py-4 rounded-lg hover:bg-gradient-gold-hover transition-all duration-300 shadow-gold-lg hover:shadow-gold hover:scale-[1.02] active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {sending ? (
                "Enviando..."
              ) : (
                <>
                  Solicitar mi página web
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-muted-foreground text-xs text-center mt-4 font-body">
              Sin compromiso · Respuesta en menos de 24h · Solo 5 proyectos al mes
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
