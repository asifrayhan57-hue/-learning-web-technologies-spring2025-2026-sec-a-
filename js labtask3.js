// Tic-Tac-Toe game script
// Written in plain JS style similar to your original file (getElementById, addEventListener, etc).
 
// DOM elements
let boardEl = document.getElementById('board');
let statusEl = document.getElementById('status');
let currentPlayerEl = document.getElementById('currentPlayer');
let msgEl = document.getElementById('message');
let resetBtn = document.getElementById('reset');
let resetScoresBtn = document.getElementById('resetScores');
let scoreXEl = document.getElementById('scoreX');
let scoreOEl = document.getElementById('scoreO');
 
// Game state
let boardState = [];          // 9-element array of '', 'X', 'O'
let currentPlayer = 'X';
let gameActive = true;
let scores = { X: 0, O: 0 };
 
// Winning combinations (indices)
let winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
 
// Initialize game (create cells, attach listeners, set state)
function initGame() {
    // clear board container first (in case of re-init)
    boardEl.innerHTML = '';
 
    // initialize state array
    boardState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    updateStatus();
 
    // Create 9 cells and attach click listeners
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute('data-index', i);
        // click handler — similar pattern to your btn listeners
        cell.addEventListener('click', function(){
            onCellClick(i, cell);
        });
        boardEl.appendChild(cell);
    }
 
    // clear any message area
    msgEl.innerHTML = '';
}
 
// Handle cell click
function onCellClick(index, cellEl) {
    if (!gameActive) {
        // don't allow clicks after game ended
        msgEl.innerHTML = 'Game over — press Reset to play again.';
        return;
    }
 
    if (boardState[index] !== '') {
        // already filled
        msgEl.innerHTML = 'Cell already marked — choose another.';
        return;
    }
 
    // mark state and UI
    boardState[index] = currentPlayer;
    cellEl.innerHTML = currentPlayer;
    // small animation class
    cellEl.classList.add('marked');
 
    // after a short moment remove 'marked' so next marks animate too
    setTimeout(function(){
        cellEl.classList.remove('marked');
    }, 160);
 
    // check for a win or draw
    let result = checkResult();
    if (result.winner) {
        // highlight winning cells
        result.combo.forEach(function(idx){
            let c = boardEl.querySelector('[data-index="'+idx+'"]');
            if (c) c.classList.add('win');
        });
        // update scores and UI
        scores[result.winner] += 1;
        updateScores();
        statusEl.innerHTML = 'Winner: <strong>' + result.winner + '</strong> 🎉';
        gameActive = false;
        msgEl.innerHTML = 'Press Reset to play again.';
        return;
    }
 
    if (result.draw) {
        statusEl.innerHTML = "It's a draw!";
        gameActive = false;
        msgEl.innerHTML = 'Press Reset to play again.';
        return;
    }
 
    // switch player and continue
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    updateStatus();
    msgEl.innerHTML = '';
}
 
// Check for win or draw — returns { winner: 'X'|'O'|null, combo: [idxs]|null, draw: boolean }
function checkResult() {
    // check all combos
    for (let i = 0; i < winCombos.length; i++) {
        let [a,b,c] = winCombos[i];
        if (boardState[a] !== '' && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return { winner: boardState[a], combo: winCombos[i], draw: false };
        }
    }
 
    // draw if no empty cells left
    let isDraw = boardState.every(function(cell){ return cell !== ''; });
    if (isDraw) return { winner: null, combo: null, draw: true };
 
    return { winner: null, combo: null, draw: false };
}
 
// Update status display
function updateStatus(){
    currentPlayerEl.innerText = currentPlayer;
    statusEl.innerHTML = 'Current player: <strong id="currentPlayer">' + currentPlayer + '</strong>';
}
 
// Update scoreboard UI
function updateScores() {
    scoreXEl.innerText = scores.X;
    scoreOEl.innerText = scores.O;
}
 
// Reset current round (preserve scores)
resetBtn.addEventListener('click', function(){
    // clear any win highlight
    let winCells = boardEl.querySelectorAll('.cell.win');
    for (let i=0;i<winCells.length;i++){
        winCells[i].classList.remove('win');
    }
    initGame();
});
 
// Reset scores to zero and reset board
resetScoresBtn.addEventListener('click', function(){
    scores.X = 0;
    scores.O = 0;
    updateScores();
    initGame();
});
 
// Start the game on page load
initGame();
 