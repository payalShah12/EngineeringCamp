import {page} from './template.js';
export const emp=`<span style="position:absolute;left:1500px;"><a href="form.html"> HOME </a></span><br><br><br>
        <center>  <h1 style="color:pink;font-family: Georgia, Serif;font-weight:bold;font-style: italic;text-decoration:underline"><u><i>Employee Form </i></u></h1></center>
        <hr width="800" height="800"><span style="color:red;font-family: Georgia, Serif;font-weight:bold;font-style: italic;text-decoration:underline">
    <marquee><i><b>Enter the Details of the Employee...</b></i></marquee></span>
       <fieldset style="color:blue;font-family: Georgia, Serif;font-weight:bold;font-style: italic;">
          <center>  <table class="table" colspan="20">
        <tr><td>ID </td><td><input class="form-control" type="text" id="uid" onfocus="this.blur()"></td></tr>
        <tr><td>Name </td><td><input class="form-control" type="text" id="name" ></td></tr>
        <tr><td>Date of Birth </td><td><input class="form-control" type="date" id="dob"></td></tr>
        <tr><td>Gender </td><td><label>Male<input class="form-control" type="radio" name="gender" value="male" id="m"></label>    
        &nbsp;&nbsp;&nbsp;&nbsp;<label> Female <input class="form-control" type="radio" id="f" name="gender" value="female"> </td></tr></label>
        <tr><td colspan="2" align="center"><input type="button" class="btn btn-primary mr-4" onclick="efunc()" value="SUBMIT DETAILS"></td></tr>
        </table><br><br><br><br>
    </center>
</fieldset>
         <table class="table table-striped" id="x" cellpadding="10">
                <tr style="color:red;font-family: Georgia, Serif;font-weight:bold;font-style: italic;text-decoration:underline"><th></th><th>ID</th><th>Name</th><th>Date of Birth</th><th>Gender</th></tr>
        </table></body>`;