const passwordInput = document.querySelector("#validation-input");

function borderColor(){
    if(passwordInput.value.length == passwordInput.dataset.length){
        passwordInput.classList = "valid";
    } else {
        passwordInput.classList = "invalid";
    }
}
passwordInput.addEventListener('blur', borderColor);