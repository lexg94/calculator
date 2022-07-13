
const container = document.getElementById("calculator");
const btn_container = document.getElementById("calc-buttons");
const current_screen = document.querySelector(".current");
const ans_screen = document.querySelector(".answer");
const btn0 = document.getElementById("0");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn_add = document.getElementById("+");
const btn_sub = document.getElementById("-");
const btn_mul = document.getElementById("*");
const btn_div = document.getElementById("/");
const btn_eq = document.getElementById("=");
const btn_decimal = document.getElementById(".");
const btn_sign = document.getElementById("sign");
const btn_clr = document.getElementById("clr");

let first_num = '';
let second_num = '';
let operator = '';

console.log(first_num);

//event listeners for buttons

btn0.addEventListener('click', () => {

    current_screen.textContent = 0;

    if (first_num === '') {
        first_num = 0;
    }
    else if (second_num === '') {
        second_num = 0;
    }

    operate(first_num,second_num,operator);

});

btn1.addEventListener('click', () => {
    
    current_screen.textContent = 1;

    if (first_num === '') {
        first_num = 1;
    }
    else if (second_num === '') {
        second_num = 1;
    }  

});

btn2.addEventListener('click', () => {
    
    current_screen.textContent = 2;

    if (first_num === '') {
        first_num = 2;
    }
    else if (second_num === '') {
        second_num = 2;
    }
    
    console.log(first_num,second_num);

});

btn3.addEventListener('click', () => {
    
    current_screen.textContent = 3;

    if (first_num === '') {
        first_num = 3;
    }
    else if (second_num === '') {
        second_num = 3;
    } 

});

btn4.addEventListener('click', () => {
    
    current_screen.textContent = 4;

    if (first_num === '') {
        first_num = 4;
    }
    else if (second_num === '') {
        second_num = 4;
    } 

});

btn5.addEventListener('click', () => {
    
    current_screen.textContent = 5;

    if (first_num === '') {
        first_num = 5;
    }
    else if (second_num === '') {
        second_num = 5;
    } 

});

btn6.addEventListener('click', () => {
    
    current_screen.textContent = 6;

    if (first_num === '') {
        first_num = 6;
    }
    else if (second_num === '') {
        second_num = 6;
    }

});

btn7.addEventListener('click', () => {
    
    current_screen.textContent = 7;

    if (first_num === '') {
        first_num = 7;
    }
    else if (second_num === '') {
        second_num = 7;
    }

});

btn8.addEventListener('click', () => {
    
    current_screen.textContent = 8;

    if (first_num === '') {
        first_num = 8;
    }
    else if (second_num === '') {
        second_num = 8;
    }

});

btn9.addEventListener('click', () => {
    
    current_screen.textContent = 9;

    if (first_num === '') {
        first_num = 9;
    }
    else if (second_num === '') {
        second_num = 9;
    }

});

btn_add.addEventListener('click', () => {
    
    current_screen.textContent = '+';
    operator = '+';

});

btn_sub.addEventListener('click', () => {
    
    current_screen.textContent = '-';
    operator = '-';

});

btn_mul.addEventListener('click', () => {
    
    current_screen.textContent = '*';
    operator = '*';

});

btn_div.addEventListener('click', () => {
    
    current_screen.textContent = '/';
    operator = '/';

});

btn_eq.addEventListener('click', () => {

    const result = operate(first_num,second_num,operator);
    
    ans_screen.textContent = result;
    first_num = result;
    second_num = '';


});

btn_clr.addEventListener('click', () => {
    
    current_screen.textContent = 0;
    ans_screen.textContent = 0;

    first_num = '';
    second_num = '';

});


function operate(a,b,op){

    switch (op) {
        case '+':
            return add(a,b);

        case '-':
            return subtract(a,b);

        case '*':
            return multiply(a,b);

        case '/':
            return divide(a,b);

    }
}


// operations 

add = (a,b) => a + b;
subtract = (a,b) => a - b;
multiply = (a,b) => a * b;
divide = (a,b) => a / b;


