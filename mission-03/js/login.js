function validateEmail() {
  let emailInput = document.getElementById("email");
  let errorMsg = document.getElementById("errorMsg");
  let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let validEmail = emailReg.test(emailInput.value);
  let validButton = document.getElementById("validButton");

  console.log(emailInput.value);
  console.log(validEmail);

  if (validEmail) {
    errorMsg.classList.remove("is--invalid");
    validButton.classList.remove("is--invalid");
  } else {
    errorMsg.innerText = "정확한 이메일 주소를 입력하세요.";
    validButton.classList.add("is--invalid");
  }
}

function transitionLabel() {
  let label = document.getElementById("activeLabel");
  label.classList.add("is--active");
}

function backLabel() {
  let label = document.getElementById("activeLabel");
  label.classList.remove("is--active");
}
