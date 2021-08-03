var initialState = {
  schedule: {},
  statusCode: null
};

const ScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOCTOR_SCHEDULE':
      return Object.assign({}, state, {
        schedule: action.data
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

export default ScheduleReducer;
