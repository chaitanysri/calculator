function calculate(a, b, operator) {
    switch(operator) {
        case "+":
            alert(a + b);
            break;
        case "-":
            alert(a - b);
            break;
        case "/":
            if (b !== 0) {
                alert(a / b);
            } else {
                alert("Cannot divide by zero");
            }
            break;
        case "*":
            alert(a * b);
            break;
        default:
            alert("Invalid operator");
    }
}

let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

calculate(a, b, operator);