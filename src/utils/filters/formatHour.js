import moment from 'moment'

export default (hour) => {
  let result
  if (moment(hour, 'HH:mm', true).isValid()) {
    result = moment(hour, 'HH:mm').format('HH:mm')
  } else {
    const splitedHour = hour.split(':')
    result = splitedHour[0] + ':' + splitedHour[1]
  }
  return result
}
