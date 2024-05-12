function refreshWeather(response){
  let temperatureElement=document.querySelector("#temperature");
  let temperature=response.data.temperature.current; 
  let cityElement=document.querySelector("#city");

  
  cityElement.innerHTML=response.data.city; 
  temperatureElement.innerHTML=Math.round(temperature);
}





function searchCity(city){
    let apiKey="3f5te44f20dc10969a23fb1a9afo8c90";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=matric`;
    axios.get(apiUrl).then(refreshWeather);

}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-input");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");


    
    searchCity(searchInput.value);
}



let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);