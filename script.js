

function fetchWeather(city) {
    let apiKey = "ae62f0d08f84bb40caa4e62081318269";
    // 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((resp) => resp.json())
        .then((data) => console.log(data));
}


// fetchWeather();