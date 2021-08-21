const a = [3, 4, 5];
const b = ['a', 'b', 'c'];

const c = [...a, ...b]; //обьеденение двух массивов с помощью спред оператора;
console.log(c);

const d = [...b]; // клонирование массива;
console.log(b);

const e = [...'holla']; // преобразование строки в массив строк;
console.log(e);

const f = [...new Set([1, 1, 2, 3, 4, 2])]; // set
console.log(f);

function test() {
    console.log([...arguments]);
}

test(3, 4, 5, 6, 7);

let p = document.querySelectorAll('p');
console.dir(p);
console.log([...p]);