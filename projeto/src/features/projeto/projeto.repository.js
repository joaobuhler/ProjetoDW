

import pool from '../../database/pool.js'

class ProjetoRepository {

  async buscarTodos() {
    console.log("ProjetoRepository: buscarTodos chamado")
    const resultado = await pool.query(`
      SELECT id, nome, criado_em
      FROM projetos
      ORDER BY id
    `)

    return resultado.rows
  }

  async buscarPorId(id) {
    console.log("ProjetoRepository: buscarPorId chamado")
    const resultado = await pool.query(
      `
        SELECT id, nome, criado_em
        FROM projetos
        WHERE id = $1
      `,
      [id]
    )

    return resultado.rows[0] ?? null
  }

  async salvar(projeto) {
    console.log("ProjetoRepository: salvar chamado")
    const resultado = await pool.query(
      `
        INSERT INTO projetos (nome)
        VALUES ($1)
        RETURNING id, nome, criado_em
      `,
      [projeto.nome]
    )

    return resultado.rows[0]
  }

  async buscarTarefas(projetoId) {
    console.log("ProjetoRepository: buscarTarefas chamado")
    const resultado = await pool.query(
      `
        SELECT
          t.id,
          t.descricao,
          t.concluido,
          t.criada_em,
          t.projeto_id,
          p.nome AS projeto_nome
        FROM tarefas t
        INNER JOIN projetos p
          ON p.id = t.projeto_id
        WHERE p.id = $1
        ORDER BY t.id
      `,
      [projetoId]
    )

    return resultado.rows
  }
}

export default ProjetoRepository
