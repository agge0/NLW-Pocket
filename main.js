// const {input} = require("@inquirer/prompts")

// const start = async () =>{

//     const answer = await input({
//         message: "Digite o seu nome: "
//     }) 

//     return answer
// }

// const menu = async () =>{
//     let nome = await start()

//     console.log(nome)

// }

// menu()


// Callbacks em javascript

const teste = (nome, idade, onSucess, onError) =>{
    setTimeout(()=>{
        console.log("Executei no time out")

        const error = false

        if(error){
            return onError(new Error("Deu um erro"))
        }

        onSucess({nome, idade}) 

    }, 1500)
    
    console.log("Fora do time out")
}

function yeah(teste){
    console.log(teste)
}

const nome = teste("Age", 21, yeah, (user)=>{
    console.log(user)
})
