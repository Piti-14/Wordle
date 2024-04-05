export class Board {
    writeLetter(attempt, cell, letter) {
        Array.from(document.getElementById(`row_${attempt}`).children)[cell].textContent = letter;
    }
    deleteLetter(attempt, cell) {
        Array.from(document.getElementById(`row_${attempt}`).children)[cell].textContent = "";
    }
    changeBackgroundCellColor(attempt, cell, state) {
        let color = "cell-grey";
        //Cambiar por interface
        if (state == "rightLetter")
            color = "cell-green";
        if (state == "misplacedLetter")
            color = "cell-orange";
        Array.from(document.getElementById(`row_${attempt}`).children)[cell].classList.add(color);
    }
    changeBackgroundKeyColor(code) {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add("keyPressed");
            }
        }
    }
}
