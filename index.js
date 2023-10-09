
// let randomNumber1 = (Math.floor(Math.random()*6))+1;
// let randomNumber2 = (Math.floor(Math.random()*6))+1;

// let image1 = document.getElementsByClassName("img1")[0];
// let image2 = document.getElementsByClassName("img2")[0];


// switch (randomNumber1) {
//     case 1:
//         image1.src = "./images/dice1.png"
//         break;
//     case 2:
//         image1.src = "./images/dice2.png"
//         break;
//     case 3:
//         image1.src = "./images/dice3.png"
//         break;
//     case 4:
//         image1.src = "./images/dice4.png"
//         break;
//     case 5:
//         image1.src = "./images/dice5.png"
//         break;
//     case 6:
//         image1.src = "./images/dice6.png"
//         break;
//     default:
//         break;
// }

// switch (randomNumber2) {
//     case 1:
//         image2.src = "./images/dice1.png"
//         break;
//     case 2:
//         image2.src = "./images/dice2.png"
//         break;
//     case 3:
//         image2.src = "./images/dice3.png"
//         break;
//     case 4:
//         image2.src = "./images/dice4.png"
//         break;
//     case 5:
//         image2.src = "./images/dice5.png"
//         break;
//     case 6:
//         image2.src = "./images/dice6.png"
//         break;
//     default:
//         break;
// }



// let randomNumber1 = (Math.floor(Math.random() * 6)) + 1;

// if (randomNumber1 === 1) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice1.png");
// }
// else if (randomNumber1 === 2) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice2.png");
// }
// else if (randomNumber1 === 3) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice3.png");
// }
// else if (randomNumber1 === 4) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice4.png");
// }
// else if (randomNumber1 === 5) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice5.png");
// }
// else {
//     document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice6.png");
// }


// let randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

// if (randomNumber2 === 1) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice1.png");
// }
// else if (randomNumber2 === 2) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice2.png");
// }
// else if (randomNumber2 === 3) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice3.png");
// }
// else if (randomNumber2 === 4) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice4.png");
// }
// else if (randomNumber2 === 5) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice5.png");
// }
// else {
//     document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice6.png");
// }




let randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
let randomDiceImage1 = "dice"+randomNumber1+".png";
let randomImageSource1 = "images/"+randomDiceImage1;
document.getElementsByTagName("img")[0].setAttribute("src", randomImageSource1);

let randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
let randomImageSource2 = "./images/dice"+randomNumber2+".png";
document.getElementsByTagName("img")[1].setAttribute("src", randomImageSource2);


let winner = document.querySelector("h1");

if(randomNumber1===randomNumber2){
    winner.innerText="Draw!";
}
else if(randomNumber1>randomNumber2){
    winner.innerText="🚩Player1 Wins";
}
else{
    winner.innerText="Player2 Wins🚩";
}
