// 1. Create a javascript function which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.
// 30 mins
 
const dashes = document.getElementById("dashes");
const dashesSolution = document.getElementById("dashesSolution")
const dashesBtn = document.getElementById("dashesBtn")

function evenNumberDashed(input) {
    const splitArray= [...input.value];
  
    let arr = [];
    splitArray.forEach((item, i) => {
        (+splitArray[i - 1] % 2 === 0 && +item % 2 === 0) ? 
        arr = [...arr, "-", item] : arr = [...arr, item]
    })
    const joinedArr = arr.join('');
    dashesSolution.innerText = joinedArr
}

dashesBtn.addEventListener("click", () => evenNumberDashed(dashes))


// 2. Create a javascript function that will find all numbers 
// divisable by 7 and 3 in a array from 1 to 100.
// 30 mins

const arr = [ ...Array(100).keys() ].map(i => i + 1);

(function(arr) {
    let divisibleBySevenAndThree = []
    arr.forEach(item => {
        if (item % 7 === 0 && item % 3 === 0) {
            divisibleBySevenAndThree = [...divisibleBySevenAndThree, item]
        }
    })
    console.log(divisibleBySevenAndThree)
})(arr);

// 3. Create a Javascript ATM machine. 
//The ATM should have the following functions:
//- make desposit (this function should add money to the users balance)
//- make withdrawal (this function should should withdraw money to the users balance)
//- get the balance (this function should display the current balance of the user)
//- exit (this function should close the window)
// create interactive menu using alerts
// 90 mins

const atm = document.getElementById("atm")
const input = document.createElement("input")
const atmResponse = document.getElementById("atmResponse")
const amount = document.getElementById("amount")
const deposit = document.getElementById("deposit")
const withdraw = document.getElementById("withdraw")

function stopTyping() {
    if (amount.value.length > 0) { 
        deposit.disabled = false; 
        withdraw.disabled = false;
    } else { 
        deposit.disabled = true;
        withdraw.disabled = true;
    }
}
stopTyping()

function onBtnClick(btnType) {
    ATMOptions[btnType](+amount.value)
}

const ATMOptions = {
    currentBalance: 1000,
    deposit(amount) {
        this.currentBalance += amount
        atmResponse.innerHTML = null
    },
    withdraw(amount) {
        this.currentBalance -= amount
        atmResponse.innerHTML = null
    },
    balance() {
        atmResponse.innerHTML = `Your current balance is: ${this.currentBalance}`
    }
}