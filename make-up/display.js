import {view,store} from './view.js';
let output="";
export const disp=()=>
{
    store.forEach(function(ele) {
                     output += ` <br><br> 
                    <div class="row">
                    <div class="card card-body text-white teal lighten-2 mb-3" style="font-family: Georgia;opacity:0.6"><h2 class="card-title" style="color:crimson;text-align:center;font-family: Georgia, Serif;font-weight:bold;font-style: italic">${ele.name}</h2>   
                    <div class="wrapper"><img class="img-fluid" src="${ele.image_link}"> </div>
                    <p class="card-text" style="color:red;font-family: Georgia, Serif;font-weight:bold"> Brand : ${ele.brand}</p>
                    <p class="card-text"><b><i> Price : </b></i>${ele.price} $</p>
                    <p class="card-text"><b><i> Rating : </b></i>${ele.rating}/5</p>                    
                    <p class="card-text"><b><i> Description : </b></i>${ele.description}</p>
                    <p class="card-text"><b><i> Product Link : </b></i><a href="${ele.product_link}">${ele.product_link}</a></p>
                    <p class="card-text" ><b><i> Color :</b></i><ol>`;
                 ele.product_colors.forEach(function(color){
                   output+=` <li style="color:black">${color.colour_name}</li> `;
                 },this);
                    output+= `</ol></p> <p class="card-text" ><b><i> Properties :</b></i><ol> `;
                   ele.tag_list.forEach(function(type){
                   output+=` <li style="color:black">${type}</li> `;                       
                   },this)
                   output+=`</ol></p></div></div></div>` ;     
                    }, this);        
                document.getElementById("res").innerHTML=output;
}