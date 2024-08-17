let counterElement = document.getElementById("counterValue");

function onIncrement(){
    let previousCouterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCouterValue) + 1;
    if (updatedCounterValue > 0){
        counterElement.style.color = "green";
    }else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }else{
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

function onDecrement(){
    let previousCouterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCouterValue) - 1;
    if(updatedCounterValue > 0){
        counterElement.style.color = "green";
    }else if(updatedCounterValue < 0){
        counterElement.style.color = "red";
    }else{
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

function onReset(){
    let currentValue = 0;
    counterElement.textContent = currentValue;
    counterElement.style.color = "black";
}