function tranformeDegree(degree){
    const celsiusExists = degree.toUpperCase.includes("C")
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists){
        throw new erro ('Grau nao identificado')
    }
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    if (celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = "F"

    }

    return formula(updatedDegree) + degreeSign

}


try {
    console.log(tranformeDegree('50F'))
    
} catch (error) {
    console.log('error')
    
}