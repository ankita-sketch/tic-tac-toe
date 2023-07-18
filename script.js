let nextturn = new Audio("ting.mp3");
var music = new Audio("music.mp3");
let turn = "X";
let gameover1 = false;


//change the turn
const change = () => {
  return turn === "X" ? "0" : "X";
};

//check win
const checkwin = () => {
  let content = document.getElementsByClassName("gridtext");
  let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if((content[e[0]].innerText === content[e[1]].innerText) && (content[e[2]].innerText === content[e[1]].innerText) && (content[e[0]].innerText !== "") )
    {
     document.querySelector('.info').innerText ="congralutions , " + content[e[0]].innerText + " Won"
     gameover1 = true;
     let gameover = new Audio("gameover.mp3");
     gameover.play();
     document.querySelector(".image-box").getElementsByTagName("img")[0].style.width =" 200px";
    }
  })
}

//game logic
let boxes = document.getElementsByClassName("grid");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".gridtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = change();
      nextturn.play();
      checkwin();
      if (!gameover1) {
        document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
      }
    }
  });
});

//adding eventlistener for reset buttom
Reset.addEventListener('click' , () =>
{
    let boxes = document.querySelectorAll(".gridtext");
    Array.from(boxes).forEach((element) => {
        element.innerText = "";
    });
    turn = "X";
    gameover1 = false;
    document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
    document.querySelector(".image-box").getElementsByTagName("img")[0].style.width =" 0px";
})