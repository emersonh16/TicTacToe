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
    let board = ["","","","","","","","",""]
    let round = 1 
    playerToken = "X"
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

    fieldElements.forEach(clickfunction)
    
    function clickfunction(field) {
        field.addEventListener("click", playround)
    }

    function setToken() {
        if (round % 2 === 1) {
            playerToken = "X"}
        else {
            playerToken = "O"
        }
    }
    
    function playround(e) {
        if (e.target.innerHTML === "") {
        e.target.innerHTML = playerToken
        round ++
        setToken()
        board[e.target.dataset.index] = playerToken
        console.log(round)
        console.log(board)
        }
    }

});

gameController()
gameboard()