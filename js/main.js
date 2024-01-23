// classList (property) - shows/gets all classes
// contains (method) - checks classList for specific class
// add (method) - add class
// remove (method) - remove class
// toggle (method) - toggles class

const navMobileToggle = document.querySelector(".nav__mobile-toggle");
const navMain = document.querySelector(".nav__main");

// setup slightly different from John's setup since I'm targeting the button for the action
// Also have styles setup different as well
navMobileToggle.addEventListener("click", function() {
  if (navMobileToggle.classList.contains("nav__mobile-toggle__active")) {
    navMain.classList.remove("nav__mobile-nav__show");
    navMobileToggle.classList.remove("nav__mobile-toggle__active");
  } else if (!navMobileToggle.classList.contains("nav__mobile-toggle__active")) {
    navMain.classList.add("nav__mobile-nav__show");
    navMobileToggle.classList.add("nav__mobile-toggle__active");
  }
});

