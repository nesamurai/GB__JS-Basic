function makeChessBoard() {

    // Making odd rows
    for (var col = 1; col < 5; col++) {
        for (var row = 1; row < 5; row++) {
            var firstDiv = document.createElement("div");
            firstDiv.style.position = "fixed";
            firstDiv.style.top = 100 * col - 50 + "px";
            firstDiv.style.left = 100 * row - 50 + "px";
            firstDiv.style.width = "50px";
            firstDiv.style.height = "50px";
            firstDiv.style.border = "1px solid #000000";
            document.body.append(firstDiv);

            var secondDiv = document.createElement("div");
            secondDiv.style.backgroundColor = "black";
            secondDiv.style.position = "fixed";
            secondDiv.style.top = 100 * col - 50 + "px";
            secondDiv.style.left = 100 * row + "px";
            secondDiv.style.width = "50px";
            secondDiv.style.height = "50px";
            secondDiv.style.border = "1px solid #000000";
            document.body.append(secondDiv);
        }
    }

    // Making even rows
    for (var column = 1; column < 5; column++) {
        for (var line = 1; line < 5; line++) {
            var thirdDiv = document.createElement("div");
            thirdDiv.style.backgroundColor = "black";
            thirdDiv.style.position = "fixed";
            thirdDiv.style.top = 100 * column + "px";
            thirdDiv.style.left = 100 * line - 50 + "px";
            thirdDiv.style.width = "50px";
            thirdDiv.style.height = "50px";
            thirdDiv.style.border = "1px solid #000000";
            document.body.append(thirdDiv);

            var fourthDiv = document.createElement("div");
            fourthDiv.style.position = "fixed";
            fourthDiv.style.top = 100 * column + "px";
            fourthDiv.style.left = 100 * line + "px";
            fourthDiv.style.width = "50px";
            fourthDiv.style.height = "50px";
            fourthDiv.style.border = "1px solid #000000";
            document.body.append(fourthDiv);
        }
    }

    // Making a row with letters
    const lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let char of lettersArray) {
        var size = 1 + lettersArray.indexOf(char);
        var letterDiv = document.createElement("div");
        letterDiv.style.position = "fixed";
        letterDiv.style.top = "470px";
        letterDiv.style.left = 50 * size + "px";
        letterDiv.style.width = "50px";
        letterDiv.style.height = "50px";
        letterDiv.textContent = char;
        letterDiv.style.textAlign = "center";
        document.body.append(letterDiv);
    }

    // Making a column with digits
    for (var digit = 1; digit < 9; digit++) {
        var digitDiv = document.createElement("div");
        digitDiv.style.position = "fixed";
        digitDiv.style.top = 470 - 50 * digit + "px";
        digitDiv.style.left = "5px";
        digitDiv.style.width = "50px";
        digitDiv.style.height = "50px";
        digitDiv.textContent = digit;
        digitDiv.style.textAlign = "center";
        document.body.append(digitDiv);
    }
}

makeChessBoard();
