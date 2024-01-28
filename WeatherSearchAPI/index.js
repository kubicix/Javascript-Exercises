// Weather 51000bd1e17234b814d84e2b6b223ff3

const apiKey = "51000bd1e17234b814d84e2b6b223ff3";
const form = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const tempDisplay = document.querySelector('.tempDisplay');
const weatherEmoji = document.querySelector('.weatherEmoji');
const humidityDisplay = document.querySelector('.humidityDisplay');
const decDisplay = document.querySelector(".decDisplay")
const cityDisplay = document.querySelector('.cityDisplay');
const errorDisplay = document.querySelector('.errorDisplay');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value;
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (response.ok) {
        errorDisplay.textContent="";
        cityDisplay.textContent = formattedCity;
        const temperature = data.main.temp;
        tempDisplay.textContent = `${temperature}°C`;

        const humidity = data.main.humidity;
        humidityDisplay.textContent = `Humidity: ${humidity}%`;

        const weatherDescription = data.weather[0].description;
        decDisplay.textContent = weatherDescription;

        const weather = data.weather[0].main;
        console.log(weather);
        updateWeatherEmoji(weather);
    } else {
        cityDisplay.textContent = "N/A";
        tempDisplay.textContent = "N/A";
        humidityDisplay.textContent = "N/A";
        decDisplay.textContent = "N/A";
        weatherEmoji.textContent = "❌";
        errorDisplay.textContent="Please Enter a Correct City";
    }
});

function updateWeatherEmoji(weather) {
    switch (weather) {
        case "Clear":
            weatherEmoji.textContent = "🌞";
            break;
        case "Clouds":
            weatherEmoji.textContent = "☁️";
            break;
        case "Rain":
            weatherEmoji.textContent = "🌧️";
            break;
        case "Fog":
            weatherEmoji.textContent = "🌫️";
            break;
        case "Mist":
            weatherEmoji.textContent = "🌫️";
            break;
        case "Snow":
            weatherEmoji.textContent = "❄️";
            break;
        case "Thunderstorm":
            weatherEmoji.textContent = "⛈️";
            break;
        default:
            weatherEmoji.textContent = "❓";
    }
}