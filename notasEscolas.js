function notasEscolares(notas){
    if (notas >= 90 && notas < 100){
        console.log('A')
    } else if (notas >= 80 && notas <= 89){
        console.log('B')
    } else if(notas >=70 && notas <= 79){
        console.log('C')
    } else if(notas >= 60 && notas <= 69){
        console.log('D')
    } else if (notas < 60 && notas >= 1 ) {
        console.log('F')
    } else {
        console.log('Nota Invalida!')
    }
    return notas
}

notasEscolares(101)
notasEscolares(1)
notasEscolares(75)
