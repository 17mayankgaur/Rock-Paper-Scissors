"use strict";
const ROCK ="fa-solid fa-hand-back-fist player";
const PAPER = "fa-solid fa-hand player";
const SCISSORS="fa-solid fa-hand-scissors player";
const choice =[ROCK,PAPER,SCISSORS];

let gameControl = document.querySelectorAll('.game-control');
let playerScore=document.querySelector('.playerScore');
let player=document.querySelector('.player');
let computerScore=document.querySelector('.computerScore');
let computer=document.querySelector('.computer');
let reset = document.querySelector('.reset');
let status =document.querySelectorAll('.status');
let heading = document.querySelector('.demo');

let playerScoreCounter=0;
let computerScoreCounter=0;
let gameOn=true;

function visibility()
  {
    status[0].style.visibility = `hidden`;
    status[1].style.visibility = `hidden`;
  }


  for(let i=0;i<gameControl.length;i++)
  {
    gameControl[i].addEventListener('click',
    function()
    { if(gameOn){
        visibility();
        heading.textContent="😎 Play to win 🎮🚀";
        let randomNumber = Math.trunc(Math.random()*3);
        computer.classList.value=choice[randomNumber];

        if(gameControl[i].value===`ROCK`)
          player.classList.value=ROCK;
        if(gameControl[i].value===`PAPER`)
          player.classList.value=PAPER;
        if(gameControl[i].value===`SCISSORS`)
          player.classList.value=SCISSORS;


          if (gameControl[i].value === "ROCK" ||gameControl[i].value === "PAPER" ||gameControl[i].value === "SCISSORS" )
          {
            if(gameControl[i].value === "ROCK" && computer.classList.value === SCISSORS || gameControl[i].value === "PAPER" && computer.classList.value === ROCK || gameControl[i].value === "SCISSORS" && computer.classList.value === PAPER)
              {
                playerScore.textContent = ++playerScoreCounter;
                status[0].style.visibility = `visible`;
              }
            if(computer.classList.value === ROCK && gameControl[i].value === 'SCISSORS'|| computer.classList.value === PAPER && gameControl[i].value === 'ROCK' || computer.classList.value === SCISSORS && gameControl[i].value === 'PAPER')
                {
                  computerScore.textContent = ++computerScoreCounter;
                  status[1].style.visibility = `visible`;
                }
            if(player.classList.value===computer.classList.value)
              heading.textContent="🚩️MATCH TIE🚩";

              if(playerScoreCounter > computerScoreCounter && playerScoreCounter === 20)
                {
//                   console.log(`player wins`);
                  player.classList.value='player   fa-solid fa-medal ';
                  computer.classList.value='computer fa-solid fa-ghost';
                  heading.textContent="🎉Congratualtions🎉 ↩️ press reset to play again";
  ;
                  gameOn=false;
                }
              else if(playerScoreCounter < computerScoreCounter && computerScoreCounter === 20)
            {
//               console.log(`bot wins`);
                player.classList.value='player fa-solid fa-ghost';
                heading.textContent="Better Luck Next Time😃↩️ press reset to play again";
              computer.classList.value='computer fa-solid fa-medal ';
              gameOn=false;
          }
          }
    }

  });
  }
reset.addEventListener('click',function(){
  playerScore.textContent = computerScore.textContent = computerScoreCounter = playerScoreCounter = 0;
  heading.textContent="🎮Let's Play🎮";
  player.classList.value='player  fa-solid fa-user-astronaut';
  computer.classList.value='computer fa-solid fa-robot';
  gameOn= true;
  visibility();
});

document.body.style.overflow = 'hidden';
