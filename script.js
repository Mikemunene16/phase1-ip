// const city = document.querySelector('.city');

let weather = {
    apiKey: "ae62f0d08f84bb40caa4e62081318269",

    fetchWeather: function (city) {
        // 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey
        // https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey)
            .then((resp) => resp.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
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


    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },

};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();

});





// fetchWeather();