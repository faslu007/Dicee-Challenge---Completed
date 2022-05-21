
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6


// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }




function playerNames () {
  var player1 = document.getElementById("playerName1").value;
  var player2 = document.getElementById("playerName2").value;

  document.getElementById("player1Name").innerHTML = player1;
  document.getElementById("player2Name").innerHTML = player2;


        var randomNumber1 = Math.floor(Math.random()*6) +1;
        var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
        
        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute('src', randomImageSource1);
        
        
        var randomNumber2 = Math.floor(Math.random()*6) +1;
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
        
        var image2 = document.querySelectorAll("img")[1];
        image2.setAttribute('src',randomImageSource2);
        
        
        if (randomNumber1 > randomNumber2) {
          document.getElementById("hero").innerHTML ="🚩 " + player1 +  " Wins";
          document.getElementById("hero").style.color = "green";
        }
        
        else if (randomNumber2 > randomNumber1) {
          document.getElementById("hero").innerHTML =  player2 + " Wins 🚩";
          document.getElementById("hero").style.color = "beige"; 
        }
        
        else{document.getElementById("hero").innerHTML = "Draw!!!";
             document.getElementById("hero").style.color = "white";
        }
      
}
		
		



  
  


  
  

  



