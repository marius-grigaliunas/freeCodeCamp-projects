const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const telephoneCheck = (str) => {

  let formatRegex1 = /^[1]?[\s-]?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/

  // has 1 in front?
  // has a space or hyphen ?
  // either has (000) or 000.
  // has a space or hyphen ?
  // has 000.
  // has a space or hyphen?
  // has 0000 at the end.

  return formatRegex1.test(str);
}

const check = () => {
  const str = userInput.value; 
  
  if(str === "") {
    alert("Please provide a phone number");
    return;
  }

  userInput.value = "";
  resultsDiv.innerHTML += telephoneCheck(str) ? "Valid US number: " + str : "Invalid US number: " + str; 
};

const clear = () => {
  resultsDiv.innerHTML = "";
  userInput.value = "";
};

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);