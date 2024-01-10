function calculator() {
    var string = " ";
    var buttons = document.querySelectorAll('.button a');

    Array.from(buttons).forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default behavior of anchor tags
            var buttonText = e.target.innerHTML;

            if (buttonText === "=") {
                string = eval(string);
                document.querySelector('input').value = string;
            } else if (buttonText === "C") {
                string = " ";
                document.querySelector('input').value = string;
            } else if (buttonText === "." && string.slice(-1) === ".") {
                alert("Error: Consecutive dots are not allowed");
            } else if (
                (buttonText === "+" && string.slice(-1) === "+") ||
                (buttonText === "-" && string.slice(-1) === "-") ||
                (buttonText === "/" && string.slice(-1) === "/") ||
                (buttonText === "*" && string.slice(-1) === "*")
            ) {
                alert("Error: Consecutive operators are not allowed");
            } else {
                console.log(buttonText);
                string = string + buttonText;
                document.querySelector('input').value = string;
            }
        });
    });
}

calculator();
