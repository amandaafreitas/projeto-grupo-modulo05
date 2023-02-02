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
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
