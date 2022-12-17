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

const newGridButton = document.querySelector('#newGrid');

newGridButton.addEventListener('click', () => {
    let gridWidth = Number(prompt("Enter new grid's width:", 16));

    while (!gridWidth || gridWidth > 100 || gridWidth <= 0) {
        if (!Number.isInteger(gridWidth)) {
            gridWidth = Number(prompt('Enter an integer:', 16));
        } else if (gridWidth > 100) {
            gridWidth = Number(prompt("Grid's width should be smaller than 100: ", 16));
        } else if (gridWidth <= 0) {
            gridWidth = Number(prompt("Grid's width should be greater than 0: ", 16));
        }
    }

    createGrid(gridWidth);
});
