function displayWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  console.log(response.data);
}

let apiKey = "406035333ab93t5b036b8515eob03bf5";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=lisbon&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather);
