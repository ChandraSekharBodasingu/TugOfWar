const rope = document.getElementById("img-rope");
let totalTurns = 0;
const gameBox = document.getElementById("gameBox");

const progressBarPlayer = document.getElementById("progressBarPlayer");
const progressBarOpponent = document.getElementById("progressBarOpponent");

const PlayerName = document.getElementById("playerName");

const player = document.getElementById("player");

const playerFooter = document.getElementById("playerFooter");

let answer = 0;

// Get Rope Position
let ropePos = getComputedStyle(rope).getPropertyValue("margin-left");
// Removing px in the Value
adjRopePos = ropePos.substring(0, ropePos.length - 2);

// Rope Pull
var ropePull = 0;
let PbarOpponentHeight = 0;
let PbarFlag = false;
let ropePulls = () => {
  let fps = 120;
  let leftPull = setInterval(() => {
    rope.style.marginLeft = `-${Math.abs(Number(adjRopePos)) + ropePull}px`;
    ropePull += 0.8;

    if (!PbarFlag) {
      progressBarOpponent.style.height = `${PbarOpponentHeight}px`;
      PbarOpponentHeight = ropePull / 1.5;
    }

    if (PbarOpponentHeight >= 390 || Pbarheight >= 390) {
      PbarFlag = true;
      clearInterval(leftPull);
      if (Pbarheight >= 390) {
        GameEndModal("win");
      } else {
        GameEndModal("lose");
      }
    }
  }, 3000 / fps);
};

const game = () => {
  if (totalTurns > 9) {
    levelTwo();
  } else {
    levelOne();
  }
};

const levelOne = () => {
  gameBox.innerHTML = "";

  let opt = ["+", "-", "x"];

  let a = Math.floor(Math.random() * 10 + 1);
  let b = Math.floor(Math.random() * 10 + 1);

  let optChoice = Math.floor(Math.random() * 3);

  let ans = 0;

  switch (optChoice) {
    case 0:
      ans = a + b;
      break;
    case 1:
      ans = a - b;
      break;
    case 2:
      ans = a * b;
      break;
  }

  let ansVal = [
    ans + Math.floor(Math.random() * 8 + 1),
    ans - Math.floor(Math.random() * 4 + 2),
    ans * Math.floor(Math.random() * 5 - 4),
  ];

  ansVal[optChoice] = ans;
  answer = ans;

  let ansCount = 0;
  if (ansVal[0] == ansVal[1] || ansVal[0] == ansVal[2]) {
    ansCount++;
  } else if (ansVal[1] == ansVal[0] || ansVal[1] == ansVal[2]) {
    ansCount++;
  } else if (ansVal[2] == ansVal[0] || ansVal[2] == ansVal[1]) {
    ansCount++;
  }

  textChoices = [
    "Easy",
    "Simple",
    "Effortless",
    "Uncomplicated",
    "Trouble-free",
  ];

  const badge = document.createElement("div");
  badge.classList.add("badge");
  const badgeP = document.createElement("p");
  badge.appendChild(badgeP);
  badgeP.innerText = `Judge: ${
    ansCount > 0
      ? "Say hi to Luck !"
      : textChoices[Math.floor(Math.random() * 5)]
  }`;
  gameBox.prepend(badge);

  const qsn = document.createElement("h1");
  qsn.innerText = `${a} ${opt[optChoice]} ${b}`;
  gameBox.appendChild(qsn);
  const ul = document.createElement("ul");
  gameBox.appendChild(ul);
  ansVal.map((d) => {
    const li = document.createElement("li");
    li.innerHTML = `<button onclick="checkAns(${d},1)">${d}</button>`;
    ul.appendChild(li);
  });

  const pullRate = document.createElement("div");
  pullRate.classList.add("pullRate");
  pullRate.innerHTML = `<p>Your Pull Rate : <span>1x</span></p>`;
  gameBox.appendChild(pullRate);

  // console.log(qsn.innerText);
  // console.log(ans);

  totalTurns++;
};

