export default (email) => {
  if (email==undefined) {
    return '';
  }
  var regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  return (email === '') ? '' : (regEmail.test(email)) ? '' : 'is-invalid'
}
