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



// const nome = teste("Age", 21, (user)=>{
//     console.log(user)
// }, (user)=>{
//     console.log(user)
// })


// Usando Promisse
const userInfo = (email, passwd) =>{
    return new Promise((resolve, reject)=>{
        const error = true

        if(error){
            reject(new Error("Deu um erro"))
        }

        resolve({email})

    })
}

const user = userInfo("age@gmail.com", "2w333").then((user)=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})