function calculateMortgage() {
    const mortageAmount = parseFloat(document.getElementById('mortageAmount').value)
    const mortageTerm = parseFloat(document.getElementById('mortageTerm').value) * 12
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 /12

    const monthlyPayment = (mortageAmount * interestRate) / (1 - Math.pow(1 + interestRate, -mortageTerm))

    document.getElementById('sum').innerText = `$ ${monthlyPayment.toFixed(2)}`
}


function resetCalculator() {
    document.getElementById('mortageAmount').value = '';
    document.getElementById('mortageTerm').value = '';
    document.getElementById('interestRate').value = '';
    
    document.getElementById('sum').innerText = '$ 0';
}