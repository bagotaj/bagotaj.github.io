function displayWord(word) {
    let op = 0;
    let id = setInterval(duration, 100);
    function duration() {
        if (op == 100) {
            clearInterval(id);
        } else {
            op += 5;

            word.style.opacity = op + "%";
        }
    }
}
