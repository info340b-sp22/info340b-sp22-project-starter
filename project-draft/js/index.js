'use strict';

// toggle show/hide span
  qsa(".showmore").forEach(function (p) {
    p.querySelector("a").addEventListener("click", function () {
      p.classList.toggle("show");
      this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
    });
  });

// Returns the element that has the given id.
  function id(id) {
    return document.getElementById(id);
  }

// Returns all elements that have the given selector.
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

