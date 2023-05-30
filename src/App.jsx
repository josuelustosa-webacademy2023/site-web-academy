import React, { useState } from "react";

// IMPORTANDO O BOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Typography from "/components/Typography";
import NavBar from "/components/NavBar";

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
      <Typography className="h1">Hello World</Typography>
    </div>
  );
}

export default App;
