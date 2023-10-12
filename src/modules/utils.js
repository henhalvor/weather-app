export function getWeekDay(date) {
  // Work with this date format yyyy-mm-dd
  const day = new Date(date).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

export function resetForecast() {
  const elementsToRemove = document.querySelectorAll(".forecast");
  if (elementsToRemove.length === 0) return;
  elementsToRemove.forEach((element) => {
    element.remove();
  });
}

export function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export function convertTempToFarenheit(temp) {
  return (temp * 9) / 5 + 32;
}
