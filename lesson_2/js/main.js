let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function () {

    let b = inputIn.value;
    // console.log('worck!!!');
    console.log(b);
    inputIn.value = '';
    div.innerHTML = b;
}