import getWeather from "./apiCall";

// Convert kilometers per hour to meters per second
function convertWind(wind) {
  // round to one decimal place
  return Math.round(wind * 0.2777777777775, 1);
}

// Filter data from API
function filterData(data) {
  if (!data) {
    throw new Error("No data found");
  }
  const filteredData = {};

  const location = {};
  location.city = data.location.name;
  location.country = data.location.country;

  const current = {};
  current.temp = data.current.temp_c;
  current.wind = convertWind(data.current.wind_kph);
  current.precip = data.current.precip_mm;
  current.condition = data.current.condition.text;
  current.icon = data.current.condition.icon;

  const today = {};
  today.date = data.forecast.forecastday[0].date;
  today.temp = data.forecast.forecastday[0].day.avgtemp_c;
  today.wind = convertWind(data.forecast.forecastday[0].day.maxwind_kph);
  today.precip = data.forecast.forecastday[0].day.totalprecip_mm;
  today.condition = data.forecast.forecastday[0].day.condition.text;
  today.icon = data.forecast.forecastday[0].day.condition.icon;

  const tomorrow = {};
  tomorrow.date = data.forecast.forecastday[1].date;
  tomorrow.temp = data.forecast.forecastday[1].day.avgtemp_c;
  tomorrow.wind = convertWind(data.forecast.forecastday[1].day.maxwind_kph);
  tomorrow.precip = data.forecast.forecastday[1].day.totalprecip_mm;
  tomorrow.condition = data.forecast.forecastday[1].day.condition.text;
  tomorrow.icon = data.forecast.forecastday[1].day.condition.icon;

  const dayAfterTomorrow = {};
  dayAfterTomorrow.date = data.forecast.forecastday[2].date;
  dayAfterTomorrow.temp = data.forecast.forecastday[2].day.avgtemp_c;
  dayAfterTomorrow.wind = convertWind(
    data.forecast.forecastday[2].day.maxwind_kph,
  );
  dayAfterTomorrow.precip = data.forecast.forecastday[2].day.totalprecip_mm;
  dayAfterTomorrow.condition = data.forecast.forecastday[2].day.condition.text;
  dayAfterTomorrow.icon = data.forecast.forecastday[2].day.condition.icon;

  // Nest objects inside filteredData
  filteredData.location = location;
  filteredData.current = current;
  filteredData.today = today;
  filteredData.tomorrow = tomorrow;
  filteredData.dayAfterTomorrow = dayAfterTomorrow;

  return filteredData;
}

export default async function getFilteredData(city) {
  const data = await getWeather(city);
  return filterData(data);
}
