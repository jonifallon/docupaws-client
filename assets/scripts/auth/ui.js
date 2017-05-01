'use strict'

const store = require('../store')
const showIssuesHandlerbars = require('../templates/issue-listing.handlebars')

// THINGS I WANT TO DO
// INSTEAD OF HAVING ALL THE SHOW/HIDE STATEMENTS ON UI.JS, CREATE A FUJNCTION
// THAT HIDES ALL OF THEM
// THEN INSERT THAT FUNCTION INTO THE BEGINNING OF EVERY OTHER FUNCTION (EG
// BUTTON CLICK)  THAT WAY YOU ALWAYS START OFF WITH A CLEAR SLATE

const hideItems = function () {
  $('#getIssueFailureAnnounce').hide()
  $('#signupSuccessAnnounce').hide()
  $('#signupFailureAnnounce').hide()
  $('#signinFailureAnnounce').hide()
  $('#pwchangeSuccessAnnounce').hide()
  $('#pwchangeFailureAnnounce').hide()
  $('#signoutSuccessAnnounce').hide()
  $('#signoutFailureAnnounce').hide()
  $('#deleteSuccessAnnounce').hide()
  $('#deleteFailureAnnounce').hide()
  $('#updateSuccessAnnounce').hide()
  $('#updateFailureAnnounce').hide()
  $('#indexFailureAnnounce').hide()
  $('#chpw').hide()
  $('#signoff').hide()
  $('#signin').hide()
  $('#signup').hide()
  // $('#newissue').hide()
  $('#sign-out').hide()
  $('.plannedUnplanned').hide()
  $('#jumbo').hide()
  $('#options').hide()
  $('#viewoneissue').hide()
  $('.viewAllIssues').empty()
  // $('.viewAllIssues').hide()
}

const onIndexSuccess = function (data) {
  hideItems()
  console.table(data.issues)
  const showIssuesHtml = showIssuesHandlerbars({ issues: data.issues })
  $('.viewAllIssues').append(showIssuesHtml)
  $('#chpw').show()
  $('#sign-out').show()
  $('#options').show()
  console.log('inside the onIndexSuccess in ui.js', data)
}

const onIndexFailure = function (data) {
  // look through data returned from server
  console.log('inside the onIndexFailure in ui.js', data)
  hideItems()
  $('#indexFailureAnnounce').show()
  $('#options').show()
}
const onSuccess = function (id) {
  hideItems()
  console.table(id)
  const showIssuesHtml = showIssuesHandlerbars({ issues: id })
  $('.viewAllIssues').append(showIssuesHtml)
  $('#options').show()
  console.log('inside onSuccess ui', id)
}

const onError = function (data) {
  hideItems()
  $('#getIssueFailureAnnounce').show()
  console.log('inside onError ui.js', data)
  $('#options').show()
}

const signUpSuccess = (data) => {
  hideItems()
  $('#signin').show()
  $('#signupSuccessAnnounce').show()
  $('.plannedUnplanned').show()
  $('#jumbo').show()
  $('#signup').hide()
  // console.log(data)
}

const signUpFailure = (error) => {
  hideItems()
  $('#signin').show()
  $('#signup').show()
  $('#signupFailureAnnounce').show()
  $('.plannedUnplanned').show()
  $('#jumbo').show()
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signin success ran.  data is:', data)
  // $('.viewAllIssues').show()
  hideItems()
  $('#sign-out').show()
  $('#chpw').show()
  $('#newissue').show()
  $('#options').show()
  store.user = data.user
  // $('#showissues').show()
  // console.table(data.issues)
  // onIndexSuccess(data)
  // const showIssuesHtml = showIssuesHandlerbars({ issues: data.issues })
  // $('.viewAllIssues').append(showIssuesHtml)
  // $('#showissues').show()
}

const signInFailure = (error) => {
  hideItems()
  $('#signinFailureAnnounce').show()
  $('#signin').show()
  $('#signup').show()
  $('.plannedUnplanned').show()
  $('#jumbo').show()
  console.error('signin failure ran.  error is:', error)
}

const signOutSuccess = (data) => {
  hideItems()
  $('#signin').show()
  $('#signup').show()
  $('#signoutSuccessAnnounce').show()
  $('#jumbo').show()
  $('.plannedUnplanned').show()
  document.getElementById('announce').innerHTML = ''
  console.log('signout success and nothing was returned')
  store.user = null
}

const signOutFailure = (error) => {
  hideItems()
  $('#signoutFailureAnnounce').show()
  $('#options').show()
  console.error(error)
}

const changePasswordSuccess = (data) => {
  hideItems()
  $('#pwchangeSuccessAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.log('password successfully changed')
  $('#options').show()
}

const changePasswordFailure = (error) => {
  hideItems()
  $('#pwchangeFailureAnnounce').show()
  document.getElementById('announce').innerHTML = ''
  console.error(error)
  $('#options').show()
}

const deleteIssueSuccess = (data) => {
  console.log('inside the deleteIssueSuccess ui script.  data is:', data)
  // store.issue = data.issue
  // console.log('you are in the deleteSuccessAnnounce function on ui.js', store.issue)
  hideItems()
  $('#deleteSuccessAnnounce').show()
  $('#options').show()
}

const deleteIssueFailure = (data) => {
  // console.log('deleteIssue failed.  data is:', data)
  // store.issue = data.issue
  console.log('inside the deleteIssueFailure ui script', store.issue)
  hideItems()
  $('#deleteFailureAnnounce').show()
  $('#options').show()
}

const createissueSuccess = (data) => {
  console.log('create issue success ran.  data is:', data)
  store.issue = data.issue
  console.log('you are in the createissueSuccess function on ui.js', store.issue)
  hideItems()
  $('#newissue').show()
  $('#chpw').show()
  $('#sign-out').show()
  $('#options').show()
}

const createissueFailure = (error) => {
  $('#options').show()
  return error
}

const updateissueSuccess = (data) => {
  store.issue = data.issue
  console.log('inside updateissueSuccess', data)
  hideItems()
  $('#options').show()
  $('#updateSuccessAnnounce').show()
}

const updateissueFailure = (error) => {
  console.log('inside updateissueFailure ui')
  hideItems()
  $('#options').show()
  $('#updateFailureAnnounce').show()
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
  createissueFailure,
  createissueSuccess,
  updateissueFailure,
  updateissueSuccess,
  onIndexSuccess,
  onSuccess,
  onError,
  deleteIssueSuccess,
  deleteIssueFailure,
  onIndexFailure
}
