document.querySelector("#menu-tlacitko").addEventListener("click", () => {
    let hamburgerElement = document.querySelector("#menu-polozky");
    let buttonElement = document.querySelector("#menu-tlacitko");
    
    if (hamburgerElement.classList.contains("show")) {
        hamburgerElement.classList.remove("show");
        buttonElement.innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
        hamburgerElement.classList.add("show");
        buttonElement.innerHTML = `<i class="fas fa-xmark"></i>`;
    }
})