document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll(".button");

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;
            
            if (value === "C") {
                currentInput = "";
                result.value = "";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                    result.value = currentInput;
                } catch {
                    result.value = "Erro";
                    currentInput = "";
                }
            } else {
                currentInput += value;
                result.value = currentInput;
            }
        });
    });
});
