
// Get the 2D canvas drawing context

const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let startX, startY;
let currentShape = 'line';
let selectedColor = '#000000';

// Adds event listeners for mouse events to handle the controls drawing.
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
// Task 3: Implement Shape Drawing Logic


document.querySelectorAll('input[name="shape"]').forEach(input => { // event listener for shape selection
    input.addEventListener('change', (e) => {
        currentShape = e.target.value;
    
    });
});


function draw(e) { // Draw shapes based on the tool thats chosen
    if (!isDrawing) return;

  
    ctx.clearRect(0, 0, canvas.width, canvas.height);   // clears the   canvas 

    const endX = e.offsetX;
    const endY = e.offsetY;
    const width = endX - startX;
    const height = endY - startY;

    // Draw based on chosen shape builds
    if (currentShape === 'line') {
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
    } else if (currentShape === 'rectangle') {
        ctx.strokeRect(startX, startY, width, height);
    } else if (currentShape === 'circle') {
        const radius = Math.sqrt(width ** 2 + height ** 2);
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
    }

    ctx.stroke();
}
// Task 4: Add Canvas Clearing and Color Selection

const colorPicker = document.getElementById('colorPicker'); // selected color
colorPicker.addEventListener('input', (e) => {
    selectedColor = e.target.value;
});


const clearButton = document.getElementById('clearCanvas'); // clear canvas 
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});