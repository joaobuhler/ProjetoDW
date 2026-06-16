

import { AppError } from '../../errors/AppError.js'

class ProjetoService {
  constructor(repository) {
    this.repository = repository
  }

  async listar() {
    console.log("ProjetoService: listar chamado")
    return this.repository.buscarTodos()
  }

  async buscarPorId(id) {
    console.log("ProjetoService: buscarPorId chamado")
    const projeto = await this.repository.buscarPorId(id)

    if (!projeto) {
      throw new AppError('Projeto não encontrado', 404)
    }

    return projeto
  }

  async criar(dados) {
    console.log("ProjetoService: criar chamado")

    if (!dados.nome || dados.nome.trim() === '') {
      throw new AppError('O nome do projeto é obrigatório', 400)
    }

    return this.repository.salvar({ nome: dados.nome.trim() })
  }

  async listarTarefas(projetoId) {
    console.log("ProjetoService: listarTarefas chamado")
    await this.buscarPorId(projetoId) // Garante que o projeto existe, lança 404 se não
    return this.repository.buscarTarefas(projetoId)
  }
}

export default ProjetoService
