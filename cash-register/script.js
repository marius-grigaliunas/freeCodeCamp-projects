    const userInput = document.getElementById("cash");
    const purchaseBtn = document.getElementById("purchase-btn");
    const changeDue = document.getElementById("change-due");

    let price = 19.5;
    let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    let cash = 0;


    const checkCashRegister = (price, cash, cid) => {
        let registerSum = Math.round(cid.reduce((accumulator, current) => accumulator + current[1], 0)*100)/100;

        let registerCash = cid.map(([unit, amount]) => ({
        unit, amount}));
    
        const values = {
        "PENNY"       : 0.01,
        "NICKEL"      : 0.05,
        "DIME"        : 0.1,
        "QUARTER"     : 0.25,
        "ONE"         : 1,
        "FIVE"        : 5,
        "TEN"         : 10,
        "TWENTY"      : 20,
        "ONE HUNDRED" : 100
        };
    
        let change = Math.round((cash - price) * 100) / 100;
    
        let result = [];
        if(price > cash) {
            alert("Customer does not have enough money to purchase the item");
            return;
        } else if (cash == price) {
            changeDue.innerHTML = "No change due - customer paid with exact cash";
            return;
        }
        else if(change > registerSum) {
            changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS`;
            return;
        }
        else if(change == registerSum) {
            let res = [];
            for(let i = 0; i < cid.length; i++) {
                switch(cid[i][0]) {
                    case "QUARTER":
                        res[0] = `${cid[i][0]}: $${cid[i][1]}`;
                        break;
                    case "DIME":
                        res[1] = `${cid[i][0]}: $${cid[i][1]}`;
                        break;
                    case "NICKEL":
                        res[2] = `${cid[i][0]}: $${cid[i][1]}`;
                        break;
                    case "PENNY":
                        res[3] = `${cid[i][0]}: $${cid[i][1]}`;
                        break;
                }
            }

            changeDue.innerHTML = `Status: CLOSED
            ${res.map(item => item + "\n").join("")}
            `;
            return;
        } else {
            for(let i = registerCash.length - 1; i >= 0; i--) {
                if(change > values[registerCash[i].unit]){
                
                if(registerCash[i].amount > change) {

                    let wholePart = Math.trunc(change / values[registerCash[i].unit]);
                    let placeholder = `${registerCash[i].unit}: $${wholePart * values[registerCash[i].unit]}`;
                    result.push(placeholder);
                    change = Math.round((change - (wholePart * values[registerCash[i].unit])) * 100) / 100;
                
                } else {
                
                    let placeholder = [`${registerCash[i].unit}: $${registerCash[i].amount}`];
                    result.push(placeholder);
                    change = Math.round((change - registerCash[i].amount) * 100) / 100;
                }
            }
        }
    
        if(change > 0) {
                changeDue.innerHTML = `Status: INSUFFICIENT_FUNDS`;
                return;
            }
        }

        changeDue.innerHTML = `
        Status: OPEN
        ${result.map(item => item + "\n").join("")}`;
        return;
    }
    
    purchaseBtn.addEventListener("click", () => {
    cash = userInput.value;
    checkCashRegister(price, cash, cid)
    });