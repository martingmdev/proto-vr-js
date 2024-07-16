$(document).ready(function() {
    // Obtener la URL actual
    let path = window.location.pathname;
    let page = path.split("/").pop(); // Obtener el nombre del archivo actual

    // Iterar a través de los enlaces y aplicar la clase 'active' según la URL
    $('.navbar-nav .nav-link').each(function() {
        let href = $(this).attr('href');
        // Comparar solo el nombre del archivo (por ejemplo, 'index.php' o 'modelos.php')
        if (href === page) {
            $(this).addClass('active');
        }
    });
});