export class Board {
    writeLetter(attempt: number, cell: number, letter: string) {
        Array.from(document.getElementById(`row_${attempt}`)!.children)[cell].textContent = letter;
    }

    deleteLetter(attempt: number, cell: number) {
        Array.from(document.getElementById(`row_${attempt}`)!.children)[cell].textContent = "";
    }

    changeBackgroundCellColor(attempt: number, cell: number, state: string) {
        let color = "cell-grey";

        //Cambiar por interface
        if (state == "rightLetter") color = "cell-green";
        if (state == "misplacedLetter") color = "cell-orange";

        Array.from(document.getElementById(`row_${attempt}`)!.children)[cell].classList.add(color);
    }

    changeBackgroundKeyColor(code: string) {
        const keys: any = document.getElementsByClassName("key");

        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add("keyPressed");
            }
        }
    }
}