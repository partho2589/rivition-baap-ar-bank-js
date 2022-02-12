document.getElementById('deposti-button').addEventListener('click', function(){
    const depostiInputText = document.getElementById('deposti-input');
    const depostiInputTotal = parseFloat(depostiInputText.value)
    
    //set amount for deposit
    const depositAmountText = document.getElementById('deposit-total')
     depositAmountText.innerText = depostiInputTotal ;
    
})