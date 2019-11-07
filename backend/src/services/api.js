const axios = require('axios');

const api = axios.create({
  baseURL: 'http://api.github.com',
})

module.exports = api;