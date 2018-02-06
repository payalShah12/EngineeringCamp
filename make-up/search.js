import Rx from 'rxjs/Rx';
import { find, findprod } from './entry.js';
let store1=[];
export function search(brnd,url) {
    let output = "";
    let brand = brnd;
    Rx.Observable
        .fromPromise(fetch(url)
            .then(res => res.json())
            .catch(error => console.log(`Error: ${error}`))
            //    .catch(error=>{output+=`Sorry there is no City as ${city} in our record.`})   
        )
        .subscribe(
            e => {
                store1=e;
                if (store1.cod !== "404") 
                {
                      store1.forEach(function(ele) {
                     output += ` <br><br><br><div class="row">
                   <div class="card card-body text-white teal lighten-2 mb-3" style="font-family: Georgia;opacity:0.6">
                   <h2 class="card-title" style="color:crimson;text-align:center;font-family: Georgia, Serif;font-weight:bold;font-style: italic">${ele.name}</h2>   
                   <div class="card-content">
                    <div class="wrapper"><img class="img-fluid center-align" src="${ele.image_link}"> </div>
                    <p class="card-text" style="color:red;font-family: Georgia, Serif;font-weight:bold"> Brand : ${ele.brand}</p>
                    <p class="card-text"><b><i> Price : </b></i>${ele.price} $<br>
                    <b><i> Rating : </b></i>${ele.rating}/5</br>                    
                    <b><i> Description : </b></i>${ele.description}<br>
                    <b><i> Product Link : </b></i><a href="${ele.product_link}">${ele.product_link}</a><br>
                    <b><i> Color :</b></i><ol>`;
                  ele.product_colors.forEach(function(color){
                   output+=` <li style="color:white">${color.colour_name}</li> `;
                 },this);
                    output+= `</ol><br><b><i> Properties :</b></i><ol> `;
                   ele.tag_list.forEach(function(type){
                   output+=` <li style="color:white">${type}</li> `;                       
                   },this)
                   output+=`</ol></p></div></div></div>` ;     
                    }, this);       
          document.getElementById("res").innerHTML=output;
          console.log(output);
                }           
                else{
                    alert("Sorry there is no entry found by this name!");
                }
            })          
}