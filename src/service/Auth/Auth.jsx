import Cookies from 'universal-cookie';

export const signInAuth = async (e, emailArg, passwordArg) => {
    const form = e.target;
    const email = form.querySelector('input[type=email]')
    const password = form.querySelector('input[type=password]')
    email.value = emailArg;
    password.value = passwordArg;
    form.submit()
}

export const signOutAuth = async () => {
    const cookies = new Cookies();
    cookies.remove("user_session");
    return true;
}

export const validateLogin = async () => {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    const validate = (email == undefined) ? null : { email: email, password: password }
    return validate
}

