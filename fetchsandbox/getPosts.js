 export function getPosts()
        {
            fetch("https://fakerestapi.azurewebsites.net/api/Activities")
            .then((res) => res.json())
            .then((data) => {
                let output = '<h2 class="mb-4"> Posts from the Resource File </h2>';
                data.forEach(function(post) {
                    output+=`
                   <div class="card card-body mb-3"><h3>${post.Title}</h3>
                   <p> ID : ${post.ID}</p>
                   <p> Due Date : ${post.DueDate}</p>
                   <p> Complete Status : ${post.Completed}</p>
                   </div>`;
                });
                document.getElementById('output').innerHTML=output;
            })
        }