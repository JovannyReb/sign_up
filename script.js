const password1 = document.querySelector('#password');
const password2 = document.querySelector('#confrmPassword');

// TODO when the create button is clicked will check if the passwords are similar or not.

function checkPW() {
    if (password1.value === password2.value) {
        password1.classList.toggle('correct');
        password2.classList.toggle('correct');
    }
}




