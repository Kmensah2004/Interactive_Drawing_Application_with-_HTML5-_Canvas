
// Get the 2D canvas drawing context

const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

// Track user input to draw shapes dynamically.
let isDrawing = false;
let startX, startY;
let currentShape = 'line';
let selectedColor = '#000000';

// Add event listeners for mouse events to handle drawing.
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

// drawing
function startDrawing(c) {
    isDrawing = true;
    startX = c.offsetX;
    startY = c.offsetY;
    ctx.beginPath();
    ctx.strokeStyle = selectedColor;
}

// Stop drawing
function stopDrawing() {
    isDrawing = false;
}