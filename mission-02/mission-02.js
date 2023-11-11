function validateEmail() {
  let emailInput = document.getElementById("email");
  let errorMsg = document.getElementById("error-message");
  let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let validEmail = emailReg.test(emailInput.value);

  console.log(emailInput.value);
  console.log(validEmail);

  if (validEmail) {
    errorMsg.innerText = "";
  } else {
    errorMsg.innerText =
      "이메일 입력 방법이 잘못되었습니다. (예: user@domain.io)";
  }
}
