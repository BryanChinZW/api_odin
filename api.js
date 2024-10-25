

async function getWeather(location){
  return await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=' + apiKey ,{mode: 'cors'})
}

async function convertWeatherData(data){
  return await data.json();
}

function displayWeather(weather){
  document.getElementById("display-weather").innerHTML = weather
}

function displayLoader(){
  document.getElementsByClassName("loader")[0].style.display = "block"
}
function hideLoader(){
  document.getElementsByClassName("loader")[0].style.display = "none"
}

document.getElementById("submit-weather").addEventListener("click",async ()=>{
  const location = document.getElementById("input=field").value
  displayLoader()
  const weatherJSON = await getWeather(location)
  const weatherData = await convertWeatherData(weatherJSON)
  displayWeather(weatherData.currentConditions.conditions)
  hideLoader()
})
