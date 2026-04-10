import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/gastro-digital-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleContacts = () => setShowContacts(!showContacts);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img src={logo} alt="Gastro Digital" className="h-12 w-auto" />
        <div className="relative">
          <button
            onClick={toggleContacts}
            className="bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-gradient-gold-hover transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {showContacts ? "Cerrar" : "Contactar"}
          </button>
          <AnimatePresence>
            {showContacts && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg p-4 min-w-[280px]"
              >
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:gastrodigitalalicante@gmail.com"
                    className="flex items-center gap-3 text-foreground font-body text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    gastrodigitalalicante@gmail.com
                  </a>
                  <div className="h-px bg-border" />
                  <a
                    href="tel:+34722869121"
                    className="flex items-center gap-3 text-foreground font-body text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/50"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    +34 722 86 91 21
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
