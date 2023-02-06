import "../styles/produtos.css";
import Card from "../components/Card";

const Produtos = () => {
  return (
    <>
      <h1>Pizzas:</h1>
      <div className="cards">
        <Card
          imagem={
            "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1932-5a1b7911dfda6e3c351c30de564da267.jpg"
          }
          nomeProduto={"Pizza de Mussarela"}
          descricaoProduto={"Pizza de queijo Mussarela"}
          preco={"30,00"}
        />
        <Card
          imagem={
            "https://pilotandofogao.com.br/wp-content/uploads/2016/05/Pizza-De-Calabresa.jpg"
          }
          nomeProduto={"Pizza de Calabresa"}
          descricaoProduto={"Pizza de linguinça calabresa defumada"}
          preco={"28,00"}
        />

        <Card
          imagem={
            "https://img.freepik.com/fotos-premium/pizza-brasileira-com-queijo-mussarela-e-manjericao_206895-2005.jpg"
          }
          nomeProduto={"Pizza de Manjericão"}
          descricaoProduto={"Pizza de manjericão com margherita"}
          preco={"42,00"}
        />
      </div>
      <div className="cards">
        <Card
          imagem={
            "https://senhorreceitas.com/wp-content/uploads/2022/01/AdobeStock_419474126-scaled.jpeg"
          }
          nomeProduto={"Pizza de Baiana"}
          descricaoProduto={"Pizza de baiana com linguiça calabresa, queijo musssarela, cebola e pimenta"}
          preco={"32,00"}
        />
        <Card
          imagem={
            "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-chocolate-730x449.jpg"
          }
          nomeProduto={"Pizza de Chocolate"}
          descricaoProduto={"Pizza de chocolate com morango"}
          preco={"50,00"}
        />
      </div>
      <h1>Bebidas:</h1>
      <div className="cards">
        <Card
          imagem={
            "http://www.banca43.com.br/cdn/imagens/produtos/det/117939.jpg"
          }
          nomeProduto={"Coca-Cola"}
          descricaoProduto={"Coca-Cola 350ml"}
          preco={"10,00"}
        />
        <Card
          imagem={
            "http://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/fanta-3501-f2e0836be024d42fc915698485225379-640-0.png"
          }
          nomeProduto={"Fanta Laranja"}
          descricaoProduto={"Fanta Laranja 350ml"}
          preco={"9,00"}
        />
        <Card
          imagem={
            "http://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/fanta-uva-3501-012134716f394f6f1a15698487625514-640-0.png"
          }
          nomeProduto={"Fanta Uva"}
          descricaoProduto={"Fanta Uva 350ml"}
          preco={"8,00"}
        />
      </div>
    </>
  );
};

export default Produtos;

