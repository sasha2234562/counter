
export const prohibitedKeys = () => {
    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 110 || event.keyCode === 190 || event.keyCode === 190) { // Исключаем клавиши Enter (код 13) и Escape (код 27)
            event.preventDefault();
        }
    });
}