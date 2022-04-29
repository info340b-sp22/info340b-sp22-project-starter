'use strict';
(function() {

  window.addEventListener("load", init);

  function init() {
    id("moreBtn").addEventListener("click", seeMore);
  }

// see more or less
  function seeMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
// Returns the element that has the given id.
  function id(id) {
    return document.getElementById(id);
  }
})();