const levelTwo = () => {
  gameBox.innerHTML = "";

  let opt = [
    ["+", "x"],
    ["x", "-"],
    ["x", "+"],
  ];

  let difficultyVal = [];

  if (totalTurns <= 20) {
    difficultyVal = [8, 9, 10];
  } else {
    difficultyVal = [10, 11, 12];
  }

  let a = Math.floor(Math.random() * difficultyVal[0] + 1);
  let b = Math.floor(Math.random() * difficultyVal[1] + 1);
  let c = Math.floor(Math.random() * difficultyVal[2] + 1);

  let optChoice = Math.floor(Math.random() * 3);

  let ans = 0;

  switch (optChoice) {
    case 0:
      ans = a + b * c;
      break;
    case 1:
      ans = a * b - c;
      break;
    case 2:
      ans = a * b + c;
      break;
  }

  let ansVal = [
    ans + Math.floor(Math.random() * 8 + 1),
    ans - Math.floor(Math.random() * 4 + 2),
    ans * Math.floor(Math.random() * 5 - 4),
  ];

  ansVal[optChoice] = ans;
  answer = ans;

  let ansCount = 0;
  if (ansVal[0] == ansVal[1] || ansVal[0] == ansVal[2]) {
    ansCount++;
  } else if (ansVal[1] == ansVal[0] || ansVal[1] == ansVal[2]) {
    ansCount++;
  } else if (ansVal[2] == ansVal[0] || ansVal[2] == ansVal[1]) {
    ansCount++;
  }

  textChoices = [
    "Best of Luck",
    "Do your Calc ! ",
    "Was it Difficult ?",
    "Go for it, Easy right ?",
    "Have fun dude !",
  ];

  const badge = document.createElement("div");
  badge.classList.add("badge");
  const badgeP = document.createElement("p");
  badge.appendChild(badgeP);
  badgeP.innerText = `Judge: ${
    ansCount > 0
      ? "Say hi to Luck !"
      : textChoices[Math.floor(Math.random() * 5)]
  }`;
  gameBox.prepend(badge);

  const qsn = document.createElement("h1");
  qsn.innerText = `${a} ${opt[optChoice][0]} ${b} ${opt[optChoice][1]} ${c}`;
  gameBox.appendChild(qsn);
  const ul = document.createElement("ul");
  gameBox.appendChild(ul);
  ansVal.map((d) => {
    const li = document.createElement("li");
    li.innerHTML = `<button onclick="checkAns(${d},2)">${d}</button>`;
    ul.appendChild(li);
  });

  const pullRate = document.createElement("div");
  pullRate.classList.add("pullRate");
  pullRate.innerHTML = `<p>Your Pull Rate : <span>2x</span></p>`;
  gameBox.appendChild(pullRate);

  // console.log(qsn.innerText);
  // console.log(ans);
  totalTurns++;
};

let Pbarheight = 50;

const checkAns = (num, level) => {
  if (+num === answer) {
    // console.log("You are correct");
    add(level);
  } else {
    if (Pbarheight > 50) {
      Pbarheight -= 10;
      progressBarPlayer.style.height = `${Pbarheight}px`;
    }
    // console.log("You are Wrong");
    gameBox.classList.add("animate__wobble");
    setTimeout(() => {
      gameBox.classList.remove("animate__wobble");
    }, 1000);
  }

  game();
};

const add = (level) => {
  Pbarheight += 20;
  progressBarPlayer.style.height = `${Pbarheight}px`;

  if (level == 1) {
    ropePull -= 50;
  } else {
    ropePull -= 100;
  }
};

// const reset = () => {
//   ropePull = 0;
// };

const entry = () => {
  // console.log(PlayerName.value);
  if (!PlayerName.value == "") {
    const modal = document.getElementById("modal");
    modal.remove();
    player.innerText = PlayerName.value.toLowerCase();
    playerFooter.innerText = player.innerText;
    init();
  } else {
    alert("Enter Name first !");
  }
};

const GameEndModal = (type) => {
  const eleGame = document.createElement("div");

  const loseGame = ` <div class="modal" id="modal">
      <div class="modal-details">
        <h1>Game Over, ${PlayerName.value}</h1>
        <h4>Refresh the Page to try again</h4>   
      </div>
      <!-- ./ modal-details -->
    </div>
    <!-- ./ Modal -->`;

  const winGame = ` <div class="modal" id="modal">
      <div class="modal-details">
        <h1>You Won, ${PlayerName.value}</h1>
        <h4>Congratulations, You look good in Maths !</h4>   
      </div>
      <!-- ./ modal-details -->
    </div>
    <!-- ./ Modal -->`;

  if (type === "lose") {
    // console.log("Works");
    eleGame.innerHTML = loseGame;
    document.body.prepend(eleGame);
  } else {
    eleGame.innerHTML = winGame;
    document.body.prepend(eleGame);
  }
};

const init = () => {
  ropePulls();
  game();
};
