const wrapper = document.getElementById("tiles");

let columns = 0,
        rows = 0,
        toggled = false;



const createTile = index => {
        const tile = document.createElement("div");
        
        tile.classList.add("tile");
        
        tile.style.opacity = toggled ? 0 : 1;
        

        
        return tile;
}

const createTiles = quantity => {
        Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
        });
}

const createGrid = () => {
        wrapper.innerHTML = "";
        
        const size = document.body.clientWidth > 800 ? 80 : 50;
        
        columns = Math.floor(document.body.clientWidth / size);
        rows = Math.floor(document.body.clientHeight / size/3);
        
        wrapper.style.setProperty("--columns", columns);
        wrapper.style.setProperty("--rows", rows);
        
        createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();