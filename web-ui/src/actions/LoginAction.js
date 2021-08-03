import LoginService from '../services/LoginService';

export function getGuestToken() {
  return async dispatch => {
    try {
      const data = await LoginService.patientLogin();
      dispatch(setGuest(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function doctorLogin(user, password) {
  return async dispatch => {
    try {
      const data = await LoginService.doctorLogin(user, password);
      localStorage.setItem("role",data.data.userType)
      dispatch(setDoctorInfo(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function setGuest(data) {
  return { type: 'PATIENT_LOGIN', data };
}

export function setDoctorInfo(data) {
  return { type: 'DOCTOR_LOGIN', data };
}

export function updateInfo(data){
  return {type:"UPDATE_INFO",data};
}

export function logOut(){
  return {type:"LOGOUT_ACTION"};
}
