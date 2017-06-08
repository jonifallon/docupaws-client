'use strict'

const store = require('../store')
const showPetsHandlerbars = require('../templates/pet-listing.handlebars')
const showMyPetsHandlerbars = require('../templates/pet-listing_individual.handlebars')
const api = require('./api')

const hideItems = function () {
  $('#update-pet').hide()
  $('#create-pet').hide()
  $('.well').hide()
  $('.viewAllPets').empty()
  $('#create-pet')[0].reset()
  // $('#updates-pet')[0].reset()
}

const onMyIndexSuccess = function (data) {
  hideItems()
  // console.table(data.pets)
  // console.log('inside on my index success', data)
  const showPetsHtml = showMyPetsHandlerbars({ pets: data.pets })
  $('.well').show()
  $('.viewAllPets').show()
  $('.viewAllPets').append(showPetsHtml)
  $('.delete_myPet').on('click', function (event) {
    const petDelete = $(event.target).data('id')
    api.deletePet(petDelete)
        .then(deletePetSuccess)
        .catch(deletePetFailure)
  })
  $('.update-myPet').on('click', function (event) {
    const petUpdate = $(event.target).data('id')
    event.preventDefault()
    hideItems()
    // captures the pet ID input by the user
    // const pet = $('#updatepettextbox').val()
    api.showPet(petUpdate)
        .then(onGetPetForUpdateSuccess)
        .catch(onGetPetForUpdateFailure)
    $('#update-pet').show()
    $('.well').show()
    // $('#add-pet-button').show()
  })
  // $('.update_myPet').
  // console.log('inside the onIndexSuccess in ui.js', data)
}

const onIndexFailure = function (data) {
  // look through data returned from server
  // console.log('inside the onIndexFailure in ui.js', data)
  hideItems()
}

const onMyIndexFailure = function (data) {
  // look through data returned from server
  // console.log('inside the onIndexFailure in ui.js', data)
  hideItems()
  // $('#indexFailureAnnounce').show()
}

const onGetPetForUpdateSuccess = function (data) {
  // console.table(data)
  // this next console log shows right data, but it's passing wrong data to
  // console.log('inside onGetPetForUpdateSuccess ui.js', data)
  // $(event.target).data('id')
  $('#update-pet').attr('data-id', data.pet.id)
  // console.log('data-id', data.pet.id)
  $('#text-name2').val(data.pet.name)
  $('#text-dob2').val(data.pet.dob)
  // console.log('name ', data.pet.name)
  $('#textarea-shots2').val(data.pet.shots)
  $('#text-species2').val(data.pet.species)
  $('#text-spayed2').val(data.pet.spayed)
  $('#text-gender2').val(data.pet.gender)
  $('#text-breed2').val(data.pet.breed)
  $('#text-color2').val(data.pet.color)
  $('#text-purchased2').val(data.pet.purchased)
  $('#text-microchip2').val(data.pet.microchip)
  $('#text-weight2').val(data.pet.weight)
  $('#text-vet2').val(data.pet.vet)
  $('#text-vetphone2').val(data.pet.vetphone)

  // console.log('shots ', data.pet.shots)
  $('#textarea-notes2').val(data.pet.notes)
  // console.log('notes ', data.pet.notes)
  store.data = data
}

const onGetPetForUpdateFailure = function (data) {
  hideItems()
  // console.log('inside onGetPetForUpdateFailure ui.js', data)
  $('#update-pet').hide()
}

const signUpSuccess = (data) => {
  // console.log('signUpSuccess ran and data is ', data)
  $('#signup-modal').modal('hide')
  $('#signup-error').hide()
  $('.signout-menu-item').hide()
  $('.changepassword-menu-item').hide()
  $('.signup-menu-item').hide()
  $('.signin-menu-item').show()
  $('#signin-modal').modal('show')
  $('#signup-error').hide()
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
  $('#signup-error').show()
}

const signInSuccess = (data) => {
  // console.log('signin success ran.  data is:', data)
  store.user = data.user
  $('#greeting').hide()
  $('.signin-menu-item').hide()
  $('.signup-menu-item').hide()
  $('.change-password-menu-item').show()
  $('.signout-menu-item').show()
  $('.viewAddPetButtons').show()
  $('#signin-modal').modal('hide')
  $('#signin-error').hide()
  $('.cb-slideshow').hide()
  hideItems()
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
}

const signInFailure = (error) => {
  $('#signin-error').show()
  hideItems()
  console.error('signin failure ran.  error is:', error)
}

const signOutSuccess = (data) => {
  // console.log('signout success and nothing was returned')
  store.user = null
  $('#greeting').show()
  $('.signin-menu-item').show()
  $('.signup-menu-item').show()
  $('.change-password-menu-item').hide()
  $('.signout-menu-item').hide()
  hideItems()
}

const signOutFailure = (error) => {
  hideItems()
  console.error(error)
}

const changePasswordSuccess = (data) => {
  // console.log('inside changepassword success ui password successfully changed')
  hideItems()
  $('#changepassword-modal').modal('hide')
  $('#changepw-error').hide()
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
}

const changePasswordFailure = (error) => {
  console.error('change password failed and the error is ', error)
  console.error(error)
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
  $('#changepw-error').show()
}

const deletePetSuccess = (data) => {
  // console.log('inside the deletePetSuccess ui script.  data is:', data)
  // store.pet = data.pet
  hideItems()
  // showItems()
  // api.MyIndex()
  $('.viewAddPetButtons').show()
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
}

const deletePetFailure = (data) => {
  // console.log('deletePet failed.  data is:', data)
  // store.pet = data.pet
  // console.log('inside the deletePetFailure ui script', store.pet)
  hideItems()
}

const createpetSuccess = (data) => {
  // console.log('create pet success ran.  data is:', data)
  store.pet = data.pet
  // console.log('you are in the createpetSuccess function on ui.js', store.pet)
  hideItems()
  // add this to display myPets automatically
  $('.viewAddPetButtons').show()
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
}

const createpetFailure = (error) => {
  hideItems()
  return error
}

const updatepetSuccess = (data) => {
  store.pet = data.pet
  // store.user = data.user
  $('#update-pet')[0].reset()
  $('.viewAddPetButtons').show()
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
  // api.myIndex()
  // .then(onMyIndexSuccess)
  // .catch(onMyIndexFailure)
  // console.log('inside updatepetSuccess', data)
}

const updatepetFailure = (error) => {
  // console.log('inside updatepetFailure ui')
  hideItems()
  return error
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  createpetFailure,
  createpetSuccess,
  updatepetFailure,
  updatepetSuccess,
  deletePetSuccess,
  deletePetFailure,
  onIndexFailure,
  onGetPetForUpdateSuccess,
  onGetPetForUpdateFailure,
  onMyIndexSuccess,
  onMyIndexFailure
}
