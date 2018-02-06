import Rx from 'rxjs/Rx';
import {show} from './entry.js';
let output="";
export function view()
    { 
    let output="";
    Rx.Observable
    .fromPromise(fetch(`http://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=8443f5de4c853b04295d933592e420c4&units=metric`)
    .then(res=>res.json()) 
    )   
     .subscribe(
         e => {
                output += `<br><br><marquee><h2 class="mb-4" style="color:red;font-family: Georgia, Serif;font-weight:bold"> LIVE DATA FETCHED FROM API </h2></marquee>
                   <div class="card card-body text-white transparent-card mb-3"><h3 class="card-title" style="color:blue;font-family: Georgia, Serif;font-weight:bold">${e.name}</h3>
                   <hr>
                   <p class="card-text"> WEATHER : ${e.weather[0].main}</p>
                   <p class="card-text"> MINIMUM TEMPERATURE : ${e.main.temp_max} °C</p>
                   <p class="card-text"> MAXIMUM TEMPERATURE : ${e.main.temp_min} °C</p>
                   <p class="card-text"> LONGITUDE : ${e.coord.lon}</p>
                   <p class="card-text"> LATITUDE : ${e.coord.lat}</p>
                   
                   </div>`
                    document.getElementById("p").innerHTML = output;
                 }
             
//output+=`${ele.name}<br>`
                       
         )
    }
                

