// code for hamburger menu, when clicked new menu opens and closes
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const menu = document.querySelector(".nav-list");

//code for hamburger lines to change to X when clicked and back to lines when clicked again 
hamburger.addEventListener("click", () => {
  document.getElementsByClassName("line")[0].classList.toggle("line1");
    document.getElementsByClassName("line")[1].classList.toggle("line2");
    document.getElementsByClassName("line")[2].classList.toggle("line3");
    menu.classList.toggle("open");
    
}
);


