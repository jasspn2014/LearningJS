const search = document.querySelector("#search");
// console.log(search);

let count = 0;
function getData() {
  console.log("Data Fetching", count++);
}

let timer;
function debounce(fn, delay) {
  return function(){
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  }
}

let betterFunction = debounce(getData, 300);

search.addEventListener("keyup", betterFunction);
