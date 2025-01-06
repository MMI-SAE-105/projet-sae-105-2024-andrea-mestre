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

