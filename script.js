
let player = "X"
let winner = ""
let play_board = ["", "", "", "", "", "", "", "", ""]

const checkWinner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let line of lines) {
    const [a, b, c] = line;
    if (
      play_board[a] &&
      play_board[a] === play_board[b] &&
      play_board[a] === play_board[c]
    ) {
      winner = play_board[a]; 
      return true; 
    }
  }
  return false; 
};


const reset_board = () => {
  play_board = ["", "", "", "", "", "", "", "", ""] 

  document.querySelectorAll(".block").forEach((block) => {
    block.textContent = ""
    block.classList.remove("occupied")
  })
  document.getElementById("winner_message").textContent = ""
};

const addPlayerMove = (index) => {
  if (play_board[index] === "") {
    play_board[index] = player;
    document.getElementById(`block_${index}`).textContent = player;
    document.getElementById(`block_${index}`).classList.add("occupied");
  } else {
    alert(`Block ${index + 1} is already occupied!`)
    return;
  }

  if (checkWinner()) {
    document.getElementById("winner_message").textContent = `Player ${player} wins!`
  } else {
    player = player === "X" ? "O" : "X"
  }
}

const cells = document.querySelectorAll('.block')
let currentPlayer = 'X'

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = parseInt(cell.id.split('_')[1]);
    if (!cell.textContent) {
      addPlayerMove(index);
      if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`)
        reset_board();
      } else if (isDraw()) {
        alert('It\'s a draw!')
        reset_board();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
      }
      cell.textContent = currentPlayer;
    }
  })
})

const isDraw = () => {
  return play_board.every(cell => cell !== '') && !checkWinner();
};   
