let container = document.querySelector(".container");
let button_remove = document.querySelector(".button_remove");
let button_create = document.querySelector(".button_create");
let slider = document.getElementById("slider");
let size = 10; 
let black = document.querySelector(".black");
let rainbow = document.querySelector(".rainbow");
let gradient = document.querySelector(".gradient");
let paint_colour;
let rainbow_variable = 7;
let colourToChange;
let x;

//get value from slider
slider.oninput = function() {
    size = getSliderValue();
    console.log(size);
 };


//function to get slider value

function getSliderValue() {
    size = document.getElementById("slider").value;
    document.getElementById('output').innerText = "Size of draw box is " + size ;
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
        var cell_row = document.createElement('div');
        
        // cell_row.classList.add(".grid");
        container.append(cell_row); 

        for (var columns = 0; columns < x ; columns++) 
        {
            var cell_coloumn = document.createElement('div');
            
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
            created_cells[i].style["height"] = heightOfRow +"px";
            created_cells[i].style["width"] = widthOfRow + "px";
            //created_cells[i].style["outline-color"] = "white";
            //created_cells[i].style["outline-style"] = "solid";
            // // created_cells[i].style["border-width"] = "2px";
            // created_cells[i].style["margin"] = "0px";
            // created_cells[i].style["padding"] = "0px";   
            // created_cells[i].addEventListener("mouseover", mouseOver, false);
            // function mouseOver(x){   
            //     x.style["background-color"] = "green";


        }     
          
        
         hold();
          
}

window.onload = createGrid(10);


    
//function to change element on hover 
// function hover(){
//     var items = document.querySelectorAll(".grid");
//         items.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         item.style.backgroundColor = "green";
//     });
//     item.addEventListener('mouseout', () => {
//         item.style.backgroundColor = "white";
//     });
// });    
// }
//FUNCTION TO DRAG AND PAINT 
function hold(){

    if (paint_colour == undefined){
        paint_colour = "rainbow";
    }
    var items = document.querySelectorAll(".grid");
              
    
    items.forEach(item => {
            item.addEventListener('mousemove', function (event){
                 if(event.buttons == 1){
                     event.preventDefault();      

                     if( paint_colour == "rainbow")
                     {
                        item.style.backgroundColor = getRainbowColour();
                     }
                     else if (paint_colour = "black"){
                        item.style.backgroundColor = "black";
                     }
                     else if (paint_colour = "gradient"){
                        colourToChange = item.style.backgroundColor;
                        item.style.backgroundColor = getGradientColour(colourToChange);
                                                           
                    }
                     
                 }
                // item.style.backgroundColor = paint_colour;
                
        });
    });
    
    ///FUNCTION TO HANDLE TOUCHMOVE

    items.forEach( (elem) => {
        elem.addEventListener( 'touchstart', prevent );
        elem.addEventListener( 'touchmove', handleTouchMove );
      } );
      
      function handleTouchMove( evt ) {
        prevent( evt );
        deactivateTarget(); // clean
        
        //evt.target.classList.add( 'target' ); // make the official target's text red
      
        const touch = evt.changedTouches[ 0 ];
        const actualTarget = document.elementFromPoint( touch.clientX, touch.clientY );
        //console.log(actualTarget.className);
        // let string_value = String(actualTarget);
        // console.log(string_value);
        if( actualTarget.className == "grid") {
          //actualTarget.classList.add( 'active' ); // make the hovered element green
          if( paint_colour == "rainbow")
                     {
                        //alert(String(actualTarget.style.backgroundColor).isEmpty());
                        //console.log("Value is " + String(actualTarget.style.backgroundColor));
                        actualTarget.style.backgroundColor = getRainbowColour();
                        
                     }
                     else if (paint_colour == "black"){
                        //alert(String(actualTarget.style.backgroundColor).isEmpty());
                        //console.log("Value is " + String(actualTarget.style.backgroundColor));
                        actualTarget.style.backgroundColor = "black";
                     }
                     else if (paint_colour == "gradient"){
                        if(!actualTarget.style.backgroundColor){
                            console.log("Value of " + actualTarget.style.backgroundColor + "is empty");
                            colourToChange = actualTarget.style.backgroundColor;
                            actualTarget.style.backgroundColor = getGradientColour(colourToChange);
                            // colourToChange = rgbToHex(actualTarget.style.backgroundColor);
                            // console.log(rgbToHex(actualTarget.style.backgroundColor));
                            // console.log(colourToChange);
                            // actualTarget.style.backgroundColor = getGradientColour(colourToChange);
                        }
                        else{
                            colourToChange = actualTarget.style.backgroundColor;
                            console.log("Value of " + colourToChange + " that is some value before change");

                            actualTarget.style.backgroundColor = getGradientColour(colourToChange);
                        }
                        
                        
                        //console.log(getGradientColour(colourToChange));
                     }
        }
      }
      function deactivateTarget() {
        document.querySelectorAll( '.active,.target' ).forEach( (elem) => {
          elem.classList.remove( 'active', 'target' );
        })  
      }
      
      function prevent( evt ) {
        evt.preventDefault();
      }

  
}


