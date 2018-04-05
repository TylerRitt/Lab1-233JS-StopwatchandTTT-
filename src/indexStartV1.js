// start with these global variables
var xIsNext = true;
var winner = null;
var squares = Array(9).fill(null);
var winningLine = Array();
var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

function init()
{
    // store all the squares in a var
    var name = document.getElementsByName("square");
    // the var name now has a list of HTML elements
    // name of index [i].onclick = handleClick function
    for (var i=0; i < name.length; i++){
        name[i].onclick = handleClick;
    }

    // Add an onclick handler to all of the squares
    // The name attribute for all of the divs is square
    // Use the function handleClick to handle the event 
}

function handleClick() {

    var id = this.id;

    //squares[i] = xIsNext ? 'X' : 'O';
    if (xIsNext == true){
        squares[i] = "X";
    }
    else 
        squares[i] = "O";

    
    this.innerHTML = squares[i];

    this.onclick = function () {
        null;
    };
    xIsNext = false;
    // xIsNext = !(xIsNext) ?

    if (calculateWinner()) {
        highlightWinner();
        disableAll();
    }

    else {
        var status = document.getElementById("status")
        status.innerHTML = "Next player: " + (xIsNext? "X":"O");
    }

    // Get the id from the square and put it in a variable
    // Remember that the id is an integer 0 - 8


    // Set the element in the squares array to the player's symbol
    
    // Update the inner html for this square in the UI
    // Set the onclick handler for this square in the UI to an empty anonymous function or arrow function
    // Update the variable xIsNext

    // If calculateWinner returns true
    // highlight the winner and disable all of the squares
    // otherwise update the status in the UI to display the player
   

}

function calculateWinner() {
    for (var i = 0; i < lines.length; i++) {
        var a = lines[i][0];
        var b = lines[i][1];
        var c = lines[i][2];       
        if (squares[a] && 
        squares[a] === squares[b] && 
        squares[a] === squares[c]) {
            winner = squares[a];
            winningLine = lines[i];
            return true;
        }
    }
    winner = null;
    winningLine = Array();
    return false;
}

//
function highlightWinner() {

    var status = document.getElementById("status");

    status.innerHTML = "Winner: " + winner;
    
    // Update the status in the UI to display the winner
   
    for (var i =0; i<winningLine.length; i++){
        var a = document.getElementsByName(winningLine[i]);
        a.classList.add("red");
    }
        disableAll()
        
    // Iterate through the winningLine array.  
    // It contains the indices of the winning squares
    //      get the next square using the current index in the winningLine array as the id
    //      add the class red to the square
    // Disable all of the squares
}

function disableAll() {

    var a = document.getElementsByName("squares");

    for (var i=0; i < squares.length; i++){
        squares.onclick = function(){
            null;
        }
    }
    // Set the onclick handler for all squares to function that does nothing
    // The id of the square is a number 0 - 8
}

window.onload = init;
// When the page has finished loading, call the function init    
