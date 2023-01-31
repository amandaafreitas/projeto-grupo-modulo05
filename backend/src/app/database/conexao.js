import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "localhost",
  database: "bdpizzaria",
});

export const consulta = (comandoSql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(comandoSql, valores, (erro, resultado) => {
      {
        if (erro) {
          return reject(mensagemReject);
        }
        const resultadoTratado = JSON.parse(JSON.stringify(resultado));
        return resolve(resultadoTratado);
      }
    });
  });
};

conexao.connect();

export default conexao;
