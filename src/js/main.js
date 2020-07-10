window.addEventListener("load", init, false);

function init() {
  /**
   *  Mobile menu
   */
  var toggles = document.querySelectorAll(".c-hamburger");
  var listItems = document.querySelectorAll(".page-header__item");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  for (var j = listItems.length - 1; j >= 0; j--) {
    var li = listItems[j];
    liHandler(li);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      var nav = document.getElementById("page-header__nav");
      var button = document.getElementById("mobile-button");

      this.classList.toggle("hidden");

      if (button.classList.contains("hidden")) {
        nav.style.display = "contents";
      } else {
        nav.style.display = "";
      }
    });
  }

  function liHandler(li) {
    li.addEventListener("click", function (e) {
      var nav = document.getElementById("page-header__nav");
      var button = document.getElementById("mobile-button");
      if (window.innerWidth < 1050) nav.style.display = "none";
      if (button.classList.contains("hidden"))
        button.classList.remove("hidden");
    });
  }

  /**
   *  For smooth scrolling when an item of menu is clicked
   */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  /**
   * Subscription form hundlers
   */
  var emailForm = document.querySelector("#subscription-email");

  emailForm.addEventListener("focus", function (e) {
    if (e.target.value === "Enter your email") {
      e.target.value = "";
    }
  });
  emailForm.addEventListener("blur", function (e) {
    if (e.target.value === "") {
      e.target.value = "Enter your email";
    }
  });
}
