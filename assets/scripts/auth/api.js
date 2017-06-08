'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  // console.log('inside index api')
  return $.ajax({
    url: config.apiOrigin + '/pets',
    // url: config.apiOrigin + '/pets?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const myIndex = function () {
  // console.log('inside myIndex api')
  return $.ajax({
    url: config.apiOrigin + '/myPets',
    // url: config.apiOrigin + '/pets?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signUp = (data) => {
  // console.log('inside signUp api and data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  // console.log('signin function api', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  // console.log('inside signOut api')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  // console.log('inside changePassword api')
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createpet = (data) => {
  // console.log('inside createpet function api.js', data)
  return $.ajax({
    url: config.apiOrigin + '/pets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePet = (id) => {
  // console.log('inside deletepet function api.js', id)
  return $.ajax({
    url: config.apiOrigin + '/pets/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePet = (id, data) => {
  // console.log('inside update pet in api.js data is', id, data)
  return $.ajax({
    url: config.apiOrigin + '/pets/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showPet = (id) => {
  // console.log('inside the showPet function', id)
  return $.ajax({
    url: config.apiOrigin + '/pets/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  createpet,
  updatePet,
  showPet,
  deletePet,
  myIndex

}
