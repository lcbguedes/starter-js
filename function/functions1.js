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

//Diminui as casas decimais e subtitui ponto por virgula
let number = 345.3314545
console.log(number.toFixed(2).replace(".", ',')) 

//Transformar maisculas em minusculas e vice versa
let word = "Programar é muito bacana!!"
console.log(word.toUpperCase()) // tudo maiusculo
console.log(word.toLowerCase()) // tudo minusculo

//Verificar se o texto contem a palavra Amor
let phrase = "Eu qro viver o Amor"
console.log(phrase.includes("Amor"))