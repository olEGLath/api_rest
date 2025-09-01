import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'qNf0B@example.com',
      idade: 22,
      peso: 70.5,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
