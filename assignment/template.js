export const page=`<p>
<br><br><br>
        <center>  <h1><u><i><span id="x" style="color:pink;font-family: Georgia, Serif;font-weight:bold;font-style: italic;text-decoration:underline">Grocery Store </span></i></h1></center>
        <hr color="ivory" width="800" height="800"> 
            <br><br><br><br><br> 
           
                <center>
               <span class="label label-primary" style="color:blue;font-family: Georgia, Serif;font-weight:bold;font-style: italic;text-decoration:underline"> 
               SELECT A PAGE TO GO <select class="form-control" id="menu" onchange="goto()">
                    <option>----SELECT----</option>
                    <option id="emp" value="emp">EMPLOYEE</option>
                    <option id="item" value="item">ITEM</option>
                    </select></span>
                    <br><br>
                    </center>
            </p>`;

            //javascript:location.href = this.value;