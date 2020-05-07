let teamOneshot= document.querySelector ("#teamone-shoot-button");
let teamTwoshot= document.querySelector ("#teamtwo-shoot-button");
let resetButton=document.querySelector("#reset-button")
let counter1 = document.querySelector ("#teamone-numshots");
let counter2 = document.querySelector ("#teamtwo-numshots");
let randomOne = document.querySelector ("#teamone-numgoals");
let randomTwo = document.querySelector ("#teamtwo-numgoals");
let numberOfReset = document.querySelector("#num-resets");

resetButton.addEventListener("click",function()
{
    console.log("+ button clicked");
let NewReset = Number(numberOfReset.innerHTML) + 1;
numberOfReset.innerHTML=NewReset;

document.getElementById("teamone-numshots").innerHTML="0"; 
document.getElementById("teamtwo-numshots").innerHTML="0";
document.getElementById("teamone-numgoals").innerHTML="0";
document.getElementById("teamtwo-numgoals").innerHTML="0";
})

teamOneshot.addEventListener("click",function()
{
    console.log("+ button clicked");
let newCountshot = Number(counter1.innerHTML) + 1;
counter1.innerHTML = newCountshot;
let random1 = Math.floor(Math.random()*10)+1;
console.log(random1)

if (random1 <= 5){
    let goalOne = Number(randomOne.innerHTML ) +1;
randomOne.innerHTML = goalOne;
      }
    
})

teamTwoshot.addEventListener("click",function()
{
    console.log("+ button clicked");
let newCountshot = Number(counter2.innerHTML) + 1;
counter2.innerHTML = newCountshot;
let random2 = Math.floor(Math.random()*10)+1;
console.log(random2)

if (random2 <= 5){
    let goalTwo = Number(randomTwo.innerHTML ) +1;
randomTwo.innerHTML = goalTwo;
      }
    
})
    

