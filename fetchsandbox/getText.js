 export function getText()
        {
            fetch('sample.txt')
            .then((res)=>res.text())
            .then((data) => {
                document.getElementById('output').innerHTML=data;
            
            })
            .catch((err) => console.log(err))
        }