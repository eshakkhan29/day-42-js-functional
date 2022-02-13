// get input value
function getInput(inputValueid) {
    const inputValueText = document.getElementById(inputValueid);
    const inputValue = parseFloat(inputValueText.value);
    // clear input feild 
    inputValueText.value = '';

    return inputValue;
}
// set value 
function getPrevValue(prevValueid, inputValue) {
    const prevValueText = document.getElementById(prevValueid);
    const prevValue = parseFloat(prevValueText.innerText);
    const totalValue = prevValue + inputValue;
    prevValueText.innerText = totalValue;
}
// set total blanche
function getTotalBlanche(depositInput, add) {
    const prevblancheText = document.getElementById('account-value');
    const prevblanche = parseFloat(prevblancheText.innerText);
    if (add == true) {
    prevblancheText.innerText = prevblanche + depositInput;
    }
    else{
    prevblancheText.innerText = prevblanche - depositInput;
    }
}

// deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    const getDepositInput = getInput('diposit-input');
    if (getDepositInput > 0 || getDepositInput == " ") {
        const prevValue = getPrevValue('deposit-value', getDepositInput);
        const newDeposittotal = prevValue + getDepositInput;
        getTotalBlanche(getDepositInput, true);
    }
    else{
        alert('input prositive number')
    }

});
// withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const getWithdrawValue = getInput('withdraw-input');
    if (getWithdrawValue > 0 || getWithdrawValue == " ") {
        const prevValue = getPrevValue('withdraw-value', getWithdrawValue);
        const newWithdrawtotal = prevValue + getWithdrawValue;
        getTotalBlanche(getWithdrawValue, false);
    }
    else{
        alert('input prositive number')
    }

});
