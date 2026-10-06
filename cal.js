let input= document.getElementById('display');

function appenfValue(value){
   display.value += value
}
function cleardisplay(){
    display.value = "";
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch 
    {
        display.value = "Error"

    }
}