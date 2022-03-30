document.getElementById("game").style.visibility = "hidden";
var count = 1;
var ok = 0;
const board = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function colorWin(pos1, pos2, pos3) {
    pos1.style.color = "red";
    pos2.style.color = "red";
    pos3.style.color = "red";
}

function checkWin(winner) {
    for (let cnt = 0; cnt < 8; ++cnt) {
        let a = document.getElementById("text" + board[cnt][0]).innerText;
        let b = document.getElementById("text" + board[cnt][1]).innerText;
        let c = document.getElementById("text" + board[cnt][2]).innerText;
        if (a === b && b === c && a !== '') {
            document.getElementById("win").textContent = winner + " WIN";
            var x = document.getElementById("text" + board[cnt][0]);
            var y = document.getElementById("text" + board[cnt][1]);
            var z = document.getElementById("text" + board[cnt][2]);
            colorWin(x, y, z);
            ok = 1;
        }
    }
}

function fill(id) {
    if (ok == 0) {
        if (count % 2 == 1) {
            if (document.getElementById("text" + id).textContent === '') {
                document.getElementById("text" + id).textContent = 'X';
                if (count > 3) {
                    checkWin('X');
                }
                ++count;
            }
        } else {
            if (document.getElementById("text" + id).textContent === '') {
                document.getElementById("text" + id).textContent = '0';
                if (count > 3) {
                    checkWin('0');
                }
                ++count;
            }
        }
    }
    if (ok == 0) {
        if (count == 10) {
            document.getElementById("win").textContent = "DRAW";
            document.getElementById("text".id).textContent = 'X';
            ok = 1;
        }
    }
}

function startGamePlayer() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("game").style.visibility = "visible";
}