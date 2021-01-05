export default (password) => {
  const regPassword = /^(?=.*\d).{8,}$/
  return (password === '') ? '' : (regPassword.test(password)) ? '' : 'is-invalid'
}
