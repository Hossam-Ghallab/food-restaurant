let toggle = document.querySelector(".toggle i");
let list = document.querySelector(".list");

toggle.onclick = function(){
  list.classList.toggle("show");
  if (list.classList.contains("show")) {
    toggle.classList.add("fa-xmark")
  } else {
    toggle.classList.remove("fa-xmark")
  }
}

let home = document.getElementById("home-link");
let dishes = document.getElementById("dishes-link");
let about = document.getElementById("about-link");
let menu = document.getElementById("menu-link");
let review = document.getElementById("review-link");
let order = document.getElementById("order-link");

home.onclick = removeShow
about.onclick = removeShow
dishes.onclick = removeShow
menu.onclick = removeShow
review.onclick = removeShow
order.onclick = removeShow

function removeShow() {
  list.classList.remove("show");
  toggle.classList.remove("fa-xmark")
}