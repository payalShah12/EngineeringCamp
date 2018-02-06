function addPost(e)
        {
            e.preventDefault(); //Stop it from actually submitting to a file;
            let Title=document.getElementById('Title').value;
            let ID=document.getElementById('ID').value;
            let DueDate=document.getElementById('DueDate').value;
            let Completed=document.getElementById('Completed').value;
        
         fetch("https://fakerestapi.azurewebsites.net/api/Activities",{
             method : 'POST',
             headers : {
                 'Accept' : 'application/json, text/plain, */*',
                 'Content-type' : 'application/json'
             },
             body : JSON.stringify({Title:Title, ID:ID, DueDate : DueDate, Completed: Completed})
         })
            .then((res) => res.json())
            .then((data) => console.log(data))
        }