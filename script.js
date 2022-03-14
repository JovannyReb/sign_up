const password1 = document.querySelector('#password');
const password2 = document.querySelector('#confrmPassword');
const button = document.querySelector("#main-btn");
const text = document.querySelector('.error-text');

// TODO when the create button is clicked will check if the passwords are similar or not.

function checkPW() {
    if (password1.value === password2.value) {
        console.log("Works")
        password1.style.borderColor = "green";
        password2.style.borderColor = "green";
        password1.style.borderWidth = "2px";
        password2.style.borderWidth = "2px";
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


button.addEventListener('focus', checkPW );




