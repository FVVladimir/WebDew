let a = 6;

// if (a > 9) {
//     //true

//     console.log('yes');
// }

// else {

//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {

    let num = +input.value;

    if (num >= 16 && num < 60 ) {
        
        console.log('+');

    }
    else if (num > 60) {
        
        console.log('певен?!')
    }
    else {

        console.log('-');
    }

    switch (num) {

        case 15:
            console.log('ще ні');
            break;
        case 16:
            console.log('ок');
            break;
        default:
            console.log('finish');
    }
}