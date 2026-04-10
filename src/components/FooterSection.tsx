import logo from "@/assets/gastro-digital-logo.png";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center gap-6">
          <img src={logo} alt="Gastro Digital" className="h-24 w-auto" />
          <div className="flex items-center gap-8 text-foreground font-body text-base">
            <a href="mailto:gastrodigitalalicante@gmail.com" className="hover:text-primary transition-colors">
              gastrodigitalalicante@gmail.com
            </a>
            <a href="tel:+34722869121" className="hover:text-primary transition-colors">
              +34 722 86 91 21
            </a>
          </div>
          <div className="h-px w-24 bg-border" />
          <p className="text-muted-foreground font-body text-sm italic">
            Especialistas en webs para restaurantes con alma
          </p>
          <div className="h-px w-24 bg-border my-2" />
          <p className="text-muted-foreground/60 font-body text-xs">
            © {new Date().getFullYear()} Gastro Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
