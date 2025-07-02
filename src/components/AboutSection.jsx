import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor
            </h3>

            <p className="text-muted-foreground">
             Sou estudante do 4º semestre de Engenharia de Software, com grande interesse em desenvolvimento front-end. Tenho experiência com HTML, CSS e JavaScript, e estou me especializando em React e Tailwind CSS para criar interfaces modernas e responsivas.

              Busco constantemente evoluir minhas habilidades por meio de projetos práticos e estudos contínuos. Valorizo a escrita de código limpo, a usabilidade e a boa experiência do usuário.

              Atualmente, estou em busca de oportunidades que me permitam aplicar meus conhecimentos, crescer profissionalmente e contribuir com soluções inovadoras.

            </p>

            <p className="text-muted-foreground">

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Conecte-se Comigo
              </a>

              <a
                href="https://docs.google.com/document/d/1qyI0yprwYj0u6yJb995JMVVvv5AgIGzTkEVvuvQ9Vcw/edit?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Desenvolvedor Web</h4>
                  <p className="text-muted-foreground">
                    Criando sites responsivos e aplicativos da web com 
                    estruturas modernas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                     Projetando interfaces de usuário intuitivo e usuário sem interromper experiências.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Versionamento com Git e trabalho em equipe</h4>
                  <p className="text-muted-foreground">
                    Tenho familiaridade com Git e GitHub, o que me permite colaborar de forma eficiente em equipes, mantendo um fluxo de trabalho organizado e profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
