import Card from "../components/Card";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="carroselContainer">
        <div className="carrosel">
          <div className="slides">
            <input type="radio" name="slide" id="slide1" checked></input>
            <input type="radio" name="slide" id="slide2"></input>
            <input type="radio" name="slide" id="slide3"></input>

            <div className="slide s1">
              <img
                src="/pizza1.jpg"
                alt="pizza"
                className="imagem-carrosel"
              ></img>
            </div>
            <div className="slide">
              <img src="pizza2-manjericao.jpg" alt="pizza de manjericão"></img>
            </div>
            <div className="slide">
              <img src="/pizza3-queijo.jpg" alt="pizza de queijo"></img>
            </div>
          </div>

          <div className="navigation">
            <label className="bar" for="slide1"></label>
            <label className="bar" for="slide2"></label>
            <label className="bar" for="slide3"></label>
          </div>
        </div>
      </section>
      <h1>Os mais pedidos</h1>
      <div className="cards">
        <Card
          imagem={
            "https://pilotandofogao.com.br/wp-content/uploads/2016/05/Pizza-De-Calabresa.jpg"
          }
          nomeProduto={"Pizza de Calabresa"}
          descricaoProduto={"Deliciosa pizza de calabresa com massa caseira"}
          preco={"28,00"}
        />
        <Card
          imagem={
            "https://img.freepik.com/fotos-premium/pizza-brasileira-com-queijo-mussarela-e-manjericao_206895-2005.jpg"
          }
          nomeProduto={"Pizza de Manjericão"}
          descricaoProduto={
            "Deliciosa pizza de manjericão feita pelo chef com ingredientes direto da horta"
          }
          preco={"42,00"}
        />
        <Card
          imagem={
            "https://sertaonalenhapizzaria.com.br/wp-content/uploads/2015/03/pizza-baiana-picante-001-620x395.png"
          }
          nomeProduto={"Pizza Baiana"}
          descricaoProduto={"Deliciosa pizza baiana "}
          preco={"32,00"}
        />
      </div>
    </>
  );
};

export default Home;
