
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

    if (first_num.length <= 5 && operator === '') {
        first_num += 0;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 0;
        current_screen.textContent = second_num;
    } 
});

btn1.addEventListener('click', () => {
    

    if (first_num.length <= 5 && operator === '') {
        first_num += 1;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 1;
        current_screen.textContent = second_num;
    }  

});

btn2.addEventListener('click', () => {
    
    if (first_num.length <= 5 && operator === '') {
        first_num += 2;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 2;
        current_screen.textContent = second_num;
    } 
    

});

btn3.addEventListener('click', () => {
    
    if (first_num.length <= 5 && operator === '') {
        first_num += 3;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 3;
        current_screen.textContent = second_num;
    }  

});

btn4.addEventListener('click', () => {
    
    if (first_num.length <= 5 && operator === '') {
        first_num += 4;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 4;
        current_screen.textContent = second_num;
    } 

});

btn5.addEventListener('click', () => {
    
    if (first_num.length <= 5 && operator === '') {
        first_num += 5;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 5;
        current_screen.textContent = second_num;
    } 

});

btn6.addEventListener('click', () => {
    
    if (first_num.length <= 5 && operator === '') {
        first_num += 6;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 6;
        current_screen.textContent = second_num;
    } 

});

btn7.addEventListener('click', () => {
    
    if (first_num.length <= 5 && operator === '') {
        first_num += 7;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 7;
        current_screen.textContent = second_num;
    } 

});

btn8.addEventListener('click', () => {
    
    if (first_num.length <= 5 && operator === '') {
        first_num += 8;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 8;
        current_screen.textContent = second_num;
    } 

});

btn9.addEventListener('click', () => {
    
    if (first_num.length <= 5 && operator === '') {
        first_num += 9;
        current_screen.textContent = first_num;
    }
    else if (second_num.length <= 5 && operator != '') {
        second_num += 9;
        current_screen.textContent = second_num;
    } 

});

btn_add.addEventListener('click', () => {

    if (operator != '' && first_num != '' && second_num != '') {

        run_op();
    }
    
    current_screen.textContent = '+';
    operator = '+';

});

btn_sub.addEventListener('click', () => {

    if (operator != '' && first_num != '' && second_num != '') {

        run_op();
    }
    
    current_screen.textContent = '-';
    operator = '-';

});

btn_mul.addEventListener('click', () => {

    if (operator != '' && first_num != '' && second_num != '') {

        run_op();
    }
    
    current_screen.textContent = '*';
    operator = '*';

});

btn_div.addEventListener('click', () => {

    if (operator != '' && first_num != '' && second_num != '') {

        run_op();
    }
    
    current_screen.textContent = '/';
    operator = '/';

});


btn_eq.addEventListener('click', () => {

    if (operator != '' && first_num != '' && second_num != '') {

        if(operator === '/' && second_num === '0') {

            alert('Really?');
            first_num = '';
            second_num = '';
            operator = '';

        }
        else {
            run_op();
        }      
    }

});



btn_clr.addEventListener('click', () => {
    
    current_screen.textContent = 0;
    ans_screen.textContent = 0;

    first_num = '';
    second_num = '';
    operator = '';

});


function operate(a,b,op){

    switch (op) {
        case '+':
            return add(parseInt(a),parseInt(b));

        case '-':
            return subtract(parseInt(a),parseInt(b));

        case '*':
            return multiply(parseInt(a),parseInt(b));

        case '/':
            return divide(parseInt(a),parseInt(b));

    }
}


// operations 

add = (a,b) => a + b;
subtract = (a,b) => a - b;
multiply = (a,b) => a * b;
divide = (a,b) => a / b;

// function to operate

function run_op() {

    const result = operate(first_num,second_num,operator);  
    ans_screen.textContent = result;
    first_num = result;
    second_num = '';

}


