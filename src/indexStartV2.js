// Create a class called TTT
class TTT
{

 /*
        Add a constructor that 
        -   defines and initializes all variables
        -   binds the keyword this to the class for each function because
            this will otherwise will refer to the clicked square
            -   this.calculateWinner = this.calculateWinner.bind(this);
            -   DON'T bind this for handleClick at this point
        -   calls the init method
    */

    constructor(){
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
        this.calulateWinner = this.calulateWinner.bind(this);
        this.init();
    }

    /*
        Convert each function to a method
        -   move it inside the class
        -   remove the keyword function
        -   add this to all of the variables that belong to the class
        -   change var to let or const for local variables
        -   add this to all method calls
     */

       /* Init
        -   bind both this and i to handleClick
            -   this.handleClick.bind(this, i);
        */
        init()
        {
            
            let name = document.getElementsByName("square");
            this.handleClick.bind(this, i);
    
            for (let i=0; i < name.length; i++){
                name[i].onclick = handleClick;
                
            }
        }
        /*
        CalculateWinner
        -   use destructuring assingment to assign values to
            a b and c in one line
        */
        calculateWinner() {
            for (let i = 0; i < lines.length; i++) {
                let a, b, c;
                [a,b,c] = [lines[i][0], lines[i][1], lines[i][2]];
                //var b = lines[i][1];
                //var c = lines[i][2];       
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
        /*
        HandleClick
        -   add a parameter i rather than getting i from this
            -   this now refers to the class not the square
        -   remove the local variable i
        -   add a local variable to refer to the clicked square
            -   remember that squares have an integer id 0 - 8
    */
    handleClick() {
        
            let id = this.id;
        
            //squares[i] = xIsNext ? 'X' : 'O';
            if (xIsNext == true){
                squares[i] = "X";
            }
            else 
                squares[i] = "O";
        
            
            this.innerHTML = squares[i];
        
            this.onclick = function () {};
            xIsNext = false;
            // xIsNext = !(xIsNext) ?
        
            if (this.calculateWinner()) {
                this.highlightWinner();
                this.disableAll();
            }
        
            else {
                let status = document.getElementById("status")
                status.innerHTML = "Next player: " + (xIsNext? "X":"O");
            }
    
        }
}

// declare a variable ttt

let ttt;

window.onload = () => {ttt = new TTT() };

// add an onload handler to the window that assigns ttt to a TTT