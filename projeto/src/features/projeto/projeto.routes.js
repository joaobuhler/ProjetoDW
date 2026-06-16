

import ProjetoRepository from './projeto.repository.js'
import ProjetoService from './projeto.service.js'
import ProjetoController from './projeto.controller.js'

export default async function projetoRoutes(server) {


  const repository = new ProjetoRepository()
  const service = new ProjetoService(repository)
  const controller = new ProjetoController(service)


  server.get('/projetos', async (request, reply) => controller.listarProjetos(request, reply))
  server.post('/projetos', async (request, reply) => controller.criarProjeto(request, reply))
  server.get('/projetos/:id', async (request, reply) => controller.obterProjeto(request, reply))
  server.get('/projetos/:id/tarefas', async (request, reply) => controller.listarTarefasDoProjeto(request, reply))
}
