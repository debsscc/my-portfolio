import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  blockbuster,
  nokori,
  herzog,
  visaoComputacional,
  tormenta,
  minhaFeira,
  minhaFeiralogo,
  SAJICLogo,
  takedownLogo,
  lecafe
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contatos",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
    link: "https://github.com/debsscc"
  },
  {
    title: "Game Developer",
    icon: creator,
    link: "https://debs-scc.itch.io/"
  },
  {
    title: "Backend Developer",
    icon: backend,
    link: "https://github.com/debsscc"
  },
  {
    title: "Designer",
    icon: mobile,
    link: "https://www.behance.net/dboracarvalho10"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Next.js",
  //   icon: nextjs, 
  // },
  // {
  //   name: "Godot",
  //   icon: godot,
  // },
  // {
  //   name: "Express.js",
  //   icon: expressjs,
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: postgresql,
  // },
  // { name: "SQL",
  //   icon: sql,
  // },
  // {
  // name: "Prisma ORM",
  // icon: prisma,
  // },
// {
//   name: "Vite",
//   icon: vite,
// },
// {
//   name: "Photoshop",
//   icon: photoshop,
// },
// {
//   name: "Illustrator",
//   icon: illustrator,
// },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Minha Feira",
    icon: minhaFeiralogo,
    iconBg: "#ffffffff",
    date: "Março 2024 - Junho 2024",
    points: [
      "Desenvolvimento de APIs RESTful utilizando Node.js e Express.",
      "Integração com Banco de dados relacional PostgreSQL.",
      "Implementação de autenticação e autorização segura com JWT e criptografia de senhas.",
      "Teste de APIs com Postman e integração contínua com GitHub Actions.",
      "Versionamento de código com Git e deploy no Vercel.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "LeCafé",
    icon: lecafe,
    iconBg: "#f1e8e7ff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
    {
      title: "Game Developer",
      company_name: "Takedown Techno",
      icon: takedownLogo,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Desenvolvimento de um jogo 2D pixel art na engine Godot, utilizando GDScript.",
        "Implementação de shaders personalizados, como iluminação dinâmica e transições estilizadas.",
        "Criação de sistema de combate com detecção de colisão, animações fluidas e efeitos de câmera para impacto.",
        "Aprimoramento da experiência do jogador (UX) com feedbacks visuais e sonoros, ajustes de dificuldade e curvas de aprendizado progressivas.",
      ],
    },
  {
    title: "Designer",
    company_name: "SAJIC - UniSENAC",
    icon: SAJICLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Criação de identidade visual completa para projetos digitais, incluindo tipografia, cores, logotipo e iconografia.",
      "Desenvolvimento de peças gráficas para mídias sociais, apresentações institucionais e portfólio de projetos.",
      "Implementação gráfica da identidade visual em camisetas, t-shirts e outros produtos fisicos.",
    ],
  },
];

const projects = [
  {
    name: "Tormenta20",
    description:
      "Plataforma web interativa para criação personalizada de fichas de personagem do RPG Tormenta20, integrando práticas de banco de dados, POO, web responsiva e engenharia de software.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: tormenta,
    source_code_link: "https://github.com/Bilhalv/T20-Sheet",
  },
  {
    name: "Minha Feira",
    description:
      "Desenvolvimento de APIs REST com Node.js, Express e PostgreSQL no backend do app Minha Feira. Usei Postman para testes, garantindo segurança e performance na gestão de dados das feiras.",
    tags: [
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
            {
        name: "Illustrator",
        color: "blue-text-gradient",
      },
    ],
    image: minhaFeira,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nokori",
    description:
      "Nokori é um jogo 2D feito na Godot, focado em narrativa visual sem diálogos. Inspirado na estrutura narrativa Kishōtenketsu, usa símbolos e interações sutis para contar a história de forma imersiva e interpretativa.",
    tags: [
      {
        name: "aseprite",
        color: "blue-text-gradient",
      },
      {
        name: "gdscript",
        color: "blue-text-gradient",
      },
      {
        name: "godot",
        color: "blue-text-gradient",
      },
    ],
    image: nokori,
    source_code_link: "https://madsilvax.itch.io/nokori",
  },
  {
    name: "Herzog",
    description:
      "Jogo desenvolvido na engine Godot, com artes 2D e 3D. Em um mundo pós-apocalíptico onde a água desapareceu, acompanhamos Herzog em uma jornada pelo deserto até descobrir o destino dos oceanos.",
    tags: [
      {
        name: "3d",
        color: "blue-text-gradient",
      },
      {
        name: "InDesign",
        color: "blue-text-gradient",
      },
      {
        name: "godot",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "blue-text-gradient",
      },
      {
        name: "Illustrator",
        color: "blue-text-gradient",
      },
    ],
    image: herzog,
    source_code_link: "https://phscardona.itch.io/herzog-echosoftheocean",
  },
    {
    name: "Visão Computacional para animais",
    description:
      "Sistema de visão computacional com detecção automática de animais em vídeos ao vivo usando SSD MobileNet. Captura e salva imagens a cada 30 segundos, evitando duplicações. Ideal para monitoramento de vida selvagem.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "IA",
        color: "blue-text-gradient",
      },
      {
        name: "openCV",
        color: "blue-text-gradient",
      },
    ],
    image: visaoComputacional,
    source_code_link: "https://github.com/DiegoNachtigall/visao_computacional_IA",
  },
      {
    name: "BlockBuster Matrix",
    description:
      "Aplicação web, inspirada em plataformas de locação de filmes, desenvolvida com React e Flowbite. A interface intuitiva proporciona uma experiência agradável para explorar títulos do cinema, combinando um layout responsivo com uma estilização contemporânea baseada em Tailwind CSS.",
    tags: [
      {
        name: "flowbite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: blockbuster,
    source_code_link: "https://github.com/debsscc/BlockBusterMatrix-FRONT-",
  },
];

export { services, technologies, experiences, projects };
