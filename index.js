const {select, input, checkbox} = require('@inquirer/prompts')

let meta = {
        value: "Tomar banho",
        checked: false
    }


let metas = [meta]

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
    const respostas = await checkbox({
        message: "Digite ESPAÇO para selecionar e SETAS para precorrer e ENTER para finalizar",
        choices: [...metas],
        instructions: false
    })

  
    metas.forEach(meta=>{
        meta.checked = false
    })

    if(respostas.length == 0){
        return
    }


    respostas.forEach((resposta) =>{
        const meta = metas.find((mt) =>{
            return mt.value == resposta
        })

        meta.checked = true

         
    })

    console.log("Meta(s) como marcadas concluídas")

}

const metasRealizadas = async () =>{
    const meta = metas.filter((meta)=>{
        return meta.checked
    })

    if(meta.length == 0){
        console.log("Não exitem metas realizadas!")
        return
    }

    const resposta = await select({
        message: "Metas Realizadas",
        choices: [...meta]
    })
}

const start =  async () =>{
    while(true){
        let option = await select({
            message: "[        Menu        ]",
            choices:[
                {name:"Mostrar metas",
                    value: "m_metas"
                },
                {name:"Metas Realizadas",
                    value: "m_realizadas"
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
            case "deletar":
                console.log("Apagando...")
                break
            case "cadastrar":
                await cadastrar()
                break
            case "sair":
                console.log("Bye!")
                return
        }
    }
}

start()