import "../styles/edicaoAdm.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardEdicaoPizza from "../components/CardEdicaoPizza";
const EdicaoAdm = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/pizzas")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch(() => {
        console.log("Deu tudo errado");
      });
  }, []);
  return (
    <>
      <h1 className="titulo-cadastrar">Editar pizas</h1>
      <CardEdicaoPizza botao="Cadastrar" setPizzasPaginas={setPizzas} />
      <div className="pizzasCadastradas">
        {pizzas.map((pizza) => {
          return (
            <CardEdicaoPizza
              key={pizza.id}
              idPizza={pizza.id}
              sabor={pizza.sabor}
              tamanho={pizza.tamanho}
              preco={pizza.preco}
              imagem={pizza.img_url}
              botao="Salvar"
              setPizzasPaginas={setPizzas}
            />
          );
        })}
      </div>
    </>
  );
};

export default EdicaoAdm;

// import "../styles/tela.css";
// import "../styles/telaEdicao.css";

// import CardFilmes from "../components/CardFilmes";

// const TelaEdicao = () => {
//   const [pizzas, setFilmes] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://estao-servidos.onrender.com/pizzas")
//       .then((response) => {
//         setFilmes(response.data);
//       })
//       .catch(() => {
//         console.log("Deu tudo errado");
//       });
//   }, []);

//   return (
//     <>
//       <h1 className="titulo-cadastrar">Cadastrar pizza</h1>
//       <CardFilmes botao="Cadastrar" setFilmesPagina={setFilmes} />
//       <div className="pizzasCadastrados">
//         {pizzas.map((pizza) => {
//           return (
//             <CardFilmes
//               key={pizza.id}
//               idFilme={pizza.id}
//               titulo={pizza.titulo}
//               ano={pizza.ano}
//               direcao={pizza.direcao}
//               imagem={pizza.imagem}
//               botao="Salvar"
//               setFilmesPagina={setFilmes}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export default TelaEdicao;
