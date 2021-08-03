var initialState = {
  doctorToken: null,
  doctorData: null,
  guestToken: null,
  guestData: null,
  role: 1
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DOCTOR_LOGIN':
      return Object.assign({}, state, {
        doctorToken: action.data.authToken,
        doctorData: action.data.data,
        role: action.data.data.userType
      });
    case 'LOGOUT_ACTION':
      return Object.assign({}, state, {
        doctorToken: null,
        doctorData: null,
        guestToken: null,
        guestData: null,
        role: 1
      });
    case 'PATIENT_LOGIN':
      return Object.assign({}, state, {
        guestToken: action.data.authToken,
        guestData: action.data.data,
        // role: action.data.data.userType
      });
    case 'UPDATE_INFO':
      return Object.assign({}, state, {
        guestToken: action.data.authToken,
        guestData: action.data.data
      });
    default:
      return state;
  }
};

export default LoginReducer;
