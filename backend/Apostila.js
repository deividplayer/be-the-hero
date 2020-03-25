const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
 */

/**
 * Método HTTP
 * 
 * GET: Buscar/listar uma informação de back-end
 * POST: Criar uma informação no back-end
 * PUT: Altera uma informação do back-end
 * DELETE: Deletar uma informação no back-end 
*/ 

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * http://192.168.0.130:3333/users?name=Deivison | 
 * http://192.168.0.130:3333/users?page2&name=Deivison?idade=24
 * http://192.168.0.130:3333/users?name=Deivison&idade=24
 * app.get('/users', (request, response) => {
  const params = request.query;

  console.log(params);

  return response.json({
    "evento": "Semana OmmiStack 11.0",
    "aluno": "Deivison Pertel"
  })
});
 * Route Params: Parâmetros utilizados para identificar recursos
 * /users:id | http://192.168.0.130:3333/users/1 
 * app.get('/users/:id', (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json({
    "evento": "Semana OmmiStack 11.0",
    "aluno": "Deivison Pertel"
  })
});
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 No Inicio | app.use(express.json());
 
 app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    "evento": "Semana OmmiStack 11.0",
    "aluno": "Deivison Pertel"
  })
});
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server (Relacionado, universal)
 * NoSQL: MongoDB, CouchDB, etc (não relacionado, cada um tem sua propria linguagem)
 */
/**
 * Driver: SELECT * FROM users
 * Query Builer: table('users'), select('*'), where()
 */

app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    "evento": "Semana OmmiStack 11.0",
    "aluno": "Deivison Pertel"
  })
});

app.listen(3333);

/**
 * Entidades
 * 
 * ONG
 * Caso (incident)
 */

/**
 * Funcionalidades
 * 
 * Login de ONG
 * Logout de ONG
 * Cadastro de ONG
 * Cadastra novos casos
 * Deletar casos
 * Listar casos especificos de uma ONG
 * Listar todos os casos 
 * Entra em Contato com a ONG
 */

routes.post('/ongs', (request, response) => {
  const { name, email, whatsapp, city, uf} = request.body;

  console.log( name, email, whatsapp, city, uf);

  return response.json();
});

routes.post('/ongs', (request, response) => {
  const data = request.body;

  console.log(data);

  return response.json();
});



routes.get('/ongs', async (request, response) => {
  const ongs = await connection('ongs').select('*')

  return response.json(ongs);
});

routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;
  
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  });