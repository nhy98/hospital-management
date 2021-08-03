var initialState = {
  statusCode: null,
  appointments: [],
  appointmentDetail: {
    id: 8,
    dob: null,
    reason: null,
    createdDate: null,
    appointedDate: null,
    state: 1,
    username: 'nhyen',
    address: 'abccdec',
    mobile: '1234555',
    email: null,
    account: {
      id: 10,
      address: '1',
      age: 1,
      mobile: '1',
      email: '1',
      fullname: '1',
      information: '1',
      username: 'member2',
      password: '$2a$10$7WE.R2SbhhoFE4BRH4EdoOpPYO78.6RSl/2rWpTnpcwJ/TsuNChB2',
      userType: 2,
      workingPosition: null,
      specialization: null,
      avatar: '1',
      hospital: {
        id: 3,
        address: '2',
        hospitalName: '2',
        website: '2',
        description: null,
        hotline: null,
        email: null,
        imageUrl: null
      }
    }
  }
};

const AppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOCTOR_APPOINTMENT':
      return Object.assign({}, state, {
        appointments: action.data
      });
    case 'SET_APPOINTMENT_DETAIL':
      return Object.assign({}, state, {
        appointmentDetail: action.data
      });
    case 'SET_UPDATE_STATUS':
      return Object.assign({}, state, {
        statusCode: action.data
      });
    case 'SET_UPDATE_STATUS_DEFAULT':
      return Object.assign({}, state, {
        statusCode: action.data
      });
    default:
      return state;
  }
};

export default AppointmentReducer;
