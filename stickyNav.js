const body = document.querySelector("body");
const firstSection = document.querySelector(".contact-first-section");
const header = document.querySelector("header");
const sticky = header.offsetHeight;
window.addEventListener("scroll", function () {
    console.log(window.scrollY >= sticky);
    if (window.scrollY >= sticky) {
        header.classList.add("sticky-header");
        firstSection.classList.add("top-margin");
    } else {
        header.classList.remove("sticky-header");
        firstSection.classList.remove("top-margin");
    }
});
