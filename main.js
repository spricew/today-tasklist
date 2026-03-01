document.addEventListener("DOMContentLoaded", () => {
    // Inicializar iconos Lucide
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    const checkButtons = document.querySelectorAll(".check-circle");

    checkButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const taskItem = this.closest(".task-item");

            this.classList.toggle("checked");

            if (taskItem) {
                taskItem.classList.toggle("completed");
            }

            if (this.classList.contains("checked")) {
                this.innerHTML = '<i data-lucide="check" aria-hidden="true"></i>';
                if (typeof lucide !== "undefined") lucide.createIcons();
            } else {
                this.innerHTML = "";
            }
        });
    });

    function createPrimaryButton(text, onClickCallback) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn-primary";
        button.innerHTML = `<i data-lucide="plus" aria-hidden="true"></i> ${text}`;

        if (typeof onClickCallback === "function") {
            button.addEventListener("click", onClickCallback);
        }

        return button;
    }

    const actionsContainer = document.getElementById("header-actions-container");

    function handleNewTaskClick() {
        console.log("click");
    }

    const myNewTaskButton = createPrimaryButton("New Task", handleNewTaskClick);
    actionsContainer.appendChild(myNewTaskButton);

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
});
