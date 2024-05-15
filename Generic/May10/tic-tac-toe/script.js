let turn = 'X';
let cells = document.querySelectorAll('.cell');
let turnDisplay = document.getElementById('turn-display');
let onePlayerBtn = document.getElementById('one-player-btn');
let twoPlayerBtn = document.getElementById('two-player-btn');
let numPlayers;

onePlayerBtn.addEventListener('click', () => {
  numPlayers = 1;
  startGame();
});

twoPlayerBtn.addEventListener('click', () => {
  numPlayers = 2;
  startGame();
});

function startGame() {
  onePlayerBtn.disabled = true;
  twoPlayerBtn.disabled = true;
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cell.innerHTML === '') {
        cell.innerHTML = turn;
        checkForWin();
        turn = turn === 'X' ? 'O' : 'X';
        turnDisplay.innerHTML = `Turn: ${turn}`;
        if (numPlayers === 1 && turn === 'O') {
          cpuTurn();
        }
      }
    });
  });
}

function cpuTurn() {
  let emptyCells = Array.from(cells).filter((cell) => cell.innerHTML === '');
  let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  randomCell.innerHTML = 'O';
  checkForWin();
  turn = 'X';
  turnDisplay.innerHTML = `Turn: ${turn}`;
}

function checkForWin() {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    let cell1 = cells[combination[0]];
    let cell2 = cells[combination[1]];
    let cell3 = cells[combination[2]];

    if (
      cell1.innerHTML !== '' &&
      cell1.innerHTML === cell2.innerHTML &&
      cell1.innerHTML === cell3.innerHTML
    ) {
      alert(`Player ${cell1.innerHTML} wins!`);
      resetGame();
    }
  }

  if (!document.querySelector('.cell:empty')) {
    alert("It's a draw!");
    resetGame();
  }
}

function resetGame() {
  cells.forEach((cell) => (cell.innerHTML = ''));
  turn = 'X';
  turnDisplay.innerHTML = `Turn: ${turn}`;
  onePlayerBtn.disabled = false;
  twoPlayerBtn.disabled = false;
}
