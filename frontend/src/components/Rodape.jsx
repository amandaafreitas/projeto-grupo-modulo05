import styles from "./Rodape.module.css";

const Rodape = () => {
  return (
    <>
      <div className={styles.rodape}>
        <div>
          <h3 class="footer-titulo">Atendimento</h3>
          <p>Horário de atendimento: Segunda a sexta, das 8 às 17h</p>
        </div>

        <div className={styles.logos}>
          <h3>Formas de pagamento</h3>
          <img src="/mastercard.svg" alt="" />
          <img src="/visa.svg" alt="" />
          <img src="/pix.svg" alt="" />
        </div>

        <div>
          <h3>Nossas mídias</h3>
          <img src="/facebook.svg" alt="" />
          <img src="/whatssap.svg" alt="" />
          <img src="/instagram.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Rodape;
