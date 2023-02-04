import "../styles/produtos.css";
import Card from "../components/Card";

const Produtos = () => {
    return (
        <>
        <div id="h1">
            Nossos mais pedidos:
        </div>
        <div className="h2">
            Mussarela: <br />
            Calabresa: <br />
            Manjericão: <br />
            Baiana: <br />
            Chocolate: <br />

        </div>

        <div className="h2">
            Coca Cola: <br />
            Fanta Laranja: <br />
            Fanta Uva: <br />
        </div>

        <div className="h2">
            Calabresa + Fanta Laranja: <br />
            <Card />
            Chocolate + Fanta Uva: <br />
            Mussarela + Coca Cola: <br />
        </div>
        </>
    );
};

export default Produtos;
