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
          <Link to="/filmes">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Produtos</li>
          </Link>
          <Link to="/login">
            <li>Fale Conosco</li>
          </Link>
          <Link to="/filmes">
            <li>Sobre nós</li>
          </Link>
          <Link to="/login">
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
