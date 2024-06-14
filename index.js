import knex from "knex";
import knexfile from "./knexfile.js";
import { criarTabela, inserir, consultar, alterar, excluir } from "./funcoes.js";

const conexao = knex(knexfile)

//Criar as tabelas
//await criarTabela(conexao)

//Inserir registros - objetos

//await inserir(conexao, { nome: "Amarildo José", email: "amarildo.jose@gmail.com" })
//inserindo dados - array
// await inserir(conexao, [
//     { nome: "Maria Joaquina", email: "maria.joaquina@hotmail.com" },
//     { nome: "Nicolas Souza", email: "nicolas.souza@yahoo.com" },
//     { nome: "Paulo Pereira", email: "paulo.pereira@google.com" },
// ])

//Pesquisar os registros
//await consultar(conexao, {})

//alterar registros
//await alterar(conexao, {id:2}, {nome:"Ronaldo Rodrigues",email:"ronaldo.rodrigues@gmail.com"})

//Excluir registros
await excluir(conexao, {id:1})

//fechando a conexao
conexao.destroy()

