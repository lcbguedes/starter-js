let family = {
    receitas: [500, 300], 
    despesas: [600, 400]
}

function soma(array) {
    let total = 0;

    for(let value of array){
        total += value
    }

    return total   
}

function calculateBalance(){
    const calculateIncomes = soma(family.receitas)
    const calculateExpenses = soma(family.despesas)

    const total = calculateIncomes - calculateExpenses

    const itsOK = total >=0

    let balanceText = 'Negativo'

    if (itsOK){
        balanceText = "Possitivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
    
}

calculateBalance()

