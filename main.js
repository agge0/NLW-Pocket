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

// const getVideos = (email) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`Getting ${email} videos`)
//             resolve(["video1", "video2", "video3"])

//         }, 2000)

//     })
// }

// const userInfo = (email, passwd) =>{
//     return new Promise((resolve, reject)=>{
//         const error = false

//         if(error){
//             reject(new Error("Deu um erro"))
//         }
//         resolve({email})

//     })
// }

// // Usando promisses

// userInfo("age","22h3hh").then((user)=>{
//     return getVideos(user.email)
// }).then((videos)=>{
//     console.log(videos)
// })


// // Usanso Async/Await
// const UsandoAsyncAwait = async () =>{
//     let user = await userInfo("age@gmail.com", "sj3uh3u")
//     let videos = await getVideos(user.email)

//     console.log(videos)
// }

// UsandoAsyncAwait()

// Usando Promise.All(recebe uma lista)



const fb = new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Posts do FB")
    }, 2000)
})

const yt = new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Posts do YouTube")
    }, 2000)
})

Promise.all([yt, fb]).then(result =>{
    console.log(result)
    
})