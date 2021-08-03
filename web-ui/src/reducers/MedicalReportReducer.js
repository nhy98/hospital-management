var initialState = {
  reports: null
};

const MedicalReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIST_REPORTS':
      return Object.assign({}, state, {
        reports: action.data
      });
      break;
    default:
      return state;
  }
};

export default MedicalReportReducer;
