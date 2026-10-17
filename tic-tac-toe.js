document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];

    squares.forEach(function (square, index) {
        square.classList.add("square");

        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            gameState[index] = currentPlayer;

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    });
});