const squares = document.querySelectorAll('.square');
const reset = document.querySelector('.reset');
const body = document.querySelector('body');

const x = '<svg xmlns="http://www.w3.org/2000/svg" width="200" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>';

const circle = '<svg xmlns="http://www.w3.org/2000/svg" width="140" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"></path></svg>';

let currentPlayer = 0;

squares.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.innerHTML) return;

        if (currentPlayer === 0) {
            el.innerHTML = x;
            checkWinner(x)
        }
        else if (currentPlayer === 1) {
            el.innerHTML = circle;
            checkWinner(circle)
        }
        currentPlayer = 1 - currentPlayer;
        body.style.background = currentPlayer === 0
            ? 'linear-gradient(90deg, rgba(0,1,255,0.77) 50%, rgba(0,0,0,1) 70%, rgba(255,0,0,0.7651435574229692) 100%)'
            : 'linear-gradient(90deg, rgba(0,1,255,0.77) 0%, rgba(0,0,0,1) 30%, rgba(255,0,0,0.7651435574229692) 50%)';
    });
});

function clearGrid() {
    squares.forEach((el) => {
        el.innerHTML = '';
    });
    currentPlayer = 0;
    body.style.background = 'linear-gradient(90deg, rgba(0, 1, 255, 0.77) 0%, rgba(0, 0, 0, 1) 50%, rgba(255, 0, 0, 0.7651435574229692) 100%)';
}

reset.addEventListener('click', () => {
    clearGrid();
});

function checkWinner(play) {
    if ((squares[0].innerHTML === play && squares[1].innerHTML === play && squares[2].innerHTML === play) ||
        (squares[3].innerHTML === play && squares[4].innerHTML === play && squares[5].innerHTML === play) ||
        (squares[6].innerHTML === play && squares[7].innerHTML === play && squares[8].innerHTML === play) ||
        (squares[0].innerHTML === play && squares[3].innerHTML === play && squares[6].innerHTML === play) ||
        (squares[1].innerHTML === play && squares[4].innerHTML === play && squares[7].innerHTML === play) ||
        (squares[2].innerHTML === play && squares[5].innerHTML === play && squares[8].innerHTML === play) ||
        (squares[0].innerHTML === play && squares[4].innerHTML === play && squares[8].innerHTML === play) ||
        (squares[2].innerHTML === play && squares[4].innerHTML === play && squares[6].innerHTML === play)) {
        if (currentPlayer === 0) {
            showModal('X wins!');
            currentPlayer = 0;
        }
        else if (currentPlayer === 1) {
            showModal('Circle wins!');
            currentPlayer = 0;
        }
    }
    else if(squares[0].innerHTML !== '' && squares[1].innerHTML !== '' && squares[2].innerHTML !== '' && squares[3].innerHTML !== '' && squares[4].innerHTML !== '' && squares[5].innerHTML !== '' && squares[6].innerHTML !== '' && squares[7].innerHTML !== '' && squares[8].innerHTML !== ''){
        showModal("It's a draw!")
    }
}

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const winner = document.getElementById('winner');
    modalMessage.textContent = message;
    winner.innerHTML = currentPlayer === 0 ? x : circle;
    modal.style.display = 'block';
}

const closeModal = document.getElementById('play-again');
closeModal.onclick = function () {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    clearGrid();
    currentPlayer = 0;
};

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
        clearGrid();
        currentPlayer = 0;
    }
};
