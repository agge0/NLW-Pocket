const {select, input} = require('@inquirer/prompts')

let meta = {
        value: "Tomar banho",
        checked: true
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

const start =  async () =>{
    while(true){
        let option = await select({
            message: "===========[  Menu  ]===========",
            choices:[
                {name:"Mostrar metas",
                    value: "m_metas"
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
            
            ],
      })

        switch(option){
            case "m_metas":
                console.log(metas)
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