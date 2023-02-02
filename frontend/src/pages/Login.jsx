import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/login.css";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const validacaoSchema = yup.object({
  nome: yup.string().required("O campo nome não pode ser vazio"),
  senha: yup
    .string()
    .min(4, "A senha deve ter no mínimo 4 caracteres")
    .max(10, "A senha deve ter no máximo 10 caracteres")
    .required("O campo senha não pode ser vazio"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validacaoSchema), //connecting yup with react-hook-form
  });

  const navigate = useNavigate();

  const valida = (data) => {
    console.log("aki ", data);
    navigate("/tela-edicao");
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
