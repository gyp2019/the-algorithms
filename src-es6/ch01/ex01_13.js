class Checking {

  constructor(amount) {
    this.balance = amount;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
    if (amount > this.balance) {
      console.log('Insufficient funds');
    }
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

const account = new Checking(500);
account.deposit(1000);
console.log(account);

account.withdraw(750);
console.log(account);

account.withdraw(800);
console.log(account);
