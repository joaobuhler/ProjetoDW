

class ProjetoController {
  constructor(service) {
    this.service = service
  }

  async listarProjetos(request, reply) {
    console.log("ProjetoController: listarProjetos chamado")
    const projetos = await this.service.listar()
    return reply.send(projetos)
  }

  async obterProjeto(request, reply) {
    console.log("ProjetoController: obterProjeto chamado")
    const id = Number(request.params.id)
    const projeto = await this.service.buscarPorId(id)
    return reply.send(projeto)
  }

  async criarProjeto(request, reply) {
    console.log("ProjetoController: criarProjeto chamado")
    const projeto = await this.service.criar(request.body)
    return reply.status(201).send(projeto)
  }

  async listarTarefasDoProjeto(request, reply) {
    console.log("ProjetoController: listarTarefasDoProjeto chamado")
    const id = Number(request.params.id)
    const tarefas = await this.service.listarTarefas(id)
    return reply.send(tarefas)
  }
}

export default ProjetoController
