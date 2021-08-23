const burger = document.querySelector(".burger");
const menu = document.querySelector(".fullmenu");
const close = document.querySelector(".fullmenu-close");

burger.addEventListener("click", function(e) {
    e.preventDefault();

    menu.classList.add("active");
})

close.addEventListener("click", function(e){
    e.preventDefault();

    menu.classList.remove("active");
})