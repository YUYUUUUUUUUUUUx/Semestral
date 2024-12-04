
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

    

       

    