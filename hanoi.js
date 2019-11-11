var location1 = 3;
var location1 = 4;
var location1 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while(isSunk == false){
    guess = prompt("Ready,aim,fire! 0-6");
    if(guess<0||guess>6){
        alert("Please enter a valid cell number");
    }else {
        guesses=guesses+1;
        if (guess == location1 || guess == location2 || guess == location3){
            alert("hit");
            hits=hits+1;
            if(hits==3){
                isSunk=true;
                alert('you sank my ship')
            }
        }else {
            alert("miss")
        }
    }
}
var sts