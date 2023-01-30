import conexao from "../database/conexao.js";

class PizzaRepository {
  create(pizza) {
    const sql = "INSERT INTO pizzas SET ?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, pizza, (erro, resultado) => {
        {
          if (erro) {
            return reject("Não foi inserir uma nova pizza");
          }
          const resultadoTratado = JSON.parse(JSON.stringify(resultado));
          return resolve(resultadoTratado);
        }
      });
    });
  }

  findAll() {
    const sql = "select * from pizzas;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (erro, resultado) => {
        {
          if (erro) {
            return reject("Não foi possivel listar as pizzas.");
          }
          const resultadoTratado = JSON.parse(JSON.stringify(resultado));
          return resolve(resultadoTratado);
        }
      });
    });
  }

  findById(id) {
    const sql = "SELECT * from pizzas WHERE id=?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        {
          if (erro) {
            return reject("Não foi possivel listar as pizzas.");
          }
          const resultadoTratado = JSON.parse(JSON.stringify(resultado));
          return resolve(resultadoTratado);
        }
      });
    });
  }
  update(pizza, id) {
    const sql = "UPDATE pizzas SET ?  WHERE id=?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [pizza, id], (erro, resultado) => {
        {
          if (erro) {
            return reject("Não foi possivel listar as pizzas.");
          }
          const resultadoTratado = JSON.parse(JSON.stringify(resultado));
          return resolve(resultadoTratado);
        }
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM pizzas WHERE id=?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        {
          if (erro) {
            return reject("Não foi possivel listar as pizzas.");
          }
          const resultadoTratado = JSON.parse(JSON.stringify(resultado));
          return resolve(resultadoTratado);
        }
      });
    });
  }
}

export default new PizzaRepository();
