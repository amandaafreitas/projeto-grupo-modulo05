import styles from "./CardEdicaoPizza.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CardEdicaoPizza = ({
  sabor,
  tamanho,
  imagem,
  preco,
  botao,
  setPizzasPaginas,
  idPizza,
}) => {
  const [inputSabor, setInputSabor] = useState(sabor);
  const [inputTamanho, setInputTamanho] = useState(tamanho);
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
  const atualizaPizzas = () => {
    axios
      .get("http://localhost:3000/pizzas")
      .then((response) => {
        console.log("Atualizando: ", setPizzasPaginas);
        setPizzasPaginas(response.data);
      })
      .catch((erro) => {
        console.log("Deu tudo errado: ", erro);
      });
  };

  const cadastrar = (e) => {
    e.preventDefault();
    const pizzaNova = {
      sabor: e.target.sabor.value,
      tamanho: e.target.tamanho.value,
      preco: e.target.preco.value,
      img_url: e.target.imagem.value,
    };

    axios
      .post("http://localhost:3000/pizzas", pizzaNova)
      .then((resposta) => {
        atualizaPizzas();
        alert("Pizza cadastrada com sucesso");
      })
      .catch((erro) => console.log(erro));
  };

  //excluir

  const excluirPizza = (id) => {
    axios
      .delete(`http://localhost:3000/pizzas/${id}`)
      .then(() => {
        atualizaPizzas();
        alert("Pizza excluida com sucesso");
      })
      .catch((erro) => console.error(erro));
  };

  const editarPizza = (id) => {
    console.log(inputImagem);
    const pizzaEditada = {
      sabor: inputSabor,
      tamanho: inputTamanho,
      img_url: inputImagem,
      preco: inputPreco,
    };
    axios
      .put(`http://localhost:3000/pizzas/${id}`, pizzaEditada)
      .then(() => {
        atualizaPizzas();
        alert("Pizza atualizada com sucesso");
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
          <label className={styles.nomeInput} htmlFor="tamanho">
            Tamanho
          </label>
          <input
            className={styles.input}
            type="text"
            id="tamanho"
            onChange={handleChangeTamanho}
            defaultValue={tamanho}
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
                onClick={() => editarPizza(idPizza)}
                style={{ backgroundColor: "orange" }}
                type="button"
                className={styles.botao}
              >
                {botao}
              </button>
              <button
                onClick={() => excluirPizza(idPizza)}
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

export default CardEdicaoPizza;
