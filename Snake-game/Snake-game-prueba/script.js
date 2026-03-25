//Define html
const board = document.getElementById('game-board');
const instructionText = document.getElementById('instructionText');
const score = document.getElementById('score');
const _highScore = document.getElementById('highScore');
//Define constant
const gridSize = 20;

//Define game variables
let snake = [{x:10, y:10}];
let food = generateFood();
let gameStarted = false;
let direction = 'right';
let gameSpeedDelay = 200;
let gameInterval;
let highScore = 0;



//Functions
//Generate aleatory position of foodElement
function generateFood(){
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return {x,y};
}

//Create game element: snake/food as a cube(div).
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//Sets positions of the games elements.
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
    
}

function drawSnake() {
    if (gameStarted) {
        snake.forEach((segment) => {
            const snakeElement = createGameElement('div', 'snake');
            setPosition(snakeElement, segment);
            board.appendChild(snakeElement);
        })
    }
}

function drawFood() {
    if (gameStarted) {
        const foodElement = createGameElement('div', 'food');
        setPosition(foodElement, food);
        board.appendChild(foodElement); 
    }

}

function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
    updateScore();
}

function move() {
    const head = {...snake[0]};
    switch (direction) {
        case 'up':
            head.y--;  
            break;
        case 'down':
            head.y++;  
            break;
        case 'left':
            head.x--;  
            break;
        case 'right':
            head.x++;  
            break;  
    }

    snake.unshift(head);

    if(head.x === food.x && head.y === food.y) {
        food = generateFood();
        increaseSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            move();
            checkCollisions();
            draw();
        }, gameSpeedDelay);
    } else {
        snake.pop();
    }

}

function checkCollisions() {
    const head = snake[0];
    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        resetGame();
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
            break;
        }
    }
}


function startGame() {
    gameStarted = true;
    instructionText.style.display = 'none'; 
    gameInterval = setInterval(() => {
        move();
        checkCollisions();
        draw();
    }, gameSpeedDelay);
}

function resetGame() {
    updateHighScore();
    updateScore();
    gameStarted = false;
    instructionText.style.display = 'block'
    clearInterval(gameInterval);
    snake = [{x: 10, y: 10}]; 
    food = generateFood();
    direction = 'right';
    gameSpeedDelay = 200;
}


//Keypress events to run game and movements
function handleKeyPress(event){
    if(!gameStarted && event.code === 'Space') {
        startGame();
    } else {
        switch (event.key)  {
            case 'ArrowUp':
                if (direction !== 'down') direction = 'up'; 
                break;
            case 'ArrowDown':
                if (direction !== 'up') direction = 'down'
                break;
            case 'ArrowRight':
                if (direction !== 'left') direction = 'right'
                break;
            case 'ArrowLeft':
                if (direction !== 'right') direction = 'left'
                break;
        }
    }
}

function increaseSpeed() {
    if( gameSpeedDelay > 150) {
        gameSpeedDelay -=5; 
    } else if (gameSpeedDelay > 100) {
        gameSpeedDelay -=3;
    } else if (gameSpeedDelay > 50) {
        gameSpeedDelay -=2;
    } else if (gameSpeedDelay > 25) {
        gameSpeedDelay -=1;
    } 
}  

document.addEventListener('keydown', handleKeyPress);

function updateScore() {
    const currentScore = snake.length -1;
    score.textContent = currentScore;
}

function updateHighScore() {
    const currentScore = snake.length -1;
    if (currentScore > highScore) {
        highScore = currentScore;
        _highScore.textContent = highScore;
    }
} 

