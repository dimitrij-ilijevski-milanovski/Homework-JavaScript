function isValidPhoneNumber(phoneNumber) {
  let cleanedPhoneNumber = "";

  for (let i = 0; i < phoneNumber.length; i++) {
    if (phoneNumber[i] >= "0" && phoneNumber[i] <= "9") {
      cleanedPhoneNumber += phoneNumber[i];
    }
  }

  return cleanedPhoneNumber.length === 9;
}

function saveContact() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  if (!isValidPhoneNumber(phoneNumber)) {
    alert("Please enter a valid 9-digit phone number. EXAMPLE: 077 777 777");
    return;
  }

  const table = document
    .getElementById("phoneBookTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = firstName;
  cell2.textContent = lastName;
  cell3.textContent = phoneNumber;

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("phoneNumber").value = "";
}
