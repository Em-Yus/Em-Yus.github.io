const navBurger = document.querySelector(".nav-burger");
navBurger.onclick = function() {
    const navbar = document.querySelector(".nav-bar");
    const line1= document.querySelector("#l1");
    const line2= document.querySelector("#l2");
    const line3= document.querySelector("#l3");
    navbar.classList.toggle("muncul");
    line1.classList.toggle("silang-bawah")
    line2.classList.toggle("geser-kiri")
    line3.classList.toggle("silang-atas")

};