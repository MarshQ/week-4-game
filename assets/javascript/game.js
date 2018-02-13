//$("#element").text("lalalala");

$(document).ready(function() {
    var alphaRed = 0;
    var betaBlue = 0;
    var gammaGreen = 0;
    var deltaSilver = 0;

    var playerScore = 0;
    var goalValue = 0;

    var wins = 0;
    var loses = 0; 

    function reset() {
        alphaRed = "?";
        betaBlue = "?";
        gammaGreen = "?";
        deltaSilver = "?";
   
        playerScore = 0;
        goalValue = 0;
        $("#gvalue").html(gammaGreen);
        $("#bvalue").html(betaBlue);
        $("#rvalue").html(alphaRed);
        $('#svalue').html(deltaSilver);
        alphaRed = Math.floor(Math.random() * (13 - 1) + 1);
        betaBlue = Math.floor(Math.random() * (13 - 1) + 1);
        gammaGreen = Math.floor(Math.random() * (13 - 1) + 1);
        deltaSilver = Math.floor(Math.random() * (13 - 1) + 1);
        goalValue = Math.floor(Math.random() * (121 - 19) + 19);
        console.log(alphaRed);
        console.log(betaBlue);
        console.log(gammaGreen);
        console.log(deltaSilver);
        //     Math.random() * (max - min) + min;

        $("#goal").html(goalValue);
        console.log(goalValue);
        $("#score").html(playerScore);
    }

    function scoreCheck () {
        if ( playerScore > goalValue) {
            loses++
            alert("I'm so you seem to have exceeded the number of rupees needed and gotten them stolen from you, please try again");
            $("#loses").html("Loses: " + loses);
            reset();
        }
        else if (playerScore == goalValue) {
            wins++
            alert("Congratulation you have gather the necessary number of rupees, avoided the theives, and fixed ganon's mischief! (the game will now reset)");
            $("#wins").html("Wins: " + wins);
            reset();
        }
    }

    reset();

    $("#greenRupee").on("click", function() {
        $("#gvalue").html(gammaGreen);
        playerScore = playerScore + gammaGreen;
        $("#score").html(playerScore);
        scoreCheck();
    })

    $("#blueRupee").on("click", function() {
        $("#bvalue").html(betaBlue);
        playerScore = playerScore + betaBlue;
        $("#score").html(playerScore);
        scoreCheck();
    })

    $("#redRupee").on("click", function() {
        $("#rvalue").html(alphaRed);
        playerScore = playerScore + alphaRed;
        $("#score").html(playerScore);
        scoreCheck();
    })

    $("#silverRupee").on("click", function() {
        $('#svalue').html(deltaSilver);
        playerScore = playerScore + deltaSilver;
        $("#score").html(playerScore);
        scoreCheck();
    })
})
