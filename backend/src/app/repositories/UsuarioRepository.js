import { consulta } from "../database/conexao.js";

class UsuarioRepository {
  create(usuario) {
    const sql = "INSERT INTO usuarios SET ?;";
    return consulta(sql, usuario, "Não foi inserir uma nova usuario");
  }

  findAll() {
    const sql = "select * from usuarios;";
    return consulta(sql, "Não foi possivel listar as usuarios.");
  }

  findById(id) {
    const sql = "SELECT * from usuarios WHERE id=?;";
    return consulta(sql, id, "Não foi possivel encontrar essa usuario.");
  }
  update(usuario, id) {
    const sql = "UPDATE usuarios SET ?  WHERE id=?;";
    return consulta(
      sql,
      [usuario, id],
      "Não foi possivel atualizar essa usuario."
    );
  }

  delete(id) {
    const sql = "DELETE FROM usuarios WHERE id=?;";
    return consulta(sql, id, "Não foi possivel deletar essa usuario.");
  }

  login(login, senha) {
    const sql = "select * from usuarios WHERE login=? and senha=?;";
    return consulta(sql, [login, senha], "Usuario não encontrado na base.");
  }
}

export default new UsuarioRepository();
