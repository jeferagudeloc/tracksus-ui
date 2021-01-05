export default (phone) => {
  if (phone=='' || phone == undefined) {
    return '';
  }
  const regPhone = /^[0-9]{9}$/
  return (phone === '') ? '' : (regPhone.test(phone)) ? '' : 'is-invalid'
}
