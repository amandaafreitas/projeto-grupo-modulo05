import UsuarioRepository from "../repositories/UsuarioRepository.js";

//métodos da classe,

class LoginController {
  async login(req, res) {
    const usuario = req.body;
    const resultado = await UsuarioRepository.login(
      usuario.login,
      usuario.senha
    );
    return res.json(resultado[0]);
  }
}

export default new LoginController();
