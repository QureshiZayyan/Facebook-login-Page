
let password = document.querySelector('#password');
let btn = document.querySelector('.btn');

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

btn.addEventListener('click', () => {

    if (password.value === '') {
        console.log('Enter a valid password');
    }

    if (password.value !== '') {

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

