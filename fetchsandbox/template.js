export const page=`
   <p><div class="d-flex"><button id="getText" class="btn btn-warning mr-4" onclick="getTextCall()"> GET TEXT</button>
    <button class="btn btn-primary mr-4" id="getUsers" onclick="getUsersCall()"> GET JSON </button>
    <button class="btn btn-success mr-4" id="getPosts" onclick="getPostsCall()"> GET API DATA </button>
    </div><hr>
    <div id="output"></div>
<form id="addpostF">
    <div class="form-group">
        <input type="text" class="form-control" id="ID" placeholder="ID">
    </div>
    <div class="form-group">
        <textarea id="Title" class="form-control" placeholder="Title"></textarea>
    </div>
      <div class="form-group">
        <input type="date" class="form-control" id="DueDate">
    </div>
      <div class="form-group">
        <input type="text" class="form-control" id="Completed" placeholder="Completed">
    </div>
    <input type="button" class="btn btn-secondary mr-4" value="Submit" id="addpost" onclick="addPostCall()">
</form></p>`;
