import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/cadastro.css";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const validacaoSchema = yup.object({
  nome: yup.string().required("O campo nome não pode ser vazio"),
  senha: yup
    .string()
    .min(4, "A senha deve ter no mínimo 4 caracteres")
    .max(10, "A senha deve ter no máximo 10 caracteres")
    .required("O campo senha não pode ser vazio"),
});

const Cadastro = () => {
  const [usuario, setUsuario] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/usuarios")
  //     .then((resultado) => console.log(resultado));
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validacaoSchema), //connecting yup with react-hook-form
  });

  const navigate = useNavigate();

  const valida = (data) => {
    axios
      .post("http://localhost:3000/usuarios", {
        login: data.nome,
        senha: data.senha,
      })
      .then((resultado) => {
        console.log(resultado.data);
        if (resultado.data.includes("sucesso")) {
          alert("Usuário cadastrado com sucesso");
        } else {
          alert("Usuário não cadastrado");
        }
      });
  };

  return (
    <>
      <div className="login">
        <h1 className="tituloCadastro">Faça seu Cadastro</h1>
        <form onSubmit={handleSubmit(valida)} className="formulario">
          <div className="formularioContainer">
            <div className="inputContainer">
              <label className="nomeCadastro" htmlFor="nome">
                Nome:
              </label>
              <input
                className="inputCadastro"
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                {...register("nome")}
              />
              <p>{errors.nome?.message}</p>
            </div>
            <div className="inputContainer">
              <label className="nomeCadastro" htmlFor="senha">
                Senha:
              </label>
              <input
                className="inputCadastro"
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                {...register("senha")}
              />
              <p>{errors.senha?.message}</p>
            </div>
            <div className="inputContainer">
              <label className="nomeCadastro" htmlFor="admin">
                Administrador:
              </label>
              <select name="admin" id="admin" {...register("admin")}>
                <option value="s">Sim</option>
                <option value="n">Não</option>
              </select>
            </div>
            <div>
              <button className="botao" type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
