const imgArry = [{
        img: "/stone.png",
        id: "rock-img"
    },
    {
        img: "/white-paper.png",
        id: "paper-img"
    },
    {
        img: "/scissor-1.png",
        id: "scissor-img"
    }
]
var userResult = document.querySelector('.choice h3');
var rock = document.querySelector('.rock img')
var paper = document.querySelector('.paper')
var scissor = document.querySelector('.scissor img')
var images = document.querySelector('.images')
let num, computerChoice, userChoice;
var rockDiv = document.querySelector('.rock')
var scissorDiv = document.querySelector('.scissor')
var choice = document.querySelectorAll('.imgs');
let computerScore, userScore;
choice.forEach(function(item) {
    item.addEventListener('click', function() {
        num = randomNumber();
        let computer = imgArry[num];
        let userImg = item.firstElementChild.src;
        computerChoice = computer.id;
        userChoice = item.firstElementChild.id;
        result(computerChoice, userChoice)
        showResult(computerScore, userScore)
        showChoice(userImg, computer)

    });
});



function result(computerChoice, userChoice) {
    if (computerChoice === "rock-img" && userChoice === "paper-img") {
        computerScore = 0,
            userScore = 1;
    } else if (computerChoice === "paper-img" && userChoice === "rock-img") {

        computerScore = 1,
            userScore = 0;
    } else if (computerChoice === "rock-img" && userChoice === "scissor-img") {

        computerScore = 1,
            userScore = 0;
    } else if (computerChoice === "scissor-img" && userChoice === "rock-img") {

        computerScore = 0,
            userScore = 1;
    } else if (computerChoice === "paper-img" && userChoice === "scissor-img") {

        computerScore = 0,
            userScore = 1;
    } else if (computerChoice === "scissor-img" && userChoice === "paper-img") {

        computerScore = 1,
            userScore = 0;
    } else {
        computerScore = 0,
            userScore = 0;
    }


}

function showChoice(userImg, computer) {
    paper.innerHTML = '<h2 id = "result">Result</h2>'
    paper.classList.add('border');
    paper.classList.remove('hover');
    rockDiv.classList.remove('hover');
    scissorDiv.classList.remove('hover');
    rock.src = userImg;
    scissor.src = computer.img;
}

function showResult(computerScore, userScore) {

    if (computerScore > userScore) {
        userResult.textContent = 'You Loss!';
        userResult.style.color = 'red';
    } else if (computerScore < userScore) {
        userResult.textContent = 'You Won!';
        userResult.style.color = 'green';

    } else {
        userResult.textContent = 'Game is tie!';
        userResult.style.color = 'blue';
    }
    rockDiv.classList.add('blueShadow')
    scissorDiv.classList.add('redShadow')

    setTimeout(defaultSet, 3000);

}

function defaultSet() {
    paper.innerHTML = '<img src="/white-paper.png" id="paper-img" alt="">'
    paper.classList.remove('border')
    paper.classList.add('hover');
    rockDiv.classList.add('hover');
    scissorDiv.classList.add('hover');
    rock.src = "/stone.png";
    scissor.src = "/scissor-1.png";
    rockDiv.classList.remove('blueShadow')
    scissorDiv.classList.remove('redShadow')
    userResult.style.color = '#ffc55a';
    userResult.textContent = 'Make Your Choice Now!';

}

function randomNumber() {
    return Math.floor(Math.random() * 3);
}
console.log('check');