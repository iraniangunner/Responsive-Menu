const mobile_toggle = document.querySelector(".mobile-menu");

const mobile_nav_holder = document.querySelector(".mobile-nav-holder");

const mobile_nav = document.querySelector(".mobile-nav");

const multiply_icon = document.querySelector(".multiply");

const open_list_item = document.querySelector(".open1");

const open_list_item_1 = document.querySelector(".open2");

const arrowIcon = document.querySelector(".arrow1");

const arrowIcon_1 = document.querySelector(".arrow2");

mobile_toggle.addEventListener("click", () => {
  mobile_nav_holder.classList.add("show");
  mobile_nav.classList.add("active");
});

multiply_icon.addEventListener("click", () => {
  mobile_nav_holder.classList.remove("show");
  mobile_nav.classList.remove("active");
});

window.addEventListener("click", (event) => {
  if (event.target === mobile_nav_holder) {
    mobile_nav_holder.classList.remove("show");
    mobile_nav.classList.remove("active");
    open_list_item.classList.remove("showdetails");
    arrowIcon.classList.remove("rotated");
    open_list_item_1.classList.remove("showdetails");
    arrowIcon_1.classList.remove("rotated");
  }
});

open_list_item.addEventListener("click", () => {
  open_list_item.classList.toggle("showdetails");
  arrowIcon.classList.toggle("rotated");
  open_list_item_1.classList.remove("showdetails");
  arrowIcon_1.classList.remove("rotated");
});

open_list_item_1.addEventListener("click", () => {
  open_list_item_1.classList.toggle("showdetails");
  arrowIcon_1.classList.toggle("rotated");
  open_list_item.classList.remove("showdetails");
  arrowIcon.classList.remove("rotated");
});
