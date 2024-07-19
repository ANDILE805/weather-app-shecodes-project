function updateWeather(response) {
  let temperatureElement = document.querySelector(".weather-app-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon-image");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt=""
              class="weather-app-icon"></img>`;
}

function searchCity(city) {
  let apiKey = "cd7ff0b39233e546tfae64f37ao44b9a";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("form");
searchFormElement.addEventListener("submit", search);
searchCity("Osizweni");

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let currentDateELement = document.querySelector(".app-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function updateForecast() {
  let forecastElement = document.querySelector("#forecast");
  let days = ["Tues", "Wed", "Thur", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast-day">
   <div class="weather-forecast-date">${day}</div>
   <div class="weather-forecast-icon">🌤️</div>
   <div class="weather-forecast-temperatures">
     <div class="weather-forecast-temperature">
       <strong>15º</strong>
     </div>
     <div class="weather-forecast-temperature">9º</div>
   </div>
 </div>`;
  });
  forecastElement.innerHTML = forecastHtml;
}
updateForecast();
