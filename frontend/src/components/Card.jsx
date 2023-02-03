import styles from "./Card.module.css";
const Card = ({ nomeProduto, descricaoProduto, preco, imagem }) => {
  return (
    <div className={styles.produtosContainer}>
      <div className={styles.produto}>
        <img
          src={imagem}
          alt="hamburguer mais pedido"
          className={styles.produtosDestaqueImagens}
        ></img>
        <span className={styles.produtosDestaqueTexto}>{nomeProduto}</span>
        <span>{descricaoProduto}</span>
        <img
          src="/5-stars.svg"
          alt="cinco estrelas"
          className={styles.estrelas}
        ></img>
        <span className={styles.preco}>R${preco}</span>
        <button className={styles.btn}>
          <a href="#">Pedir agora</a>
        </button>
      </div>
    </div>
  );
};
export default Card;
