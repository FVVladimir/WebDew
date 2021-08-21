
let k = 0;
while (k < 5) {
    // k++; //если к здесь, то вывод 1 2 3 4 5 
    console.log('k: ' + k);
    k++;  //если к здесь, то вывод 0 1 2 3 4
}

let sum = 0,
    p = 0;

while (p <= 10) {
    sum = sum + p;
    p++;
}
console.log('sum: ' + sum);

let out = document.querySelector('.out');
let outStr = '';
let j = 0;
let flag = 3;

while (j < 4) {
    let j1 = 0;
    while (j1 < 4) {
        if (j1 < flag) {
            outStr += '0';
        } else {
            outStr += '*';
        }
        j1++;
    }
    flag--;
    outStr += '<br>';
    j++;
}
out.innerHTML = outStr;