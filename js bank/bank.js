
// ............deposit button .......... 

document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);

    const depositTotal = document.getElementById('deposit')
    const depositElementString = depositTotal.innerText;
    const depositElement = parseFloat(depositElementString);

    const currentDepositTotal = depositElement + depositAmount;

    depositTotal.innerText = currentDepositTotal;

    const balanceTotal = document.getElementById('balance');
    const balanceElementString = balanceTotal.innerText;
    const balanceElement = parseFloat(balanceElementString);

    const currentBlanceTotal = depositAmount + balanceElement;
    balanceTotal.innerText = currentBlanceTotal;


    depositField.value = '';

})


// ..............withdraw button ......... 

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmoutn = parseFloat(withdrawAmountString);

    const withdrawTotal = document.getElementById('withdraw');
    const withdrawElementString = withdrawTotal.innerText;
    const withdrawElement = parseFloat(withdrawElementString);


    withdrawField.value = '';

    const balanceTotal = document.getElementById('balance');
    const balanceElementString = balanceTotal.innerText;
    const balanceElement = parseFloat(balanceElementString);

    if (withdrawElement > balanceElement) {
        alert('sorry sir, please your balance chack');
        return;
    }

    const currentWithdrawTotal = withdrawElement + withdrawAmoutn;
    withdrawTotal.innerText = currentWithdrawTotal;

    const currentBlanceTotal = balanceElement - withdrawAmoutn;
    balanceTotal.innerText = currentBlanceTotal;


})