
let password = document.querySelector('#password');
let btn = document.querySelector('.btn');
let error = document.querySelector('.error');
let emptyfield = document.querySelector('.empty-field');
error.style.display = 'none';
emptyfield.style.display = 'none';

const key = () => {
    password.addEventListener('Keyup', (e) => {

        if (e.key === 'Enter') {

            if (password.value.length < 8) {
                alert('characters must be length of 8');
            }

            if (!/[A-Z]/.test(password.value)) {
                alert('please enter one upperCase ');
            }

            if (!/\d/.test(password.value)) {
                alert('please enter at least one digit');
            }

            if (!/[a-z]/.test(password.value)) {
                alert('please enter a one LowerCase Letter');
            }
        }
    })
}

const click = () => {
    btn.addEventListener('click', () => {

        emptyfield.style.display = 'none';
        error.style.display = 'none';

        if (password.value === '') {
            emptyfield.style.display = 'block';
        }

        if (password.value !== '') {

            if (password.value.length < 8) {
                error.style.display = 'block';
            }

            if (!/[A-Z]/.test(password.value)) {
                error.style.display = 'block';
            }

            if (!/\d/.test(password.value)) {
                error.style.display = 'block';
            }

            if (!/[a-z]/.test(password.value)) {
                error.style.display = 'block';
            }
        }
    })
}

click()

// const click = () => {
//     btn.addEventListener('click', () => {
//         emptyfield.style.display = 'none';
//         error.style.display = 'none';

//         if (password.value === '') {
//             emptyfield.style.display = 'block';
//         } else if (password.value.length < 8) {
//             error.textContent = "Password must be at least 8 characters long.";
//             error.style.display = 'block';
//         } else if (!/[A-Z]/.test(password.value)) {
//             error.textContent = "Password must contain at least one uppercase letter.";
//             error.style.display = 'block';
//         } else if (!/\d/.test(password.value)) {
//             error.textContent = "Password must contain at least one digit.";
//             error.style.display = 'block';
//         } else if (!/[a-z]/.test(password.value)) {
//             error.textContent = "Password must contain at least one lowercase letter.";
//             error.style.display = 'block';
//         }
//     });
// };

// click();
