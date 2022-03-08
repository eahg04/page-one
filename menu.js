const menu = document.querySelector(".menu");
const config = document.querySelector(".menu-navegacion");

//console.log(config);
//console.log(menu);

menu.addEventListener("click", () => {
  config.classList.toggle("spread");
});
window.addEventListener("click", (e) => {
  if (
    config.classList.contains("spread") &&
    e.target != config &&
    e.target != menu
  ) {
    config.classList.toggle("spread");
  }
});
