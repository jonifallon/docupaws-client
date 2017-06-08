'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const preLoadHide = require('../pre-load-hide')

const onSignUp = function (event) {
  // console.log('inside onSignUp event')
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#signup-form').trigger('reset')
}

const onSignIn = function (event) {
  // console.log('inside onSignIn event')
  event.preventDefault()
  // console.log('signin ran')
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
  // console.log('inside onMyIndex event')
  event.preventDefault()
  api.myIndex()
  .then(ui.onMyIndexSuccess)
  .catch(ui.onMyIndexFailure)
}

// adding pets

const populateAddPetForm = function (event) {
  // console.log('inside populateAddPetForm event')
  event.preventDefault()
  $('.viewAllPets').hide()
  $('#create-pet').show()
  $('.viewAddPetButtons').hide()
  // now go to a form that determines which button was submitted.  if submit, createpet.
  // if cancel, cancelNew
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

const cancelNew = function () {
  // console.log('inside cancelNew event')
  event.preventDefault()
  hideNewPet() // what is this
  $('#create-pet')[0].reset()
  $('.viewAddPetButtons').show()
  api.myIndex()
  .then(ui.onMyIndexSuccess)
  .catch(ui.onMyIndexFailure)
}

const hideNewPet = function (event) {
  // console.log('inside hideNewPet function')
  $('#create-pet').hide()
  $('#newpet').off()
  $('#newpet').prop('disabled', true)
  // $('#add-pet-button').show()
}

// update pet

const populateUpdatePetForm = function (event) {
  // console.log('inside populateUpdatePetForm event')
  // populate the create-pet form on the index page
  event.preventDefault()
  // captures the pet ID input by the user
  // const pet = $('#updatepettextbox').val()
  const pet = $(event.target).data('id')
  api.showPet(pet)
      .then(ui.onGetPetForUpdateSuccess)
      .catch(ui.onGetPetForUpdateFailure)
  $('#update-pet').show()
  // // console.log('inside populateUpdatePetForm', pet)
}

const onUpdatePet = function (event) {
  // // console.log('inside onUpdatePet function')
  event.preventDefault()
  // // console.log('inside the updatePet function in events, and events is', event)
  // const id = $(event.target).data('id')
  const id = store.data.pet.id
  // // console.log('id from the store is ', id)
  const data = getFormFields(this)
  // if ($('#cancelupdatepet').on('submit', cancelNew)) {
  //   cancelUpdate()
  //   return
  // }
  api.updatePet(id, data)
  .then(ui.updatepetSuccess)
  .catch(ui.updatepetFailure)
}

const cancelUpdate = function () {
  // // console.log('inside cancelUpdate function')
  event.preventDefault()
  // $('#update-pet').show()
  $('#update-pet')[0].reset()
  hideUpdatePet()
  $('.viewAddPetButtons').show()
  api.myIndex()
  .then(ui.onMyIndexSuccess)
  .catch(ui.onMyIndexFailure)
}

const hideUpdatePet = function (event) {
  // // console.log('inside hideUpdatePet function')
  // event.preventDefault()
  // resetTemplate1Fields()
  $('#update-pet').hide()
  $('#updatedpetsubmit').off()
  $('#updatedpetsubmit').prop('disabled', true)
}

// delete pet

const deletePet = function (event) {
  // // console.log('inside deletePet event')
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
      // // console.log(numOfPets)
      if (numOfPets < 2) {
        $('.pet-content').append('<h1>No Pets</h1>')
      }
    })
    .catch(ui.deletePetFailure)
}

// other stuff
const hideSigninShowSignup = function () {
  // // console.log('inside hideSigninShowSignup event')
  $('#signin-modal').modal('hide')
  $('#signup-modal').modal('show')
  $('#signin-error').hide()
}

const closeModal = function () {
  // // console.log('inside closeModal event')
  preLoadHide.preLoad()
  $('#changepassword-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#signin-form').trigger('reset')
}

const addHandlers = () => {
  // add pet handlers
  $('#add-pet-button').on('submit', populateAddPetForm)
  $('#create-pet').on('submit', createpet)
  $('#cancelnewpet').on('click', cancelNew)
  // delete pet handlers
  $('#delete-pet').on('submit', deletePet)
  // update pet handlers
  $('#update-pet').on('submit', onUpdatePet)
  $('#cancelupdatepet').on('click', cancelUpdate)
  // auth handlers
  $('#changepassword-form').on('submit', onChangePassword)
  $('#signup-form').on('submit', onSignUp)
  $('#signin-form').on('submit', onSignIn)
  $('.signout-menu-item').on('click', onSignOut)
  $('#signupWithinSigninModal-button').on('click', hideSigninShowSignup)
  $('#signup-close').on('click', closeModal)
  $('#signin-close').on('click', closeModal)
  $('#signupWithinSigninModal-button').on('click', hideSigninShowSignup)
  $('#signup-close').on('click', closeModal)
  $('#signin-close').on('click', closeModal)
  $('#changepassword-close').on('click', closeModal)
  // $('#viewMyPets').on('submit', onMyIndex)
  // $('#updates-pet').on('submit', populateUpdatePetForm)
}

module.exports = {
  addHandlers
}
