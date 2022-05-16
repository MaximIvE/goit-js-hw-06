const passwordInput = document.querySelector("#validation-input");

function borderColor(){
    // мене завжди не подобалось в інпутах, коли поичнаєш вводити дані, 
    //а потім повністю їх витираєш, то інпут надалі підствічується червоним, тому 
    // наступні чотири строчки ля того, щоб при повному витиранні з інпута даних, 
    // він повертав колір бордера в початковий стан.

    if(passwordInput.value.length === 0){
        passwordInput.classList = "";
        return;
    };

    if(passwordInput.value.length == passwordInput.dataset.length){
        passwordInput.classList = "valid";
    } else {
        passwordInput.classList = "invalid";
    };
}
passwordInput.addEventListener('blur', borderColor);