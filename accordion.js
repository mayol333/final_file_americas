const accordion = document.querySelectorAll(".contentBox");
accordion.forEach((element, index) => {
    element.addEventListener("click", function () {
        this.classList.toggle("active");
        accordion.forEach((el, inx) => {
            if (inx !== index) {
                el.classList.remove("active");
            }
        });
    });
});
