import { Link } from "react-router-dom";
import "../styles/sobreus.css";

const Sobreus = () => {
  return (
    <>
      <div className="sobreus">
        <div className="testee">
          <h1>Pizzaria Damas</h1>
          <img className="logo" src="/logo-damas.svg" />
        </div>
        <div className="sobreus-texto">
          <div className="text">
            <h2 className="texto">Quem somos?</h2>
            <p className="paragrafo">
              A pizzaria Damas faz pizzas para clientes, focada em entregar um
              bom saber por um bom preço.{" "}
            </p>
          </div>
          <div className="text">
            <h2 className="texto">O que fazemos?</h2>
            <p className="paragrafo">
              Trabalhamos com diversos tipos de sabores, disponíveis nos
              estabelecimentos e também em delivery.
            </p>
          </div>
          <div className="text">
            <h2 className="texto">Quando começamos?</h2>
            <p className="paragrafo">
              Estamos no mercado desde 2010, começamos com somente um só
              estabelecimento e um pequeno grupo, hoje em dia já temos quatro
              estabelecimentos e mais de cem funcionários trabalhando conosco.
            </p>
          </div>
          <div className="text">
            <h2 className="texto">Onde estamos atualmente?</h2>
            <p className="paragrafo">
              Estamos localizados em algumas regiões do Rio, mas principalmente
              na Zona Norte, você pode ver todas os nossos estabelecimentos{" "}
              <Link to="/nossaslojas"> aqui </Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobreus;
