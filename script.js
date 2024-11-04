"use strict";
const target = 100 ;
let totalplayer1 = 0;
let totalplayer2 = 0;
let current1 = 0;
let current2 = 0;
document.getElementById("btnrolldice").addEventListener("click", function () {
  let randomdicevalue = Math.floor(Math.random() * 6) + 1;
  let imageurl = document.getElementById("imagesurl");
  if(totalplayer1 >= target){
    document.getElementById("win-lose").textContent = 'PLAYER 1 IS WINNER💯';
  }
  else if(totalplayer2 >= target){
     document.getElementById("win-lose").textContent = 'PLAYER 2 IS WINNER💯';
  } 
  else {
  switch (randomdicevalue) {
    case 1:
      imageurl.setAttribute("src", "image/dice-six-faces-one.png");
      current1 = 0;
      current2 = 0;
      if (document.querySelector(".spanplayer").textContent === "PLAYER 1") {
        document.querySelector(".spanplayer").textContent = "PLAYER 2";
        document.getElementById("h1").textContent = current1;
      } else {
        document.querySelector(".spanplayer").textContent = "PLAYER 1";
        document.getElementById("h2").textContent = current2;
      }
      break;
    case 2:
      imageurl.setAttribute("src", "image/dice-six-faces-two.png");
      if (document.querySelector(".spanplayer").textContent === "PLAYER 1") {
        current1 = current1 + 2;
        document.getElementById("h1").textContent = current1;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer1 += current1;
            if(totalplayer1 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 1 IS WINNER💯';
            }
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current1 = 0; 
            document.querySelector(".spanplayer").textContent = "PLAYER 2";
            document.getElementById("h1").textContent = current1;
          });
        
      } else {
        current2 = current2 + 2;
        document.getElementById("h2").textContent = current2;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer2 += current2;
            if(totalplayer2 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 2 IS WINNER💯';
            } 
            document.getElementById("h2").textContent = current2;
            document.getElementById("totalplayer2").textContent = totalplayer2;
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current2 = 0;
            document.querySelector(".spanplayer").textContent = "PLAYER 1";
            
          });
        document.getElementById("h2").textContent = current2;
      }
      break;
    case 3:
      imageurl.setAttribute("src", "image/dice-six-faces-three.png");
      // current = current + 3;
      if (document.querySelector(".spanplayer").textContent === "PLAYER 1") {
        current1 = current1 + 3;
        document.getElementById("h1").textContent = current1;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer1 += current1;
            if(totalplayer1 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 1 IS WINNER💯';
            }
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current1 = 0; 
            document.querySelector(".spanplayer").textContent = "PLAYER 2";
            document.getElementById("h1").textContent = current1;
          });
        
      } else {
        current2 = current2 + 3;
        document.getElementById("h2").textContent = current2;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer2 += current2;
            if(totalplayer2 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 2 IS WINNER💯';
            } 
            document.getElementById("h2").textContent = current2;
            document.getElementById("totalplayer2").textContent = totalplayer2;
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current2 = 0;
            document.querySelector(".spanplayer").textContent = "PLAYER 1";
            
          });
        document.getElementById("h2").textContent = current2;
      }
      break;
    case 4:
      imageurl.setAttribute("src", "image/dice-six-faces-four.png");
      // current = current + 4;
      if (document.querySelector(".spanplayer").textContent === "PLAYER 1") {
        current1 = current1 + 4;
        document.getElementById("h1").textContent = current1;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer1 += current1;
            if(totalplayer1 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 1 IS WINNER💯';
            }
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current1 = 0; 
            document.querySelector(".spanplayer").textContent = "PLAYER 2";
            document.getElementById("h1").textContent = current1;
          });
        
      } else {
        current2 = current2 + 4;
        document.getElementById("h2").textContent = current2;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer2 += current2;
            if(totalplayer2 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 2 IS WINNER💯';
            } 
            document.getElementById("h2").textContent = current2;
            document.getElementById("totalplayer2").textContent = totalplayer2;
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current2 = 0;
            document.querySelector(".spanplayer").textContent = "PLAYER 1";
            
          });
        document.getElementById("h2").textContent = current2;
      }
      break;
    case 5:
      imageurl.setAttribute("src", "image/dice-six-faces-five.png");
      // current = current + 5;
      if (document.querySelector(".spanplayer").textContent === "PLAYER 1") {
        current1 = current1 + 5;
        document.getElementById("h1").textContent = current1;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer1 += current1;
            if(totalplayer1 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 1 IS WINNER💯';
            }
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current1 = 0; 
            document.querySelector(".spanplayer").textContent = "PLAYER 2";
            document.getElementById("h1").textContent = current1;
          });
        
      } else {
        current2 = current2 + 5;
        document.getElementById("h2").textContent = current2;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer2 += current2;
            if(totalplayer2 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 2 IS WINNER💯';
            } 
            document.getElementById("h2").textContent = current2;
            document.getElementById("totalplayer2").textContent = totalplayer2;
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current2 = 0;
            document.querySelector(".spanplayer").textContent = "PLAYER 1";
            
          });
        document.getElementById("h2").textContent = current2;
      }
      break;
    case 6:
      imageurl.setAttribute("src", "image/dice-six-faces-six.png");
      // current = current + 6;
      if (document.querySelector(".spanplayer").textContent === "PLAYER 1") {
        current1 = current1 + 6;
        document.getElementById("h1").textContent = current1;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer1 += current1;
            if(totalplayer1 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 1 IS WINNER💯';
            }
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current1 = 0; 
            document.querySelector(".spanplayer").textContent = "PLAYER 2";
            document.getElementById("h1").textContent = current1;
          });
        
      } else {
        current2 = current2 + 6;
        document.getElementById("h2").textContent = current2;
        document
          .getElementById("holdbtn")
          .addEventListener("click", function () {
            totalplayer2 += current2;
            if(totalplayer2 >= target){
              document.getElementById("win-lose").textContent = 'PLAYER 2 IS WINNER💯';
            } 
            document.getElementById("h2").textContent = current2;
            document.getElementById("totalplayer2").textContent = totalplayer2;
            document.getElementById("totalplayer1").textContent = totalplayer1;
            current2 = 0;
            document.querySelector(".spanplayer").textContent = "PLAYER 1";
            
          });
        document.getElementById("h2").textContent = current2;
      }
      break;
    }
      
  }
});

if(totalplayer1 >= target){
  document.getElementById("win-lose").textContent = 'PLAYER 1 IS WINNER💯';
}
if(totalplayer2 >= target){
   document.getElementById("win-lose").textContent = 'PLAYER 2 IS WINNER💯';
} 


