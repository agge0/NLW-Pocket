const {select} = require('@inquirer/prompts')

const start =  async () =>{
    while(true){
        let option = await select({
            message: "===========[  Menu  ]===========",
            choices:[
                {name:"Cadastrar",
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
            case "deletar":
                console.log("Apagando...")
                break
            case "cadastrar":
                console.log("Vamos cadastrar!")
                break
            case "sair":
                console.log("Bye!")
                return
        }
    }
}

start()