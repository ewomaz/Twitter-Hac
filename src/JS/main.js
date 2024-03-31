const buger = document.querySelector("#buger");
const links = document.querySelector("#links");

buger.addEventListener("click", () => {
  links.classList.toggle("active");
});
