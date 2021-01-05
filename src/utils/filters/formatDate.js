import moment from 'moment'

export default (date) => {
  let result
  if (moment(date, 'D/M/YYYY', true).isValid()) {
    result = moment(date, 'DD/MM/YYYY').format('DD-MM-YYYY')
  } else if (moment(date, 'YYYY-MM-DD', true).isValid()) {
    result = moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY')
  } else {
    result = moment(date).format('DD-MM-YYYY')
  }
  return result
}
