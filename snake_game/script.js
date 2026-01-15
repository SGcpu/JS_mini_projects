const board = document.getElementById('board')
const StartBtn = document.getElementById('start-btn')
const reStartbtn = document.getElementById('restart-btn')
const Start_modal = document.getElementById('start_modal')
const End_modal = document.getElementById('end_modal')
const StartGame = document.getElementById('start_game')
const EndGame = document.getElementById('end_game')
const score = document.getElementById('score')
const time = document.getElementById('time')
const highScore = document.getElementById('high-score')

let scorepts = 0;
let startTime;
let elapsedTime = 0
const key = 'highScore'
let highestScore = localStorage.getItem(key) || 0;
highestScore = parseInt(highestScore, 10); // Convert to a number

const blockWidth = 30
const blockHeight = 30
let IntervalId = null
let blocks = []
let snake = [{
    x: 1, y:3
},{
    x:1, y:4
},{
    x:1, y:5
}]
let direction = 'down'

const rows = Math.floor(board.clientHeight/blockHeight);
const cols = Math.floor(board.clientWidth/blockWidth);

let food = {x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)}


/* for (let i = 0; i < rows * cols ; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    board.appendChild(block)
}
 */

for(let row=0; row<rows; row++){
    for(let col=0; col<cols; col++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = `${row}-${col}`
        board.appendChild(block)
        blocks[`${row}-${col}`] = block
    }
}
board.addEventListener('click', (e)=>{
        console.log(e.target.id)
})


function render() {
    let head = null;
    highScore.innerText = highestScore;
    blocks[ `${food.x}-${food.y}` ].classList.add('food');
    if(direction === 'left'){
        head = { x: snake[0].x, y: snake[0].y - 1 };
    }else if(direction === 'right'){
        head = { x: snake[0].x, y: snake[0].y + 1 };
    }else if(direction === 'down'){
        head = { x: snake[0].x +1, y: snake[0].y};
    }else if(direction === 'up'){
        head = { x: snake[0].x - 1, y: snake[0].y };
    }
    
    if(head.x <0 || head.x >=rows || head.y <0 || head.y >= cols){
        clearInterval(IntervalId)
        DisplayInfo()
        End_modal.classList.toggle('hidden');

    }

    if(head.x == food.x && head.y == food.y){
        blocks[ `${food.x}-${food.y}` ].classList.remove('food');
        food = {x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)}
        blocks[ `${food.x}-${food.y}` ].classList.add('food');
        scorepts++;
        if(scorepts>highestScore){
            highestScore = scorepts; // Update the variable
            highScore.innerText = highestScore; // Update the DOM
            localStorage.setItem(key, highestScore); // Save to localStorage
        }
        score.innerText = scorepts
        snake.push(head);
    }

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })

    snake.unshift(head)
    snake.pop()

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add('fill')
    });
}

function DisplayInfo() {
    const end_score = document.getElementById('end_score');
    const end_time = document.getElementById('end_time');
    const end_high_score = document.getElementById('end_high_score');

    end_score.innerText = scorepts;
    end_time.innerText = time.innerText;
    end_high_score.innerText = localStorage.getItem(key) || 0;
    
}

function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);

    // Add leading zeros
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

function printTime() {
    elapsedTime = Date.now() - startTime;
    time.innerText = formatTime(elapsedTime);
}

setInterval(() => {
    printTime();
}, 1000);

StartBtn.addEventListener('click', () => {
        startTime = Date.now();
        Start_modal.classList.toggle('hidden');
        IntervalId = setInterval(() => {
            render();
        }, 250);
});

reStartbtn.addEventListener('click', ()=>{
    RestartGame()
})

function RestartGame(){
    clearInterval(IntervalId);
    IntervalId = null;
    scorepts = 0;
    snake.length = 0;
    snake.push(
        { x: 1, y: 3 },
        { x: 1, y: 4 },
        { x: 1, y: 5 }
    );
    direction = 'down';
    Object.values(blocks).forEach(block => {
        block.classList.remove('fill', 'food');
    });
    food = {x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)}

    End_modal.classList.toggle('hidden')
    Start_modal.classList.remove('hidden');
}




addEventListener('keydown', (e)=>{
    if(e.key == 'ArrowDown'){
        direction = 'down';
    }else if(e.key == 'ArrowLeft'){
        direction = 'left';
    }else if(e.key == 'ArrowRight'){
        direction = 'right'
    }else if(e.key == 'ArrowUp'){
        direction = 'up'
    }
})