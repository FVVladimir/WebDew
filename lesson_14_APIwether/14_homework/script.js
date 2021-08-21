
const citys = {
    2643743: 'London',
    6167865: 'Toronto',
    709930: 'Dnipro',
    703448: 'Kyiv',
};

function getSelect(citys) {

    let out = document.querySelector('.sel-wrap');
    let select = document.createElement('select');
    select.id = 'city';

    for (let key in citys) {
        let option = document.createElement('option');
        option.textContent = citys[key];
        option.value = key;
        select.append(option);
    };
    console.log(out);
    out.append(select);
};

getSelect(citys);

function getWeather() {

    const param = {
        url: "https://api.openweathermap.org/data/2.5/",
        appid: "fb365b8ac5490c379335ae772bf1f912"
    };

    const cityId = document.querySelector('#city').value;

    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
};

function showWeather(data) {
    // console.log(data);
    document.querySelector('.card-title').textContent = data.name;
    document.querySelector('.card-text').innerHTML = Math.round(data.main.temp - 273) + '   &deg';
    const liItem = document.querySelectorAll('.list-group-item');
    liItem[0].classList.add('cloud');
    liItem[1].classList.add('wind');
    liItem[2].classList.add('descr');
    document.querySelector('.cloud').textContent = ` clouds ${data.clouds.all} %`;
    document.querySelector('.wind').textContent = `wind speed ${data.wind.speed} m/s`;
    document.querySelector('.descr').textContent = data.weather[0]['description'];
    document.querySelector('img').src = innerHTML = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
};

getWeather();
document.querySelector('#city').onchange = getWeather;

// "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fb365b8ac5490c379335ae772bf1f912"