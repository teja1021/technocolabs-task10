// Function to get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Oops! Invalid choice. Please pick rock, paper, or scissors.');
    }
};

// Function to get the computer's choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return null; // Just in case something unexpected happens
    }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'Boom! You used the secret cheat code and won!';
    }

    if (userChoice === computerChoice) {
        return 'It\'s a tie! Try again.';
    }

    if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
    }

    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
    }

    if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
    }
};

// Function to play the game
// use bomb at uerchoice ,user will win every time 
const playGame = () => {
    const userChoice = getUserChoice('scissors'); // Change this to test different inputs
    const computerChoice = getComputerChoice();

    if (!userChoice) {
        return; // Exit if the user input was invalid
    }

    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame();
