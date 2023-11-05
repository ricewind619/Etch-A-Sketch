let container = document.querySelector(".container");
let button_remove = document.querySelector(".button_remove");
let button_create = document.querySelector(".button_create");
let slider = document.getElementById("slider");
let size = 10; 
let black = document.querySelector(".black");
let rainbow = document.querySelector(".rainbow");
let gradient = document.querySelector(".gradient");
let paint_colour;

//get value from slider
slider.oninput = function() {
    size = getSliderValue();
    console.log(size);
 };


//function to get slider value

function getSliderValue() {
    size = document.getElementById("slider").value;
    document.getElementById('output').innerText = "Size of grid is " + size;
    return size; 
}

// size = getSliderValue();
//console.log(size);
// sizeOfGrid = getSliderValue();




//drawing the grid

// function that builds a grid
function createGrid(x) 
{
    for (var rows = 0; rows < x; rows++)
    {
        const cell_row = document.createElement('div');
        // cell_row.classList.add(".grid");
        container.append(cell_row); 

        for (var columns = 0; columns < x ; columns++) 
        {
            const cell_coloumn = document.createElement('div');
            //cell_coloumn.className.add(".grid");
            cell_coloumn.classList.add("grid");
            //cell.setAttribute("style", "background-color: gray, width: 10px, height: 10px" )
            cell_row.append(cell_coloumn);
                      
        };


    };
    //assign CSS after creation
     
    var created_cells = document.getElementsByClassName("grid");
        let widthOfRow = 300/size;
        let heightOfRow = 300/size;
        for( let i =0; i<created_cells.length; i++)
        {
            
            //created_cells[i].style["background-color"] = "white";
            created_cells[i].style["width"] = heightOfRow +"px";
            created_cells[i].style["height"] = widthOfRow + "px";
            created_cells[i].style["outline-color"] = "white";
            created_cells[i].style["outline-style"] = "solid";
            // // created_cells[i].style["border-width"] = "2px";
            // created_cells[i].style["margin"] = "0px";
            // created_cells[i].style["padding"] = "0px";   
            // created_cells[i].addEventListener("mouseover", mouseOver, false);
            // function mouseOver(x){   
            //     x.style["background-color"] = "green";


        }     
            
        //hover();
        hold();
        //progressive();    
}

window.onload = createGrid(10);

//function for progressive clicks
function progressive(){
    var items = document.querySelectorAll(".grid");
        items.forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = "gray";
        item.addEventListener('click', () => {
            item.style.backgroundColor = "orange";
            item.addEventListener('click', () => {
                item.style.backgroundColor = "blue";
            });
        });
    });
    
    
});
    
}


    
//function to change element on hover 
function hover(){
    var items = document.querySelectorAll(".grid");
        items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "green";
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = "white";
    });
});


    
}
//FUNCTION TO DRAG AND PAINT 
function hold(){
    var items = document.querySelectorAll(".grid");
              
    
    items.forEach(item => {
            item.addEventListener('mousemove', function (event){
                 if(event.buttons == 1){
                     event.preventDefault();               
                    
                     item.style.backgroundColor = paint_colour;
                 }
                // item.style.backgroundColor = paint_colour;
        });
    });
    
}
// BUTTONS TO CHOSE COLOUR 

black.addEventListener
 ( 'click', function () 
    {
    paint_colour = "black";
    console.log(paint_colour);
    }
 );


//createGrid(5);
//function to remove grid

function removeGrid()
{
        const elements = document.getElementsByClassName("grid");
    while(elements.length > 0){
        elements[0].remove();
    };
}
//BUTTONS TO CREATE AND REMOVE GRID
button_remove.addEventListener
 ( 'click', function () 
    {
    removeGrid();
    }
 );
 button_create.addEventListener
 ( 'click', function () 
    {
    removeGrid();
    createGrid(size);
    }
 );
// s


   
