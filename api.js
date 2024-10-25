const apiKey = "HVH7RYW8QEQ8CUJ6JNU3TF8CT"
//vagaca3451@regishub.com
//YZM8x9MzYMThDFf3Ca3o


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
