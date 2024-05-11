function irARevisionGeneral() {
    window.location.href = "revision_general.html";
}

function irAOrdenesDeServicio() {
    window.location.href = "ordenes_de_servicio.html";
}

// Escuchar cambios en los selectores
document.querySelectorAll('.revision-select').forEach(selector => {
    selector.addEventListener('change', function() {
        var selectedOption = this.value;

        // Obtener el elemento <li> padre
        var listItem = this.parentElement;

        // Limpiar cualquier estilo anterior en las opciones
        listItem.querySelectorAll('option').forEach(option => {
            option.style.backgroundColor = '';
            option.style.color = '';
        });

        // Ocultar todos los campos de comentario
        listItem.querySelectorAll('.comentario-container').forEach(container => {
            container.style.display = 'none';
        });

        // Aplicar estilo según la opción seleccionada
        switch (selectedOption) {
            case 'bueno':
                this.style.backgroundColor = '#7FFF7F'; // Verde claro
                this.style.color = '#000000'; // Texto negro
                break;
            case 'malo':
                this.style.backgroundColor = '#FF7F7F'; // Rojo claro
                this.style.color = '#000000'; // Texto negro
                // Mostrar el campo de comentario
                listItem.querySelector('.comentario-container').style.display = 'block';
                break;
            case 'na':
                this.style.backgroundColor = '#CCCCCC'; // Gris claro
                this.style.color = '#000000'; // Texto negro
                break;
            default:
                break;
        }
    });
});

