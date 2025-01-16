const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('getWeather');
const weatherResult = document.getElementById('weatherResult');

getWeatherButton.addEventListener('click', async () => {
    const cityName = cityInput.value.trim(); // Preuzmi ime grada
    const apiKey = '3742664cd9d5e22da561175a04bab8fd'; // Tvoj API ključ
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl); // Poziv prema API-ju
        if (!response.ok) {
            throw new Error('Grad nije pronađen! Provjeri unos.');
        }
        const data = await response.json(); // Pretvaranje odgovora u JSON

        // Prikaz rezultata
        weatherResult.innerHTML = `
            <h2>Vrijeme u ${data.name}</h2>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Stanje: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = `<p>Greška: ${error.message}</p>`; // Prikaz greške
    }
});
