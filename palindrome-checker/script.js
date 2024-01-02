const userInput = document.querySelector("#text-input");
const resultText = document.querySelector("#result");
const checkButton = document.querySelector("#check-btn");
const resultContainer = document.querySelector(".result-container");

const palindrome = (str) => {
    let word = str.toLowerCase(); 
  
    let result = word.replace(/(\W)|_/g, '');  // Converting the given string to lower case and removing any characters that aren't digits or letters.
    let resultCounter = 0;
  
    for(let i = 0; i < Math.trunc(result.length / 2); i++) { // this algorithm checks the first char with the last, second char with the second to last and so on. 
      if(result[i] == result[result.length - 1 - i]) {       // until they meet in the middle. if the characters match the result counter is being added to.
        resultCounter++;
      }
    }
  
    let decision = resultCounter == Math.trunc(result.length / 2);

    console.log(decision + "decision");

    if(decision) { // If the matched characters are equal to half of all the characters it means the word is a palindrome
        resultText.innerHTML = `<strong>${str}</strong> is a palindrome`;
    } else {
        resultText.innerHTML = `<strong>${str}</strong> is not a palindrome`;
    }

    resultContainer.style.display = "flex";

  }

  checkButton.addEventListener("click", () => {
    console.log("button pressed");
    
    if(userInput.value.length == 0) {
        alert("Please input a value");
    } else {
        palindrome(userInput.value);
    }
  });