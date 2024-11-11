document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".BarraInicio"); // Botón MENU
    const columnaIzquierda = document.querySelector(".columna1");
    const cuerpo = document.querySelector(".cuerpo");

    menuButton.addEventListener("click", function(e) {
        e.preventDefault();
        columnaIzquierda.classList.toggle("oculto");
        cuerpo.classList.toggle("expandido");

    });
});
let cantidad = 1;

function incrementarCantidad() {
    cantidad++;
    document.getElementById("cantidad").textContent = cantidad;
}

function decrementarCantidad() {
    if (cantidad > 1) {
        cantidad--;
        document.getElementById("cantidad").textContent = cantidad;
    }
}
