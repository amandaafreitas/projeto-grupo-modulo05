import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <>
      <nav className={styles.cabecalho}>
        <div>
          <Link to="/">
            <img className={styles.icone} src="/logo-damas.svg" alt="" />
          </Link>
        </div>

        <ul className={styles.menu}>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/produtos">
            <li>Produtos</li>
          </Link>
          <Link to="/faleconosco">
            <li>Fale Conosco</li>
          </Link>
          <Link to="/sobreus">
            <li>Sobre nós</li>
          </Link>
          <Link to="/nossaslojas">
            <li>Nossas lojas</li>
          </Link>
        </ul>
        <div className={styles.loginContainer}>
          <div>
            <img className={styles.userLogo} src="/user.svg" alt="" />
          </div>
          <ul className={styles.login}>
            <Link to="/login">
              <li> Fazer Login</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Cabecalho;
