import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.produtosContainer}>
      <div className={styles.produto}>
        <img
          src="imagens/burger-mais-pedido.jpg"
          alt="hamburguer mais pedido"
          className={styles.produtosDestaqueImagens}
        ></img>
        <span className={styles.produtosDestaqueTexto}>Hamburguer x-tudo</span>
        <span>
          Delicioso hmaburguer com tomates frescos,queijo mussarela e salada
        </span>
        <img
          src="imagens/mask_5_stars_sm.svg"
          alt="cinco estrelas"
          className={styles.estrelas}
        ></img>
        <span className={styles.preco}>R$19,90</span>
        <button className={styles.btn}>
          <a href="#">Pedir agora</a>
        </button>
      </div>
    </div>
  );
};
export default Card;
