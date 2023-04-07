// const city = document.querySelector('.city');

let weather = {

}

function fetchWeather(city) {
    let apiKey = "ae62f0d08f84bb40caa4e62081318269";
    // 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey
    // https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((resp) => resp.json())
        .then((data) => {
            function displayWeather() {
                const { name } = data;
                const { icon, description } = data.weather[0];
                const { temp, humidity } = data.main;
                const { speed } = data.wind;

                console.log(name, icon, description, temp, humidity, speed);
                document.querySelector('.city').textContent = `Weather in ${name}`
                // http://openweathermap.org/img/wn/${icon}.png
                document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}.png`
                document.querySelector('.description').textContent = description;
                document.querySelector('.temp').textContent = `${temp}°C`;
                document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`;
                document.querySelector('.wind').textContent = `Wind Speed: ${speed}km/h`;


            }
            displayWeather();
        });
}


// fetchWeather();