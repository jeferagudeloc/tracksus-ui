const axios = require('axios')

const instance = axios.create({
  withCredentials: false,
  debug: false,
})

instance.interceptors.request.use(request => {
  console.log('Starting Request:', request)
  return request
})

instance.interceptors.response.use(response => {
  console.log('Response Request:', response)
  return response
})

module.exports = instance