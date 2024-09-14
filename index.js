// // // Escopo global


// // const msg = "Olá!"

// // {
// //     // Escopo local
// //     const msg = "Auuuuu!"
// //     console.log(msg) // Vai imorimir "Auuuu!"
// // }


// // // Vão mostrar "olá!"
// // console.log(msg)



// // Estrutura de dados

// let metas = ["Age", "Alô"]

// const meta = {
//     value: "Tomar banho",
//     checked: false
// }

// console.log(metas[1]+" "+metas[0])
// console.log(meta.value)

// if(meta.checked){
//     console.log("Tomou banho.")
// }else{
//     console.log("Ahhhh esse dji não tomou!")
// }

// // Mostrando dados com for

// for(let meta of metas){
//     console.log(meta);
// }

// // fucntion, arrow fucntion

// const tarefa = {
//     value: "fazer tpc.",
//     fezTpc: (info = 10) => {
//         console.log(info)
//     }
// }


// tarefa.fezTpc(20)

// // Operador terneario
// let x = 10 > 4 ? 10 : 4

// console.log(x)


// const meta = {
//     value: "Sair.",
//     checked: true
// }

// const metas = [
//     meta,{
//         value:"Estudar muito.",
//         checked: false
//     }
// ]


// console.log(metas[1].value)

const start = () =>{
    while(true){
        let option = "sair"
        switch(option){
            case "deletar":
                console.log("Vamos cadastrar!")
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