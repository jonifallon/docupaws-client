'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  console.log('inside index api')
  return $.ajax({
    url: config.apiOrigin + '/meds',
    // url: config.apiOrigin + '/meds?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const myIndex = function () {
  console.log('inside myIndex api')
  return $.ajax({
    url: config.apiOrigin + '/myMeds',
    // url: config.apiOrigin + '/meds?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createmed = (data) => {
  console.log('inside createmed function api.js', data)
  return $.ajax({
    url: config.apiOrigin + '/meds',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletemed = (id) => {
  console.log('inside deletemed function api.js', id)
  return $.ajax({
    url: config.apiOrigin + '/meds/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatemed = (id, data) => {
  console.log('inside update med in api.js data is', id, data)
  return $.ajax({
    url: config.apiOrigin + '/meds/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showmed = (id) => {
  console.log('inside the showmed function', id)
  return $.ajax({
    url: config.apiOrigin + '/meds/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  createmed,
  updatemed,
  showmed,
  deletemed,
  myIndex

}
