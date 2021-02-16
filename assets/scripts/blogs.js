//get posts//
function getPosts() {
  //get element you want to change//
  let list = document.getElementById("blog-items");

  //fetch data, get this from json placeholder site- "listing all resources"//
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);

        json.forEach(blog => createBlogItem(blog));


        
    });


}



function createBlogItem(blog) {

    //this is a back top slash//

const item = `<li><a href="./blog.html?blogID=${blog.id}">${blog.title} </a></li>`
let list = document.getElementById("blog-items");

list.innerHTML += item;
}
getPosts();
