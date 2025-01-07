const toggle = document.querySelector(".menu__btn");
const closeBtn = document.querySelector(".menu__close--btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}

closeBtn.addEventListener("click", () => {
    nav.ariaHidden = true;
    toggle.ariaExpanded = false;
    page.classList.remove("noscroll");
});

const carousel = document.querySelector(".carrousel__container");
const prevButton = document.querySelector(".carrousel__btn--prev");
const nextButton = document.querySelector(".carrousel__btn--next");

if (carousel) {
    const premierItem = document.querySelector(".carrousel__item");
    const scrollAmount = premierItem.clientWidth;

    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
    });
}