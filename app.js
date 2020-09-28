//Listen to submit 
document.getElementById('loan-form').addEventListener('submit', calculateResult);


//Calculate Result 
function calculateResult(e){

// UI Vars
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');


const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat()


    e.preventDefault();
}