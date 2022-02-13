var elheader = document.querySelector(".header")
var elbtn = document.querySelector(".header__btn")


elbtn.addEventListener("click", ()=>{
    elheader.classList.toggle("header--active")
})