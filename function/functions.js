//Criar um APP de frases motivacionais

//Function Statement
function createPhrases() {
    console.log('Estudar é muito bom!')
    console.log('Paciencia e persistencia')
    console.log('Revisao é a mae do aprendizado')
}

//execute, run, call, invoke
createPhrases()

console.log('Fim do APP')

// Parameters function
const sum = function (number1, number2) {
   total = number1 + number2
   return total
}
//Arguments function
console.log(sum(8,2))

//exemplo pratico de uma function
const vitamina = function(fruta1, fruta2) { 
    return fruta1 + fruta2
    
}

const copo = vitamina('bana', 'nada')
console.log(copo)

//Function Callback
function sayMyName(name){
    console.log(name)
}

sayMyName("LC")

//Function constructor
function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " esta Andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())

// Criando Array com constructor
 let myArray = new Array("1", "2", "3")
 console.log(myArray)

 //Transformar uma cadeia de caracteres em um array
 let word = "TESTE"
 console.log(Array.from(word))