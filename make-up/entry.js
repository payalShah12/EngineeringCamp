import {page} from './template.js';
import {p} from './template.js';
import Rx from 'rxjs/Rx';
import {search} from './search.js';
import {view,store} from './view.js';
import {disp} from './display.js';
import {store1} from './search.js';
let output="";
document.getElementById("bdy").innerHTML=page;
window.find=()=>
{
    var brand=document.getElementById("brand").value;
    var url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
    if(brand=="")
    {
        alert("You have not Entered any brand. Please enter one...");
    }
    else{
    console.log("find");
     search(brand,url);
    }
}
window.findprod=()=>
{
    var prod=document.getElementById("prod").value;
    var url=`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${prod}`;
    if(prod=="")
    {
        alert("You have not Entered any product. Please enter one...");
    }
    else{
    console.log("prod");
     search(prod,url);
    }
}
window.show=()=>
{
    view();
}
window.asort=()=>
{
    store.sort(function(a, b) {
    return a.name > b.name;
});
 disp();
}

window.psort=()=>
{
    store.sort(function(a, b) {
    return a.price > b.price;
});
 disp();
}

window.rsort=()=>
{
    store.sort(function(a, b) {
    return a.rating < b.rating;
});
 disp();
}