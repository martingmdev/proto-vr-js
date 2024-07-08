document.addEventListener("DOMContentLoaded", function() {
    function loadSection(sectionId, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;
            })
            .catch(error => console.error('Error cargando la sección:', error));
    }

    loadSection('navbar-container', 'navbar.html');
    loadSection('modelosmod-container', 'modelosmod.html');
    loadSection('footer-container', 'footer.html');
});