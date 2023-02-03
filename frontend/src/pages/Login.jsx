import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/login.css";
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

const Login = () => {
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
      .post("http://localhost:3000/login", {
        login: data.nome,
        senha: data.senha,
      })
      .then((resultado) => {
        console.log(resultado.data);
        if (resultado.data?.admin == "s") {
          localStorage.setItem("usuario", JSON.stringify(resultado.data));
          navigate("/faleconosco");
        } else if (resultado.data?.admin == "n") {
          localStorage.setItem("usuario", JSON.stringify(resultado.data));
          navigate("/");
        } else {
          alert("Usuário não cadastrado");
        }
      });
  };

  return (
    <>
      <div className="login">
        <h1 className="tituloLogin">Faça seu Login</h1>
        <form onSubmit={handleSubmit(valida)} className="formulario">
          <div className="formularioContainer">
            <div className="inputContainer">
              <label className="nomeLogin" htmlFor="nome">
                Nome:
              </label>
              <input
                className="inputLogin"
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                {...register("nome")}
              />
              <p>{errors.nome?.message}</p>
            </div>
            <div className="inputContainer">
              <label className="nomeLogin" htmlFor="senha">
                Senha:
              </label>
              <input
                className="inputLogin"
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                {...register("senha")}
              />
              <p>{errors.senha?.message}</p>
            </div>
            <div>
              <button className="botao" type="submit">
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
