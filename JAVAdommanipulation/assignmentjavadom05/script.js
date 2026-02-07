// starting values
let balance = 0;
let dailyWithdrawTotal = 0;
const DAILY_LIMIT = 500;

// elements
const balanceText = document.getElementById("balance");
const amountInput = document.getElementById("amountInput");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const message = document.getElementById("message");
const historyList = document.getElementById("history");

// update balance
function updateBalance() {
    balanceText.textContent = "$" + balance;
}

// add transaction
function addHistory(type, amount) {
    const li = document.createElement("li");
    li.textContent = type + ": $" + amount;
    historyList.prepend(li);
}

// deposit
function deposit() {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        message.textContent = "Enter a valid amount.";
        message.style.color = "red";
        return;
    }

    balance += amount;
    updateBalance();
    addHistory("Deposit", amount);

    message.textContent = "Deposit successful.";
    message.style.color = "lightgreen";
}

// withdraw
function withdraw() {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        message.textContent = "Enter a valid amount.";
        message.style.color = "red";
        return;
    }

    if (amount > balance) {
        message.textContent = "Insufficient balance.";
        message.style.color = "red";
        return;
    }

    if (dailyWithdrawTotal + amount > DAILY_LIMIT) {
        message.textContent = "Daily withdrawal limit reached!";
        message.style.color = "red";
        return;
    }

    balance -= amount;
    dailyWithdrawTotal += amount;

    updateBalance();
    addHistory("Withdraw", amount);

    message.textContent = "Withdrawal successful.";
    message.style.color = "lightgreen";
}

// events
depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);