let navs = document.getElementById("navs");
const myFunction = (x) => {
  if (navs.style.display == "block") {
    navs.style.display = "none";
  }
  else navs.style.display = "block";
  x.classList.toggle("change");
};

// function myFunction(x) {
 
// };