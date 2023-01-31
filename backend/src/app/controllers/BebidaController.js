import conexao from "../database/conexao.js";
import BebidaRepository from "../repositories/BebidaRepository.js";

//métodos da classe,

class BebidaController {
  async store(req, res) {
    try {
      const resultado = await BebidaRepository.create(req.body);
      return res.status(201).send("Bebida cadastrada com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel cadastrar a bebida");
    }
  }

  async index(req, res) {
    const resultado = await BebidaRepository.findAll();
    return res.json(resultado);
  }

  async show(req, res) {
    const id = req.params.id;
    const resultado = await BebidaRepository.findById(id);
    return res.json(resultado);
  }

  async update(req, res) {
    const bebida = req.body;
    const id = req.params.id;
    const sql = "UPDATE bebidas SET ?  WHERE id=?;";
    try {
      const resultado = await BebidaRepository.update(bebida, id);
      return res.status(201).send("Bebida atualizada com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel atualizar a bebida");
    }
  }

  async delete(req, res) {
    const id = req.params.id;
    try {
      const resultado = await BebidaRepository.delete(id);
      return res.status(201).send("Bebida excluída com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel excluir a bebida");
    }
  }
}

export default new BebidaController();
