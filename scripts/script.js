//elements
let playButton = document.getElementById("PlayButton")
let centers = document.getElementById("FastFingers")
let level123 = document.getElementById("123")
let levl1 = document.getElementById("1")
let levl2 = document.getElementById("2")
let levl3 = document.getElementById("3")
let figureJumping = document.getElementById("figure-jumping")
let keyboard = document.getElementById("keyboard")
let gameEl = document.getElementById("game")
let  CountDown = document.getElementById("count-down")
let startCount = document.getElementById("start-count")
let highScore = document.getElementById("highScore")
let infoText = document.getElementById("info-text")
let Input = document.getElementById("input")
let scoreEl = document.getElementById("score")
let TimeEl = document.getElementById("time")
let final = document.getElementById("final-score")
let menu = document.getElementById("menu")
let gameOverEl = document.getElementById("game-over")
let back = document.getElementById("back")
let info = document.getElementById("info")
let back2 = document.getElementById("back2")
let G2 = document.getElementById("G2")

//events
playButton.addEventListener("click",startGame)
levl1.addEventListener("click",keybordPart)
levl2.addEventListener("click",gamePart)
levl3.addEventListener("click",informationPart)
menu.addEventListener("click",finals)
back.addEventListener("click",start)
back2.addEventListener("click", b2)

function b2(){
   info.style.display = "none"
   centers.style.display = "block"
}

function start(){
   level123.style.display = "none"
   centers.style.display = "block"
}

function keybordPart () {
   let falseEl;
   level123.style.display = "none"
   figureJumping.style.display = "none"
   keyboard.style.display = "block"

   let oneLetters = randomLetter()
   let letterEl = document.getElementById(oneLetters)
   letterEl.classList.add("selected")

   document.addEventListener("keyup", function(e){
      if(falseEl){
         setTimeout(()=>falseEl.classList.remove("hit"),50)
      }
      if(e.code == oneLetters){
         letterEl.classList.remove("selected")
         oneLetters = randomLetter()
         letterEl = document.getElementById(oneLetters)
         letterEl.classList.add("selected")
      }else{
   falseEl = document.getElementById(e.code)
   falseEl.classList.add("hit")
      }
   })

}


function gamePart(){
   level123.style.display = "none"
   figureJumping.style.display = "none"
   CountDown.style.display ="block"
   let id = setInterval(function time(){
      console.log(startCount);
      if(startCount.innerHTML == 0){
         clearInterval(id)
        startCount.style.display = "none"
        gameEl.style.display ="block"
        game()
      } else{
         startCount.innerHTML = startCount.innerHTML -1
      }
    },1000)
  }

function informationPart(){
   level123.style.display = "none"
   figureJumping.style.display = "block"
   startCount.style.display = "none"
   info.style.display = "block"     
}

function startGame(){
   centers.style.display ="none"
   level123.style.display ="block"
}

function game() {
   let time = 10;
   let oneWord;
   let score = 0;
   let hScore;
let id = setInterval(function(){
   if(time >=1){
      time--;
      TimeEl.innerHTML = time
   } else  {
      clearInterval(id)
      gameOver()
   }
}, 1000)
    if(localStorage.length == 0){
       localStorage.score = 0
    }
    scoreEl.innerHTML = score
    hScore = localStorage.score
    oneWord = randomWord()
    infoText.innerHTML = oneWord
    highScore.innerHTML = localStorage.score
    Input.onchange = function(){
       if(Input.velue == oneWord){
          score++;
          time+=4
          TimeEl.innerHTML = time
          scoreEl.innerHTML = score
          if (score>=hScore){
              hScore = score
              localStorage.score = hScore
              highScore.innerHTML = hScore
          }
          scoreEl.innerHTML = score
          Input.value = ""
          oneWord = randomWord()
          infoText.innerHTML = oneWord
         
       } else {
         Input.value = ""
         oneWord = randomWord()
         infoText.innerHTML = oneWord
         time-=2
         TimeEl.innerHTML = time 
       }
    }
}

function randomLetter(){
   let i = Math.floor(Math.random()*letters.length)
         return letters[i]
}

function randomPuzzle(){
   let i = Math.floor(Math.random()*puzzles.length)
         return puzzles[i]
}

function randomWord(){
         let i = Math.floor(Math.random()*words.length)
         return words[i]
}

function gameOver(){
    gameEl.style.display = "none"
    final.style.display = "block"
    gameOverEl.style.display = "block"
   final.innerHTML = scoreEl.innerHTML
}

function finals(){
   gameOverEl.style.display = "none"
   final.style.display = "none"
   level123.style.display = "block"
   figureJumping.style.display = "block"
}

