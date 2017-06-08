'use strict'

const store = require('../store')
// const showMedsHandlerbars = require('../templates/med-listing.handlebars')
const showMyMedsHandlerbars = require('../templates/med-listing_individual.handlebars')
const api = require('./api')

const hideItems = function () {
  $('#update-med').hide()
  $('#create-med').hide()
  $('.well').hide()
  $('.viewAllMeds').empty()
  $('#create-med')[0].reset()
  // $('#updates-med')[0].reset()
}

const onMyIndexSuccess = function (data) {
  hideItems()
  // console.table(data.meds)
  // console.log('inside on my index success', data)
  const showMedsHtml = showMyMedsHandlerbars({ meds: data.meds })
  $('.well').show()
  $('.viewAllMeds').show()
  $('.viewAllMeds').append(showMedsHtml)
  $('.delete_myMed').on('click', function (event) {
    const medDelete = $(event.target).data('id')
    api.deleteMed(medDelete)
        .then(deleteMedSuccess)
        .catch(deleteMedFailure)
  })
  $('.update-myMed').on('click', function (event) {
    const medUpdate = $(event.target).data('id')
    event.preventDefault()
    hideItems()
    // captures the med ID input by the user
    // const med = $('#updatemedtextbox').val()
    api.showMed(medUpdate)
        .then(onGetMedForUpdateSuccess)
        .catch(onGetMedForUpdateFailure)
    $('#update-med').show()
    $('.well').show()
    // $('#add-med-button').show()
  })
  // $('.update_myMed').
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

const onGetMedForUpdateSuccess = function (data) {
  // console.table(data)
  // this next console log shows right data, but it's passing wrong data to
  // console.log('inside onGetMedForUpdateSuccess ui.js', data)
  // $(event.target).data('id')
  $('#update-med').attr('data-id', data.med.id)
  // console.log('data-id', data.med.id)
  $('#text-name2').val(data.med.name)
  $('#text-dob2').val(data.med.dob)
  // console.log('name ', data.med.name)
  $('#text-species2').val(data.med.species)
  $('#text-spayed2').val(data.med.spayed)

  // console.log('shots ', data.med.shots)
  $('#textarea-notes2').val(data.med.notes)
  // console.log('notes ', data.med.notes)
  store.data = data
}

const onGetMedForUpdateFailure = function (data) {
  hideItems()
  // console.log('inside onGetMedForUpdateFailure ui.js', data)
  $('#update-med').hide()
}

const deleteMedSuccess = (data) => {
  // console.log('inside the deleteMedSuccess ui script.  data is:', data)
  // store.med = data.med
  hideItems()
  // showItems()
  // api.MyIndex()
  $('.viewAddMedButtons').show()
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
}

const deleteMedFailure = (data) => {
  // console.log('deleteMed failed.  data is:', data)
  // store.med = data.med
  // console.log('inside the deleteMedFailure ui script', store.med)
  hideItems()
}

const createmedSuccess = (data) => {
  // console.log('create med success ran.  data is:', data)
  store.med = data.med
  // console.log('you are in the createmedSuccess function on ui.js', store.med)
  hideItems()
  // add this to display myMeds automatically
  $('.viewAddMedButtons').show()
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
}

const createmedFailure = (error) => {
  hideItems()
  return error
}

const updatemedSuccess = (data) => {
  store.med = data.med
  // store.user = data.user
  $('#update-med')[0].reset()
  $('.viewAddMedButtons').show()
  api.myIndex()
  .then(onMyIndexSuccess)
  .catch(onMyIndexFailure)
  // api.myIndex()
  // .then(onMyIndexSuccess)
  // .catch(onMyIndexFailure)
  // console.log('inside updatemedSuccess', data)
}

const updatemedFailure = (error) => {
  // console.log('inside updatemedFailure ui')
  hideItems()
  return error
}

module.exports = {
  createmedFailure,
  createmedSuccess,
  updatemedFailure,
  updatemedSuccess,
  deleteMedSuccess,
  deleteMedFailure,
  onIndexFailure,
  onGetMedForUpdateSuccess,
  onGetMedForUpdateFailure,
  onMyIndexSuccess,
  onMyIndexFailure
}
