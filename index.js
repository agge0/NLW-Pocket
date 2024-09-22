const {select, input, checkbox} = require('@inquirer/prompts')
const fs = require("fs").promises



let mensagem = "Bem Vindo"

let metas

const carregarMetas = async ()=>{
    try{
        dados = await fs.readFile("metas.json", "utf-8")
        metas = JSON.parse(dados)
    }catch(erro){
        metas = []
    }
}

const salvarMetas = async()=>{
    
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
   
}


const cadastrar = async () =>{
    const resposta = await input({
        message:"Digite alguma coisa :/> "
    })

    if(resposta.length == 0){
        return
    }

    metas.push({
        value: resposta,
        checked: false
    })
}

const mostrarMetas = async () => {
    if(metas.length == 0){
        mensagem = "Sem metas!"
        return
    }

    const respostas = await checkbox({
        message: "Digite ESPAÇO para selecionar e SETAS para precorrer e ENTER para finalizar",
        choices: [...metas],
        instructions: false
    })

  
    metas.forEach(meta=>{
        meta.checked = false
    })

    if(respostas.length == 0){
        mensagem = "Nenhuma meta selecionada"
        return
    }


    respostas.forEach((resposta) =>{
        const meta = metas.find((mt) =>{
            return mt.value == resposta
        })

        meta.checked = true

         
    })

    mensagem = "Meta(s) como marcada(s) concluídas"

}

const metasRealizadas = async () =>{
    if(metas.length == 0){
        mensagem = "Sem metas!"
        return
    }

    const meta = metas.filter((meta)=>{
        return meta.checked
    })

    if(meta.length == 0){
        mensagem = "Não exitem metas realizadas!"
        return
    }



    await select({
        message: "Metas Realizadas: "+meta.length ,
        choices: [...meta]
    })
}


const  metasAbertas = async ()=>{
    if(metas.length == 0){
        mensagem = "Sem metas!"
        return
    }
    
    const meta = metas.filter((meta)=>{
        return !meta.checked
    })

    if(metas.length == 0){
        mensagem = "Não temos metas abertas!"
        return
    }

    await select({
        message: "Metas Abertas: "+meta.length ,
        choices:[...meta]
    })
}

const deletarMetas = async () => {
    if(metas.length == 0){
        mensagem = "Sem metas Para Apagar!"
        return
    }

    const novasMetas = metas.map(meta=>{
        return {value:meta.value , checked: false}
    })

    const itensAdeletar = await checkbox({
        message: "Digite ESPAÇO para selecionar e SETAS para precorrer e ENTER para finalizar",
        choices: [...novasMetas],
        instructions: false
    })

    if(itensAdeletar.length == 0){
        mensagem = "Sem metas para deletar!"
        return
    }


    itensAdeletar.forEach(item=>{
        metas = metas.filter(meta=>{
            return meta.value != item
        })

        
    })
    mensagem = "Meta apagada com sucesso"
    

}

const mostrarMensagem = ()=>{
    console.clear()

    if (mensagem != ""){
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

const start =  async () =>{
    await carregarMetas()
    while(true){
        mostrarMensagem()
        await salvarMetas()
        let option = await select({
            message: "[        Menu        ]",
            choices:[
                {name:"Mostrar metas",
                    value: "m_metas"
                },
                {name:"Metas Realizadas",
                    value: "m_realizadas"
                },
                {name:"Metas Abertas",
                    value: "m_abertas"
                },
                {name:"Cadastrar Metas",
                    value: "cadastrar"
                },
                {name:"Apagar",
                    value: "deletar"
                },
                {name:"Sair",
                    value: "sair"
                },
            
            ]
      })

        switch(option){
            case "m_metas":
                await mostrarMetas()
                break
            case "m_realizadas":
                await metasRealizadas()
                break
            case "m_abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "cadastrar":
                await cadastrar()
                break
            case "sair":
                mensagem = "Até aproxima!"
                return
        }
    }
}

start()