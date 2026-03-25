import { BLOCK_SIZE, BOARD_HEIGHT, BOARD_WIDTH } from './consts.js';

//Define canvas
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const $score = document.querySelector('span');

let audio;
let score = 0;


canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

//Board
// const board = [ 
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
// ]

const board = Array.from({length: BOARD_HEIGHT}, () => Array(BOARD_WIDTH).fill(0));

//Pieces

const piece = {
        position: { x:6, y:0 },
        shape: [
            [1,1],
            [1,1]
        ]
    }

const PIECES = [
    [
        [1,1],
        [1,1]
    ],
    [
        [1,1,1,1]
    ],
    [
        [0,1,0],
        [1,1,1]
    ],
    [
        [1,1,0],
        [0,1,1]
    ],
    [
        [0,1,1],
        [1,1,0]
    ],
    [
        [1,0],
        [1,0],
        [1,1]
    ],
     [
        [0,1],
        [0,1],
        [1,1]
    ],
    [
        [1,1]
    ]
]





//


//game loop recarga de frames  y bajado automatico de piezas
let dropCounter = 0;
let lastTime = 0;

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime
    if (dropCounter > 1000) {
        piece.position.y++
        dropCounter = 0
    
        if (checkCollision()) {
            piece.position.y--
            solidifyPiece()
            removeRows()
        }
    }

    
    draw();
    window.requestAnimationFrame(update)
}

function draw() {
    context.fillStyle= '#000'
    context.fillRect(0,0,canvas.width,canvas.height)

    board.forEach((currentRow, indiceY) => {
        currentRow.forEach((value,indiceX) => {
            if (value === 1) {
                context.fillStyle = 'yellow'
                context.fillRect(indiceX,indiceY,1,1)
            }
        })
    })

    piece.shape.forEach((currentRow,indiceY) => {
        currentRow.forEach((value,indiceX) => {
            if (value) {
                context.fillStyle = 'red'
                context.fillRect(indiceX + piece.position.x, indiceY + piece.position.y,1,1)
            }
        })
    })

    document.querySelector('span').innerText = score;
}

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        piece.position.x--
        if(checkCollision()) {
            piece.position.x++
        }
    } 
    if (event.key === 'ArrowRight') {
        piece.position.x++
        if(checkCollision()) {
            piece.position.x--
        }
    }
    if (event.key === 'ArrowDown') {
        piece.position.y++
        if(checkCollision()){
            piece.position.y--
            solidifyPiece();
            removeRows();
        }
    } 
    if (event.key === 'ArrowUp') {
        const rotated = [];

        for (let i = 0; i < piece.shape[0].length; i++) {
            const row = [];

            for(let j = piece.shape.length - 1; j >= 0; j--) {
                row.push(piece.shape[j][i]);
            }
            rotated.push(row);
        }

        const previousShape = piece.shape;
        piece.shape = rotated;
        if(checkCollision()) {
            piece.shape = previousShape
        }

    }
})

function checkCollision() {
    return piece.shape.find((row, y) => {
        return row.find((value, x) => {
            return (
                value !== 0 && 
                board[y + piece.position.y]?.[x + piece.position.x] !== 0
            )
        })
    })
}

//Solidificación de fichas
function solidifyPiece () {
    piece.shape.forEach ((row, y) => {
        row.forEach((value, x) => {
            if (value === 1) {
                board[y + piece.position.y ][x + piece.position.x] = 1
            }
        })
    })
    
    //resetPosition
    piece.position.x = Math.floor(BOARD_WIDTH / 2 - 2)
    piece.position.y = 0

    //getRandomShape
    piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)]

    //gameover
    if(checkCollision()) {
        window.alert('Game over');
        board.forEach((row) => row.fill(0))

         if (audio) {
            audio.pause();
        }
    }
} 

//Eliminar lineas
function removeRows() {
    const rowsToRemove = [];

    board.forEach((row, y) => {
        if (row.every(value => value === 1)) {
            rowsToRemove.push(y)
        }
    });

    rowsToRemove.forEach(y => {
        board.splice(y, 1);
        const newRow = Array(BOARD_WIDTH).fill(0)
        board.unshift(newRow)
        score += 10
    })
}

    const $section = document.querySelector('section');
    const $muteButton = document.querySelector('#mute');

    $section.addEventListener('click', () => {
        update()

        $section.remove()
        const audio = new window.Audio('./assets/tetris.mp3')
        audio.volume = 0.5
        audio.loop = true;
        audio.play()
    });

$muteButton.addEventListener('click', () => {
    if (audio) {
        audio.muted = !audio.muted;
        $muteButton.textContent = audio.muted ? 'Unmute' : 'Mute';
    }
});


