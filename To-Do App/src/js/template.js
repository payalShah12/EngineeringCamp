export const page=`
   <p><form id="todoForm">
        <fieldset>
        <legend style="color:maroon"><marquee><i><b>Enter what you want to do today...</b></i></marquee></legend>
           <br><br>
            <b><i>Enter the To-Do &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i></b><input type="text" id="todoInput" placeholder="Enter a new task right here!">
            <br><br>
            <b><i>Enter the Due Date &nbsp;</i></b><input type="date" id="date"> <br><br>
            <button type="button" onclick="todoList()">Click here to add the task to the list!</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="text" id="s" placeholder="Enter to Search"> &nbsp;&nbsp; 
            <button type="button" onclick="search()">Search!</button>
            </fieldset> </form><br><br><center>
            <hr>
            <div id="result"></div>
            <table id="x" cellpadding="8" cellspacing="8" border="0">      
            </table></center></p>`;