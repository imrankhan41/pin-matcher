function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + "";
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin (){
    document.getElementById("pin-display").value = getPin()
}

document.getElementById("key-pad").addEventListener("click",function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == "C"){
        calcInput.value = "";
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
   
})
function verifyPin(){
    const currentpin = document.getElementById("pin-display").value;
    const typedNumber = document.getElementById("typed-numbers").value;
    const successMessage = document.getElementById("notify-success");
    const errorMessage = document.getElementById("notify-fail");
    if(currentpin == typedNumber){
       
        successMessage.style.display="block";
        errorMessage.style.display="none";
    }
    else{
        
        errorMessage.style.display="block";
        successMessage.style.display="none";
    }
}
