'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const pet = require('./pet')

$(() => {
  setAPIOrigin(location, config, pet)
})

require('./example')

const authEvents = require('./auth/events.js')

// On document ready
const preLoadHide = require('./pre-load-hide')

preLoadHide.preLoad()

$(() => {
  authEvents.addHandlers()
})

// signin
$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#emailInput').val()
    // console.log(input)
    $('#signinModal').modal('hide')
  })
})

// signup
$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#emailInput').val()
    // console.log(input)
    $('#signupModal').modal('hide')
  })
})

// changepw
$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#emailInput').val()
    // console.log(input)
    $('#changepwModal').modal('hide')
  })
})
