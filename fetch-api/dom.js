// DOM - Document Object Model
// BOM - Browser Object Model
// CSSOM - CSS Object Model

// const table = document.body.children[1].lastChild.previousSibling;
// let n = table.rows.length;
// for(let i=0;i<n;i++){
//    table.rows[i].cells[i].style.background = 'white';
//    table.rows[i].cells[n-i-1].style.background = 'white';
// }

const allUsers = document.getElementById("all-users");

async function getData() {
  let a = await fetch("https://jsonplaceholder.typicode.com/posts");
  let b = a.json();

  b.then((data) => {
    displayData(data);
  });
}

getData();

function displayData(posts) {
  for (let post of posts) {
    let div = document.createElement("div");
    div.className = "user";

    let p_one = document.createElement("p");
    let p_two = document.createElement("p");
    let p_three = document.createElement("p");

    p_one.innerHTML = post.id;
    p_two.innerHTML = post.title;
    p_three.innerHTML = post.body;

    div.append(p_one);
    div.append(p_two);
    div.append(p_three);

    allUsers.append(div);
  }
}
