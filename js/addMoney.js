document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // const inputAddMoney = document.getElementById('input-add-money').value;
    // const inputAddMoneyNumber = parseFloat(inputAddMoney);
    // const inputPin = document.getElementById('input-pin').value ;

    // getInputFieldValueById();
    // const inputAddMoney = getInputFieldValueById();
    // console.log(inputAddMoney);


    const addMoney = getInputFieldValueById('input-add-money') ;
    const inputPin = getInputFieldValueById('input-pin') ;
    console.log(addMoney, inputPin);

    if(isNaN(addMoney)){
        alert('Failed to add money')
        return;
    }

    // wrong way
    if(inputPin === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney ;

        document.getElementById('account-balance').innerText = newBalance ;

        // add to transaction...
        const p = document.createElement('p');
        p.innerText = `added : ${addMoney} Tk : new balance ${newBalance}`
        console.log(p);

        // common
        document.getElementById('transaction-container').appendChild(p);

    }
    else{
        alert('failed')
    }

})