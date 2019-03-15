import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_CLEAR_FORM
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // We don't need to dispatch anything to redux, so we just add the employee to firebase and
  //pretend we'll use a async action so it can be handle by redux-thunk
  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  }
}

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
      });
  }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  
  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop();
      });
  }
}

export const employeeClearForm = () => {
  return { type: EMPLOYEE_CLEAR_FORM }
}

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  console.log(uid, currentUser.uid);
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  }
}