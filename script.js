// Refrence display element
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function isOperator(char) {
return ['+', '-', '*', '/'].includes(char);
}

function getLastChar() {
return display.value.slice(-1);
}

function safeEval(expression) {
    try {
        let jsExpression = expression
            .replace(/x/g, '*')
            .replace(/÷/g, '/');

        if (!/^[0-9+\-*/.() ]+$/.test(jsExpression)){
            throw new Error('Invalid characters in expression');
        }

        const result = Function(' "use strict"; return (' + jsExpression + ')')();

        if (!isFinite(result)) {
            throw new Error('Invalid calculation result');
        }

        return result;
    } catch (error) {
        console.error('Calcualtion error:', error);
        return 'Error';
    }
}

function appendToDisplay(value) {
console.log('Button pressed:', value);

@@ -102,44 +125,74 @@
}

function calculate() {
    console.log('Equals button pressed.');
    let expression = display.value;

    // Dont calc if display is 0 or empty
    if (expression === '0' || expression === ''){
        return;
    }

    alert('Equals button was clicked');
    // Dont calc if expression ends with operator
    if (isOperator(getLastChar())){
        return;
    }

    let result = safeEval(expression);

    if (result === 'Error') {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay()
        }, 2000);
    } else {
        if (Number.isInteger(result)) {
            display.value = result.toString();
        } else {
            display.value = parseFloat(result.toFixed(10)).toString();
        }

        justCalculated = true;
    }

    display.style.backgroundColor = '#e8f5e8';
    setTimeout(() => {
        display.style.backgroundColor = '';
    }, 300);
}

document.addEventListener('keydown', function(event) {
console.log('Key pressed', event.key);

if (event.key >= '0' && event.key <= '9') {
appendToDisplay(event.key);
} else if (event.key === '.') {
appendToDisplay('.');
} else if (event.key === '+') {
appendToDisplay('+');
} else if (event.key === '-') {
appendToDisplay('-');
} else if (event.key === '*') {
appendToDisplay('*');
} else if (event.key === '/') {
event.preventDefault();
appendToDisplay('/');
}

else if (event.key === 'Enter' || event.key === '=') {
calculate();
} else if (event.key === 'Escape' || event.key === 'c' || event.key === 'C') {
clearDisplay();
} else if (event.key === 'Backspace') {
deleteLast();
}
})

document.addEventListener('DOMContentLoaded', function() {
console.log('Calculator loaded successfully');
console.log('Display element', display);

if (display) {
console.log('Current display value: ', display.value);
} else {
console.log('Display element not found');
}
})