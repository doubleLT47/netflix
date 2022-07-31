import { take, call, put, fork, cancelled, race } from "redux-saga/effects";



function* authorize(email, password) {
  
  }
}

function* handleLogout() {
  
}

function* authorizeWithToken() {
 
}

function* loginFlow() {
  
}

function* authFlow() {
  
}

function* registerAccount(body, callback) {
  
}

function* registerWatcher() {
  
}

function* changePassword(body, callback) {
  
}

function* changePassWatcher() {
  
}

function* doEditAccount(body) {
  
}

function* editAccountWatcher() {
  
}

const authSagaList = [
  fork(loginFlow),
  fork(authFlow),
  fork(registerWatcher),
  fork(changePassWatcher),
  fork(editAccountWatcher),
];
export default authSagaList;