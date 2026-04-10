import { motion } from "framer-motion";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Restaurante elegante"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-sm text-gold-light font-body tracking-widest uppercase">
            Solo 5 proyectos al mes
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
        >
          Tu restaurante ya es excelente.{" "}
          <span className="text-gradient-gold italic">Tu web debería serlo también.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          Creamos páginas web para restaurantes con grandes reseñas que aún no reflejan su verdadero nivel online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <button
            onClick={scrollToContact}
            className="bg-gradient-gold text-primary-foreground font-body font-semibold text-lg px-10 py-4 rounded-lg hover:bg-gradient-gold-hover transition-all duration-300 shadow-gold-lg hover:shadow-gold hover:scale-105 active:scale-95"
          >
            Quiero mi web profesional
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
