// Task 1

// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.
let inp1 = document.querySelector('.i-1');
out1 = document.querySelector('.out-1');
function f1() {
    ans1 = inp1.value;
    if (ans1 == 4) {
        out1.textContent = true;
    } else {
        out1.textContent = false;
    }
}

document.querySelector('.b-1').onclick = f1;


// Task 2

// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let out2 = document.querySelector('.out-2');

function f2() {

    if (a21 > a22) {
        out2.textContent = a21;
    } else {
        out2.textContent = a22;
    }
}

document.querySelector('.b-2').onclick = f2;


// Task 3

// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let inp31 = document.querySelector('.i-31');
let inp32 = document.querySelector('.i-32');
let out3 = document.querySelector('.out-3');


function f3() {
    let a = +inp31.value;
    let b = +inp32.value;
    if (a > b) {
        out3.textContent = a;
    } else {
        out3.textContent = b;
    }

}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
let inp4 = document.querySelector('.i-4');
let out4 = document.querySelector('.out-4');

function f4() {

    let a = inp4.value;
    let year = 2020; // в контексте урока с обьектом текущей даты не заморачивался;
    let b = year - a;
    if (b >= 18) {
        out4.textContent = 1;
    } else {
        out4.textContent = 0;
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let inp5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');

function f5() {
    let num = inp5.value;
    if (num < 0) {
        out5.textContent = 'm';
    } else if (num == 0) {
        out5.textContent = 0;
    } else if (num > 0) {
        out5.textContent = 1;
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let inp6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');

function f6() {
    let num = inp6.value;
    if (num % 2 == 0) {
        out6.textContent = 'even';
    } else {
        out6.textContent = 'odd';
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7. //не пойму где тут IF использовать 

// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let inp71 = document.querySelector('.i-71');
let inp72 = document.querySelector('.i-72');
let out7 = document.querySelector('.out-7');

function f7() {
    i1 = parseInt(inp71.value);
    i2 = parseInt(inp72.value);

    ans7 = Math.pow(i1, i2);
    out7.textContent = ans7;
}

document.querySelector('.b-7').onclick = f7;

// Task 8.

// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let sel = document.querySelector('.s-8');
out8 = document.querySelector('.out-8');

function f8() {

    a = +sel.value;

    switch (a) {
        case 1:
            out8.textContent = 'one';
            break;
        case 2:
            out8.textContent = 'two';
            break;
        case 3:
            out8.textContent = 'three';
            break;
    }

}

document.querySelector('.b-8').onclick = f8;

// Task 9

//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.


let inp9 = document.querySelector('.i-9');
out9 = document.querySelector('.out-9');

function f9() {

    a = +inp9.value;

    switch (true) {

        case a >= 1 && a <= 32:
            out9.textContent = 1;
            break;
        case a >= 33 && a <= 43:
            out9.textContent = 2;
            break;
        case a >= 44 && a <= 64:
            out9.textContent = 3;
            break;
        default:
            out9.textContent = 0;
    }

}

document.querySelector('.b-9').onclick = f9;

// Task 10 

// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

let out10 = document.querySelector('.out-10');
let sel10 = document.querySelector('.s-100');

function f10() {
    ans10 = sel10.value;
    out10.textContent = ans10;
}

document.querySelector('.b-10').onclick = f10;

// Task 11

// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

let out11 = document.querySelector('.out-11');
let sel11 = document.querySelector('.s-110');

function f11() {
    ans11 = sel11.value;
    out11.textContent = ans11;
}

document.querySelector('.s-110').onchange = f11;

// Task 12 // строку возвращяет

// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12() {
    let v = i120.value;
    document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13

// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let inp13 = document.querySelector('.i-130');

function f13() {

    let v = inp13.value;
    document.querySelector('.out-13').innerHTML = (typeof v);
}

document.querySelector('.b-13').onclick = f13;


// Task 14

// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.
let inp141 = document.querySelector('.i-141');
let inp142 = document.querySelector('.i-142');
let sel14 = document.querySelector('.s-143');
let out14 = document.querySelector('.out-14');

function f14() {

    let sel = sel14.value;
    let inp1 = inp141.value;
    let inp2 = inp142.value;


    switch (sel) {

        case "+":
            out14.textContent = +inp1 + parseInt(inp2);
            break;
        case "-":
            out14.textContent = +inp1 - parseInt(inp2);
            break;
        case "*":
            out14.textContent = +inp1 * parseInt(inp2);
            break;
        case "/":
            out14.textContent = +inp1 / parseInt(inp2);
            break;
        default:
            out14.textContent = 'значение не введено';

    }
}

document.querySelector('.b-14').onclick = f14;


// Task     15

// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

let sel151 = document.querySelector('.s-151');
let sel152 = document.querySelector('.s-152');
let sel153 = document.querySelector('.s-153');
let out15 = document.querySelector('.out-15');

function f15() {

    let sel1 = sel151.value;
    let sel2 = sel152.value;
    let sel3 = sel153.value;



    switch (true) {
        case sel1 == 0 && sel2 == 0 && sel3 == '&&':
            out15.textContent = 0;
            break;
        case sel1 == 0 && sel2 == 1 && sel3 == '&&':
            out15.textContent = 0;
            break;
        case sel1 == 1 && sel2 == 0 && sel3 == '&&':
            out15.textContent = 0;
            break;
        case sel1 == 1 && sel2 == 1 && sel3 == '&&':
            out15.textContent = 1;
            break;
        case sel1 == 0 && sel2 == 0 && sel3 == '||':
            out15.textContent = 0;
            break;
        case sel1 == 0 && sel2 == 1 && sel3 == '||':
            out15.textContent = 1;
            break;
        case sel1 == 1 && sel2 == 0 && sel3 == '||':
            out15.textContent = 1;
            break;
        case sel1 == 1 && sel2 == 1 && sel3 == '||':
            out15.textContent = 1;
            break;
    }

}

document.querySelector('.b-15').onclick = f15;



