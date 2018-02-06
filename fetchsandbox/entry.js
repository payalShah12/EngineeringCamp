import {page} from './template.js';
import {getText} from './getText.js';
import {getUsers} from './getUsers.js';
import {getPosts} from './getPosts.js';
import {addPost} from './add.js';
document.getElementById("bdy").innerHTML=page;
window.getTextCall=()=>
{
    console.log("In text call");
     getText();
}
window.getUsersCall=()=>
{
    getUsers();
}
window.getPostsCall=()=>
{
    getPosts();
}
 window.addPostCall=()=>
{
    addPost();
}