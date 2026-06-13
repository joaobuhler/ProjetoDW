// @file: server.js

import Fastify from 'fastify'
import cors from '@fastify/cors'

import tarefaRoutes from './src/features/tarefas/tarefa.routes.js'
import { AppError } from './src/errors/AppError.js'
import pool from './src/database/pool.js'

const server = Fastify()

server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
})

server.setErrorHandler((error, request, reply) => {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      status: 'error',
      message: error.message
    })
  }

  console.error('🔥 ERRO INTERNO:', error)

  return reply.status(500).send({
    status: 'error',
    message: 'Internal Server Error'
  })
})

server.register(tarefaRoutes)

server.setNotFoundHandler((request, reply) => {
  reply.code(404).send({
    status: 'error',
    message: 'Rota não encontrada'
  })
})

const PORT = 3000

const start = async () => {
  try {
    
    await pool.query('SELECT 1')
    console.log('Conectado ao PostgreSQL com sucesso')

    await server.listen({ port: PORT })
    console.log(`Servidor rodando em http://localhost:${PORT}`)
  } catch (erro) {
    console.error('Falha ao iniciar a aplicação:', erro)
    process.exit(1)
  }
}

start()
