// Example 1 JS


const form = document.querySelector("#application-form");

form.addEventListener("keyup", (e) => {
  if (e.target.dataset.capital != undefined) {
    const elem = document.querySelector(`#${e.target.id}`);
    elem.value = elem.value.toUpperCase();
  }
});



//Example 2

const categories = document.querySelector('#categories');

categories.addEventListener('click',(e)=>{
   const id = e.target.id;
   window.location.href = `/${id}`;
})