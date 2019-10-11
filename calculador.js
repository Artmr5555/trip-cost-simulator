function button() {
    // Getting the answers
    const answer1 = parseFloat(document.getElementById('answer1').value)
    const answer2 = parseFloat(document.getElementById('answer2').value)
    const answer3 = parseFloat(document.getElementById('answer3').value)
    
    // Doing the calculus
    const calc = ((answer1 / answer2) * answer3).toFixed(2)

    // Turning the grid and button to invisible 
    const grid = document.getElementById('grid').style.display = 'none'
    document.getElementById('button').style.display = 'none'

    // Creating an element with the calculus value on it
    const finalAnswer = document.createElement('p')
    finalAnswer.className = 'finalAnswer'
    finalAnswer.innerHTML = `Você irá gastar R$${calc} de gasolina nessa viagem`
    document.body.appendChild(finalAnswer)
}