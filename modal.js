const modalContent = document.querySelector(".modal-content");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const img = document.createElement("img");
modalTriggers.forEach((item) => {
    item.addEventListener("click", function () {
        modalWrapper.classList.add("show-modal");
        img.classList.add("modal-img");
        img.setAttribute("src", this.attributes.src.value);
        modalContent.appendChild(img);
    });
});
const closeIcon = document.querySelector(".x-icon");
closeIcon.addEventListener("click", () =>
    modalWrapper.classList.remove("show-modal")
);
