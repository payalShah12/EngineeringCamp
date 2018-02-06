import {isnum} from './validate.js';
export const item=`<span style="position:absolute;left:1500px;"><a href="form.html"> HOME </a></span><br><br><br>
        <center>  <h1 style="color:pink;font-family: Georgia, Serif;font-weight:bold;font-style: italic;text-decoration:underline"><u><i>ITEM FORM </i></u></h1></center>
        <hr width="800" height="800"> <fieldset style="color:blue;font-family: Georgia, Serif;font-weight:bold;font-style: italic;">
        <span style="color:red;font-family: Georgia, Serif;font-weight:bold;font-style: italic;text-decoration:underline">
    <br><br>
    <legend><marquee><i><b>Enter the Stock Details...</b></i></marquee></legend></span>
          <center>  <table class="table" colspan="20">
        <tr><td>Stock ID </td><td><input class="form-control" type="text" id="sid" onfocus="this.blur()"></td></tr>
        <tr><td>Stock  Nane </td><td><input class="form-control" type="text" id="name"></td></tr>
        <tr><td>Stock Price</td><td><input class="form-control" type="text" id="price" onblur="isnum()"></td></tr>
        <tr><td>Quantity</td><td><input class="form-control" type="text" id="qty" onblur="num()"></td></tr>
        <tr><td><tr><td colspan="2" align="center"><input class="btn btn-primary mr-4" type="button" onfocus="validate.js" onclick="ifunc()"  id="submit" value="SUBMIT DETAILS"></td></tr>
           </table></center>
<br><br>
          </center>
</fieldset>
         <center>   <table class="table table-striped" id="x" cellpadding="10">
                <tr style="color:red;font-family: Georgia, Serif;font-weight:bold;font-style: italic;text-decoration:underline"><th></th><th>Stock ID</th><th>Item Name</th><th>Price</th><th>Quantity</th>
            </table></center>`;