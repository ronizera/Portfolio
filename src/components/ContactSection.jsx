import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-primary">Conecte-se</span> Comigo
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* GitHub Button */}
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("cosmic-button flex items-center gap-2 px-6 py-3")}
          >
            <Github size={20} />
            GitHub
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("cosmic-button flex items-center gap-2 px-6 py-3")}
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
