document.getElementById('calculate_btn').onclick= function(){calculateMortgage()};
document.getElementById('clear_btn').onclick= function(){resetCalculator()};
const month = 12;
const percentage = 100;

function calculateMortgage() {
    const mortageAmount = parseFloat(document.getElementById('mortageAmount').value);
    const mortageTerm = parseFloat(document.getElementById('mortageTerm').value) * month
    const interestRate = parseFloat(document.getElementById('interestRate').value) / percentage / month

    const monthlyPayment = (mortageAmount * interestRate) / (1 - Math.pow(1 + interestRate, -mortageTerm))

    document.getElementById('sum').innerText = `$ ${monthlyPayment.toFixed(2)}`
}


function resetCalculator() {
    document.getElementById('mortageAmount').value = '';
    document.getElementById('mortageTerm').value = '';
    document.getElementById('interestRate').value = '';

    document.getElementById('sum').innerText = '$ 0';
}


