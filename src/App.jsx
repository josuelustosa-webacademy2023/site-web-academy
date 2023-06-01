import React, { useState } from "react";

// IMPORTANDO O BOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Typography from "./components/Typography";
import NavBar from "./components/NavBar";
import PageLayout from "./components/Layout/PageLayout";
import BoxLayout from "./components/Layout/BoxLayout";
import CustomTable from "./components/CustomTable";

// Styles
import "./App.css";

import constants from "./utils/constants";

function App() {
  const [selectedPage, setSelectedPage] = useState("/pagina-inicial");

  const filterImages = constants.IMAGES.map((image) => {
    if (image.id === 1 || image.id === 6) {
      return null; // retorna null para as imagens que não devem buscadas
    }

    return (
      <img
        key={image.id}
        src={image.path}
        className="image"
        alt={image.name}
        title={image.name}
        width={image.width}
      />
    );
  }).filter((image) => image !== null);

  const columnsData = constants.DATA_TABLE.reduce((acc, item) => {
    return acc.concat(item.column.map((column) => column.name));
  }, []);

  const rowsData = constants.DATA_TABLE.reduce((acc, item) => {
    return acc.concat(
      item.row.map((row) => [row.discipline, row.tech_tools, row.ch])
    );
  }, []);

  return (
    <div>
      <NavBar
        pages={constants.PAGES}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <PageLayout>
        <BoxLayout title="Web Academy" classTitle="h1">
          <div proportion={7}>
            <Typography className="p">
              É um projeto realizado pela Universidade Federal do Amazonas
              (UFAM), em parceria com a Motorola Mobility Comércio de Produtos
              Eletrônicos Ltda e Flextronics da Amazônia Ltda. O projeto visa a
              formação de profissionais na área de Desenvolvimento em Web Full
              Stack, com foco em alunos de graduação, pós-graduação e
              profissionais do mercado com curso superior.
            </Typography>
          </div>
          <div proportion={5}>{filterImages}</div>
        </BoxLayout>

        <BoxLayout title="Curso" classTitle="h2">
          <div proportion={5}>
            <img
              src={constants.IMAGES[5].path}
              className="image"
              alt={constants.IMAGES[5].name}
              title={constants.IMAGES[5].name}
              width={constants.IMAGES[5].width}
            />
          </div>
          <div proportion={7}>
            <Typography className="p">
              O objetivo do curso é formar profissionais capacitados em
              desenvolviemnto web full stack, cobrindo todas as etapas do
              desenvolvimento de uma aplicação de software, com o uso de
              metodologias e ferramentas modernas.
            </Typography>
          </div>
        </BoxLayout>

        <BoxLayout>
          <CustomTable columns={columnsData} rows={rowsData} />
        </BoxLayout>
      </PageLayout>
    </div>
  );
}

export default App;
