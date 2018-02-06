import Rx from 'rxjs/Rx';
import {show} from './entry.js';
export let store=[];
export function view()
    { 
      console.log("in");
    let output="";
    Rx.Observable
    .fromPromise(fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
    .then(res=>res.json())
    )   
     .subscribe(
         e => {
           store=e;
                store.forEach(function(ele) {
                     output += ` <br><br><br><div class="row">
                   <div class="card card-body text-white teal lighten-2 mb-3" style="font-family: Georgia;opacity:0.6">
                   <h2 class="card-title" style="color:crimson;text-align:center;font-family: Georgia, Serif;font-weight:bold;font-style: italic">${ele.name}</h2>   
                   <div class="card-content">
                    <div class="wrapper"><img class="img-fluid center-align" style="z-index:1" src="${ele.image_link}"> </div>
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
                    document.getElementById("res").innerHTML="hello";
          document.getElementById("res").innerHTML=output;
         })
    }