const PAGES = [
  { name: "Página Inicial", path: "/pagina-inicial" },
  { name: "Curso", path: "/sobre-o-curso" },
  { name: "Processo Seletivo", path: "/processo-seletivo" },
  { name: "Cronograma", path: "/cronograma" },
  { name: "Contato", path: "/contato" },
];

const IMAGES = [
  {
    id: 1,
    name: "Logo Web Academy",
    path: "../assets/images/webacademylogo.png",
    width: 275,
    height: "auto",
  },
  {
    id: 2,
    name: "Logo UFAM",
    path: "../assets/images/logos/ufam-logo.png",
    width: 75,
    height: "auto",
  },
  {
    id: 3,
    name: "Logo ICOMP",
    path: "../assets/images/logos/icomp-logo.png",
    width: 160,
    height: "auto",
  },
  {
    id: 4,
    name: "Logo Motorola",
    path: "../assets/images/logos/motorola-logo.svg",
    width: 120,
    height: "auto",
  },
  {
    id: 5,
    name: "Logo Flex",
    path: "../assets/images/logos/flex-logo.png",
    width: 160,
    height: "auto",
  },
  {
    id: 6,
    name: "Logo Tecnologia",
    path: "../assets/images/banner-tecnologias.png",
    width: 300,
    height: "auto",
  },
];

const DATA_TABLE = [
  {
    column: [
      {
        name: "Disciplina",
      },
      {
        name: "Tecnologias e Ferramentas",
      },
      {
        name: "CH",
      },
    ],
    row: [
      {
        discipline: "Fundamentos de HTML",
        tech_tools: "HTML",
        ch: 8,
      },
      {
        discipline: "Fundamentos de CSS",
        tech_tools: "CSS",
        ch: 12,
      },
      {
        discipline: "Fundamentos de JavaScript",
        tech_tools: "JavaScript",
        ch: 12,
      },
    ],
  },
];

export default { PAGES, IMAGES, DATA_TABLE };
