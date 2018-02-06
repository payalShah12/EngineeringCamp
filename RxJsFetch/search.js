import Rx from 'rxjs/Rx';
import {
    find
} from './entry.js';
export function search(but) {
    let output = "";

    let city = but;
    Rx.Observable
        .fromPromise(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8443f5de4c853b04295d933592e420c4&units=metric`)
            .then(res => res.json())
            .catch(error => console.log(`Error: ${error}`))
            //    .catch(error=>{output+=`Sorry there is no City as ${city} in our record.`})   
        )
        .subscribe(
            e => {
                console.log(e.cod);
                if (e.cod !== "404") {
                    output += `<br><br><marquee><h2 class="mb-4" style="color:red;font-family: Georgia, Serif;font-weight:bold"> LIVE DATA FETCHED FROM API </h2></marquee>
                   <div class="card card-body text-white transparent-card mb-3"><h3 class="card-title" style="color:blue;font-family: Georgia, Serif;font-weight:bold">${e.name},${e.sys.country}</h3>
                   <hr>
                   <p class="card-text"> WEATHER : ${e.weather[0].main}</p>
                   <p class="card-text"> MINIMUM TEMPERATURE : ${e.main.temp_max} °C</p>
                   <p class="card-text"> MAXIMUM TEMPERATURE : ${e.main.temp_min} °C</p>
                   <p class="card-text"> LONGITUDE : ${e.coord.lon}</p>
                   <p class="card-text"> LATITUDE : ${e.coord.lat}</p>
                   
                   </div>`
                    document.getElementById("p").innerHTML = output;
                }
                else{
                    alert("Sorry there is no city found by this name!");
                }
            })
}