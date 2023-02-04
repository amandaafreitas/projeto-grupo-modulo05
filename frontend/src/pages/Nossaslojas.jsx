import "../styles/nossaslojas.css";
import Cardtwo from "../components/Cardtwo";

const Nossaslojas = () => {
  return (
    <>
      <h1>Nossas lojas espalhadas pelo Rio</h1>
      <div className="cards">
        <Cardtwo
          imagem={
            "https://lh5.googleusercontent.com/p/AF1QipMV9ayBNtk1l0_drVvWFrAPmbM4urx00T5sZiY9=w408-h272-k-no"
          }
          nomeendereço={"Pizzaria em Olaria"}
          endereço={
            "R. Filomena Nunes, 586 - Olaria, Rio de Janeiro - RJ, 21021-380"
          }
        />
        <Cardtwo
          imagem={
            "https://lh5.googleusercontent.com/p/AF1QipMTMsibQncvCh8S4prXo47ASjdrUjVspCwhgxWx=w408-h379-k-no"
          }
          nomeendereço={"Pizzaria em Penha"}
          endereço={
            "R. Afonso Ribeiro, 394 - Penha, Rio de Janeiro - RJ, 21021-000"
          }
        />
        <Cardtwo
          imagem={
            "https://media-cdn.tripadvisor.com/media/photo-s/0a/4e/4d/9b/o-local.jpg"
          }
          nomeendereço={"Pizzaria em Bonsucesso"}
          endereço={
            "Av. Guilherme Maxwel, 522 - Bonsucesso, Rio de Janeiro - RJ, 21042-111"
          }
        />
        <Cardtwo
          imagem={
            "https://blog.rcky.com.br/wp-content/uploads/2020/11/pizzaria.jpg"
          }
          nomeendereço={"Pizzaria em Del Castilho"}
          endereço={
            "Av. Dom Hélder Câmara, 3641 - Del Castilho, Rio de Janeiro - RJ, 20771-000"
          }
        />
      </div>
    </>
  );
};

export default Nossaslojas;
