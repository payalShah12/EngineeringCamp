export const page=`
    <br><br>
   <div class="form-group">
   <div class="row">
   <div class="col s12">
    <input type="text" style="color:ivory;" class="form-control transparent-input" id="brand" placeholder="Search by Brand...">
    <a href="#!" onclick="find()" class="btn-floating btn-large waves-effect waves-default pink">
    <i class="material-icons">insert_emoticon</i>
    </a>
    <input type="text" style="color:ivory;" class="form-control transparent-input" id="prod" placeholder="Search by Product type...">
    <a href="#!" onclick="findprod()" class="btn-floating btn-large waves-effect waves-default pink">
    <i class="material-icons">insert_emoticon</i></a>
    </div>
    <div class="col s12 m12 l12 right-align">
    <a href="#!" id="a" onclick="asort()" class="btn-floating btn-large waves-effect waves-default pink">
    <i class="material-icons">filter_list</i></a>
    <a href="#!" id="p" onclick="psort()" class="btn-floating btn-large waves-effect waves-default pink">
    <i class="material-icons">filter_list</i></a>
    <a href="#!" id="r" onclick="rsort()" class="btn-floating btn-large waves-effect waves-default pink">
    <i class="material-icons">filter_list</i></a></div>
    <br><br><marquee><h2 class="mb-4" style="color:red;font-family: Georgia, Serif;font-weight:bold;font-style: italic"> In case of emergency, put mascara on yourself before helping others!!! </h2></marquee>
    </div></div>
    <div id="res"></div>
    <br>
    `;
   