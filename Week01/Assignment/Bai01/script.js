document.addEventListener("DOMContentLoaded", function() {
    //Random an integer from 0 to 100
    let currentNumber = Math.floor(Math.random() * 101); 
    let countGuess = 10;

    document.getElementById("guessbutton").addEventListener("click", function() {
        let number = document.getElementById("number").value;
        if (number < 0 || number > 100) {
            alert("Your guessing number must be between 0 and 100! Restart the game.")
            location.reload();
            return;
        }

        countGuess -= 1;

        if (number > currentNumber) {
            document.getElementById("message").innerHTML = "Your guess is high, guess lower! " + countGuess;
            document.getElementById("message").style.background = "orange";
        }
        else 
            if (number < currentNumber) {
                document.getElementById("message").innerHTML = "Your guess is low, guess higher! " + countGuess;
                document.getElementById("message").style.background = "yellow";
            }
            else {
                alert("Congratulations! You guessed correctly. Restart the game.")
                location.reload();
                return;
            }
        
        if (countGuess == 0) {
            alert("The number of guessing is out of 10. Restart the game!")
            location.reload();
            return;
        }

        let pastguest = document.getElementById("pastguest").innerHTML;
        document.getElementById("pastguest").innerHTML = pastguest + " " + number;
    });
});