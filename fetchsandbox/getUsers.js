export function getUsers()
        {
            fetch('user.json')
            .then((res) => res.json())
            .then((data) => {
                let output = '<h2 class="mb-4"> Users </h2>';
                data.forEach(function(user) {
                    output+=`
                    <ul class="list-group mb-3">
                    <li class="list-group-item"> ID : ${user.id}</li>
                    <li class="list-group-item"> Name : ${user.name}</li>
                    <li class="list-group-item" > Age : ${user.age}</li>
                    <li class="list-group-item"> Email ID : ${user.email}</li>
                    </ul>`;
                }, this);
                document.getElementById('output').innerHTML=output;
            })
        }