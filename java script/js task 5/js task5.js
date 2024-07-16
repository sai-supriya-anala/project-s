document.getElementById('createTableBtn').addEventListener('click', function() {
    // Prompt the user for the number of rows and columns
    const rows = parseInt(prompt('Enter the number of rows:'), 10);
    const cols = parseInt(prompt('Enter the number of columns:'), 10);

    // Validate input
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert('Please enter valid positive numbers for rows and columns.');
        return;
    }

    // Create the table element
    const table = document.createElement('table');

    // Generate the rows and columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            if (i === 0 && j === 0) {
                // Add an image to the first cell
                const img = document.createElement('img');
                img.src = 'surya (4).jpeg'; // Replace with your image path
                // img.alt = 'Moving Image';
                img.id = 'movingImage';
                img.style.width = '70px'; // Adjust image size as needed
                img.style.height = '70px';
                td.appendChild(img);
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    // Clear any existing table and append the new table
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});

// Image movement functionality
document.getElementById('moveUpBtn').addEventListener('click', function() {
    moveImage('up');
});

document.getElementById('moveDownBtn').addEventListener('click', function() {
    moveImage('down');
});

document.getElementById('moveLeftBtn').addEventListener('click', function() {
    moveImage('left');
});

document.getElementById('moveRightBtn').addEventListener('click', function() {
    moveImage('right');
});

function moveImage(direction) {
    const img = document.getElementById('movingImage');
    const currentCell = img.parentElement;
    const table = currentCell.closest('table');
    const rows = table.rows;
    let rowIndex = currentCell.parentNode.rowIndex;
    let cellIndex = currentCell.cellIndex;

    switch (direction) {
        case 'up':
            if (rowIndex > 0) {
                rows[rowIndex - 1].cells[cellIndex].appendChild(img);
            }
            break;
        case 'down':
            if (rowIndex < rows.length - 1) {
                rows[rowIndex + 1].cells[cellIndex].appendChild(img);
            }
            break;
        case 'left':
            if (cellIndex > 0) {
                rows[rowIndex].cells[cellIndex - 1].appendChild(img);
            }
            break;
        case 'right':
            if (cellIndex < rows[rowIndex].cells.length - 1) {
                rows[rowIndex].cells[cellIndex + 1].appendChild(img);
            }
            break;
        default:
            return;
    }
}