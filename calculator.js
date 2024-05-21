const displayString = document.getElementById('display');

function collectFromDisplay(buttonInput){
    displayString.value = displayString.value+buttonInput;
}

function calculate(){
 displayString.value = eval(displayString.value);
}

function clearDisplay(){
    displayString.value = "";
}