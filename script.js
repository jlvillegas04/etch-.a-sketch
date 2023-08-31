const container = document.querySelector('.container');
const btn = document.querySelector('.new-game-btn')
const row = document.querySelector('.row');

function generateDivs(num) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < num; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerText = (i * num) + j;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function clearGrid() {
    container.innerHTML = '';
}

function refreshGrid() {
    const x = prompt('Select the number of boxes per side (max: 100)');
    if (x <= 100) {
        clearGrid();
        generateDivs(x);
    } else {
        alert('Grid cannot surpass 100 boxes per side.')
    }
}

function generateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", function() {
    generateDivs(16);

    function changeBackground(e) {
        const randomColor = generateRandomRGB();
        e.currentTarget.style.backgroundColor = randomColor;
    }
    let grids = document.querySelectorAll(".cell");
    
    grids.forEach(function(grid){ 
        grid.addEventListener("mouseover", changeBackground);
    });

    btn.addEventListener('click', function() {
        refreshGrid();
        function changeBackground(e) {
            const randomColor = generateRandomRGB();
            e.currentTarget.style.backgroundColor = randomColor;
        }
        let grids = document.querySelectorAll(".cell");
        
        grids.forEach(function(grid){ 
            grid.addEventListener("mouseover", changeBackground);
        });
    })
    
    
});

