const addButton = document.querySelector("#submit-btn");
const itemsList = document.querySelector(".items");
let count = 1;


addButton.addEventListener("click", () => {
  if (document.querySelector(".item-name").value == "") {
    alert("Please Enter Value");
  } else {
    let item = document.createElement("div");
    item.className = "item";
    item.innerHTML = document.querySelector(".item-name").value;

    let alterBtns = document.createElement("div");
    alterBtns.className = "alter-btns";
    let edit = document.createElement("i");
    let trash = document.createElement("i");

    edit.className = "fas fa-edit edit";
    trash.className = "fas fa-trash-alt trash";

    alterBtns.append(edit);
    alterBtns.append(trash);

    let itemBox = document.createElement("div");
    itemBox.className = "item-box";
    itemBox.id = ++count;
    itemBox.append(item);
    itemBox.append(alterBtns);

    itemsList.append(itemBox);
    document.querySelector(".item-name").value = "";

    const updateIcon = document.querySelectorAll(".edit");
    const trashIcon = document.querySelectorAll(".trash");

    for (let i = 0; i < updateIcon.length; i++) {
      updateIcon[i].addEventListener("click", () => {
        let id = updateIcon[i].parentNode.parentNode.id;
        document.getElementById(id).remove();
      });
    }

    for (let i = 0; i < trashIcon.length; i++) {
      trashIcon[i].addEventListener("click", () => {
        let id = trashIcon[i].parentNode.parentNode.id;
        document.getElementById(id).remove();
      });
    }
  }
});
