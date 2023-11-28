const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    document.body.classList.add("header-active");
  } else if (window.scrollY === 0) {
    document.body.classList.remove("header-active");
  }
});
