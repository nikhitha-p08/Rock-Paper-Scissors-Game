let userScore = 0; //tracking user score
let compScore = 0; //tracking comp score

const choices = document.querySelectorAll(".choice");   //consider choices store list of all elements with class choice

//-----------------------------------// to generate computer choice

const genCompChoice = () => {
    const options = ["rock","paper","scissors"]; //random()-> number b/w 0 and 1
    const randIdx = Math.floor(Math.random()*3); //random()*3 -> num b/w 0 and 2 use em as indices
    return options[randIdx];
};//random()*10 -> num b/w 0 and 9    floor-->removes all decimal values


//---------------------getting User choice

choices.forEach((choice) =>{      //accesing each and every element in list choices
    choice.addEventListener("click", ()=>{
        //accesing user's choice
        const userChoice = choice.getAttribute('id');
        playGame(userChoice); //passing the value to playGame func to check and comapare who won
    });
}); 


//to use innerText need node so creating it by accessing now
let msgBox = document.querySelector("#msg");


//when draw happens
const draw = () =>{
    // console.log("Game was draw");
    msgBox.innerText = "Game was draw";
    msgBox.style.backgroundColor = "#8B5CF6";
};


let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


//to display winner
const showWinner= (userWin, compChoice, userChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win");
        msgBox.innerText = `You Win, your ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lost");
        msgBox.innerText = `You lost, ${compChoice} beats your ${userChoice}`;
        msgBox.style.backgroundColor = "red";
    }
};


//to compare user and comp choices

const playGame = (userChoice) => {
    console.log("user choice:",userChoice);  //user choice
    const compChoice = genCompChoice();
    console.log("computer choice:",compChoice);    //comp choice

    //to see who wins
    if (userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if (userChoice === "rock"){  //rock -> draw previously itself // next choices paper or scissors
            userWin = compChoice === "paper"? false:true;    //(if condi true hotha tog:if condi false hotha toh)
        }
        else if (userChoice === "paper"){//paper -> draw previously itself // next choices rock or scissors
            userWin = compChoice ==="scissors"? false:true;
        }
        else{//scissors -> draw previously itself // next choices rock or paper
            userWin = compChoice ==="rock"? false:true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
};


