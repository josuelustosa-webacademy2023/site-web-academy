import React, { useState } from "react";

// IMPORTANDO O BOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Typography from "/components/Typography";
import NavBar from "/components/NavBar";

import { Container } from "react-bootstrap";

// Styles
import "./App.css";

import constants from "./utils/constants";

function App() {
  const [selectedPage, setSelectedPage] = useState("/pagina-inicial");

  return (
    <div>
      <NavBar
        pages={constants.PAGES}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Container>
        <Typography className="h1">Web Academy</Typography>
        <Typography className="p">
          É um projeto realizado pela Universidade Federal do Amazonas (UFAM),
          em parceria com a Motorola Mobility Comércio de Produtos Eletrônicos
          Ltda e Flextronics da Amazônia Ltda. O projeto visa a formação de
          profissionais na área de Desenvolvimento em Web Full Stack, com foco
          em alunos de graduação, pós-graduação e profissionais do mercado com
          curso superior.
        </Typography>

        <Typography className="h2">Curso</Typography>

        <Typography className="p">
          O objetivo do curso é formar profissionais capacitados em
          desenvolviemnto web full stack, cobrindo todas as etapas do
          desenvolvimento de uma aplicação de software, com o uso de
          metodologias e ferramentas modernas.
        </Typography>
      </Container>
    </div>
  );
}

export default App;
