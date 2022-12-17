const canvasWidth = 500;

function createGrid(gridWidth) {
    const canvas = document.querySelector('#canvas');
    canvas.innerHTML = "";

    for (let i = 0; i < gridWidth; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridWidth; j++) {
            const cell = document.createElement('div');
            const cellWidth = canvasWidth / gridWidth;
            cell.classList.add('cell');
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellWidth}px`;
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', fill);
    });
}

function fill(event) {
    const element = event.target;
    element.style.backgroundColor = 'red';
}

createGrid(16);
