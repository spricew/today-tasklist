document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionamos todos los botones que sean círculos de check
    const checkButtons = document.querySelectorAll('.check-circle');

    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const taskItem = this.closest('.task-item');
            
            this.classList.toggle('checked');
            
            if (taskItem) {
                taskItem.classList.toggle('completed');
            }
            
            // Si tiene la clase checked, añadimos el ícono SVG de la palomita
            if (this.classList.contains('checked')) {
                this.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg>`;
            } else {
                // Si se desmarca, quitamos el SVG
                this.innerHTML = '';
            }
        });
    });

});