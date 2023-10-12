import { getWeekDay, getCurrentDate } from "./utils";

import "../styles/forecastComponent.css";


const currentDate = getCurrentDate();

export default function forecastComponent(data, locationData) {
  const CONTAINER = document.querySelector("#forecasts-container");
  const container = document.createElement("div");
  container.classList.add("forecast");
  CONTAINER.appendChild(container);

  container.innerHTML = `
    <h2 class="day">${
      // eslint-disable-next-line eqeqeq
      data.date == currentDate ? "Today" : getWeekDay(data.date)
    }</h2>
    <span class="temp">${data.temp} °C</span></span>
    <span class="wind">${data.wind} m/s</span>
    <span class="rain">${data.precip} mm</span>
    <p class="condition">${data.condition}</p>
    <img src="${data.icon}" alt="weather icon">
    <div class="location">
      <p class="city">${locationData.city}</p>
      <p class="country">${locationData.country}</p>
    </div>
    `;
}
