import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import EdicaoAdm from "./pages/EdicaoAdm";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tela-edicao" element={<EdicaoAdm />}></Route>
        </Routes>

        <Rodape />
      </Router>
    </>
  );
}

export default App;
