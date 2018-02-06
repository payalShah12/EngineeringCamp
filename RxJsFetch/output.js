export const output=()=>
{
    return `<br><br><marquee><h2 class="mb-4" style="color:red;font-family: Georgia, Serif;font-weight:bold"> LIVE DATA FETCHED FROM API </h2></marquee>
                   <div class="card card-body text-white transparent-card mb-3"><h3 class="card-title" style="color:blue;font-family: Georgia, Serif;font-weight:bold">${e.name},${e.sys.country}</h3>
                   <hr>
                   <p class="card-text"> WEATHER : ${e.weather[0].main}</p>
                   <p class="card-text"> MINIMUM TEMPERATURE : ${e.main.temp_max} °C</p>
                   <p class="card-text"> MAXIMUM TEMPERATURE : ${e.main.temp_min} °C</p>
                   <p class="card-text"> LONGITUDE : ${e.coord.lon}</p>
                   <p class="card-text"> LATITUDE : ${e.coord.lat}</p>  
                   </div>`
}