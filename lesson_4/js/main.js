document.querySelector('.b1').onclick = () => {
    console.log(document.querySelector('#one').value);
}


document.querySelector('.b2').onclick = () => {           //если результат выводить по нажатию кнопки
    console.log(document.querySelector('#two').value);
}

document.querySelector('#three').oninput = () => {           //если результат выводится при движении поллзунка 
    // console.log(document.querySelector('#three').value);
    document.querySelector('span').innerHTML = document.querySelector('#three').value; //
}