import styles from "./Card.module.css";
const Cardtwo = ({ nomeendereço, endereço,imagem }) => {
  return (
    <div className={styles.produtosContainer}>
      <div className={styles.produto}>
        <img
          src={imagem}
          alt="hamburguer mais pedido"
          className={styles.produtosDestaqueImagens}
        ></img>
        <span className={styles.produtosDestaqueTexto}>{nomeendereço}</span>
        <span>{endereço}</span>
        <button className={styles.btn}>
          <a href="#">Copiar endereço</a>
        </button>
      </div>
    </div>
  );
};
export default Cardtwo;
