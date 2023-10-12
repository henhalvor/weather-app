const KEY = "0ddb475b54e64e4b9f875120230810";

export default async function getWeather(city) {
  const DAYS = 3;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=${DAYS}&aqi=no&alerts=no`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
