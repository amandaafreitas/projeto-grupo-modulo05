import { consulta } from "../database/conexao.js";

class PizzaRepository {
  create(pizza) {
    const sql = "INSERT INTO pizzas SET ?;";
    return consulta(sql, pizza, "Não foi inserir uma nova pizza");
  }

  findAll() {
    const sql = "select * from pizzas;";
    return consulta(sql, "Não foi possivel listar as pizzas.");
  }

  findById(id) {
    const sql = "SELECT * from pizzas WHERE id=?;";
    return consulta(sql, id, "Não foi possivel encontrar essa pizza.");
  }
  update(pizza, id) {
    const sql = "UPDATE pizzas SET ?  WHERE id=?;";
    return consulta(sql, [pizza, id], "Não foi possivel atualizar essa pizza.");
  }

  delete(id) {
    const sql = "DELETE FROM pizzas WHERE id=?;";
    return consulta(sql, id, "Não foi possivel deletar essa pizza.");
  }
}

export default new PizzaRepository();
