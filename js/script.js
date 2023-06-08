let menu2 = document.getElementById("1234");
let menu_barras = document.getElementById("menu_barras");

function mostrarMenu() {
    if (window.getComputedStyle(menu2).display === "none") {
        menu2.style.display = "flex";
        menu_barras.setAttribute("aria-label", "fechar menu");
        menu_barras.setAttribute("aria-expanded", "true");
    } else {
        menu2.style.display = "none";
        menu_barras.setAttribute("aria-label", "abrir menu");
        menu_barras.setAttribute("aria-expanded", "false");
    }
}
