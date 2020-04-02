const express = require('express') /* Importando o express */
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);  




/* 
 Rota / Recurso.
 
 Criar métodos HTTP:

 GET: Pegar informação no back-end
 POST: Criar uma informação no back-end
 PUT: Alterar uma informação no back-end
 DELETE: Deletar uma informação no back-end 
 */

/*
    Tipos de Banco de dados

SQL : mySQL, SQLite, PostGreSQL, Oracle, Microsoft SQL Server;
noSQL: MongoDB, CouchDB, etc;

*/ 

/*
 Driver: Select * From users
 Query Builder: table('user').select('*').where()
*/


