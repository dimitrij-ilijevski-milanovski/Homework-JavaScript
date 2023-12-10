function atmScript(withdrawAmountOfMoney, accountBalance = 1000) {
  if (withdrawAmountOfMoney > accountBalance) {
    console.log("Not enough money");
  } else {
    let newBalance = accountBalance - withdrawAmountOfMoney;
    console.log(
      `Withdrawal successful! Amount: ${withdrawAmountOfMoney}, remaining balance: ${newBalance} `
    );
  }
}
atmScript(500);
atmScript(1000);
atmScript(0);
