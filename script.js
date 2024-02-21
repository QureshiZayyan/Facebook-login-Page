console.log('welcome to facebook');

let password = document.querySelector('#password');
let btn = document.querySelector('.btn');
let error = document.querySelector('.error');
let emptyfield = document.querySelector('.empty-field');
error.style.display = 'none';
emptyfield.style.display = 'none';

const Keyup = () => {
    password.addEventListener('keyup', (e) => {

        if (e.key === 'Enter') {

            if (password.value.length < 8 && password.value !== '') {
                error.textContent = 'characters must be length of 8';
                error.style.display = 'block';
                emptyfield.style.display = 'none';
            }

            else if (password.value === '') {
                emptyfield.style.display = 'block';
            }

            else if (!/[A-Z]/.test(password.value)) {
                error.textContent = 'please enter one upperCase ';
                error.style.display = 'block';
            }

            else if (!/\d/.test(password.value)) {
                error.textContent = 'please enter at least one digit';
                error.style.display = 'block';
            }

            else if (!/[a-z]/.test(password.value)) {
                error.textContent = 'please enter a one LowerCase Letter';
                error.style.display = 'block';
            }

            else if (password.value === '') {
                emptyfield.style.display = 'block';
            }

            else {
                error.style.display = 'none';
                emptyfield.style.display = 'none';
            }
        }
    })
}

const click = () => {
    btn.addEventListener('click', () => {

        if (password.value === '') {
            emptyfield.style.display = 'block';
        }

        else if (password.value.length < 8 && password.value !== '') {
            error.textContent = "characters must be length of 8";
            error.style.display = 'block';
        }

        else if (!/[A-Z]/.test(password.value)) {
            error.textContent = "please enter one upperCase";
            error.style.display = 'block';
        }

        else if (!/\d/.test(password.value)) {
            error.textContent = "please enter at least one digit";
            error.style.display = 'block';
        }

        else if (!/[a-z]/.test(password.value)) {
            error.textContent = "please enter a one LowerCase Letter";
            error.style.display = 'block';
        }

        else {
            emptyfield.style.display = 'none';
            error.style.display = 'none';
        }
    })
}
Keyup()
clickyuKeyup()