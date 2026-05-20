// script.js

// LOADER

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hide");

  }, 1200);

});

// REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();

// HEADER EFFECT

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 30){

    header.style.background = "rgba(245,243,239,0.92)";

  }else{

    header.style.background = "rgba(245,243,239,0.75)";

  }

});