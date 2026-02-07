// starting balance
let balance = 0;

// elements
const balanceText = document.getElementById("balance");
const amountInput = document.getElementById("amountInput");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const message = document.getElementById("message");

// update balance text
function updateBalance() {
    balanceText.textContent = "$" + balance;
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
    message.textContent = "Successfully deposited $" + amount + ".";
    message.style.color = "green";
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

    balance -= amount;
    updateBalance();
    message.textContent = "Successfully withdrew $" + amount + ".";
    message.style.color = "green";
}

// buttons
depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);