console.log("connected!");

//Grab Dom objects
let navbar = document.querySelector("#navigation");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("scroll", window.scrollY > 50);
});
