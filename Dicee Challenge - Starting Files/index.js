var randomNumber1 = Math.ceil(Math.random() * 6);

var randomNumber2 = Math.ceil(Math.random() * 6);

var randomImage1 = "images/dice" + randomNumber1 +".png";

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImage1); 

image2.setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}



