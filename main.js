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

function createPrimaryButton(text, onClickCallback) {
    const button = document.createElement('button');
    
    button.className = 'btn-primary';
    
    const plusIconSvg = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    `;
    
    button.innerHTML = `${plusIconSvg} ${text}`;
    
    if (typeof onClickCallback === 'function') {
        button.addEventListener('click', onClickCallback);
    }
    
    return button;
}

// seleccion del contenedor donde irá el botón
const actionsContainer = document.getElementById('header-actions-container');

function handleNewTaskClick() {
    console.log("click");
}

const myNewTaskButton = createPrimaryButton('New Task', handleNewTaskClick);

actionsContainer.appendChild(myNewTaskButton);

});