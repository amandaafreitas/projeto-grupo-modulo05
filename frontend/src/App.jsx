import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Faleconosco from "./pages/Faleconosco";
import Sobreus from "./pages/Sobreus";
import Nossaslojas from "./pages/Nossaslojas";
import Login from "./pages/Login";
import EdicaoAdm from "./pages/EdicaoAdm";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/faleconosco" element={<Faleconosco />} />
          <Route path="/sobreus" element={<Sobreus />} />
          <Route path="/nossaslojas" element={<Nossaslojas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edicao-adm" element={<EdicaoAdm />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>

        <Rodape />
      </Router>
    </>
  );
}

export default App;
