//Define HTML elements
const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');

//Define game variables
const gridSize = 20; // Size of the grid
let snake = [{x: 10, y: 10}]; // Initial position of the snake
let food = generateFood(); // Initial food position
let highScore = 0; // Variable to hold the high score
let direction = 'right'; // Initial direction of the snake
let gameInterval; // Variable to hold the game interval
let gameSpeedDelay = 200; // Speed of the game in milliseconds
let gameStarted = false; // Flag to check if the game has started

//Principal function
function draw() {
    board.innerHTML = ''; // Clear the board
    drawSnake();
    drawFood();
    updateScore(); 
}

// Creates game element: a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// Sets the position of a game element
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Draws the snake 
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

//Draw food function
function drawFood() {
    if (gameStarted) {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}
}

function generateFood() {
 const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
};

//Moving snake
function move(){
    const head = { ...snake[0] }; 
    switch (direction) {
        case 'up': 
            head.y--;
            break;
        case 'down':
            head.y++;
            break;    
        case 'right':
            head.x++;
            break;
        case 'left':
            head.x--;
            break;  
    }
    snake.unshift(head); // Add new head to the snake array
    
    
    if (head.x === food.x && head.y === food.y) {
        food = generateFood(); // Generate new food if the snake eats it
        increaseSpeed(); // Increase game speed
        clearInterval(gameInterval); // Clear the previous interval
        gameInterval = setInterval(() => {
            move(); 
            checkCollision(); // Check for collisions
            draw();
        }, gameSpeedDelay);
    } else {
        snake.pop(); // Remove the last segment of the snake 
    }
                      
}

function startGame() {
    gameStarted = true; // Set game started flag
    instructionText.style.display = 'none'; // Hide instructions
    logo.style.display = 'none'; // Hide logo
    gameInterval = setInterval(() => {
        move(); // Move the snake
        checkCollision(); // Check for collisions
        draw(); // Draw the game elements
    }, gameSpeedDelay);
}

// Keypress envent listene
function handleKeyPress(event) {
    if (!gameStarted && event.code === 'Space' || !gameStarted && event.key === ' ') {
        startGame(); // Start the game on space key press
    } else {
        switch (event.key) {
            case 'ArrowUp':
                if (direction !== 'down') direction = 'up'; // Prevent snake from going back on itself
                break;
            case 'ArrowDown':
                if (direction !== 'up') direction = 'down';
                break;
            case 'ArrowLeft':
                if (direction !== 'right') direction = 'left';
                break;
            case 'ArrowRight':
                if (direction !== 'left') direction = 'right';
                break;
        }       
    }
}

document.addEventListener('keydown', handleKeyPress); 

function increaseSpeed() {
    // console.log(gameSpeedDelay);
    if (gameSpeedDelay > 150) {
        gameSpeedDelay -= 5; // Decrease delay to increase speed
    } else if (gameSpeedDelay > 100) {
        gameSpeedDelay -= 3; // Decrease delay to increase speed
        } else if (gameSpeedDelay > 50) {
        gameSpeedDelay -= 2; // Decrease delay to increase speed
        } else if (gameSpeedDelay > 25) {
        gameSpeedDelay -= 1; // Decrease delay to increase speed
    }
}

function checkCollision() {
    const head = snake[0];
    
    if(head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        resetGame(); // Reset game if snake hits the wall

        }
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame(); // Reset game if snake collides with itself
            break;
        }
    }}

function resetGame() {
    updateHighScore(); 
    stopGame(); // Stop the game
    snake = [{x: 10, y: 10}]; 
    food = generateFood();
    direction = 'right';
    gameSpeedDelay = 200;
    updateScore();
}

function stopGame() {
    clearInterval(gameInterval); 
    gameStarted = false; 
    instructionText.style.display = 'block'; 
    logo.style.display = 'block';
}

function updateScore() {
    const currentScore = snake.length - 1; // Score is the length of the snake minus the initial segment
    score.textContent = currentScore.toString().padStart(3, '0'); // Update score display
}

function updateHighScore() {
    const currentScore = snake.length - 1; 
    if (currentScore > highScore) {
        highScore = currentScore; // Update high score
        highScoreText.textContent = highScore.toString().padStart(3, '0'); // Update high score display
    }
    highScoreText.style.display = 'block'; // Show high score text
}

