// Task 1.

// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
    b = 9;
    ans1 = a * b;
console.log(ans1);

// Task 2.

// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
    d = 9;
    ans2 = c / d;
    out2 = document.querySelector('.out-2').textContent = ans2;  

// Task 3.

// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3;
    f = 5;
    ans3 = e + f;
    out3 = document.querySelector('.out-3').textContent = ans3;
console.log(ans3);

// Task 4.

// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
    f1 = 5;
    ans4 = e1 + f1;
    out4 = document.querySelector('.out-4').textContent = ans4;
console.log(ans4);

// в задаче 3 мы получаем число, а в задаче 4 строку, для наглядности выводим в консоль, результаты разного цвета.


// Task 5.

// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3;
    f2 = 0;
    ans5 = e2 / f2;     
    out5 = document.querySelector('.out-5').textContent = ans5;

// Task 6.

// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
    f3 = 'hello';
    ans6 = e3 + f3;    
    out6 = document.querySelector('.out-6').textContent = ans6;

// Task 7.

// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3;
    f4 = 'hello';
    ans7 = e4 * f4;
    out7 = document.querySelector('.out-7').textContent = ans7;

// Task 8.

// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

function t8() {
    out8.innerText = inp8.value; // в нескольких примерах используу innerText его можно использовать или он устарел ??
}

document.querySelector('.b-8').onclick = t8;
inp8 = document.querySelector('.input8');
out8 = document.querySelector('.out-8');
// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

function t9() {
    out9.innerText = inp9.value;
    inp9.value = '';
}

document.querySelector('.b-9').onclick = t9;
inp9 = document.querySelector('.i-9');
out9 = document.querySelector('.out-9');

// Task 10.

// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let inp10 = document.querySelector('.i-10');
    out10 = document.querySelector('.out-10');
   
function t10() {
    ans10 = inp10.value * 10;
    out10.innerText = ans10;
}

document.querySelector('.b-10').onclick = t10;

// Task 11.

// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
let inp11 = document.querySelector('.i-11');
    out11 = document.querySelector('.out-11'); 
function t11() {
    ans11 = +inp11.value + 10;
    out11.textContent = ans11;
}

document.querySelector('.b-11').onclick = t11;

// Task 12.

// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let inp121 = document.querySelector('.i-12_1');
    inp122 = document.querySelector('.i-12_2');
    out12 = document.querySelector('.out-12');
function t12() {
    out12.textContent = 'hello' + ' ' + inp121.value + ' ' + inp122.value;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.

// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.
let inp131 = document.querySelector('.i-13_1');
    inp132 = document.querySelector('.i-13_2');
    out13 = document.querySelector('.out-13');
function t13() {
    out13.textContent = +inp131.value + +inp132.value;  // костыль конечно но ничего пока не придумал в контексте задания;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.

// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
let btn14 = document.querySelector('.b-14');
    inp14 = document.querySelector('.i-14');
function t14() {
    inp14.value = 'hello'; 
   }
    document.querySelector('.b-14').onclick = t14;

// document.querySelector('.i-14').value = 'hello'; // так если просто без нажатия кнопки;

// Task 15.

// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');
    y.style.border = '2px solid red'; // рамка окрасилась в красный цвет;

// Task 16. //!!!!задача одинаковая с 13 type text и type number ничего не изменяют.

// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16
let inp161 = document.querySelector('.i-16-1');
    inp162 = document.querySelector('.i-16-2');
    out16 = document.querySelector('.out-16');
function t16() {
    ans16 = +inp161.value + +inp162.value;
    out16.textContent = ans16;
}

document.querySelector('.b-16').onclick = t16;

// Task 17. // последнее NaN, первый символ не удалось конвертировать в число в 10 системе;

// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let inp17 = document.querySelector('.i-17');    
    out17 = document.querySelector('.out-17');    
function t17() {
    t = inp17.value;
    t = parseInt(t);   
    out17.textContent = t;
}

document.querySelector('.b-17').onclick = t17;

// Task 18 // 

// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let inp18 = document.querySelector('.i-18');   
function t18() {
    t = inp18.value;
    t = parseFloat(t);
    console.log(t);
}

document.querySelector('.b-18').onclick = t18;

// Task 19. //

// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let inp191 = document.querySelector('.i-19-1');
    inp192 = document.querySelector('.i-19-2');
    out19 = document.querySelector('.out-19');
function t19() {
    
    ans19 = +inp191.value + parseInt(inp192.value);// и + и parseInt преобразуют строку в число с сохранением знака если я правильно понял;
    out19.textContent = ans19;
}

document.querySelector('.b-19').onclick = t19;

// Task 20

// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
let inp201 = document.querySelector('.i-20-1');
    inp202 = document.querySelector('.i-20-2');
    inp203 = document.querySelector('.i-20-3');
    inp204 = document.querySelector('.i-20-4');
    out20 = document.querySelector('.out-20');

function t20() {
    ans20 = 'уважаемый ' + inp201.value + ' ' + inp202.value + ' ' + 'ваш возраст ' + inp203.value + ' года ' + 'по профессии вы' + ' ' + inp204.value;
    out20.textContent = ans20;
}

document.querySelector('.b-20').onclick = t20;