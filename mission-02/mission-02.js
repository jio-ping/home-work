// 이메일 유효 함수
function validateEmail() {
  let emailInput = document.getElementById("email");
  let errorMsg = document.getElementById("error-message");
  let invalidIcon = document.getElementById("email-invalid-icon");
  let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let validEmail = emailReg.test(emailInput.value);

  if (validEmail) {
    errorMsg.innerText = "";
    invalidIcon.classList.add("hidden");
  } else {
    invalidIcon.classList.remove("hidden");
    errorMsg.innerText =
      "이메일 입력 방법이 잘못되었습니다. (예: user@domain.io)";
  }
}
