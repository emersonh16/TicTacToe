/*const gameboard = (() => {
    let board = ["","","","","","","","",""]

    const setField = (index, gamesign) => {
        board[index] = gamesign
        console.log(board)
    }

    return {setField}
});
*/

const gameController = (() => {

    let round = 1
    playerToken = "X"
    let board = ["", "", "", "", "", "", "", "", ""]

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];



    const fieldElements = document.querySelectorAll(".field")
    const resetButton = document.getElementById("resetBtn")
    const readOut = document.getElementById("gameStateReadout")

    resetButton.addEventListener("click", reset)

    fieldElements.forEach(clickfunction)

    function clickfunction(field) {
        field.addEventListener("click", playround)
    }

    function removeclick(field) {
        field.removeEventListener("click", playround)
    }

    function setToken() {
        if (round % 2 === 1) {
            playerToken = "X"
        }
        else {
            playerToken = "O"
        }
    }

    function playround(e) {
        if (e.target.innerHTML === "") {
            e.target.innerHTML = playerToken
            board[e.target.dataset.index] = playerToken
            round++
            setToken()
            //console.log(round)
            console.log(board)
            winConditions.forEach(checkWin)
        }
    }


    function checkWin(wincondition) {
        let Xticker = 0
        let Oticker = 0

        for (let i = 0; i < wincondition.length; i++) {
            if (board[wincondition[i]] == "X")
                Xticker++
            else if ((board[wincondition[i]] == "O"))
                Oticker++
        }

        if (Oticker == 3) {
            console.log(Oticker, "O wins")
            readOut.innerHTML = "O wins!!!"
            fieldElements.forEach(removeclick)
        }
        
        else if (Xticker == 3) {
            console.log(Xticker, "X wins")
            readOut.innerHTML = "X wins!!!"
            fieldElements.forEach(removeclick)
        }

        else if (round == 10 && Oticker < 3 && Xticker < 3){
            readOut.innerHTML = "DRAW!!!"
        }

    }

    function reset() {
        board = ["", "", "", "", "", "", "", "", ""]
        round = 1
        playerToken = "X"
        document.querySelectorAll(".field").forEach((field) => field.innerHTML = "")
        readOut.innerHTML = "Good luck!"
        fieldElements.forEach(clickfunction)
    }


});

gameController()
//gameboard()