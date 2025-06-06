const apiKey = "0db63d433f08f6d7917684fd320bb659"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const weatherHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity} %</p>
      <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
      <p>⛅ Condition: ${data.weather[0].description}</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;
  } catch (err) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
}
