
    // Selección de elementos
    const modal = document.getElementById('welcomeModal');
    const closeModal = document.querySelector('.close');

    // Mostrar el modal cuando la página se carga
    window.onload = () => {
        modal.style.display = 'block';
    };

    // Cerrar el modal al hacer clic en la "X"
    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    // Cerrar el modal si se hace clic fuera del contenido
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    

       
    document.addEventListener('DOMContentLoaded', () => {
        const carrusel = document.querySelector('.carrusel');
        const items = document.querySelectorAll('.carrusel-item');
        const btnAnterior = document.querySelector('.carrusel-btn.anterior');
        const btnSiguiente = document.querySelector('.carrusel-btn.siguiente');
        let indice = 0;
    
        const mostrarItem = () => {
            carrusel.style.transform = `translateX(-${indice * 100}%)`;
        };
    
        btnAnterior.addEventListener('click', () => {
            console.log('Botón Anterior Clicado');
            indice = (indice > 0) ? indice - 1 : items.length - 1;
            mostrarItem();
        });
    
        btnSiguiente.addEventListener('click', () => {
            console.log('Botón Siguiente Clicado');
            indice = (indice < items.length - 1) ? indice + 1 : 0;
            mostrarItem();
        });
    
        mostrarItem();
    });
    