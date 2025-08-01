import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Morioka Café",
    description: "Projeto de uma cafeteria moderna chamada Morioka, desenvolvido com Next.js, focado em performance e navegação fluida. Apresenta cardápio interativo, design responsivo e visual minimalista.",
    image: "/projects/projeto-1.png",
    tags: ["React", "TailwindCSS", "JavaScript", "Nextjs" ],
    demoUrl: "https://cafeteria-ronizera.vercel.app/",
    githubUrl: "https://github.com/ronizera/cafeteria",
  },
  {
    id: 2,
    title: "Petshop",
    description:
      "Projeto de um Petshop moderno desenvolvido com Next.js, com interface responsiva e intuitiva. Inclui catálogo de produtos, serviços para pets e agendamento online.",
    image: "/projects/project2.png",
    tags: ["TailwindCSS", "React", "Nextjs", "Typescript"],
    demoUrl: "https://petshoppage.vercel.app/",
    githubUrl: "https://github.com/ronizera/petshoppage",
  },
  {
    id: 3,
    title: "Catálogos de Filmes",
    description:
      "Aplicação web feita com React e Tailwind CSS que permite buscar, visualizar e favoritar filmes utilizando a API pública da OMDb.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "React Router DOM", "JavaScript"],
    demoUrl: "https://filmes-wine.vercel.app/",
    githubUrl: "https://github.com/ronizera/filmes",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Meu <span className="text-primary"> Trabalho </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos recentes. Cada projeto foi cuidadosamente 
          criado com atenção aos detalhes, desempenho e experiência do usuário.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ronizera"
          >
            Veja meu Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
