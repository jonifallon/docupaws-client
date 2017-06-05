'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const preLoadHide = require('../pre-load-hide')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#signup-form').trigger('reset')
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('signin ran')
  const data = getFormFields(this)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
  $('#signin-form').trigger('reset')
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('signout ran')

  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')
  const data = getFormFields(this)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
  $('#changepassword-form')[0].reset()
  $('#changepw-error').hide()
}

const onMyIndex = function () {
  event.preventDefault()
  api.myIndex()
  .then(ui.onMyIndexSuccess)
  .catch(ui.onMyIndexFailure)
}

const populateAddPetForm = function (event) {
  event.preventDefault()
  $('#well').hide()
  $('#create-pet').show()
  $('.viewAddPetButtons').hide()
  // console.log('inside populateAddPetForm')
}

const populateUpdatePetForm = function (event) {
  // populate the create-pet form on the index page
  event.preventDefault()
  // captures the pet ID input by the user
  // const pet = $('#updatepettextbox').val()
  const pet = $(event.target).data('id')
  api.showPet(pet)
      .then(ui.onGetPetForUpdateSuccess)
      .catch(ui.onGetPetForUpdateFailure)
  $('#update-pet').show()
  // console.log('inside populateUpdatePetForm', pet)
}

const deletePet = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  api.deletePet(id)
    .then(ui.deletePetSuccess)
    // .then(() => {
    //   $('.one-blogpost[data-id=' + id + ']').parent().hide('blind')
    //   $('blockquote[data-id=' + id + ']').hide('blind')
    // })
    .then(() => {
      const numOfPets = $('.pet-content').children().length
      console.log(numOfPets)
      if (numOfPets < 2) {
        $('.pet-content').append('<h1>No Pets</h1>')
      }
    })
    .catch(ui.deletePetFailure)
}

const createpet = function (event) {
  // console.log('inside the createpet function on events.js', event)
  event.preventDefault()
  const data = getFormFields(this)
  api.createpet(data)
  .then(ui.createpetSuccess)
  .catch(ui.createpetFailure)
  $('#create-pet')[0].reset()
}

const onUpdatePet = function (event) {
  event.preventDefault()
  console.log('inside the updatePet function in events, and events is', event)
  // const id = $(event.target).data('id')
  const id = store.data.pet.id
  console.log('id from the store is ', id)
  const data = getFormFields(this)
  api.updatePet(id, data)
  .then(ui.updatepetSuccess)
  .catch(ui.updatepetFailure)
}

const hideSigninShowSignup = function () {
  $('#signin-modal').modal('hide')
  $('#signup-modal').modal('show')
  $('#signin-error').hide()
}

const closeModal = function () {
  preLoadHide.preLoad()
  $('#changepassword-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#signin-form').trigger('reset')
}

const addHandlers = () => {
  $('#signup-form').on('submit', onSignUp)
  $('#signin-form').on('submit', onSignIn)
  $('#changepassword-form').on('submit', onChangePassword)
  $('.signout-menu-item').on('click', onSignOut)
  $('#viewMyPets').on('submit', onMyIndex)
  $('#add-pet-button').on('submit', populateAddPetForm)
  $('#updates-pet').on('submit', populateUpdatePetForm)
  $('#delete-pet').on('submit', deletePet)
  $('#update-pet').on('submit', onUpdatePet)
  $('#create-pet').on('submit', createpet)
  $('#signupWithinSigninModal-button').on('click', hideSigninShowSignup)
  $('#signup-close').on('click', closeModal)
  $('#signin-close').on('click', closeModal)
  $('#changepassword-close').on('click', closeModal)
}

module.exports = {
  addHandlers
}
