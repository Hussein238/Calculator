
let result=null;
let equation;
let finalResult = false;

  // clears all values from the display and equation 
function clearDisplay(){
    finalResult = false;
    result = null;
  return  document.getElementById("result").value = null;
}

const add=function(num1,num2){
    result = Number(num1) + Number(num2);
    return result;
}


const subtract = function(num1,num2){
    result = Number(num1) - Number(num2);
    return result;
}

const multiply = function(num1,num2){
    result = Number(num1) * Number(num2);
    return result;
}

const divide = function(num1,num2){
    result = (Number(num1) / Number(num2));
    return result;
}
// stores the equation values when the operate function is called  
function getEquation(){
    return  equation = document.getElementById("result").value.trim().split(/\s+/);
}
function equal(){
    finalResult = true;
        getEquation();
    
        if (isNaN(operate(equation[0],equation[1],equation[2]))) {
            
           return document.getElementById("result").value = 'ERROR';
    
        }else {
            return document.getElementById("result").value = operate(equation[0],equation[1],equation[2]);
        } 
    }


const operate = function(firstNumber, operator, secondNumber){
   switch (operator) {
    case "+":
        result = add(firstNumber,secondNumber);
        break;
    case "-":
        result = subtract(firstNumber,secondNumber);
        break;
    case "x":
        result = multiply(firstNumber,secondNumber);
        break;
    case "/":
        if(secondNumber === "0" ){
            result = 0;
        } else{
            result = divide(firstNumber,secondNumber);
        }
       
    default:
        
   }if(!isNaN(result) || typeof result === "number"){ // if result is NaN will get error when rounding   
    return result = Number(result.toFixed(2)); // stop the user from displaying a number with more than 2 decimal points without it effecting the calculation
   } else{
    return result;
   }
}

// Inputs button values to the calculator display.
function display(value) {
    getEquation();
    // Reset the value when user gets an error
        if(finalResult === true && equation[0] === "ERROR" ){
        finalResult = false;
           return document.getElementById("result").value = value;}

// replace the operator when another one is pressed before clicking = 
        if (equation.length === 2 && (value == " + "|| value ==" - "|| value == " x "|| value == " / ")){
        equation[1] = value;
        return document.getElementById("result").value = equation.join(" ")+" "
    }
    // only do 2 pairs at a time but add the operator at the end of the result 
//  EX. 3 + 3 + => (3+3) = 6 + ? ready to take another value 
    if (equation.length === 3 && (value == " + "|| value ==" - "|| value == " x "|| value == " / "))    {
    equal();
    finalResult = false;
    getEquation();
    equation[1] = value;
    return document.getElementById("result").value = equation.join(" ")+" "
    }
        // if theres already a '.' then dont add another for the same number
    if (value === '.' &&equation.length === 3 && equation[2].includes('.')){
    return;  
} else if(value === '.' && equation.length === 1 && equation[0].includes('.')){
   return;
} else if (value === '.' && equation.length === 2 && equation[1].includes('.')){
    return;
}
// replace the result with the number clicked
if(finalResult === true && typeof value === "number" ){
        finalResult = false;
        return document.getElementById("result").value = value;
} else {
        finalResult = false;
        return document.getElementById("result").value += value;
    }
} 

getEquation();

// Makes the current number negative or positive
 function plusMinus(){  
    getEquation();
    if (equation.length === 3){
        equation[2] = equation[2] * -1;
        return document.getElementById("result").value = equation.join(" "); 
        
    } else if(equation.length === 1){
        equation[0] = equation[0] * -1;
        return document.getElementById("result").value = equation.join(" ");
    }
    else if (equation.length === 2){
        equation[0] = equation[0] * -1;
        return document.getElementById("result").value = equation.join(" ")+" ";
    }
}

// add backspace functionality by removing last number pressed or operator 
function backTick(){ 
    getEquation();
     if(equation.length === 3){
     let oneLess = equation[2].slice(0,-1); 
     equation[2] = oneLess;
        return document.getElementById("result").value = equation.join(" ");
    }  
    if (equation.length === 2){
    equation.pop();
        return document.getElementById("result").value = equation.join(" ");
    }
    if(equation.length === 1){
    let oneLess = equation[0].slice(0,-1); 
    equation[0] = oneLess;
        return document.getElementById("result").value = equation.join(" ");

    }
}  