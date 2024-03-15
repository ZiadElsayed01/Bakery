var header = document.getElementsByTagName("header")[0];
var links = document.querySelectorAll("header ul li a");
var logo = document.getElementsByClassName("logo-image")[0];
var arrow = document.getElementsByClassName("arrow")[0];

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.background = "#fff";
    header.style.zIndex = "1000";
    header.style.padding = "8px 20px";
    logo.src = "images/bakery-color.png";
    arrow.style.display = "block";
    links.forEach(function (link) {
      link.style.color = "#686868";
      link.addEventListener("mouseout", function () {
        this.style.color = "#686868";
      });
      link.addEventListener("mouseover", function () {
        this.style.color = "black";
      });
    });
  } else {
    header.style.background = "transparent";
    header.style.zIndex = "";
    header.style.padding = "";
    logo.src = "images/bakery-light-1.png";
    arrow.style.display = "none";
    links.forEach(function (link) {
      link.style.color = "var(--second-color)";
      link.addEventListener("mouseout", function () {
        this.style.color = "var(--second-color)";
      });
      link.addEventListener("mouseover", function () {
        this.style.color = "var(--main-color)";
      });
    });
  }
});
