import styles from "./CardEdicaoBebida.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CardEdicaoBebida = ({
  sabor,
  imagem,
  preco,
  botao,
  setBebidasPaginas,
  idBebida,
}) => {
  const [inputSabor, setInputSabor] = useState(sabor);
  const [inputImagem, setInputImagem] = useState(imagem);
  const [inputPreco, setInputPreco] = useState(preco);

  const handleChangeSabor = (e) => {
    setInputSabor(e.target.value);
  };

  const handleChangeTamanho = (e) => {
    setInputTamanho(e.target.value);
  };

  const handleChangeImagem = (e) => {
    console.log("teste: ", e);
    setInputImagem(e.target.value);
  };

  const handleChangePreco = (e) => {
    setInputPreco(e.target.value);
  };

  //funções

  //métodos http
  //para recarrecar os cards
  const atualizaBebidas = () => {
    axios
      .get("http://localhost:3000/bebidas")
      .then((response) => {
        console.log("Atualizando: ", setBebidasPaginas);
        setBebidasPaginas(response.data);
      })
      .catch((erro) => {
        console.log("Deu tudo errado: ", erro);
      });
  };

  const cadastrar = (e) => {
    e.preventDefault();
    const bebidaNova = {
      sabor: e.target.sabor.value,
      preco: e.target.preco.value,
      img_url: e.target.imagem.value,
    };

    axios
      .post("http://localhost:3000/bebidas", bebidaNova)
      .then((resposta) => {
        atualizaBebidas();
        alert("Bebida cadastrada com sucesso");
      })
      .catch((erro) => console.log(erro));
  };

  //excluir

  const excluirBebida = (id) => {
    axios
      .delete(`http://localhost:3000/bebidas/${id}`)
      .then(() => {
        atualizaBebidas();
        alert("Bebida excluida com sucesso");
      })
      .catch((erro) => console.error(erro));
  };

  const editarBebida = (id) => {
    console.log(inputImagem);
    const bebidaEditada = {
      sabor: inputSabor,
      img_url: inputImagem,
      preco: inputPreco,
    };
    axios
      .put(`http://localhost:3000/bebidas/${id}`, bebidaEditada)
      .then(() => {
        atualizaBebidas();
        alert("Bebida atualizada com sucesso");
      })
      .catch((erro) => console.error(erro));
  };

  return (
    <>
      <div className={styles.formularioContainer}>
        <form className={styles.formulario} onSubmit={cadastrar}>
          <label className={styles.nomeInput} htmlFor="sabor">
            Sabor
          </label>
          <input
            className={styles.input}
            type="text"
            id="sabor"
            onChange={handleChangeSabor}
            defaultValue={sabor}
          />
          <label className={styles.nomeInput} htmlFor="imagem">
            Imagem
          </label>
          <input
            className={styles.input}
            type="text"
            id="imagem"
            onChange={handleChangeImagem}
            defaultValue={imagem}
          />
          <label className={styles.nomeInput} htmlFor="preco">
            Preço
          </label>
          <input
            className={styles.input}
            type="text"
            id="preco"
            onChange={handleChangePreco}
            defaultValue={preco}
          />

          {botao === "Cadastrar" && (
            <button type="submit" className={styles.botao}>
              {botao}
            </button>
          )}

          {botao !== "Cadastrar" && (
            <div className={styles.botoes}>
              <button
                onClick={() => editarBebida(idBebida)}
                style={{ backgroundColor: "orange" }}
                type="button"
                className={styles.botao}
              >
                {botao}
              </button>
              <button
                onClick={() => excluirBebida(idBebida)}
                style={{ backgroundColor: "red" }}
                type="button"
                className={styles.botao}
              >
                Excluir
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default CardEdicaoBebida;
