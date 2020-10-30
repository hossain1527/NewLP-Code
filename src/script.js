const text =
  "Lisbon Project Computer Coding Class with HTML, CSS and JavaScript endorsed by Jonathan Ferreira!";

let index = 0;

function autoDisplay() {
  document.getElementById("right-body").innerText = text.slice(0, index);
  index++;

  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(autoDisplay, 80);

/******************Hide collapsible menu when clicking on any part of the body*****************/

$(function () {
  $("#navbarToggle").blur(function (event) {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#menu").collapse("hide");
    }
  });
});
