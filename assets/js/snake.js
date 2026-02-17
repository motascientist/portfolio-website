/**
 * Snake Game - Easter Egg
 * Logic for the hidden snake game
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('highScore');
    const finalScoreElement = document.getElementById('finalScore');
    const modal = document.getElementById('gameOverModal');
    const restartBtn = document.getElementById('restartBtn');

    // Game constants
    const GRID_SIZE = 20;
    const TILE_COUNT = canvas.width / GRID_SIZE;
    const GAME_SPEED = 100; // ms

    // Game state
    let score = 0;
    let highScore = localStorage.getItem('snakeHighScore') || 0;
    let lives = 3;
    let snake = [];
    let food = { x: 0, y: 0, isSuper: false };
    let dx = 0;
    let dy = 0;
    let gameLoop = null;
    let laserInterval = null;
    let isGameRunning = false;
    let showLaserEffect = false;
    let growPending = 0; // Track growth

    // Colors (matching site theme)
    const COLOR_SNAKE_HEAD = '#22c55e'; // Green
    const COLOR_SNAKE_BODY = 'rgba(34, 197, 94, 0.7)';
    const COLOR_FOOD = '#ef4444'; // Red for contrast
    const COLOR_SUPER_FOOD = '#ffd700'; // Gold
    const COLOR_GRID_LINE = 'rgba(255, 255, 255, 0.05)';
    const COLOR_LASER = 'rgba(34, 197, 94, 0.8)';

    // Initialize display
    highScoreElement.textContent = highScore;
    document.getElementById('lives').textContent = lives;

    // Controls
    document.addEventListener('keydown', handleKeyDown);

    // Mobile Controls
    document.getElementById('btnUp').addEventListener('click', () => changeDirection(0, -1));
    document.getElementById('btnDown').addEventListener('click', () => changeDirection(0, 1));
    document.getElementById('btnLeft').addEventListener('click', () => changeDirection(-1, 0));
    document.getElementById('btnRight').addEventListener('click', () => changeDirection(1, 0));

    restartBtn.addEventListener('click', restartGame);

    // Initial Start
    startGame();

    function restartGame() {
        lives = 3;
        score = 0;
        document.getElementById('lives').textContent = lives;
        scoreElement.textContent = score;
        startGame();
    }

    function startGame() {
        resetSnakePos(false); // Reset length
        dx = 1; // Start moving right
        dy = 0;
        placeFood();
        modal.style.display = 'none';

        if (gameLoop) clearInterval(gameLoop);
        if (laserInterval) clearInterval(laserInterval);

        isGameRunning = true;
        gameLoop = setInterval(update, GAME_SPEED);

        // Laser Mechanic: Every 30 seconds (was 3s)
        laserInterval = setInterval(shootLaser, 30000);
    }

    function resetSnakePos(keepLength = false) {
        growPending = 0;
        // Center of grid
        const centerX = Math.floor(TILE_COUNT / 2);
        const centerY = Math.floor(TILE_COUNT / 2);

        const currentLength = keepLength ? snake.length : 3;

        snake = [];
        for (let i = 0; i < currentLength; i++) {
            snake.push({ x: centerX - i, y: centerY });
        }
    }

    function shootLaser() {
        if (!isGameRunning) return;

        // Visual effect trigger
        showLaserEffect = true;
        setTimeout(() => showLaserEffect = false, 200); // Show for 200ms

        // Transform food
        food.isSuper = true;
    }

    function update() {
        if (!isGameRunning) return;

        // Move snake
        let head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Wall Wrapping
        if (head.x < 0) head.x = TILE_COUNT - 1;
        if (head.x >= TILE_COUNT) head.x = 0;
        if (head.y < 0) head.y = TILE_COUNT - 1;
        if (head.y >= TILE_COUNT) head.y = 0;

        // Check Self Collision
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === head.x && snake[i].y === head.y) {
                handleCollision();
                return;
            }
        }

        snake.unshift(head);

        // Check Food Collision
        if (head.x === food.x && head.y === food.y) {
            if (food.isSuper) {
                score += 10;
                growPending += 4; // Grow 4 more times (total 5)
            } else {
                score += 1; // Normal point
            }
            scoreElement.textContent = score;
            placeFood();
            // Don't pop tail, so it grows (1 segment)
        } else {
            // No food collision
            if (growPending > 0) {
                growPending--;
                // Don't pop, so it grows
            } else {
                snake.pop();
            }
        }

        draw();
    }

    function handleCollision() {
        lives--;
        document.getElementById('lives').textContent = lives;

        if (lives > 0) {
            // Respawn but KEEP LENGTH
            resetSnakePos(true);
            // Reset direction to Safe (Right)
            dx = 1;
            dy = 0;
        } else {
            gameOver();
        }
    }

    function draw() {
        // Clear screen
        ctx.fillStyle = '#151812'; // Bg secondary
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw Grid
        ctx.strokeStyle = COLOR_GRID_LINE;
        for (let i = 0; i < TILE_COUNT; i++) {
            ctx.beginPath();
            ctx.moveTo(i * GRID_SIZE, 0);
            ctx.lineTo(i * GRID_SIZE, canvas.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, i * GRID_SIZE);
            ctx.lineTo(canvas.width, i * GRID_SIZE);
            ctx.stroke();
        }

        // Draw Laser (if active)
        if (showLaserEffect) {
            ctx.strokeStyle = COLOR_LASER;
            ctx.lineWidth = 2;
            ctx.beginPath();
            // From eyes to food
            const headX = snake[0].x * GRID_SIZE + GRID_SIZE / 2;
            const headY = snake[0].y * GRID_SIZE + GRID_SIZE / 2;
            const foodX = food.x * GRID_SIZE + GRID_SIZE / 2;
            const foodY = food.y * GRID_SIZE + GRID_SIZE / 2;
            ctx.moveTo(headX, headY);
            ctx.lineTo(foodX, foodY);
            ctx.stroke();
            ctx.lineWidth = 1;
        }

        // Draw Food
        ctx.fillStyle = food.isSuper ? COLOR_SUPER_FOOD : COLOR_FOOD;
        ctx.shadowBlur = 10;
        ctx.shadowColor = food.isSuper ? COLOR_SUPER_FOOD : COLOR_FOOD;
        ctx.beginPath();
        const foodRadius = GRID_SIZE / 2 - 2;
        ctx.arc(
            food.x * GRID_SIZE + GRID_SIZE / 2,
            food.y * GRID_SIZE + GRID_SIZE / 2,
            foodRadius, 0, Math.PI * 2
        );
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw Snake
        snake.forEach((segment, index) => {
            ctx.fillStyle = index === 0 ? COLOR_SNAKE_HEAD : COLOR_SNAKE_BODY;

            // Round rect for snake parts
            const x = segment.x * GRID_SIZE;
            const y = segment.y * GRID_SIZE;
            const size = GRID_SIZE - 2;

            ctx.fillRect(x + 1, y + 1, size, size);

            // Eyes for head
            if (index === 0) {
                ctx.fillStyle = showLaserEffect ? COLOR_SUPER_FOOD : '#000'; // Eyes glow when shooting
                ctx.fillRect(x + 5, y + 5, 4, 4);
                ctx.fillRect(x + 12, y + 5, 4, 4);
            }
        });
    }

    function placeFood() {
        food = {
            x: Math.floor(Math.random() * TILE_COUNT),
            y: Math.floor(Math.random() * TILE_COUNT),
            isSuper: false // Reset to normal on spawn
        };

        // Ensure food doesn't spawn on snake
        snake.forEach(segment => {
            if (segment.x === food.x && segment.y === food.y) {
                placeFood();
            }
        });
    }

    function handleKeyDown(e) {
        switch (e.key) {
            case 'ArrowUp':
                if (dy !== 1) changeDirection(0, -1);
                break;
            case 'ArrowDown':
                if (dy !== -1) changeDirection(0, 1);
                break;
            case 'ArrowLeft':
                if (dx !== 1) changeDirection(-1, 0);
                break;
            case 'ArrowRight':
                if (dx !== -1) changeDirection(1, 0);
                break;
        }
    }

    function changeDirection(newDx, newDy) {
        // Prevent reversing directly
        if (newDx === -dx && newDx !== 0) return;
        if (newDy === -dy && newDy !== 0) return;

        dx = newDx;
        dy = newDy;
    }

    function gameOver() {
        isGameRunning = false;
        clearInterval(gameLoop);

        if (score > highScore) {
            highScore = score;
            localStorage.setItem('snakeHighScore', highScore);
            highScoreElement.textContent = highScore;
        }

        finalScoreElement.textContent = score;
        modal.style.display = 'block';
    }
});
