let calculator = '';
displayCalculation();

function updateCalculation(value){
  calculator += value;
  displayCalculation();
  keyPress();
}

function displayCalculation(){
  document.querySelector('.js-input').innerHTML = calculator;

}

function percentage(){
  calculator = eval(calculator)/100;
  displayCalculation();
}

function deleTe(){
  calculator = calculator.slice(0,-1);
}

function keyPress(event){
  if (event.target === calculator){
    updateCalculation();
  }
}