function getGradientColour(color123){

    //paint_colour = "gradient";
    console.log(paint_colour);
    console.log("getGradientColor is getting triggered");

    //let gradient_chooser = gradient_variable%7;

    if (color123 == "")               
        
    {
            //gradient_variable++;
            return "rgb(211, 211, 211)";
            //lighter gray 
    }    
        
    else if(color123 == "rgb(211, 211, 211)")
    {
        //gradient_variable++;
        return "rgb(189, 189, 189)";
        //light gray
    }
    else if(color123 == "rgb(189, 189, 189)")
    {
        //gradient_variable++;
        return "rgb(158, 158, 158)";
        //gray
    }    
    else if(color123 == "rgb(158, 158, 158)")
    {
        //gradient_variable++;
        return "rgb(125, 125, 125)";
        //deep gray
    }    
    else if(color123 == "rgb(105, 105, 105)")
    {
        gradient_variable++;
        return "rgb(105, 105, 105)"
        //deepest gray
    }    
               
 }


//FUNCTION FOR RAINBOW COLOUR

function getRainbowColour(){

    paint_colour = "rainbow";
    console.log(paint_colour);

    let colour_chooser = rainbow_variable%7;

    if (colour_chooser == 0)
        {
            rainbow_variable++;
            return "#9400D3"
            //VIOLET
        }
    else if(colour_chooser == 1)
    {
        rainbow_variable++;
        return "#4B0082"
        //INDIGO
    }
    else if(colour_chooser == 2)
    {
        rainbow_variable++;
        return "#4B0082"
        //INDIGO
    }    
    else if(colour_chooser == 3)
    {
        rainbow_variable++;
        return "#0000FF"
        //BLUE
    }    
    else if(colour_chooser == 4)
    {
        rainbow_variable++;
        return "#00FF00"
        //GREEN
    }    
    else if(colour_chooser == 5)
    {
        rainbow_variable++;
        return "#FFFF00"
        //YELLOW
    }    
    else if(colour_chooser == 6)
    {
        rainbow_variable++;
        return "#FF7F00"
        //ORANGE
    }
    else if(colour_chooser == 7)
    {
        rainbow_variable++;
        return "#FF0000"
        //RED
    }
            
 }
// BUTTONS TO CHOSE COLOUR 

black.addEventListener
 ( 'click', function () 
    {
    paint_colour = "black";
    console.log(paint_colour);
    }
 );

 rainbow.addEventListener
 ( 'click', function () 
    {
    paint_colour = "rainbow";
    console.log(paint_colour);
    }
 );

 gradient.addEventListener
 ( 'click', function () 
    {
    paint_colour = "gradient";
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


   
