document.addEventListener("DOMContentLoaded", () => {
    // Inicializar iconos Lucide
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    const THEME_STORAGE_KEY = "today-app-theme";

    function applyTheme(theme) {
        const normalizedTheme = theme === "dark" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", normalizedTheme);

        try {
            localStorage.setItem(THEME_STORAGE_KEY, normalizedTheme);
        } catch (e) {
        }
    }

    function getInitialTheme() {
        try {
            const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

            if (storedTheme === "light" || storedTheme === "dark") {
                return storedTheme;
            }
        } catch (e) {
        }

        return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }

    applyTheme(getInitialTheme());

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

    function updateThemeToggleButton(button, theme) {
        if (theme === "dark") {
            button.setAttribute("aria-label", "Cambiar a tema claro");
            button.innerHTML = '<i data-lucide="sun-medium" aria-hidden="true" class="ola"></i>';
        } else {
            button.setAttribute("aria-label", "Cambiar a tema oscuro");
            button.innerHTML = '<i data-lucide="moon-star" aria-hidden="true" class="ola"></i>';
        }
    }

    function createThemeToggleButton() {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "theme-toggle-btn";

        const currentTheme =
            document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

        updateThemeToggleButton(button, currentTheme);

        button.addEventListener("click", () => {
            const previousTheme =
                document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
            const nextTheme = previousTheme === "dark" ? "light" : "dark";

            applyTheme(nextTheme);
            updateThemeToggleButton(button, nextTheme);

            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }
        });

        return button;
    }

    const actionsContainer = document.getElementById("header-actions-container");

    function handleNewTaskClick() {
        console.log("click");
    }

    const myNewTaskButton = createPrimaryButton("New Task", handleNewTaskClick);
    actionsContainer.appendChild(myNewTaskButton);

    const themeToggleButton = createThemeToggleButton();
    actionsContainer.appendChild(themeToggleButton);

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
});
