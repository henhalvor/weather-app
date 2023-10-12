import "./styles/normalize.css";
import "./styles/main.css";

import forecastComponent from "./modules/forecastComponent";
import getFilteredData from "./modules/filterData";
import { resetForecast } from "./modules/utils";

function changeBackground(weatherType) {
  const body = document.querySelector("body");
  if (weatherType === "rain") {
    body.style.backgroundImage = "url('/assets/rainy-weather.jpg')";
  }
  if (weatherType === "good") {
    body.style.backgroundImage = "url('/assets/nice-weather.jpg')";
  }
}

function checkWeather(data) {
  if (data.precip > 0) {
    changeBackground("rain");
  } else {
    changeBackground("good");
  }
}

const input = document.querySelector("input");
const button = document.querySelector("button");

async function handleSearch() {
  resetForecast();
  const data = await getFilteredData(input.value);
  const todayData = data.today;
  const tomorrowData = data.tomorrow;
  const dayAfterTomorrowData = data.dayAfterTomorrow;
  const locationData = data.location;
  checkWeather(todayData);
  forecastComponent(todayData, locationData);
  forecastComponent(tomorrowData, locationData);
  forecastComponent(dayAfterTomorrowData, locationData);
}

button.addEventListener("click", async () => {
  handleSearch();
});
