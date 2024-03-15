var header = document.getElementsByTagName("header")[0];
var links = document.querySelectorAll("header ul li a");
var logo = document.getElementsByClassName("logo-image")[0];
var arrow = document.getElementsByClassName("arrow")[0];

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.padding = "8px 20px";
    arrow.style.display = "block";
  } else {
    header.style.zIndex = "";
    header.style.padding = "";
    arrow.style.display = "none";
  }
});

links.forEach(function (link) {
  link.style.color = "#686868";
  link.addEventListener("mouseout", function () {
    this.style.color = "#686868";
  });
  link.addEventListener("mouseover", function () {
    this.style.color = "black";
  });
});
