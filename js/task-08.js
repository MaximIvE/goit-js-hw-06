const refs = {
    formEl:         document.querySelector(".login-form"),
    emailInput:     document.querySelector(".login-form")[0],
    passwordInput:  document.querySelector(".login-form")[1],
    submiButton:    document.querySelector(".login-form")[2],
};

// console.log(refs.formEl);
// console.log(refs.emailInput);
// console.log(refs.passwordInput);
// console.log(refs.submiButton);

function audit(){
    // console.log("Запустилась функція валідації");
    
    if (refs.emailInput.value && refs.passwordInput.value){
        return true;
    };
    alert("Не всі поля заповнені");
    return false;
};

refs.formEl.addEventListener('submit', e => {
    e.preventDefault();
    const validation = audit();
    if (!validation){
        return;
    };
    const result = {
        email:      refs.emailInput.value,
        password:   refs.passwordInput.value,
    };
    console.log(result);
    e.target.reset();
  });