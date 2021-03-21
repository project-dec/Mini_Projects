//Variables 
const burger = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const date = document.getElementById("date");

let year = (new Date()).getFullYear();
date.innerText=year;

burger.addEventListener("click",()=>{

    let height = linksContainer.getBoundingClientRect().height;

    if(height === 0){
        linksContainer.style.height = `${links.getBoundingClientRect().height}px`;
    }else{
        linksContainer.style.height = `0px`;
    }

    return;
});


// fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");


window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav")
    }


    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link")
    }
})

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});