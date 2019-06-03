window.addEventListener("scroll", function() {
  var el1 = document.querySelector(".navi-wrapper");
  var el2 = document.querySelector(".vertical-line");
  var el3 = document.querySelector(".instagram-logo");

  if (window.scrollY >= 100) {
    el1.classList.add("navi-bar-transition");
    el2.classList.add("logo-image-transition");
    el3.classList.add("logo-image-transition");
  } else {
    el1.classList.remove("navi-bar-transition");
    el2.classList.remove("logo-image-transition");
    el3.classList.remove("logo-image-transition");
  }
});
