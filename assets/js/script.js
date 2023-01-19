const nav = document.querySelector(".nav__list");
console.log(nav);
const openNav = document.querySelector(".nav__toggler--icon-open");
console.log(openNav);
const closeNav = document.querySelector(".nav__toggler--icon-close");
console.log(closeNav);

openNav.addEventListener("click", () => {
  nav.classList.toggle("active");
  nav.classList.add("bounce-in-top");
  if (nav.classList.contains("active")) {
    closeNav.style.display = "block";
    openNav.style.display = "none";
  }
});
closeNav.addEventListener("click", () => {
  nav.classList.remove("active");
  nav.classList.remove("bounce-in-top");
  closeNav.style.display = "none";
  openNav.style.display = "block";
});
