const password1 = document.querySelector('#password');
const password2 = document.querySelector('#confrmPassword');
const button = document.querySelector("#main-btn");
const text = document.querySelector('.error-text');
const checkButtn = document.querySelector('#confrmPassword');

// TODO when the create button is clicked will check if the passwords are similar or not.

function checkPW() {
    
    if (password1.value === password2.value) {
        text.style.visibility = "hidden";
    }
    else {
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
        password1.style.borderWidth = "2px";
        password2.style.borderWidth = "2px";
        text.style.visibility = "visible";
    }
}


checkButtn.addEventListener('input', checkPW );




