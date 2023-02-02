import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Home />
        <Rodape />
      </Router>
    </>
  );
}

export default App;
