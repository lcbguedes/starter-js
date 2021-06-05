//Manipulando Arrays

let techs = ["html", "css", "js"]

// add um item no fim
techs.push("react") // add um item no fim do array
console.log(techs)

//adicionar no começo
techs.unshift("html5")
console.log(techs)

//remover do fim
techs.pop()
console.log(techs)

//remover do começo
techs.shift()
console.log(techs)

//pegar somente alguns elementos 
techs.slice(1, 3)
console.log(techs)

//remover 1 ou mais elementos de um array
techs.splice(1, 2)
console.log(techs)

techs.splice(2,1, "react")
console.log(techs)

//Encontrar a posição de um elemento
let index = techs.indexOf('js')
console.log(index)
 
