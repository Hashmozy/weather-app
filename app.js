const apiKey = "044b61dcdbb1a7aaed647c29821d89af";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=kampala";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid={apiKey}`);
  var data = await response.json();
  console.log(data);
}

checkWeather();
