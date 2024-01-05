const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const convertToRoman = (num) => {
  
    let digits = String(num).split(''); //num is split into an array of digits
  
    let key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',  // an array of keys to match
               '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',	 // any digit
               '','I','II','III','IV','V','VI','VII','VIII','IX']; 
  
    let roman = '', i = 3; // i = 3 because only the last 3 digits are different
  
    while (i--) {
      roman = (key[+digits.pop() + (i * 10)] || '') + roman; //converting a digit into a roman char
    }							   // all the possible digits are in places themselves 
                                   //+ 0 or 10 or 20 depending on the digits place
                                 // exmp. 6 = 26
    return Array(+digits.join('') + 1).join('M') + roman;	   // adds an M if there is a thousand.
  }
  

const checkInput = (inputString) => {
    console.log(inputString);
    const input = parseInt(inputString);
    
    switch(true) {
        case inputString === "":
            outputDiv.textContent = "Please enter a valid number";
            outputDiv.classList.add("error");
            outputDiv.style.display = "flex";
            return;
        case input < 0:
            outputDiv.textContent = "Please enter a number greater than or equal to 1";
            outputDiv.classList.add("error");
            outputDiv.style.display = "flex";
            return;
        case input > 3999:
            outputDiv.textContent = "Please enter a number less than or equal to 3999";
            outputDiv.classList.add("error");
            outputDiv.style.display = "flex";
            return;
        case input === 0:
            outputDiv.textContent = "Romans didn't have a way to represent 0, please enter a postive number";
            outputDiv.classList.add("error");
            outputDiv.style.display = "flex";
            return;
        default:
            outputDiv.textContent = convertToRoman(input);
            outputDiv.classList.remove("error");
            outputDiv.style.display = "flex";
            break;
    }
};

convertBtn.addEventListener("click", () => {
    const input = inputNumber.value;

    checkInput(input);
});