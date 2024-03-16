


const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const navbarItems = document.getElementById("navbar_items");
const navItem = document.querySelectorAll(".navbar_item");

const nav_btn = document.getElementById("navbar-button")



menu.addEventListener("click", function(){
  
  if (navbarItems.classList.contains("dont-show-mobile-navbar")) {
    navbarItems.classList.remove("dont-show-mobile-navbar");
    navbarItems.classList.add("show-mobile-navbar");
    
  } else {
    navbarItems.classList.remove("show-mobile-navbar");
    navbarItems.classList.add("dont-show-mobile-navbar");
  }
})

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    // alert(window.scrollY)
    navbar.classList.remove("navbar_not_scroll");
    navbar.classList.add("navbar_on_scroll");
    navbarItems.classList.remove("bg-black");
    navbarItems.classList.add("bg-white");
    menu.classList.remove("text-white");
    menu.classList.add("text-custom-primary");
    nav_btn.classList.remove("navbar_button")
    nav_btn.classList.add("navbar_button-2")
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove("text-not-display");
      navItem[i].classList.add("text-on-display");
    }
  } else {
    navbar.classList.remove("navbar_on_scroll");
    navbar.classList.add("navbar_not_scroll");
    navbarItems.classList.remove("bg-white");
    navbarItems.classList.add("bg-black");
    menu.classList.remove("text-custom-primary");
    menu.classList.add("text-white");
    nav_btn.classList.remove("navbar_button-2")
    nav_btn.classList.add("navbar_button")
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].classList.remove("text-on-display");
      navItem[i].classList.add("text-not-display");
      
    }
  }
});

if (navbarItems.classList.contains("show-mobile-navbar"))
{
  window.addEventListener("click", function () {
    navbarItems.classList.remove("show-mobile-navbar");
    navbarItems.classList.add("dont-show-mobile-navbar");
  });
}
// Methods
const emails = document.querySelectorAll(".contact_email");
const emails2 = document.querySelectorAll(".contact_email_2");
const contacts = document.querySelectorAll(".phone_number");
const contacts2 = document.querySelectorAll(".phone_number_2");

var encEmail2 = "c2FsZXNAc2Frb2VsZWN0cmljaWFucy5jby56YQ==";
var encEmail = "aW5mb0BzYWtvZWxlY3RyaWNpYW5zLmNvLnph";
var encContact = "KzI3Nzk3OTI1NTEz";
var encContact2 = "KzI3Nzk3OTI1NTEz";

emails.forEach(element => {
  element.setAttribute("href", "mailto:".concat(atob(encEmail)))
});
emails2.forEach(element => {
  element.setAttribute("href", "mailto:".concat(atob(encEmail2)))
});
contacts.forEach(element => {
  element.setAttribute("href", "tel:".concat(atob(encContact)))
});
contacts2.forEach(element => {
  element.setAttribute("href", "tel:".concat(atob(encContact2)))
});





