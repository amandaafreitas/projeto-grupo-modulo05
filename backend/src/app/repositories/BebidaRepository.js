import { consulta } from "../database/conexao.js";

class BebidaRepository {
  create(bebida) {
    const sql = "INSERT INTO bebidas SET ?;";
    return consulta(sql, bebida, "Não foi inserir uma nova bebida");
  }

  findAll() {
    const sql = "select * from bebidas;";
    return consulta(sql, "Não foi possivel listar as bebidas.");
  }

  findById(id) {
    const sql = "SELECT * from bebidas WHERE id=?;";
    return consulta(sql, id, "Não foi possivel encontrar essa bebida.");
  }
  update(bebida, id) {
    const sql = "UPDATE bebidas SET ?  WHERE id=?;";
    return consulta(
      sql,
      [bebida, id],
      "Não foi possivel atualizar essa bebida."
    );
  }

  delete(id) {
    const sql = "DELETE FROM bebidas WHERE id=?;";
    return consulta(sql, id, "Não foi possivel deletar essa bebida.");
  }
}

export default new BebidaRepository();
