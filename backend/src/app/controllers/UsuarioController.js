import UsuarioRepository from "../repositories/UsuarioRepository.js";

//métodos da classe,

class UsuarioController {
  async store(req, res) {
    try {
      const resultado = await UsuarioRepository.create(req.body);
      return res.status(201).send("Usuario cadastrada com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel cadastrar a usuario");
    }
  }

  async index(req, res) {
    console.log("aki");
    const resultado = await UsuarioRepository.findAll();
    return res.json(resultado);
  }

  async show(req, res) {
    const id = req.params.id;
    const resultado = await UsuarioRepository.findById(id);
    return res.json(resultado);
  }

  async update(req, res) {
    const usuario = req.body;
    const id = req.params.id;
    const sql = "UPDATE usuarios SET ?  WHERE id=?;";
    try {
      const resultado = await UsuarioRepository.update(usuario, id);
      return res.status(201).send("Usuario atualizada com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel atualizar a usuario");
    }
  }

  async delete(req, res) {
    const id = req.params.id;
    try {
      const resultado = await UsuarioRepository.delete(id);
      return res.status(201).send("Usuario excluída com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel excluir a usuario");
    }
  }
}

export default new UsuarioController();
