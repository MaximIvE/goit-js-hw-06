const refs ={
    spanEl: document.querySelector("#name-output"),
    inputEl: document.querySelector("#name-input"),
    form: document.querySelector("body"),
}


function nickname(){
    if(refs.inputEl.value === ""){
        refs.spanEl.textContent = "Anonymous";
    } else{
        refs.spanEl.textContent = refs.inputEl.value 
    }
};

refs.form.addEventListener('input', nickname);
