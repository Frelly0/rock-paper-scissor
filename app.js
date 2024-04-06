const result = document.getElementById('result');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');


function computerChoice(){
    let str = ['Rock', 'Paper', 'Scissor']
    let x = str[Math.floor((Math.random() * str.length))];
    return x;
}

//   -------------------------------------- Rock round --------------------------

rockBtn.addEventListener('click', () => {
  result.innerHTML = rockPlay()
});

function rockPlay() {

    const computerSelection = computerChoice();
  const rockSelection = 'Rock';

    if(rockSelection === computerSelection){
        return 'Game is draw play Again';
    } else if (rockSelection && computerSelection === 'Scissor') {
        return 'Player win'
    } else if (rockSelection && computerSelection === 'Paper') {
        return 'Computer win'
    }
    
  }


//   -------------------------------------- paper round --------------------------

paperBtn.addEventListener('click', () => {
  result.innerHTML = paperPlay()
});

  function paperPlay() {

    const computerSelection = computerChoice();
  const paperSelection = 'Paper';

    if(paperSelection === computerSelection){
        return 'Game is draw play Again';
    } else if (paperSelection && computerSelection === 'Scissor') {
        return 'Computer win'
    } else if (paperSelection && computerSelection === 'Rock') {
        return 'Player win'
    }
    
  }
  

//   -------------------------------------- scissor round --------------------------

scissorBtn.addEventListener('click', () => {
  result.innerHTML = scissorPlay()
});

  function scissorPlay() {

    const computerSelection = computerChoice();
  const scissorSelection = 'Scissor';

    if(scissorSelection === computerSelection){
        return 'Game is draw play Again';
    } else if (scissorSelection && computerSelection === 'Rock') {
        return 'Computer win'
    } else if (scissorSelection && computerSelection === 'Paper') {
        return 'Player win'
    }
    
  }
 


  