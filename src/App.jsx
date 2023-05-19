import viteLogo from './assets/logos/vite.svg';
import reactLogo from './assets/logos/react.svg';
import bootstrapLogo from './assets/logos/bootstrap.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
          <img
            src={bootstrapLogo}
            className="logo bootstrap"
            alt="Bootstrap logo"
          />
        </a>
      </div>
      <div className="container py-4 px-3 mx-auto">
        <h1>Vite + React + Bootstrap</h1>
        <div className="card">
          Este projeto foi desenvolvido utilizando as principais ferramentas
          de desenvolvimento vistas ao decorrer do curso, com objetivo de
          refazer a página web oficial do Web Academy 2023.
          <br />
          <a
            href="https://webacademy.icomp.ufam.edu.br/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            https://webacademy.icomp.ufam.edu.br/
          </a>
        </div>
        <p className="read-the-docs">Desenvolvido por Josué Lustosa</p>
      </div>
    </>
  );
}

export default App;
