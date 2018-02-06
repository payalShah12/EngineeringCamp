//Spread function on objects
function ob()
{
console.log('Sandwitch = ',sandwitch.peanutButter);
//console.log('Sandwitch = ',sameSandwitch);
}
    const ft={
    peanutButter: 'crunchy',
    jelly: 'strawberry'
}
const sandwitch={
    breadslices:2,
    ...ft
}
//const sameSandwitch=Object.assign({breadslices: 4},ft)
ob();
//Babel allows to do this.