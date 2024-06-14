export async function criarTabela(conexao) {
    await conexao.schema.createTable("pessoas", tabela => {
        tabela.increments("id")
        tabela.string("nome")
        tabela.string("email")
    })

    console.log("Tabela criada...")
}

export async function inserir(conexao, inserir) {
    //conexao("pessoas").insert(...)
    //conexao.insert(...).into("pessoas")
    await conexao("pessoas").insert(inserir)
    console.log("Pessoas inseridas...")
}

export async function consultar(conexao, filtro) {
    //conexao("pessoas").where(filtro)
    //conexao.select().from("pessoas").where(filtro)

    const dados = await conexao.select().from("pessoas").where(filtro)

    console.log(dados)
}
export async function alterar(conexao, ondeAlterar, oQueAlterar) {
    await conexao("pessoas").where(ondeAlterar).update(oQueAlterar)
    console.log("Alteração realizada...")

}

export async function excluir(conexao, filtro){
    await conexao("pessoas").where(filtro).del()
    console.log("Exclusão realizada...")

}