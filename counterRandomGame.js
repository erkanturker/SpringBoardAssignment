function countDown(count) {
    const id = setInterval(function () {
        count--;
        console.log(count);
        if (count == 1) {
            console.log("Done");
            clearInterval(id);
        }
    }, 1000);
}


function randomGame() {
    let count = 0;
    const id = setInterval(function () {
        let randomDecimal = (Math.random() * 1).toFixed(2);
        count++
        if (randomDecimal >= 0.75) {
            console.log(`${count} attemt to find greater than 0.75 and the value${randomDecimal}`)
            clearInterval(id);
        }
    }, 1000)
}
randomGame();