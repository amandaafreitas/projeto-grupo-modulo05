import conexao from "../database/conexao.js";
import PizzaRepository from "../repositories/PizzaRepository.js";

//métodos da classe,

class PizzaController {
  async store(req, res) {
    try {
      const resultado = await PizzaRepository.create(req.body);
      return res.status(201).send("Pizza cadastrada com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel cadastrar a pizza");
    }
  }

  async index(req, res) {
    const resultado = await PizzaRepository.findAll();
    return res.json(resultado);
  }

  async show(req, res) {
    const id = req.params.id;
    const resultado = await PizzaRepository.findById(id);
    return res.json(resultado);
  }

  async update(req, res) {
    const pizza = req.body;
    const id = req.params.id;
    const sql = "UPDATE pizzas SET ?  WHERE id=?;";
    try {
      const resultado = await PizzaRepository.update(pizza, id);
      return res.status(201).send("Pizza atualizada com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel atualizar a pizza");
    }
  }

  async delete(req, res) {
    const id = req.params.id;
    try {
      const resultado = await PizzaRepository.delete(id);
      return res.status(201).send("Pizza excluída com sucesso!");
    } catch (error) {
      res.status(500).send("Não foi possivel excluir a pizza");
    }
  }
}

export default new PizzaController();
