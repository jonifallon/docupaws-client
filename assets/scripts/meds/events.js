'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onMyIndex = function () {
  // console.log('inside onMyIndex event')
  event.preventDefault()
  api.myIndex()
  .then(ui.onMyIndexSuccess)
  .catch(ui.onMyIndexFailure)
}

// adding meds

const populateAddMedForm = function (event) {
  // console.log('inside populateAddMedForm event')
  event.preventDefault()
  $('.viewAllMeds').hide()
  $('#create-med').show()
  $('.viewAddMedButtons').hide()
  // now go to a form that determines which button was submitted.  if submit, createmed.
  // if cancel, cancelNew
}

const createmed = function (event) {
  // console.log('inside the createmed function on events.js', event)
  event.preventDefault()
  const data = getFormFields(this)
  api.createmed(data)
  .then(ui.createmedSuccess)
  .catch(ui.createmedFailure)
  $('#create-med')[0].reset()
}

const cancelNew = function () {
  // console.log('inside cancelNew event')
  event.preventDefault()
  hideNewMed() // what is this
  $('#create-med')[0].reset()
  $('.viewAddMedButtons').show()
  api.myIndex()
  .then(ui.onMyIndexSuccess)
  .catch(ui.onMyIndexFailure)
}

const hideNewMed = function (event) {
  // console.log('inside hideNewMed function')
  $('#create-med').hide()
  $('#newmed').off()
  $('#newmed').prop('disabled', true)
  // $('#add-med-button').show()
}

// update med

const populateUpdateMedForm = function (event) {
  // console.log('inside populateUpdateMedForm event')
  // populate the create-med form on the index page
  event.preventDefault()
  // captures the med ID input by the user
  // const med = $('#updatemedtextbox').val()
  const med = $(event.target).data('id')
  api.showMed(med)
      .then(ui.onGetMedForUpdateSuccess)
      .catch(ui.onGetMedForUpdateFailure)
  $('#update-med').show()
  // // console.log('inside populateUpdateMedForm', med)
}

const onUpdateMed = function (event) {
  // console.log('inside onUpdateMed function')
  event.preventDefault()
  // console.log('inside the updateMed function in events, and events is', event)
  // const id = $(event.target).data('id')
  const id = store.data.med.id
  // console.log('id from the store is ', id)
  const data = getFormFields(this)
  // if ($('#cancelupdatemed').on('submit', cancelNew)) {
  //   cancelUpdate()
  //   return
  // }
  api.updateMed(id, data)
  .then(ui.updatemedSuccess)
  .catch(ui.updatemedFailure)
}

const cancelUpdate = function () {
  // console.log('inside cancelUpdate function')
  event.preventDefault()
  // $('#update-med').show()
  $('#update-med')[0].reset()
  hideUpdateMed()
  $('.viewAddMedButtons').show()
  api.myIndex()
  .then(ui.onMyIndexSuccess)
  .catch(ui.onMyIndexFailure)
}

const hideUpdateMed = function (event) {
  // console.log('inside hideUpdateMed function')
  // event.preventDefault()
  // resetTemplate1Fields()
  $('#update-med').hide()
  $('#updatedmedsubmit').off()
  $('#updatedmedsubmit').prop('disabled', true)
}

// delete med

const deleteMed = function (event) {
  // console.log('inside deleteMed event')
  event.preventDefault()
  const id = $(this).attr('data-id')
  api.deleteMed(id)
    .then(ui.deleteMedSuccess)
    // .then(() => {
    //   $('.one-blogpost[data-id=' + id + ']').parent().hide('blind')
    //   $('blockquote[data-id=' + id + ']').hide('blind')
    // })
    .then(() => {
      const numOfMeds = $('.med-content').children().length
      // console.log(numOfMeds)
      if (numOfMeds < 2) {
        $('.med-content').append('<h1>No Meds</h1>')
      }
    })
    .catch(ui.deleteMedFailure)
}

const addHandlers = () => {
  // add med handlers
  $('#add-med-button').on('click', populateAddMedForm)
  $('#create-med').on('submit', createmed)
  $('#cancelnewmed').on('click', cancelNew)
  // delete med handlers
  $('#delete-med').on('submit', deleteMed)
  // update med handlers
  $('#update-med').on('submit', onUpdateMed)
  $('#cancelupdatemed').on('click', cancelUpdate)
  // auth handlers
  // $('#viewMyMeds').on('submit', onMyIndex)
  // $('#updates-med').on('submit', populateUpdateMedForm)
}

module.exports = {
  addHandlers,
  onMyIndex
}
