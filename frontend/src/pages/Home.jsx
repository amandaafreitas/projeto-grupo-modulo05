import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="carrosel-container">
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
              <img
                src="pizza2-manjericao.jpg"
                alt="sanduiche com salada e tomate"
              ></img>
            </div>
            <div className="slide">
              <img src="/pizza3-queijo.jpg" alt="hamburguer"></img>
            </div>
          </div>

          <div className="navigation">
            <label className="bar" for="slide1"></label>
            <label className="bar" for="slide2"></label>
            <label className="bar" for="slide3"></label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
