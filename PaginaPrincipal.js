document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el primer menú desplegable (Cuenta)
    var dropbtn1 = document.querySelector('.dropbtn');
    var dropdown1 = document.querySelector('.dropdown-content');

    dropbtn1.addEventListener('click', function(event) {
        dropdown1.classList.toggle('show');
        event.stopPropagation(); // Evitar que el evento se propague
    });

    // Función para manejar el segundo menú desplegable (Mis Reservas Mensuales)
    var dropbtn2 = document.querySelector('.dropbtn2');
    var dropdown2 = document.querySelector('.dropdown-numerodos');

    dropbtn2.addEventListener('click', function(event) {
        dropdown2.classList.toggle('show');
        event.stopPropagation(); // Evitar que el evento se propague
    });

    // Función para manejar el tercer menú desplegable (Materiales)
    var dropbtn3 = document.querySelector('.dropbtn3');
    var dropdown3 = document.querySelector('.dropdown-materiales');

    dropbtn3.addEventListener('click', function(event) {
        dropdown3.classList.toggle('show');
        event.stopPropagation(); // Evitar que el evento se propague
    });

    // Función para manejar el cuarto menú desplegable (Contacto y Soporte)
    var dropbtn4 = document.querySelector('.dropbtn4');
    var dropdown4 = document.querySelector('.dropdown-contacto');

    dropbtn4.addEventListener('click', function(event) {
        dropdown4.classList.toggle('show');
        event.stopPropagation(); // Evitar que el evento se propague
    });

    // Cerrar todos los menús desplegables si se hace clic fuera de ellos
    window.addEventListener('click', function() {
        if (dropdown1.classList.contains('show')) {
            dropdown1.classList.remove('show');
        }
        if (dropdown2.classList.contains('show')) {
            dropdown2.classList.remove('show');
        }
        if (dropdown3.classList.contains('show')) {
            dropdown3.classList.remove('show');
        }
        if (dropdown4.classList.contains('show')) {
            dropdown4.classList.remove('show');
        }
    });
});
