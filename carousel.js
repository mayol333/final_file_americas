const oneStar = document.querySelector(".one-stars-div");
const twoStar = document.querySelector(".two-stars-div");
const threeStar = document.querySelector(".three-stars-div");
const fourStar = document.querySelector(".four-stars-div");
const leftButton = document.querySelector(".first-arrow-button");
const rightButton = document.querySelector(".second-arrow-button");
let number = 0;
const obj = {
    0: oneStar,
    1: twoStar,
    2: threeStar,
    3: fourStar,
};
leftButton.addEventListener("click", () => {
    if (number === 0) {
        number = 3;
    } else {
        number--;
    }
    obj[number].classList.add("gray-background");
    if (number === 3) {
        obj[0].classList.remove("gray-background");
    } else obj[number + 1].classList.remove("gray-background");
});

rightButton.addEventListener("click", () => {
    if (number === 3) {
        number = 0;
    } else {
        number++;
    }
    obj[number].classList.add("gray-background");
    if (number === 0) {
        obj[3].classList.remove("gray-background");
    } else obj[number - 1].classList.remove("gray-background");
});
