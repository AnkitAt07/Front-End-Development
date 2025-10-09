console.log("Default parameters value is = 10");
function multiply(a, b = 10) { // b = 10 by default
    return a * b;
}

function add(num1, num2 = 10) { // here num2 = 10 is default value when no value pass for num2 then, num2 = 10 are used 
    return num1 + num2;

}
add();

function rollDies() {
    return Math.floor(Math.random() * 6) + 1;
}


rollDies();


